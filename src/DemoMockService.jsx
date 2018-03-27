import React from 'react';

import demoContentWrapper from './DemoContentDiv.jsx';
import DemoDirect from './DemoDirect.jsx';

var demoExample = [
  {
    "id": 1,
    "name": "Demo 01: RESTful API uses GET HTTP Action",
    "description": "Demo description is here.",
    "url": "http://www.tecnooobs.com/example01",
    "data": "example01 data"
  },
  {
    "id": 2,
    "name": "Demo 02: RESTful API uses POST HTTP Action",
    "description": "Demo description is here.",
    "url": "http://www.tecnooobs.com/example02",
    "data": "example02 data"
  }
];

class DemoMockContent extends React.Component {
  render() {
    return(
      <div>
        <DemoMockIntro />
        <DemoMockContentDiv />
      </div>
    )
  }
}

class DemoMockIntro extends React.Component {
  render() {
    return(
      <div>
        <p style={{fontSize: '16px'}}>
          Using Mock Service on <span style={{fontWeight: 'bold'}}>TECH NOOBS</span> is very simple.
          Following the instruction of each <span style={{fontWeight: 'bold', color: '#00FFFF'}}>Demo</span>, and click a few buttons, magic will happen.
          By default, if you want to use the provided Mock Service, you will be required to provide an <a href="http://www.google.com" target="_blank">unique API key</a> for authentication.
        </p>
        <p style={{fontSize: '16px'}}>
          The recommended tool to run these demos is <a style={{fontWeight: 'bold', color: 'black'}} href="https://www.getpostman.com/" target="_blank">Postman</a>.
          If you don't have a tool to run demos, that's fine. Just click the <span style={{fontWeight: 'bold'}}>Run</span> button in each demo, the result will be shown to you.
        </p>
      </div>
    )
  }
}

// Mock Service content body
class DemoMockContentDiv extends React.Component {
  render() {
    return(
      <DemoMockExampleList />
    )
  }
}

// Mock Service example list
class DemoMockExampleList extends React.Component {
  constructor() {
    super();
    console.log("demoExample: " + demoExample);
  }
  render() {
    const mockExampleContent = demoExample.map(
      (demoExampleContent) => (
        <DemoMockExample key={demoExampleContent.id} content={demoExampleContent} />
      )
    );
    return(
      <div>
        <div id="demo-mock-content-div">
          {mockExampleContent}
        </div>
        <DemoDirect serviceName="mock" />
      </div>
    )
  }
}

// Mock Service example
class DemoMockExample extends React.Component {
  constructor(props) {
    super(props);
    this.exampleContent = this.props.content;
    console.log("Received the following example content: " + this.exampleContent);
    console.log("Example id is: " + this.exampleContent.id);
  }
  render() {
    return(
      <div className="demo-mock-example">
        <span className="demo-mock-example-header">
          {this.exampleContent.name}
        </span>
        <div className="demo-mock-example-content">
          <span>{this.exampleContent.description}</span>
          <div>
            <span className="demo-mock-example-content-api-data">API:</span>
            <code style={{fontSize: '15px', marginLeft: '0.3rem'}}>{this.exampleContent.url}</code>
          </div>
        </div>
      </div>
    )
  }
}



const DemoMockService = demoContentWrapper(DemoMockContent);

export default DemoMockService;
