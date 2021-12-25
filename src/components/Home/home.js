import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../layout';
import Seo from "../seo";

const getdata = graphql`{
  wpgraphql {
    page(id: "cG9zdDozMjQ4") {
      homepage {
        banner {
          bannerh2
          bannerh3
          bannerimage {
            title
            altText
            sourceUrl(size: LARGE)
            srcSet(size: LARGE)
          }
        }
      }
    }
  } 
}
`
const Home = () => {
  const data = useStaticQuery(getdata);
  const common = data.wpgraphql.page.homepage
  return (
    <>
      <Layout>
        <Seo title="Home" />
        <div className="banner-main">
          <img src={common.banner.bannerimage.sourceUrl} alt={common.banner.bannerimage.title} />
          <div className="bannerposition">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-12">
                  <h1 className="display-1 mb-5">{common.banner.bannerh2}</h1>
                  <h3>{common.banner.bannerh3}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ip-protection">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div>
                  Our lawyers have worked on IP protection for
                </div>

              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default Home