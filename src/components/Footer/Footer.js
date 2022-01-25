
import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby";
import Nav from 'react-bootstrap/Nav';
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
      wpMenu(id: { eq: "dGVybToxNg==" }) {
        menuItems {
          nodes {
            label
            url
            parentId
            id
            path
            childItems {
              nodes {
                url
                label
                id
                path
              }
            }
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
                                <img src={Logo} alt="PatentPc" className="logo" width="150" height="33" />
                            </Link>
                            <ul className='list-inline'>
                              {data.wpMenu.menuItems.nodes.map((menu, index, menus) => ((!menu.parentId && !menu.childItems.nodes.length) || (menu.parentId)) ?
                                <li className='list-inline-item'>
                                  <a href={menu.path} className='text-muted text-decoration-none'>
                                      {menu.label}
                                  </a>  { (index + 1 === menus.length) ? null : <span className='text-muted'> &nbsp; </span> }
                                </li> : null
                              )}
                            </ul>
                            <ul className='list-inline'>
                                <p className="list-inline-item text-muted">&copy; 2022 Patent, PC</p>
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
