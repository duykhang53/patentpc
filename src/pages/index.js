import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo";
import Header from "../components/Header/Header";
import "../scss/styles.scss";
import Home from './home';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Home />
  </Layout>
);

export default IndexPage;