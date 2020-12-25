import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'

import { useMeta } from '../../hooks/useMeta'

interface ISeoProps {
  /** The title of the page */
  title?: string
}

export const Seo: FunctionComponent<ISeoProps> = ({ title }) => {
  const { lang, name, description, siteUrl, ogImage, keywords, type } = useMeta().site.siteMetadata

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title ? `${name} | ${title}` : `${name}`}</title>
      <link rel="canonical" href={siteUrl} />
      <meta name="description" content={description} />
      <meta name="image" content={`${siteUrl}/${ogImage}`} />
      <meta name="image:alt" content={description} />
      <meta name="gatsby-theme" content="@pauliescanlon/gatsby-theme-terminal" />
      <meta name="keywords" content={keywords ? keywords.join(', ') : null} />

      {/* Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={name} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/${ogImage}`} />
      <meta property="og:image:alt" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={name} />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/${ogImage}`} />
      <meta name="twitter:image:alt" content={description} />

      {/* favicon */}
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${siteUrl}/images/favicon-16x16.png`}
        data-react-helmet="true"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${siteUrl}/images/favicon-32x32.png`}
        data-react-helmet="true"
      />
    </Helmet>
  )
}
