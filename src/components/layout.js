/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CookieConsent from './cookie-consent'

const Layout = ({ children }) => {
  const checkAlreadyAcceptCookie = () => {
    // "document" is not available during server side rendering.
    // https://github.com/gatsbyjs/gatsby/issues/19487
    if (typeof window === 'undefined' || !window.document) {
      return;
    }
    var match = document.cookie.match(new RegExp('(^| )accept_cookie=([^;]+)'));
    console.log(`match: ${match}`)
    if (match) {
      return true;
    }
    else {
      return false;
    }
  }
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieConsent accepted={checkAlreadyAcceptCookie()}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout