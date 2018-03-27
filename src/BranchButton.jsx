import React from 'react';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

// route variable
// const branchButtonRoute = [
//   {
//     "id": "home",
//     "url": "/"
//   },
//   {
//     "id": "ui-collection",
//     "url": "/ui-collection"
//   },
//   {
//     "id": "demo",
//     "url": "/demo"
//   }
// ];

class BranchButton extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.branchButtonId;
    this.buttonUrl = "/ui-collection";
    this.buttonClass = "btn btn-primary head-button";
    this.validateButtonUrl = this.validateButtonUrl.bind(this);
    this.validateButtonClass = this.validateButtonClass.bind(this);
  }

  // Assign default url if no url is provided for button
  validateButtonUrl(url) {
    console.log("Validating Url: " + url);
    if(url == "") {
      url = "/";
    }
    return url;
  }

  // Assign default css class if no class is provided for button
  validateButtonClass(classStyle) {
    console.log("This button has the following class style: " + classStyle);
    if(classStyle == "") {
      classStyle = "btn btn-primary head-button";
    }
    return classStyle;
  }

  render() {
    return(
      <Link to={this.validateButtonUrl(this.buttonUrl)}>
        <button type="button"
          className={this.validateButtonClass(this.buttonClass)}>
          View More
        </button>
      </Link>
    )
  }
}

// Button controller
class ButtonController extends React.Component {
  constructor(props) {
    super(props);
    this.buttonType = this.props.buttonType; // customized button or group button (use same style as other buttons)
    this.buttonId = this.props.buttonId; // Unique id for each button
    this.buttonUrl = this.props.buttonUrl; // Url where the button directs
    this.buttonStyle = this.props.buttonStyle; // CSS class used for the button
    this.buttonName = this.props.buttonName; // Name displayed on the button
  }

  
}

export default BranchButton;
