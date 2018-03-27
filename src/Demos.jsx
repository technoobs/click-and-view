
import React from 'react';

// Test data for demos
var demosTagsData = [
  {
    "id": 1,
    "name": "demo_01",
    "type": "ui-collections",
    "img_01": "image01",
    "img_02": "image02"
  },
  {
    "id": 2,
    "name": "demo_02",
    "type": "ui-collections",
    "img_01": "image01",
    "img_02": "image02"
  },
  {
    "id": 3,
    "name": "demo_03",
    "type": "mock",
    "img_01": "image01",
    "img_02": "image02"
  }
];

class Demos extends React.Component {
  render() {
    return(
      <div id="demos">
        <div id="demos-title">
          <DemosTitle title="Demo Collections ;)"/>
        </div>
        <div id="demos-body">
          <DemosBody bodyTitle="Avaiable Demos"/>
        </div>
      </div>
    )
  }
}

// Title of Demo Page
class DemosTitle extends React.Component {
  constructor(props) {
    super(props);
    this.titleContent = this.props.title;
  }

  render() {
    return(
      <span id="demos-title-content">
        {this.titleContent}
      </span>
    )
  }
}

class DemosBody extends React.Component {
  constructor(props) {
    super(props);
    this.demosBodyTitle = this.props.bodyTitle;
  }

  render() {
    return(
      <div id="demos-body-div">
        <span id="demos-body-title">
          {this.demosBodyTitle}
        </span>
        <div id="demos-body-content-div">
          <DemosTags tagName="asd"/>
        </div>
      </div>
    )
  }
}

// Demo tags displayed on Demos Page
class DemosTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
    this.tagName = this.props.tagName;
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // hover to change display style
  hoverOn() {
    this.setState({hover: true});
  }

  hoverOff() {
    this.setState({hover: false});
  }

  // click function
  handleClick() {
    console.log("clicked a demo tag");
  }

  render() {
    return(
      <div className={this.state.hover ? "demos-tags demos-tags-hover-on" :
        "demos-tags demos-tags-hover-off"}>
        <div className="demos-tags-img">this is a tag</div>
        <div className="tags-name-style demos-tags-name"
          onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}
          onClick={this.handleClick}>
          <span>Login</span>
        </div>
      </div>
    )
  }
}

export default Demos;
