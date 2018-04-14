// Wrapper class for product components
import React from 'react';
import ServiceHead from './ServiceHead.jsx';

class ProductWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperTitle = this.props.wrapperTitle;

  }

  render() {
    return(
      <div className="product-div">
        <div className="product-header-div">
          <ServiceHead name={this.wrapperTitle} />
        </div>
        <div className="product-description-div">
          description is here
        </div>
        <div className="product-content-div">
          content is here
        </div>
      </div>
    )
  }
}

function productWrapper(WrappedComponent) {

}
