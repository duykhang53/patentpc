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
    return (
        <Layout>
            <Seo title="Faq" description={common.seo.metaDesc} canonical={common.uri} seo={common.seo}  />
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-12'>
                        <div className='text-center'>
                            <h1 className='display-3 mb-5'>FAQs</h1>
                        </div>
                        <div className="container">
                            <div className='faqs' dangerouslySetInnerHTML={{ __html: common.content }} />
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default Faq;
