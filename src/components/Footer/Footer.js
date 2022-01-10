import { Link } from 'gatsby'
import React from 'react'
import Logo from "../../images/logo.png";

const Footer = () => {
    return (
        <footer className="py-3 border-top bg-dark">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='text-center'>
                            <Link to="/" className='mb-2 d-inline-block'>
                                <img src={Logo} alt="PatentPc" className="logo" />
                            </Link>
                            <p className="text-muted mb-0">&copy; 2022 Company, Inc</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
