import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import {
  absoluteUrl,
  defaultDescription,
  defaultOgImage,
  siteName,
  siteUrl,
} from '../../config/seo'

export default function SeoHead({
  title,
  description = defaultDescription,
  image,
  type = 'website',
  noIndex = false,
}) {
  const { pathname } = useLocation()
  const pageTitle = title ? `${title} | ${siteName}` : siteName
  const canonical = siteUrl ? `${siteUrl}${pathname}` : undefined
  const resolvedImage = absoluteUrl(image) ?? defaultOgImage
  const twitterCard = resolvedImage ? 'summary_large_image' : 'summary'

  return (
    <Helmet prioritizeSeoTags>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {noIndex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow" />
      )}
      {canonical ? <link rel="canonical" href={canonical} /> : null}

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:site_name" content={siteName} />
      {resolvedImage ? <meta property="og:image" content={resolvedImage} /> : null}

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {resolvedImage ? <meta name="twitter:image" content={resolvedImage} /> : null}
    </Helmet>
  )
}
