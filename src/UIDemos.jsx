// UI Collection demos for demo page

import React from 'react';

// Receives available demos returned from backend
class UIDemos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasDemo: false,
      demoList: []
    };
  }

  render() {
    return(
      <div id="ui-demos">
        <div id="ui-demos-title-div">
          <UIDemosTitle title="UI Demos"/>
        </div>
      </div>
    )
  }
}

class UIDemosTitle extends React.Component {
  constructor(props) {
    super(props);
    this.titleContent = this.props.title;
  }

  render() {
    return(
      <div id="ui-demos-title">
        <h3>{this.titleContent}</h3>
      </div>
    )
  }
}

class UIDemosBody extends React.Component {
  constructor(props) {
    super(props);

  }
}

export default UIDemos;
