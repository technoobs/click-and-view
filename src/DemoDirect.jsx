import React from 'react';
// import {LinkContainer} from 'react-router-bootstrap';
import {Button} from 'react-bootstrap';

// The component that directs users from Demo page to the specific service page.
class DemoDirect extends React.Component {
  constructor(props) {
    super(props);
    this.serviceName = this.props.serviceName;
    this.defineRoutePath = this.defineRoutePath.bind(this);
    this.defineDirectName = this.defineDirectName.bind(this);
  }

  defineRoutePath(serviceName) {
    if(serviceName == "ui") {
      return "/ui-collection";
    } else if(serviceName == "mock") {
      return "/mockservice";
    } else {
      return "/";
    }
  }

  defineDirectName(serviceName) {
    if(serviceName == "ui") {
      return "UI Collections";
    } else if(serviceName == "mock") {
      return "Mock Service";
    } else {
      return "Home"
    }
  }

  render() {
    // var routePath = this.defineRoutePath(this.serviceName)
    return(
      <div className="demo-direct-button">
        <Button bsStyle="info" href={this.defineRoutePath(this.serviceName)}>
          {this.defineDirectName(this.serviceName)}
        </Button>
      </div>
    )
  }
}

export default DemoDirect;
