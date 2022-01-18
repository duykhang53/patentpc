import React from "react"
import Layout from '../components/layout';
import { Link } from "gatsby"
import PageNotFound from "../images/pagenotfound.jpg"
import SEO from "../components/seo";

const NotFound = () => {
  const seo = {metaDesc: '404 - Page Not Found'}
  return (
    <Layout>
      <SEO title="404 - Page Not Found" canonical="/404/"  seo={seo} />
      <div className="container mainSpacing">
        <h1>404: Page Not Found</h1>
        <p>
          <Link to="/">Go to main Page</Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFound