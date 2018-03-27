
import React from 'react';
import {Row, Col, Image} from 'react-bootstrap/lib/';
import BranchButton from './BranchButton.jsx';
// import Row from 'react-bootstrap/lib/Row';
// require('bootstrap/dist/css/bootstrap.min.css');

// website display
// adjust display position via id (odd -> left, even -> right)
var treeView = [
  {
    "id": 1,
    "title": "UI Collections",
    "content": "Easy & Beautiful",
    "description": "Tons of marvelous UI resolutions to power your product.",
    "img": "",
    "buttonId": "collection-ui",
    "buttonUrl": "/ui-collection"
  },
  {
    "id": 2,
    "title": "Mock Service",
    "content": "Smart Test Environment",
    "description": "Here is the description of Mock Service.",
    "img": "",
    "buttonId": "mock-service",
    "buttonUrl": "/mock"
  }
];

var moreContent = [
  {
    "id": 1,
    "title": "More is Coming . . .",
    "content": "Where Miracles Happen . . .",
    "description": "More and more marvelous features are coming up, please sit down and have a cup of coffe. Cheers~~~",
    "img": ""
  }
];

class AppBody extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <WelcomeBody welcomeTitle={this.props.titleName}/>
        <TreeView treeArray={treeView}/>
      </div>
    )
  }
}

class WelcomeBody extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div id="body-brief-div">
        <h1 className="title">{this.props.welcomeTitle}</h1>
        <span className="brief-body">Simplify Your IT Solutions</span>
      </div>
    )
  }
}

class TreeView extends React.Component {
  constructor(props) {
    super(props);
    this.treeArray = this.props.treeArray;
    console.log(this.props.treeArray);
  }

  render() {
    const branchComponents = this.treeArray.map(
      (branchDisplayContent) => (
        <MyTreeLeaf key={branchDisplayContent.id}
          branchContent={branchDisplayContent}/>
      )
    );

    return(
      <div className="tree-view">
        {branchComponents}
      </div>
    );
  }
}

class MyTreeLeaf extends React.Component {
  constructor(props) {
    super(props);
    this.branchObj = this.props.branchContent;
    this.adjustBranchPos = this.adjustBranchPos.bind(this);
    this.adjustBranchContent = this.adjustBranchContent.bind(this);
    this.adjustBranchColor = this.adjustBranchColor.bind(this);
  }

  // adjust display position (right or left) of
  // each branch view component
  adjustBranchPos(id) {
    console.log("processed id is: " + id);
    return (id % 2 == 0) ? 'right-branch-view': 'left-branch-view';
  }

  adjustBranchContent(id) {
    console.log("processed content id is: " + id);
    return (id % 2 == 0) ? 'right-branch-content': 'left-branch-content';
  }

  adjustBranchColor(id) {
    var backgroundColorId = id % 3;
    if(backgroundColorId == 1) {
      return 'branchColor-first';
    } else if(backgroundColorId == 2) {
      return 'branchColor-second';
    } else {
      return 'branchColor-third';
    }
  }

  render() {
    return(
      <div className={this.adjustBranchPos(this.branchObj.id) + " " +
      this.adjustBranchColor(this.branchObj.id)}>
        <ConditionalTest
          id={this.branchObj.id}
          title={this.branchObj.title}
          content={this.branchObj.content}
          description={this.branchObj.description}
          img={this.branchObj.img}/>
      </div>
    );
  }
}

class BranchContent extends React.Component {
  constructor(props) {
    super(props);
    this.branchTitle = this.props.title;
    this.branchContentTag = this.props.content;
    this.branchDescription = this.props.description;
    this.branchImg = this.props.img;
    console.log("Received title is: " + this.branchTitle);
  }

  adjustContentStyle(id) {
    console.log("adjustContentStyle function: this function is not used yet. Please ignore this message");
  }

  render() {
    return(
      <div>
        <span className="contentTag">{this.branchContentTag}</span>
        <h1 className="contentTitle">{this.branchTitle}</h1>
        <p className="contentDesc">{this.branchDescription}</p>
      </div>
    )
  }
}

class BranchFigure extends React.Component {
  constructor(props) {
    super(props);
    this.branchImg = this.props.branchImg;
  }

  render() {
    return(
      <Image src={require('./img/01.jpg')} style={{height: '80%', width: '100%'}}/>
    )
  }
}

class BranchOddDiv extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.title = this.props.title;
    this.contentTag = this.props.content;
    this.description = this.props.description;
    this.img = this.props.img;
    this.branchButtonId = this.buttonId; // button id used to identify link Where it directs
  }

  render() {
    return(
      <div style={{padding: '1rem'}}>
        <Row className="show-grid branch-row left-branch-content">
          <Col xs={6}>
            <BranchContent title={this.title} content={this.contentTag}
            description={this.description}/>
            <div className="odd-branchButton">
              <BranchButton />
            </div>
          </Col>
          <Col xs={6}><BranchFigure img={this.img}/></Col>
        </Row>
      </div>
    )
  }
}

class BranchEvenDiv extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.title = this.props.title;
    this.contentTag = this.props.content;
    this.description = this.props.description;
    this.img = this.props.img;
  }

  render() {
    return(
      <div style={{padding: '1rem'}}>
        <Row className="show-grid branch-row right-branch-content">
          <Col xs={6}><BranchFigure img={this.img}/></Col>
          <Col xs={6}><BranchContent title={this.title} content={this.contentTag}
            description={this.description}/></Col>
        </Row>
      </div>
    )
  }
}

// Deceide the layout of branch content
function setBranchContent(id) {
  if(id % 2 == 1) {
    console.log("Odd branch, left is branch content, right is branch figure");
    return "odd";
  } else {
    console.log("Even branch, right is branch content, left is branch figure");
    return "even";
  }
}

function ConditionalTest(props) {
  if(props.id % 2 == 1) {
    console.log("id is: " + props.id);
    return <BranchOddDiv id={props.id} title={props.title} content={props.content}
      description={props.description} img={props.img}/>
  } else {
    console.log("id is: " + props.id);
    return <BranchEvenDiv id={props.id} title={props.title} content={props.content}
      description={props.description} img={props.img}/>
  }
}

export default AppBody;
