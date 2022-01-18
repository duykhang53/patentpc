import React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import Accordion from '../utils/Accordion';

const getdata = graphql`
{
    wpgraphql {
    page(id: "cG9zdDozMjI1") {
      id
      title
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
        pharmaceuticals {
          mainsubcategorypara
          mainsubcategorylink {
            ... on WPGraphQL_Page {
              id
              content
            }
          }
          mainsubcategoryheading
        }
        healthcareMedicalDevices {
          mainsubcategorypara
          mainsubcategorylink {
            ... on WPGraphQL_Page {
              id
              content
            }
          }
          mainsubcategoryheading
        }
        consumerGoodsServices {
          mainsubcategorypara
          mainsubcategorylink {
            ... on WPGraphQL_Page {
              id
              content
            }
          }
          mainsubcategoryheading
        }
        chemicalIndustrial {
          mainsubcategorypara
          mainsubcategorylink {
            ... on WPGraphQL_Page {
              id
              content
            }
          }
          mainsubcategoryheading
        }
        biotechnology {
          mainsubcategoryheading
          mainsubcategorylink {
            ... on WPGraphQL_Page {
              id
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
  const pharmaceuticals = data.wpgraphql.page.industries.pharmaceuticals;
  const healthcareMedicalDevices = data.wpgraphql.page.industries.healthcareMedicalDevices;
  const consumerGoodsServices = data.wpgraphql.page.industries.consumerGoodsServices;
  const chemicalIndustrial = data.wpgraphql.page.industries.chemicalIndustrial;
  const biotechnology = data.wpgraphql.page.industries.biotechnology;
  const seo = data.wpgraphql.page.seo;
  return (
    <Layout>
      <Seo title="Industries"  description={common.seo.metaDesc} canonical={common.uri} seo={seo}/>
      <div className='container py-5'>
        <div className='row justify-content-center'>
          <div className='col-md-12'>
            <div className='text-center'>
              <h1 className='display-3 mb-5'>Industries</h1>
            </div>
          </div>
        </div>
      </div>
      <section className='mainSpacing'>
        <div className="container industries-outr">
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='display-5 mb-3 border-bottom d-inline-block pb-3'>Electronics and High Tech</h1>
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
      </section>
      <section className='mainSpacing'>
        <div className="container industries-outr">
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='display-5 mb-3 border-bottom d-inline-block pb-3'>Biotechnology</h1>
              {pharmaceuticals.map((i, index) => (
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
      </section>
      <section className='mainSpacing'>
        <div className="container industries-outr">
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='display-5 mb-3 border-bottom d-inline-block pb-3'>Pharmaceuticals</h1>
              {healthcareMedicalDevices.map((i, index) => (
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
      </section>
      <section className='mainSpacing'>
        <div className="container industries-outr">
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='display-5 mb-3 border-bottom d-inline-block pb-3'>Chemical &amp; Industrial</h1>
              {consumerGoodsServices.map((i, index) => (
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
      </section>
      <section className='mainSpacing'>
        <div className="container industries-outr">
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='display-5 mb-3 border-bottom d-inline-block pb-3'>Consumer Goods &amp; Services</h1>
              {chemicalIndustrial.map((i, index) => (
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
      </section>
      <section className='mainSpacing'>
        <div className="container industries-outr">
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='display-5 mb-3 border-bottom d-inline-block pb-3'>Healthcare &amp; Medical Devices</h1>
              {biotechnology.map((i, index) => (
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
      </section>
    </Layout>
  );
};

export default Industries;
