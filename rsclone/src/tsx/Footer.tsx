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
                <h1 className="footer-title">
                  &copy;
                  <a
                    href="https://github.com/gvjas"
                    target="_blank"
                  >
                    gvjas 2020
                  </a>
                </h1>
                <a href="https://rs.school/js/" target="_blank">
                  <img
                    className="rSSLogo"
                    src={RSSLogo}
                    alt="RSSLogo"
                  />
                </a>
                {/* <hr /> */}
                <p>All rights reserved</p>
              </div>
              {/* <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li><a href="/sitemap/" data-tooltip="Карта сайта">Карта сайта</a></li>
                    <li>
                      <a
                        href="/sitemaps.xml"
                        target="_blank"
                        data-tooltip="Example"
                      >
                        Example
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
              {/* <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li><a href="/contact/" data-tooltip="Вкладка1">Вкладка1</a></li>
                    <li><a href="/d">Вкладка2</a></li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* <div className="copyright-bar">
          <div className="flex-container">
            <div className="flex-item">
              <ul className="flex-link" />
            </div>
            <div className="flex-item">
              <div className="clearfix payment-methods">
                <ul>
                  <img
                    // src={webpackLogo}
                    data-toggle="tooltip"
                    data-placement="top"
                    data-original-title="www.webmoney.ru"
                    alt=""
                  />
                </ul>
              </div>
            </div>
          </div>
        </div> */}

      </footer>
    );
  }
}

export default Footer;
