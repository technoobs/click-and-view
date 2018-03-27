import React from 'react';

// ** need function to interacr with child component if required **


// Template component for demo content
// Receives component header, and display child component
function demoContentWrapper(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.demoHeader = this.props.demoHeader;
    }

    render() {
      return(
        <div className="demo-content-div">
          <h3 className="demo-content-header">
            {this.demoHeader}
          </h3>
          <WrappedComponent />
        </div>
      )
    }
  }
}

export default demoContentWrapper;
