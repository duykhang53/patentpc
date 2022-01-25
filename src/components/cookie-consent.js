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
    (accepted === false) & !showResults ? <div class="row">
      <div class="col-md-4 col-sm-12 cookie-consent">
        <div class="p-3 pb-4 bg-custom text-white">
          <div class="row">
            <div class="col-12 text-end">
              <a class="text-white text-decoration-none" href="javascript: void(0);" onClick={accepet}>X</a>
            </div>
          </div>
          <p>This website uses cookie to enhance user experience and to analyze performance and traffic on our website. 
          </p>
          <button type="button" class="btn btn-danger w-100"  onClick={accepet} >Accept Cookies</button>
        </div>
      </div>
    </div>
    : null
  )
}

export default CookieConsent