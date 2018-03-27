import React from 'react';
import {Col} from 'react-bootstrap/lib/';

class PromoName extends React.Component {
  constructor(props) {
    super(props);
    this.colWidth = this.props.colWidth;
    this.promoName = this.props.name;
    console.log("Received name is: " + this.promoName);
  }

  render() {
    return(
      <Col id="ui-popular-designer-name" xs={this.colWidth}>
        {this.promoName}:
      </Col>
    )
  }
}

export default PromoName;
