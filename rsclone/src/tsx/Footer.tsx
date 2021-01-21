/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import * as React from 'react';
import '../styles/Footer.scss';
// import webpackLogo from '../images/favicon.png';

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends React.Component {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <footer id="footer" className="Footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                <h1 className="footer-title">
                  <a href="http://">&copy;gvjas 2020</a>
                </h1>
                <hr />
                <p>All rights reserved</p>
              </div>
              <div className="flex-item">
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
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li><a href="/contact/" data-tooltip="Вкладка1">Вкладка1</a></li>
                    <li><a href="/d">Вкладка2</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-bar">
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
        </div>

      </footer>
    );
  }
}

export default Footer;
