import React from 'react';
import {Row, Col} from 'react-bootstrap/lib';

import demoContentWrapper from './DemoContentDiv.jsx';

class DemoIntroContent extends React.Component {
  render() {
    return(
      <Row>
        <Col xs={5}>
          <p style={{fontSize: '20px', width: '100%', textAligh: 'justify', textJustify: 'inter-word'}}>
            Want to know how powerful <span style={{fontWeight: 'bold'}}>Tech Noobs</span> can be? You're in the right place. Here provides various demos
            to demonstrate different styles or functions. You can get what you want only by a few clicks.
          </p>
        </Col>
        <Col xs={5}>
          Image should be displayed here
        </Col>
      </Row>
    )
  }
}

const DemoIntro = demoContentWrapper(DemoIntroContent);

export default DemoIntro;
