
import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby";
import Logo from "../../images/logo.png";

const Footer = () => {
    const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
    return (
        <footer className="py-3 border-top bg-dark">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='text-center'>
                            <Link to="/" className='mb-2 d-inline-block'>
                                <img src={Logo} alt="PatentPc" className="logo" />
                            </Link>

                            <ul className='list-inline'>
                                <p class="list-inline-item text-muted">&copy; 2022 Company, Inc</p>
                                {data.allFile.edges.map((file, index) => {
                                    return (
                                        <li key={`pdf-${index}`} className='list-inline-item'>
                                            <a href={file.node.publicURL} target="_blank" className='text-muted'>
                                                {file.node.name}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
