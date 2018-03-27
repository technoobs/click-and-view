import React from 'react';
import {Row, Col, Image} from 'react-bootstrap/lib/';

class DesignerNameTag extends React.Component {
  constructor(props) {
    super(props);
    this.desId = this.props.designerId;
    this.desImg = this.props.designerImg;
    this.desName = this.props.designerName;
    this.desRate = this.props.designerRateNumber;
  }

  render() {
    return(
      <div className="general-designer-tag">
        <Row className="designer-tag-row">
          <div className="designer-tag-img-div">
            <Image src={require('./img/01.jpg')} className="designer-tag-image"
              circle responsive/>
          </div>
          <div className="designer-tag-name-div">
            <div className="text-overflow">
              <span>this_is_great</span>
            </div>
          </div>
        </Row>
      </div>
    )
  }
}

export default DesignerNameTag;
