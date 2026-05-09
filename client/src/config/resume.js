/** Default: `public/resume.pdf`. Override with VITE_RESUME_URL for hosted PDF (Google Drive direct link, CDN, etc.). */
export const resumeDownloadUrl =
  typeof import.meta.env.VITE_RESUME_URL === 'string' && import.meta.env.VITE_RESUME_URL.trim()
    ? import.meta.env.VITE_RESUME_URL.trim()
    : '/resume.pdf'

export const resumeDownloadFilename = 'Shahariar-Resume.pdf'
