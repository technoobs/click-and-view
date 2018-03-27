import React from 'react';
import {Row, Col, Tab, Tabs} from 'react-bootstrap/lib';

import UIDemos from './UIDemos.jsx';
import DemoIntro from './DemoIntroduction.jsx';
import DemoUICollection from './DemoUICollection.jsx';
import DemoMockService from './DemoMockService.jsx';

var tabMapping = [
  {
    "id": 1,
    "tab": "introduction"
  },
  {
    "id": 2,
    "tab": "uicollection"
  },
  {
    "id": 3,
    "tab": "mockservice"
  }
];

class DemoPage extends React.Component {
  constructor(props) {
    super(props);
    this.demoDefaultTab = this.props.demoDefaultTab;
    this.defineDefaultTab = this.defineDefaultTab.bind(this);
    console.log("Demo default tab is: " + this.demoDefaultTab);
  }

  defineDefaultTab(tabName) {
    var tabId;
    for(var tabObj of tabMapping) {
      console.log("tabObj is: " + tabObj.tab);
      if(tabObj.tab == tabName) {
        tabId = tabObj.id;
      }
    }
    if(tabId) {
      return tabId;
    } else {
      tabId = 1;
      return tabId;
    }
  }

  render() {
    return(
      <div id="demo-page-div">
        <div id="demo-page-head-div">
          <span>NOOB'S DEMO</span>
        </div>
        <div id="demo-page-body-div" style={{paddingLeft: '10rem', paddingRight: '10rem',
          paddingTop: '1rem'}}>
          <DemoPageBody defaultTab={this.defineDefaultTab(this.demoDefaultTab)} />
        </div>
      </div>
    )
  }
}

// Component container for demo container
class DemoPageBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultTab: this.props.defaultTab,
      tabCollection: []
    };
    this.checkDefaultTab = this.checkDefaultTab.bind(this);
  }

  componentDidMount() {
    this.checkDefaultTab(this.state.defaultTab);
    console.log("Parent component is mounted");
    console.log("Default tab is: " + this.state.defaultTab);
    console.log("Tab Collection is: " + this.state.tabCollection);
  }

  // Update tab collection when child tab component is mounted
  updateTabCollection(tabId) {
    this.state.tabCollection.push(tabId);
    console.log("Tab id: " + tabId + " is updated");
  }

  // Check default tab availability
  checkDefaultTab(tabId) {
    console.log("Received default tab id: " + tabId);
    var result = this.state.tabCollection.indexOf(tabId);
    if(result == -1) {
      console.log("Default tab is not found!!!!");
    } else {
      console.log("Default tab is found.");
    }
  }

  render() {
    return(
      <Tabs defaultActiveKey={this.state.defaultTab} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Introduction" href="/demo/introduction">
          <DemoIntro demoHeader="Introduction" />
        </Tab>
        <Tab eventKey={2} title="UI Collections" style={{backgroundColor: 'red'}}>
          {/* <TestChildComponentSecond
            updateTab={this.updateTabCollection.bind(this)}/> */}
          <DemoUICollection demoHeader="UI Demo" />
        </Tab>
        <Tab eventKey={3} title="Mock Service">
          <DemoMockService demoHeader="Mock Demo" />
        </Tab>
      </Tabs>
    )
  }
}

class TestChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.testChildComponentId = 5;
    this.props.updateTab(this.testChildComponentId);
  }

  componentDidMount() {
    console.log("Test child component is mounted");
  }

  render() {
    return(
      <h3>This is a test child component</h3>
    )
  }
}

class TestChildComponentSecond extends React.Component {
  constructor(props) {
    super(props);
    this.testChildComponentId = 6;
    this.props.updateTab(this.testChildComponentId);
  }

  componentDidMount() {
    console.log("Test child component is mounted");
  }

  render() {
    return(
      <h3>This is a test child component</h3>
    )
  }
}

export default DemoPage;
