import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCarousel from "../components/testimonialCarousel/testimonialCarousel";
import Seo from "../components/seo";

const getdata = graphql`{
  wpgraphql {
    page(id: "cG9zdDozMjQ4") {
      homepage {
        banner {
          bannerh2
          bannerh3
          bannerimage {
            title
            altText
            sourceUrl(size: LARGE)
            srcSet(size: LARGE)
          }
        }
        ipProtection {
          ipimage {
            id
            sourceUrl
            slug
          }
        }
        advancedLegaltech {
          description
          heading
          icon {
            id
            sourceUrl
          }
        }
        testimonial {
          heading
          paragraph
          subheading
          testimonialicon {
            id
            title
            sourceUrl
          }
        }
        services {
          button
          heading
          paragraph
          serviceicon
        }
        works {
          worksparagraph
          worksheading
          sampleworksimages {
            sourceUrl
            id
          }
          workslink {
            title
            url
          }
        }
      }
    }
  } 
}
`
const Home = () => {
  const data = useStaticQuery(getdata);
  const common = data.wpgraphql.page.homepage
  const iplogo = data.wpgraphql.page.homepage.ipProtection;
  const advLegal = data.wpgraphql.page.homepage.advancedLegaltech;
  const servicesData = data.wpgraphql.page.homepage.services;
  const testimonialData = data.wpgraphql.page.homepage.testimonial;
  const worksData = data.wpgraphql.page.homepage.works;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <Seo title="Home" />
      <div className="banner-main">
        <img src={common.banner.bannerimage.sourceUrl} alt={common.banner.bannerimage.title} />
        <div className="bannerposition">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h1 className="display-1 mb-md-5 mb-3">{common.banner.bannerh2}</h1>
                <h3>{common.banner.bannerh3}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ip-protection">
        <div className="container">
          <div className="row my-5">
            <div className="col-md-12 text-center py-5">
              <h2 className="mb-5 display-3">
                Our lawyers have worked on IP protection for
              </h2>
              <div className="row">
                <Carousel responsive={responsive}>{iplogo.map(images => (
                  <div className="text-center client-pic mx-auto" key={images.ipimage.id}> <img src={images.ipimage.sourceUrl} alt={images.ipimage.id} /></div>
                ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="advLegal bg-light py-5">
        <div className="container">
          <div className="row">
            {advLegal.map((advL, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="step">
                  <figure className="me-3 text-center"><img src={advL.icon.sourceUrl} alt={advL.icon.id} className="w-25" /></figure>
                  <div>
                    <h4 className="h4">{advL.heading}</h4>
                    <p>{advL.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="service">
        <div className="container">
          <div className="row my-5">
            <div className="col-md-12 text-center py-5">
              <h2 className="mb-5 display-3">
                OUR SERVICES &amp; PRODUCTS
              </h2>
              <p>As a full service Intellectual Property Law Firm, we will handle all your IP needs from start to finish. <br /> For clients looking for cost-effective IP solutions, we also offer our lawyer supported (and patented) Inventive.org® creation system:.</p>
            </div>
            <div className="col-md-12">
              <Carousel
                responsive={responsive}
                showDots={true}
                ssr={true}
                dotListClass="custom-dot-list-style"
                itemClass="pe-md-5 align-self-start"
                arrows={false}
                autoPlay={true}
              >{servicesData.map((sData, index) => (
                <div key={index} className="service-outr align-self-start">
                  <i className={`h1 ${sData.serviceicon}`}></i>
                  <h4 className="h4 my-3">{sData.heading}</h4>
                  <p>{sData.paragraph}</p>
                  <Link to={sData.button} className="btn btn-danger" role="button" target="_blank">Read More</Link>
                </div>
              ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 text-center my-5">
              <h2 className="mb-4 display-3">
                Testimonials
              </h2>
            </div>
            <div className="col-md-12 text-center">
              <TestimonialCarousel>
                {testimonialData.map((tData, index) => (
                  <div key={index} className="service-outr align-self-start">
                    <p className="mb-5 display-6">{tData.paragraph}</p>
                    <figure className="clientsimage">
                      <img src={tData.testimonialicon.sourceUrl} alt={tData.testimonialicon.id} />
                    </figure>
                    <h6 className="h6 my-3">{tData.heading}</h6>
                    <small>{tData.subheading}</small>
                  </div>
                ))}
              </TestimonialCarousel>
            </div>
          </div>
        </div>
      </div>
      <div className="works py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 text-center my-5">
              <h2 className="mb-4 display-3">
                SAMPLES OF OUR WORKS
              </h2>
              <p className="h3 mb-5">We work with many inventors and entrepreneurs to protect their IP properties</p>
            </div>
            <div className="col-md-12 text-center">
              <div className="row">
                {worksData.map((wData, index) => (
                  <div key={index} className="work-outr col-md-4 mb-5">
                    <div className="card">
                      <figure className="card-img-top">
                        <img src={wData.sampleworksimages.sourceUrl} alt={wData.sampleworksimages.id} />
                      </figure>
                      <div className="card-body">
                        <h6 className="display-6 my-3">{wData.worksheading}</h6>
                        <p>{wData.worksparagraph}</p>
                        <Link to={wData.workslink.url} target="_blank" className="btn btn-outline-danger btn-sm">Read More...</Link>
                      </div>
                    </div>
                  </div>
                ))}
                <Link to="https://www.yelp.com/biz_photos/tran-and-associates-santa-clara-3?start=30" className="link-dark" target="_blank">Click here to see more samples of our works</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home