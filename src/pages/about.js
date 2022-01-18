import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Layout from '../components/layout';
import Seo from "../components/seo";

const getdata = graphql`
{
  wpgraphql {
    page(id: "cG9zdDozMjMx") {
      id
      title
      content
      uri
      seo {
        canonical
        metaDesc
        metaKeywords
        title
        twitterTitle
        twitterDescription
        opengraphDescription
        opengraphPublishedTime
        opengraphModifiedTime
        opengraphTitle
        opengraphType
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
}
  `
const About = () => {
  const data = useStaticQuery(getdata);
  const common = data.wpgraphql.page;
  return (
    <Layout>
      <Seo title="About" />
      <div className='container py-5 about-outr'>
        <div className='row justify-content-center'>
          <div className='col-md-12'>
            <div className='text-center'>
              <h1 className='display-3 mb-5'>About Us</h1>
            </div>
            <div dangerouslySetInnerHTML={{ __html: common.content }} />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default About;
