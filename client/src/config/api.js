/** Backend origin for API calls (contact form, admin login). */
export const apiBaseUrl =
  typeof import.meta.env.VITE_API_URL === 'string' && import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL.replace(/\/+$/, '')
    : 'http://localhost:3000'
