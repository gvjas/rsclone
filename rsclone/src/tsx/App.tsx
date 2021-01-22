/* eslint-disable linebreak-style */
import * as React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import Widget from './Widget';
import Header from './Header';
import Footer from './Footer';
import Rate from './Rate';

import '../styles/App.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    function Widget1() {
      return <Widget />;
    }

    return (
      <div className="site">
        <Router>
          <Header />
          <div className="header-nav">
            <div className="container">
              <nav>
                <ul>
                  <li><Link to="/">Главная</Link></li>
                  <li><Link to="/widget">Виджет</Link></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="container">
            <main>
              <Switch>
                <Route exact path="/" component={Rate} />
                <Route exact path="/widget">
                  <Widget1 />
                </Route>
              </Switch>
            </main>
          </div>
          {/* <div className="container" id="cookie_info">
            <div className="site-content">
              <div className="well">Используются cookie</div>
            </div>
          </div> */}
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
