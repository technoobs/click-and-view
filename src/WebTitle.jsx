import React from 'react';
import {Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  Image} from 'react-bootstrap/lib/';
import { Link,
  NavLink,
  Route,
  BrowserRouter,
  Switch,
  withRouter} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

import AppBody from './AppBody.jsx';
import UIPage from './CodeCollection.jsx';
import UserConsole from './UserService.jsx';
import MockServicePage from './MockServicePage.jsx';
import Demos from './Demos.jsx';
import DemoPage from './DemoPage.jsx';
import About from './About.jsx';

// Division displayed in website title
class TitleDiv extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="nav-div">
        <ClickNavBar name={this.props.titleName}
          home={this.props.titleHome}
          demo={this.props.titleDemo}
          product={this.props.titleProduct}
          about={this.props.titleAbout}/>
      </div>
    );
  }
}

// Navigation content displayed in website title division
class ClickNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.clickLogo = this.clickLogo.bind(this);
    this.clickHome = this.clickHome.bind(this);
    this.clickDemo = this.clickDemo.bind(this);
    this.clickAbout = this.clickAbout.bind(this);
  }

  clickLogo() {
    console.log("clicked 'logo' on navigation bar");
  }

  // Direct to Home section
  clickHome() {

  }

  // Demo click action
  clickDemo() {
    console.log("clicked demo on navigation bar");
  }

  // Direct to About section
  clickAbout() {
    window.location.href="#about";
  }

  render() {
    return(
      <BrowserRouter>
        <div>
          <Navbar className="navbar-fixed-top">
            <Navbar.Brand className="logo">
              <div>
                <span style={{float: 'left', marginRight: '0.5rem'}}>{this.props.name}</span>
                <Image src={require('./img/noobs-logo.png')}
                  style={{float: 'left', width: '25px', height: '25px'}}/>
              </div>
            </Navbar.Brand>
            <Nav>
              <LinkContainer to="/">
                <NavItem eventKey={1}>{this.props.home}</NavItem>
              </LinkContainer>
              <NavDropdown eventKey={2} title={this.props.product} id="basic-nav-dropdown">
                <LinkContainer to="/ui-collection">
                  <NavItem eventKey={2.1}>UI Collection</NavItem>
                </LinkContainer>
                <LinkContainer to="/mockservice">
                  <NavItem eventKey={2.2}>Mock Service</NavItem>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown eventKey={3} title={this.props.demo} id="basic-nav-dropdown">
                <LinkContainer to="/demo/ui-demos">
                  <MenuItem eventKey={3.1}>UI Demos</MenuItem>
                </LinkContainer>
                <LinkContainer to="/demo/mockservice">
                  <MenuItem eventKey={3.2}>Mock Service</MenuItem>
                </LinkContainer>
                <MenuItem divider />
                <LinkContainer to="/demo/introduction">
                  <MenuItem eventKey={3.3}>All Demos</MenuItem>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/about">
                <NavItem eventKey={4}>{this.props.about}</NavItem>
              </LinkContainer>
            </Nav>
            <div className="head-button">
              <UserConsole />
            </div>
          </Navbar>

          <Route exact path="/" render={() =>
            <div id="body-div-home">
              <AppBody titleName="TECH NOOBS"/>
            </div>} />
          <Route exact path="/ui-collection" render={() =>
            <div id="body-div-products">
              <UIPage serviceTitle="UI Collections" />
            </div>} />
          <Route exact path="/mockservice" render={() =>
            <div id="body-div-products">
              <MockServicePage />
            </div>} />
          <Route exact path="/demo/introduction" render={() =>
            <div id="body-div-demos">
              <DemoPage demoDefaultTab="introduction" />
            </div>} />
          <Route exact path="/demo/ui-demos" render={() =>
            <div id="body-div-demos">
              <Demos />
            </div>} />
          <Route exact path="/demo/mockservice" render={() =>
            <div id="body-div-demos">
              <DemoPage demoDefaultTab="mockservice" />
            </div>} />
          <Route exact path="/about" render={() =>
            <div id="body-div-about">
              <About />
            </div>} />
        </div>
      </BrowserRouter>
    )
  }
}

export default TitleDiv;
