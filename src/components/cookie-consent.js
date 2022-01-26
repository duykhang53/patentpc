import * as React from "react";

const CookieConsent = ({ accepted }) => {

  const [showResults, setShowResults] = React.useState(false)

  const accepet = () => {
    // "document" is not available during server side rendering.
    // https://github.com/gatsbyjs/gatsby/issues/19487
    if (typeof window === 'undefined' || !window.document) {
      return;
    }
    //
    document.cookie = 'accept_cookie=true; expires=Fri, 31 Dec 9999 23:59:59 GMT'
    setShowResults(true)
  }
  return (
    (accepted === false) & !showResults ? <div className="row">
      <div className="col-md-4 col-sm-12 cookie-consent">
        <div className="p-3 pb-4 bg-custom text-white">
          <div className="row">
            <div className="col-12 text-end">
              <a className="text-white text-decoration-none" href="javascript: void(0);" onClick={accepet}>X</a>
            </div>
          </div>
          <p>This website uses cookie to enhance user experience and to analyze performance and traffic on our website. 
          </p>
          <button type="button" className="btn btn-danger w-100"  onClick={accepet} >Accept Cookies</button>
        </div>
      </div>
    </div>
    : null
  )
}

export default CookieConsent