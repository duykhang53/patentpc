import React from "react"
import Layout from '../components/layout';
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet"



function Post({ data, description, lang, meta, title }) {
  const allBlog = data.wpPost
  //console.log('data >> ', allBlog)
  //const wpMeta = allBlog.seo.metaDesc


  return (
    <Layout>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}

        meta={[
          {
            name: `blogdescription`,
            //content: wpMeta,
          },

          {
            property: `og:title`,
            content: title,
          },

          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },

          {
            name: `twitter:title`,
            content: title,
          },

        ].concat(meta)}
      >
        <title>Powerpatient | blog | {allBlog.title} </title>
      </Helmet>
      <section className="mainSpacing">
        <div className="container">
          <div className="row">
            <div className="col-md-12 word-wrap">
              <GatsbyImage
                className="card-img-top mb-5"
                image={
                  allBlog.featuredImage?.node.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt="blog"
              />
              <article className="mb-5 text-center">
                <h4 className="card-title mb-2">
                  {allBlog.title}
                </h4>
                <small>{allBlog.date}</small>
              </article>
              <div className="card-text" dangerouslySetInnerHTML={{ __html: allBlog.content }} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

Post.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Post.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}




export const query = graphql`
  query($slug: String) {
    wpPost(slug: { eq: $slug }) {
      date(formatString: "LL")
      content
      id
      uri
      title
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData
            }}}
          }
    }
  }`
export default Post;