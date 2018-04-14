
import React from 'react';

// default
// top
// down
// left
// right

const borderPosList = [
  "border",
  "border-top",
  "border-bottom",
  "border-left",
  "border-right"
];

// Font weight is bold by default
class ServiceHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontWeight: "bold",
      headerSize: this.props.headerSize, // font-size for header
      borderPos: this.props.borderPos, // border position
      borderColor: this.props.borderColor, // border color
      borderWeight: this.props.borderWeight // border weight
    };

    this.serviceName = this.props.name;

    this.defineHeaderSize = this.defineHeaderSize.bind(this);
    this.defineBorderPos = this.defineBorderPos.bind(this);
    this.defineBorderColor = this.defineBorderColor.bind(this);

    // this.defineHeaderSize(this.headerSize);
    // this.defineBorderPos(this.borderPos);
  }

  // Function to define css style for header title
  defineHeaderSize(headerSize) {
    console.log("Received header font size is: " + headerSize);
    if(headerSize == undefined) {
      console.log("Header size has no value");
      headerSize = "30px";
    }
    console.log("Header font size is set to: " + headerSize);
    this.setState({
      headSize: headerSize
    });
  }

  defineBorderPos(borderPos) {
    console.log("Received header border position is: " + borderPos);
    if(borderPos == undefined || borderPosList.indexOf(borderPos) == -1) {
      borderPos = "border-top";
    }
    console.log("Header border position is set to: " + borderPos);
    this.setState({
      borderPos: borderPos
    });
  }

  defineBorderColor(borderColor) {
    console.log("Received border color: " + borderColor);
    if(borderColor == undefined) {
      borderColor == "red";
    }
    console.log("Header border color is set to: " + borderColor);
    this.setState({
      borderColor: borderColor
    });
  }

  render() {
    var headerStyle = {
      fontWeight: this.state.fontWeight,
      fontSize: this.state.fontSize == undefined ? "25px" : this.state.fontSize,
      border: this.state.headerPos,
      borderLeft: "3px black solid"

    };
    return(
      <div style={headerStyle}>
        <span>
          {this.serviceName}
        </span>
      </div>
    )
  }
}

export default ServiceHead;
