import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo";
import "../scss/styles.scss";
import Home from './home';

const IndexPage = () => {
  const seo = { metaDesc: 'Inddex' }
  return (
    <Layout>
      <SEO title="Home"  canonical='' seo={seo} />
      <Home />
    </Layout>
  )
};

export default IndexPage;