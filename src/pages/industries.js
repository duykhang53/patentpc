import React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";


const getdata = graphql`
{
  wpgraphql {
    page(id: "cG9zdDozMjI1") {
      id
      title
      content
    }
  }
}
  `
const Industries = () => {
    const data = useStaticQuery(getdata);
    const common = data.wpgraphql.page;
    return (
        <Layout>
            <Seo title="Industries" />
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-12'>
                        <div className='text-center'>
                            <h1 className='display-3 mb-5'>Industries</h1>
                        </div>
                        <div className="container">
                            <h1>
                                Table of Content
                            </h1>
                            <div dangerouslySetInnerHTML={{ __html: common.content }} />
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default Industries;
