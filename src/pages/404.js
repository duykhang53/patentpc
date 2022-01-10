import React from "react"
import Layout from '../components/layout';
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Layout>
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