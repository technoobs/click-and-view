import React from 'react';
import {Row, Col, Image} from 'react-bootstrap/lib/';
import ServiceHead from './ServiceHead.jsx';
import PromoName from './PromotionName.jsx';
import DesignerNameTag from './DesignerNameTag.jsx';

// Test data for popular designers
var popularDesignersList = [
  {
    "id": "032",
    "name": "Alan Mitchel",
    "designerImg": "",
    "rate": 93
  },
  {
    "id": "042",
    "name": "Michael Klay",
    "designerImg": "",
    "rate": 80
  },
  {
    "id": "046",
    "name": "Marcy Jones",
    "designerImg": "",
    "rate": 45
  }
];

// This is what the `UI Collecitons` page looks like
class UIPage extends React.Component {
  constructor(props) {
    super(props);
    this.uiTitle = this.props.serviceTitle;
    this.uiHeadColor = this.props.serviceTitleColor;
  }
  render() {
    return(
      <div id="ui-coll-content-div">
        <span id="ui-collection-header">
          <ServiceHead name={this.uiTitle} />
        </span>
        <UIDescription />
        <PopularDesignerList />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <span>asd</span>
      </div>
    )
  }
}

class UIDescription extends React.Component {
  constructor() {
    super();
    // use state for description content modification
  }
  render() {
    return(
      <p id="ui-collection-description">
        This is the first place where you begin your fantastic journey. Here provides
        you vast collections of UI design. Click and view your favourite one and feel free
        to explore more. Cheers ;)
      </p>
    )
  }
}

// Popular UI collection topics. eg `Login Form`, `Nav bar`
class PopularCollectionList extends React.Component {
  constructor(props) {
    super(props);
    this.limitNum = this.props.limitNum;
  }

}


// Top rated authors who are recommended by the system according to
// numbers of `favourite` or `like`
class PopularDesignerList extends React.Component {
  constructor(props) {
    super(props);
    this.limitNum = this.props.limitNum; // number of designers displayed on website
    this.popularList = this.props.popularList;
  }

  render() {
    return(
      <Row id="ui-popular-author">
        <Col xs={1}>
          <span style={{fontSize: '20px'}}>Popular Designer</span>
        </Col>
        <Col id="ui-popular-designer-row" style={{backgroundColor: 'pink'}}>
          <DesignerNameTag />
          <DesignerNameTag />
        </Col>
      </Row>
    )
  }
}

// Name tags for each author
class DesignerTag extends React.Component {
  constructor(props) {
    super(props);
    this.desId = this.props.designerId;
    this.desImg = this.props.designerImg;
    this.desName = this.props.designerName;
    this.desRate = this.props.designerRateNumber;
  }

  render() {
    return(
      <Col xs={1} style={{backgroundColor: 'blue', margin: '3px'}}>
        <div>H</div>
      </Col>
    )
  }
}

export default UIPage;
