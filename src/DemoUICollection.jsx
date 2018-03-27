import React from 'react';

import demoContentWrapper from './DemoContentDiv.jsx';
import DemoDirect from './DemoDirect.jsx';

class DemoUICollectionContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  // Check if component is loaded before
  isComponentLoaded() {
    console.log("Checking component loading status...");
  }

  render() {
    return(
      <div>
        <div>
          Here is UI Collection Demo
        </div>
        <DemoDirect serviceName="ui" />
      </div>
    )
  }
}

const DemoUICollection = demoContentWrapper(DemoUICollectionContent);

export default DemoUICollection;
