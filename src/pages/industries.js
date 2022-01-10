import React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo";
import { useStaticQuery, graphql, Link } from "gatsby";
import Accordion from '../utils/Accordion';

const getdata = graphql`
{
    wpgraphql {
    page(id: "cG9zdDozMjI1") {
      id
      title
      industries {
        maincategory {
          mainsubcategoryheading
          mainsubcategorylink {
            ... on WPGraphQL_Page {
              title
              uri
              content
            }
          }
          mainsubcategorypara
        }
      }
    }
  }
}
  `
const Industries = () => {
  const data = useStaticQuery(getdata);
  const common = data.wpgraphql.page.industries.maincategory;

  return (
    <Layout>
      <Seo title="Industries" />
      <div className='container py-5'>
        <div className='row justify-content-center'>
          <div className='col-md-12'>
            <div className='text-center'>
              <h1 className='display-3 mb-5'>Industries</h1>
            </div>
            <div className="container industries-outr">
              <div className='row'>
                {common.map((i, index) => (
                  <div className='mb-5' key={index}>
                    <article>
                      <>
                        <h4>{i.mainsubcategoryheading}</h4>
                        <p>{i.mainsubcategorypara} </p>
                        <Accordion content={<div dangerouslySetInnerHTML={{ __html: i.mainsubcategorylink.content }} />} />
                      </>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Industries;
