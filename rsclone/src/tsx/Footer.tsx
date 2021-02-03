/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import * as React from 'react';
import '../styles/Footer.scss';
// import { RSSLogo } from '../images/rs_school_js.svg';
const RSSLogo = require('../images/rs_school_js.svg');
// eslint-disable-next-line react/prefer-stateless-function
class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className="Footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                <span className="footer-title">
                  &copy;
                  <a
                    href="https://github.com/gvjas"
                    target="_blank"
                  >
                    gvjas 2020
                  </a>
                </span>
                <a href="https://rs.school/js/" target="_blank">
                  <img
                    className="rSSLogo"
                    src={RSSLogo}
                    alt="RSSLogo"
                  />
                </a>
                <hr />
                <p>All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
