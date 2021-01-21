/* eslint-disable linebreak-style */
import * as React from 'react';
import '../styles/Header.scss';
// import Nav from './Nav';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <header>
        <div className="top-bar animate-dropdown" />
        <div className="main-header">
          <div className="container">
            <h1 className="site-title">React Stock</h1>
          </div>
        </div>
        {/* <Nav /> */}
      </header>
    );
  }
}

export default Header;
