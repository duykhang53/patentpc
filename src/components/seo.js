/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title, canonical, seo }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteUrl = site.siteMetadata?.siteUrl
  const addOnMeta = [];

  // published_time
  if (seo?.opengraphPublishedTime) {
    addOnMeta.push({
      property: `article:published_time`,
      content: `${seo?.opengraphPublishedTime}`,
    })
  }
  // modified_time
  if (seo?.opengraphModifiedTime) {
    addOnMeta.push({
      property: `article:modified_time`,
      content: `${seo?.opengraphModifiedTime}`,
    })
  }
  // 
  if (seo?.opengraphImage) {
    addOnMeta.push({
        property: `og:image`,
        content: `${seo?.opengraphImage?.sourceUrl}`
      },
      {
        property: `og:image:width`,
        content: `400`
      },
      {
        property: `og:image:height`,
        content: `400`
      }
    )
  }
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      link={[
        {
          rel: `canonical`,
          href: `${siteUrl}${canonical}`,
        }
      ]}
      meta={[
        {
          name: `keywords`,
          content: seo?.title || 'patent, trademark, trade secret, copyrights',
        },        {
          name: `description`,
          content: seo?.metaDesc || metaDescription,
        },
        {
          property: `og:locale`,
          content: 'en_US',
        },
        {
          property: `og:type`,
          content: seo?.opengraphType,
        },          
        {
          property: `og:title`,
          content: seo?.title || title,
        },
        {
          property: `og:description`,
          content: seo?.opengraphDescription || description,
        },
        {
          property: `og:url`,
          content: `${siteUrl}${canonical}`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: seo?.twitterTitle || title,
        },
      ].concat(meta, addOnMeta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
