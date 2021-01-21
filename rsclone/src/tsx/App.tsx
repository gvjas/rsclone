/* eslint-disable linebreak-style */
import * as React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Rate from './Rate';

import '../styles/App.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  // constructor(props) {
  //   super(props);
  // }

  render() {
    function About1() {
      return <About />;
    }

    // async function moexTicker() {
    //   const json = []; let tmp; let i = 0;
    //   while (i <= 300) {
    //     // eslint-disable-next-line no-await-in-loop
    //     tmp = await fetch(`http://iss.moex.com/iss/securities.json?start=${i}`).then((res) => res.json());
    //     // eslint-disable-next-line @typescript-eslint/no-shadow
    //     tmp.securities.data.forEach((element) => {
    //       // eslint-disable-next-line @typescript-eslint/no-shadow
    //       // element.filter((item: any, i: number) => i === 1);
    //       json.push(element);
    //     });
    //     i += 100;
    //   }
    //   // eslint-disable-next-line prefer-const
    //   console.log(json)
    //   return json;
    // }

    // moexTicker().then((item) => console.log(item));

    return (
      <div className="site">
        <Router>
          <Header />
          <div className="header-nav">
            <div className="container">
              <nav>
                <ul>
                  <li><Link to="/">Главная</Link></li>
                  <li><Link to="/about">О нас</Link></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="container">
            <main>
              <Switch>
                <Route exact path="/" component={Rate} />
                {/* <Route exact path="/About" /> */}
                <Route exact path="/about">
                  <About1 />
                </Route>
              </Switch>
            </main>
          </div>
          <div className="container" id="cookie_info">
            <div className="site-content">
              <div className="well">Используются cookie</div>
            </div>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
