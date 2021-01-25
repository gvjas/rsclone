/* eslint-disable linebreak-style */
import * as React from 'react';
import '../styles/Header.scss';
// import Nav from './Nav';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="top-bar animate-dropdown" />
        <div className="main-header">
          <div className="container">
            <h2 className="site-title">Stock</h2>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
