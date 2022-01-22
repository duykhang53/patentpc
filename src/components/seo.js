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
          content: seo?.title || 'Patents, Trademarks, Copyrights, Trade Secrets',
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
        {
          name: `twitter:description`,
          content: seo?.twitterDescription || metaDescription,
        }
      ].concat(meta, addOnMeta)}
    >
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-217833805-1"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-217833805-1');
        `}
      </script>
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '428765428957046');
          fbq('track', 'PageView');
        `}
      </script>
    </Helmet>
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
