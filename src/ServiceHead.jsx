
import React from 'react';

class ServiceHead extends React.Component {
  constructor(props) {
    super(props);
    this.serviceName = this.props.name;
  }
  render() {
    return(
      <span>
        {this.serviceName}
      </span>
    )
  }
}

export default ServiceHead;
