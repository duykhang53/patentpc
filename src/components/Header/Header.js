import React, { useState } from 'react';
import { Link } from 'gatsby';
import Logo from "../../images/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';

const getdata = graphql`
{
    wpgraphql {
        menu(id: "dGVybToxNg==") {
            menuItems {
                nodes {
                    path
                    id
                    label
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
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand>
                    <Link to="/" >
                        <img src={Logo} alt="PatentPc" className="logo" />
                    </Link>
                </Navbar.Brand>


                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        {datamenu.map(menus => (
                            <Nav.Link
                                href={menus.path}
                                key={menus.id}
                                activekey={active}
                                onSelect={(selectedKey) => setActive(selectedKey)}>
                                {menus.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
                <div className='telephone d-flex align-items-center me-3'><FontAwesomeIcon icon={faPhoneSquareAlt} size="2x" style={{ color: "#fff" }} /><a href="tel:8002343032" className='ms-2'> <span>800-234-3032</span></a></div>
                <Link className='btn btn-outline-danger' to="/contact">Book Free Intoductory Call</Link>
            </Container>
        </Navbar>
    )
}

export default Header;
