import React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";


const getdata = graphql`
{
  wpgraphql {
    page(id: "cG9zdDo4NTI1") {
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
const Faq = () => {
    const data = useStaticQuery(getdata);
    const common = data.wpgraphql.page;
    console.log(common.content)
    const replaceWPUrl = (content) => {
      // check server side rendering
      // https://github.com/gatsbyjs/gatsby/issues/19487
      if (typeof window === 'undefined' || !window.document) {
        return;
      }
      // Remove part
      const WP_URL = '';
      // create blog content obj
      var contentObj = document.createElement( 'div' );
      contentObj.innerHTML = content;

      // get all a href
      var aTags = contentObj.getElementsByTagName('a');
      for (const a of aTags) {
        a.setAttribute("href", a.href.replace(/^.*\/\/[^\/]+/, ''));
      }

      return contentObj.innerHTML
    }
    //
    return (
        <Layout>
            <Seo title="Faq" description={common.seo.metaDesc} canonical={common.uri} seo={common.seo}  />
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-12'>
                        <div className='text-center'>
                            <h1 className='display-3 mb-5'>Patent FAQs</h1>
                        </div>
                        <div className="container">
                            <div className='faqs' dangerouslySetInnerHTML={{ __html: replaceWPUrl(common.content) }} />
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default Faq;
