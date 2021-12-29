import { Link } from 'gatsby'
import React from 'react'
import Logo from "../../images/logo.png";

const Footer = () => {
    return (
        <footer className="py-5 border-top bg-dark">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='row align-items-center'>
                            <p className="col-md-4 text-muted mb-0">&copy; 2022 Company, Inc</p>
                            <Link to="/" className="col-md-3 text-center">
                                <img src={Logo} alt="PatentPc" className="logo" />
                            </Link>
                            <ul className="nav col-md-5 justify-content-end">
                                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About Us</a></li>
                                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Resources</a></li>
                                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Industries</a></li>
                                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Case Studies</a></li>
                                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Services</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
