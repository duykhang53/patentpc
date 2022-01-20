import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout';
import Seo from "../components/seo";
import LogoImage from '../images/logo.png';
import { GatsbyImage } from "gatsby-plugin-image";

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url} className="page-link">{props.text}</Link>
  } else {
    return <span className="page-link">{props.text}</span>
  }
}

const BlogPage = (props) => {
  const { group, index, first, last, pageCount } = props.pageContext;
  // pageContext.index start at 1, no url /blog/1, just /blog 
  const previousUrl = (index - 1) <= 1 ? '/blog/' : `/blog/${(index - 1).toString()}`
  const nextUrl = index < pageCount ? `/blog/${(index + 1).toString()}` : 'javascript: void(0);';
  const seo = {};

  return (
    <Layout>
      <Seo title="blog" canonical="/blog/" seo={seo} />

      <section className="mainSpacing blogOutrFeatured">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="text-center">
                <h1 className="display-1 mb-md-5 mb-3">Latest Blog Post</h1>
              </div>
              <div className="row">
                {
                  group.map((node, index) => (
                    <div className="mb-2 col-md-4 mb-4" key={index}>
                      <div className="card h-100">
                        <div className="row g-0 h-100">
                          <div className="col-md-4">
                          { node.featuredImage?.node.localFile.childImageSharp ?
                            <GatsbyImage className="h-100"
                              image={
                                node.featuredImage?.node.localFile.childImageSharp?.gatsbyImageData
                              }
                              alt="blog"
                            />
                            : node.featuredImage?.node.mediaItemUrl ? <div class="h-100"><img src={node.featuredImage?.node.mediaItemUrl} class="h-100"/></div>
                            : <div class="h-100"><img src={LogoImage} class="h-100"/></div>
                          }
                          </div>
                          <div className="col-md-8 align-self-center">
                            <div className="card-body">
                              <h6 className="card-title">
                                <Link to={"/blog/" + node.slug} className="text-secondary">
                                  {node.title}
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="pagination justify-content-end">
                <div className="previousLink d-inline p-2 page-item">
                  <NavLink test={first} url={previousUrl} text="&laquo;" className="page-link" />
                </div>
                <div className="nextLink d-inline p-2 page-item">
                  <NavLink test={last} url={nextUrl} text="&raquo;" className="page-link" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export const query = graphql`
  {
    allWpPost {
      nodes {
        excerpt
        content
        id
        uri
        title
        slug
        date(fromNow: true)
        categories {
          nodes {
            name
          }
      }
      featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1920, placeholder: TRACED_SVG, height: 100)
              }
            }
          }
        }
      }
    }
  }
`

export default BlogPage;
