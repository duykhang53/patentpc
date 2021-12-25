import React from 'react';
import Home from '../components/Home/home';
import Layout from '../components/layout';
import SEO from "../components/seo";
import Header from "../components/Header/Header";
import "../scss/styles.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Home />
  </Layout>
);

export default IndexPage;