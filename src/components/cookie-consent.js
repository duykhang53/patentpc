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
    !accepted & !showResults ? <div class="row">
      <div class="col-md-4 col-sm-12 cookie-consent">
        <div class="p-3 pb-4 bg-custom text-white">
          <div class="row">
            <div class="col-12 text-end">
              <a class="text-white text-decoration-none" href="javascript: void(0);" onClick={accepet}>X</a>
            </div>
          </div>
          <p>This website uses cookie to enhance user experience and to analyze performance and traffic on our website. 
            We also share information about your use of our site with our social media, advertising and analytics partners. 
            &nbsp;<a href="/static/2d783a3da303d66f97bc547c0ef784fb/Privacy.pdf" target="_blank">More Info</a>
          </p>
          <button type="button" class="btn btn-danger w-100"  onClick={accepet} >Accept Cookies</button>
        </div>
      </div>
    </div>
    : null
  )
}

export default CookieConsent