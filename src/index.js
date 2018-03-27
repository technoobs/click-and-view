import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import DemoPage from './DemoPage.jsx';
// import BasicExample from './RouteBasicExample.jsx';

const navTitle = {
  "titleLogo": "TECH NOOBS",
  "navHome": "HOME",
  "navDemo": "DEMO",
  "navProduct": "PRODUCTS",
  "navAbout": "About"
};

ReactDOM.render(<App titleItem={navTitle}/>, document.getElementById('app'));
// ReactDOM.render(<DemoPage />, document.getElementById('demo'));
