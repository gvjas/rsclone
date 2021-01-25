/* eslint-disable no-return-assign */
/* eslint-disable linebreak-style */
import * as React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import Helmet from 'react-helmet';
import Widget from './Widget';
import Header from './Header';
import Footer from './Footer';
import Rate from './Rate';
// eslint-disable-next-line import/namespace
// import Game from './Game';

import '../styles/App.scss';
// import { Helmet } from 'react-helmet';
// import Game from '../script';
// const Game = require('../script');

// const { Helmet } = require('react-helmet');

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  // instance: HTMLDivElement;

  // componentDidMount() {
  //   const script = document.createElement('script');
  //   script.src = './script.js';
  //   script.async = true;
  //   document.body.appendChild(script);
  //   this.instance.appendChild(script);
  // }

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
                  {/* <li><Link to="/game">Игра</Link></li> */}
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
                {/* <Helmet> */}
                {/* <Route exact path="/game"> */}
                  {/* <Helmet> */}
                  {/* <Game /> */}
                    {/* { game() } */}
                    {/* <script src="../script.js" /> */}
                    {/* <script>{ init() }</script> */}
                    {/* <script>try{script.load({ async: true });}catch(e){}</script> */}
                  
                  {/* <script src="../script.js" /> */}
                    {/* <Game /> */}
                  {/* {this.componentDidMount()} */}
                  {/* <div ref={(el) => (this.instance = el)} /> */}
                  {/* </Helmet> */}
                {/* </Route> */}
                {/* </Helmet> */}
              </Switch>
            </main>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
