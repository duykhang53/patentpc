import React from "react"
import Layout from '../components/layout';
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet"
import Parser  from 'react-html-parser'

function Post({ data, description, lang, meta, title, pageContext }) {
  const allBlog = data.wpPost
  const seo = allBlog.seo;
  console.log('data >> ', allBlog)
  //const wpMeta = allBlog.seo.metaDesc
  
  // Update blog content
  var blogContent = updateBlogContent(allBlog.content)
  console.log(blogContent);
  
  // use title as metaDesc if not
  const wpMeta = seo.metaDesc || allBlog.title
  const wpCanonical = `/blog${allBlog.uri}`
  return (
    <Layout>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={allBlog.title || seo.title}
        link={[
          {
            rel: `canonical`,
            href: `${pageContext.siteUrl}${wpCanonical}`,
          }
        ]}
        meta={[
          {
            name: `keywords`,
            content: seo.title,
          },
          {
            name: `description`,
            content: wpMeta,
          },
          {
            property: `og:locale`,
            content: 'en_US',
          },            {
            property: `og:type`,
            content: seo.opengraphType,
          },          
          {
            property: `og:title`,
            content: seo.title || allBlog.title,
          },
          {
            property: `og:description`,
            content: seo.opengraphDescription || wpMeta,
          },
          {
            property: `og:url`,
            content: `${pageContext.siteUrl}${wpCanonical}`,
          },
          {
            property: `article:published_time`,
            content: `${seo.opengraphPublishedTime}`,
          },
          {
            property: `og:image`,
            content: `${seo.opengraphImage?.sourceUrl}`,
          },
          {
            property: `og:image:width`,
            content: `400`,
          },
          {
            property: `og:image:height`,
            content: `400`,
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
          {
            name: `twitter:title`,
            content: title ?? allBlog.title,
          },

        ].concat(meta)}
      >
        <title>PatentPc | blog | {allBlog.title} </title>
      </Helmet>
      <section className="mainSpacing">
        <div className="container">
          <div className="row">
            <div className="col-md-12 word-wrap">
              <GatsbyImage
                className="card-img-top mb-5"
                image={
                  allBlog.featuredImage?.node.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt="patent, trademark, trade secret, copyrights"
              />
              <article className="mb-5 text-center">
                <h1 className="card-title mb-2">
                  {allBlog.title}
                </h1>
                <small>{allBlog.date}</small>
              </article>
              <div className="card-text">{Parser(blogContent)}</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

Post.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Post.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}



function updateBlogContent(content) {
  // check server side rendering
  // https://github.com/gatsbyjs/gatsby/issues/19487
  if (typeof window === 'undefined' || !window.document) {
    return;
  }

  /**
   * Disclaimer content
   */
  const disclaimerHtml = `
    <div><a href="/patentfaqs/" rel="noreferrer" target="_blank">Patent FAQs</a> - <a href="/tmfaqs/" rel="noreferrer" target="_blank">Trademark FAQs</a></div>
    <hr>
    <p class="small fw-normal text-info"><small>Disclaimer:</small></p>
    <p class="small fw-normal text-info"><small>
    The information provided on this blog does not, and is not intended to, constitute legal advice; instead, all information, 
    content, and materials available on this site are for general informational purposes only. Information on this website may not 
    constitute the most up-to-date legal or other information. This website contains links to other third-party websites. 
    Such links are only for the reader, user or browser; we do not recommend or endorse the contents of the third-party sites.
    </small></p>
    <p class="small fw-normal text-info"><small>
    Readers of this website should contact their attorney to obtain advice for any particular legal matter. 
    No reader, user, or browser of this site should act or refrain from acting based on information on this site 
    without first seeking legal advice from counsel in the relevant jurisdiction. Only your attorney can provide 
    assurances that the information contained herein – and your interpretation of it – is applicable or appropriate 
    to your particular situation. Use of and access to this website or any links or resources within this site do 
    not create an attorney-client relationship between the reader, user, or browser and website authors, contributors, 
    contributing law firms, and their respective employers.
    </small></p>
    <p class="small fw-normal text-info"><small>
    The views expressed at or through this site are those of the authors writing in their individual capacities only – not this site. 
    All liability for actions taken or not taken based on the contents of this site are expressly disclaimed. 
    The content on this posting is provided “as is;” no representations are made that the content is error-free.
    </small></p>
  `;

  const disclaimerObj = document.createElement( 'div' );
  disclaimerObj.innerHTML = disclaimerHtml;

  /**
   * Call To Action Content
   */
  const actionBoxHtml = `
  <div class="row mb-5">
    <div class="col-md-2 pt-3 pb-3" style="background-color: #EEEEEE">
      <img src="https://wp.patentpc.com/wp-content/uploads/2022/01/bao-2.png" class="h-100"/>
    </div>
    <div class="col-md-4 pt-3 pb-3" style="background-color: #EEEEEE">
      See How PatentPC can help grow your company valuation and protect your
      business with our expert lawyers and their advanced AI workflow.
      <p class="mt-5"><a target="_blank" href="https://calendly.com/patentpc/30min" class="btn btn-warning" style="width: 90%;">Request A Meeting</a></p>
    </div>
  </div>
  `;

  const actionBoxObj = document.createElement( 'div' );
  actionBoxObj.innerHTML = actionBoxHtml;

  // create blog content obj
  var contentObj = document.createElement( 'div' );
  contentObj.innerHTML = content;
  
  // insert call to action box
  var hasDivCTA = false;
  var divCTAs = contentObj.getElementsByClassName('contact-us-holder');
  for (const divCTA of divCTAs) {
    divCTA.innerHTML = actionBoxHtml;
    hasDivCTA = true;
  }

  /**
   * Center img
   */
  var pTags = contentObj.getElementsByTagName('p');
  for (const p of pTags) {
    if( p.getElementsByTagName('img').length > 0) {
      // there is an image
      p.classList.add("text-center");
      // break;
    }
  }

  // No DIV CTA Tag
  // Insert before the last p tag
  if (!hasDivCTA && pTags && pTags.length) {
    const lastP = pTags[pTags.length - 1];
    const parentDiv = lastP.parentNode;
    parentDiv.insertBefore(actionBoxObj, lastP);
  }
  
  /**
   * Add Disclaimer
   */
   contentObj.appendChild(disclaimerObj);

  //
  return contentObj.innerHTML;
}


export const query = graphql`
  query($slug: String) {
    wpPost(slug: { eq: $slug }) {
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
      date(formatString: "LL")
      content
      id
      uri
      title
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData
            }}}
          }
    }
  }`
export default Post;