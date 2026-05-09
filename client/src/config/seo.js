const trimTrailingSlash = (url) => url.replace(/\/+$/, '')

export const siteUrl =
  typeof import.meta.env.VITE_SITE_URL === 'string' && import.meta.env.VITE_SITE_URL
    ? trimTrailingSlash(import.meta.env.VITE_SITE_URL)
    : ''

export const siteName = 'Shahariar Portfolio'

export const defaultDescription =
  'Portfolio of Shahariar — React and MERN developer building dynamic web applications, responsive interfaces, and interactive experiences.'

/** Absolute URL for Open Graph / Twitter when using a root-relative asset path from Vite. */
export function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return undefined
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl
  if (!siteUrl) return undefined
  const path = String(pathOrUrl).startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  return `${siteUrl}${path}`
}

export const defaultOgImage =
  typeof import.meta.env.VITE_OG_IMAGE === 'string' && import.meta.env.VITE_OG_IMAGE
    ? import.meta.env.VITE_OG_IMAGE
    : undefined
