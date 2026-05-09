import React, { useCallback, useEffect, useState } from 'react'
import SeoHead from '@Component/SeoHead'
import { apiBaseUrl } from '../../config/api'

const TOKEN_KEY = 'admin_token'
const FETCH_MS = 12000

async function fetchJson(url, options = {}) {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), FETCH_MS)
  try {
    const res = await fetch(url, { ...options, signal: ctrl.signal })
    return res
  } finally {
    clearTimeout(t)
  }
}

export default function Admin() {
  const [checking, setChecking] = useState(true)
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [serverConfigured, setServerConfigured] = useState(null)

  const verifyStoredToken = useCallback(async () => {
    const token = sessionStorage.getItem(TOKEN_KEY)
    if (!token) {
      setAuthed(false)
      setChecking(false)
      return
    }
    try {
      const res = await fetchJson(`${apiBaseUrl}/api/admin/verify`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!res.ok) throw new Error('invalid')
      setAuthed(true)
    } catch (err) {
      sessionStorage.removeItem(TOKEN_KEY)
      setAuthed(false)
      if (err?.name === 'AbortError') {
        setError(
          `No response from API within ${FETCH_MS / 1000}s. Check that the server is running and URL matches: ${apiBaseUrl}`,
        )
      }
    } finally {
      setChecking(false)
    }
  }, [])

  useEffect(() => {
    verifyStoredToken()
  }, [verifyStoredToken])

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetchJson(`${apiBaseUrl}/api/admin/status`)
        const data = await res.json().catch(() => ({}))
        if (!cancelled && res.ok) setServerConfigured(Boolean(data.loginConfigured))
      } catch {
        if (!cancelled) setServerConfigured(null)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const res = await fetchJson(`${apiBaseUrl}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.token) {
        setError(typeof data.message === 'string' ? data.message : `Login failed (${res.status}).`)
        return
      }
      sessionStorage.setItem(TOKEN_KEY, data.token)
      setPassword('')
      setAuthed(true)
      setError('')
    } catch (err) {
      if (err?.name === 'AbortError') {
        setError(
          `Cannot reach API (${apiBaseUrl}). Start the server from the server folder, or set VITE_API_URL when the API is hosted elsewhere.`,
        )
      } else {
        setError('Network error. Check the browser console and API URL.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem(TOKEN_KEY)
    setAuthed(false)
  }

  return (
    <div className="st-admin">
      <SeoHead title="Admin" description="Private site administration." noIndex />

      {checking ? (
        <div className="st-admin__panel">
          <p className="st-admin__muted">Checking session…</p>
          <p className="st-admin__api-hint">API: {apiBaseUrl}</p>
        </div>
      ) : authed ? (
        <div className="st-admin__panel">
          <h1 className="st-admin__title">Admin</h1>
          <p className="st-admin__lead">
            You are signed in. Add CMS tools or dashboards here when ready.
          </p>
          <button type="button" className="st-admin__btn st-admin__btn--ghost" onClick={handleLogout}>
            Sign out
          </button>
        </div>
      ) : (
        <div className="st-admin__panel">
          <h1 className="st-admin__title">Admin sign-in</h1>
          <p className="st-admin__muted">
            This area is private. Use the password from <code>ADMIN_PASSWORD</code> in{' '}
            <code>server/.env</code> (and ensure <code>ADMIN_SESSION_SECRET</code> is set).
          </p>
          <p className="st-admin__api-hint">API: {apiBaseUrl}</p>
          {serverConfigured === false ? (
            <p className="st-admin__error">
              Server reports admin login is not configured. Add ADMIN_PASSWORD and ADMIN_SESSION_SECRET
              to server/.env and restart the API.
            </p>
          ) : null}
          <form className="st-admin__form" onSubmit={handleLogin}>
            <label className="st-admin__label" htmlFor="admin-password">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              className="st-admin__input"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              required
            />
            {error ? <p className="st-admin__error">{error}</p> : null}
            <button type="submit" className="st-admin__btn" disabled={submitting}>
              {submitting ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
