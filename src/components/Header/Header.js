import React, { useState } from 'react';
import { Link } from 'gatsby';
import Logo from "../../images/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';

const getdata = graphql`
{
    wpgraphql {
        menu(id: "dGVybToxNg==") {
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
}
`

const Header = () => {
    const data = useStaticQuery(getdata);
    const datamenu = data.wpgraphql.menu.menuItems.nodes;
    const [active, setActive] = useState('default');
    return (
        <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand>
                    <Link to="/" >
                        <img src={Logo} alt="PatentPc" className="logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        {datamenu.map(menus => !menus.parentId && !menus.childItems.nodes.length ?
                            <Nav.Link
                                href={menus.path}
                                key={menus.id}
                                activekey={active}
                                onSelect={(selectedKey) => setActive(selectedKey)}>
                                {menus.label}
                            </Nav.Link>
                            : menus.childItems.nodes.length > 0 ?
                                <NavDropdown title={menus.label}>
                                    {menus.childItems.nodes.map(childItem => (
                                        <NavDropdown.Item href={childItem.path}>
                                            {childItem.label}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                                : null
                        )}
                    </Nav>
                </Navbar.Collapse>
                <div className='ms-auto d-flex small-device-header'>
                    <div className='telephone d-flex align-items-center me-3'><FontAwesomeIcon icon={faPhoneSquareAlt} size="2x" style={{ color: "#fff" }} /><a href="tel:8002343032" className='ms-2'> <span>800-234-3032</span></a></div>
                    <Link className='btn btn-outline-warning' to="https://calendly.com/patentpc/one-on-one-with-attorney-tran" target="_blank">Book Free Intoductory Call</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ms-2' />
                </div>
            </Container>
        </Navbar>
    )
}

export default Header;
