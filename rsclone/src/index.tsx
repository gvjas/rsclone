// // Test import of a JavaScript function
// import {example} from './js/example'

// // Test import of an asset
// import webpackLogo from './images/webpack-logo.svg'

// // Test import of styles
// import './styles/index.scss'

// // Appending to the DOM
// const logo = document.createElement('img')
// logo.src = webpackLogo

// const heading = document.createElement('h1')
// heading.textContent = example()

// const app = document.querySelector('#root')
// app.append(logo, heading)

// eslint-disable-next-line max-len
// импорт react в TS отличается от привычного import React from 'react' из-за особенностей модульной системы в TS
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.scss';
// import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/extensions
// import './images/favicon.png';
import App from './tsx/App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
