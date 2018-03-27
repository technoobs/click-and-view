import React from 'react';

function wrapComponent(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      console.log(this.props.headerName);
      this.headerName = this.props.headerName;
    }
    render() {
      return (
        <div>
          asdasd
          <WrappedComponent name={this.headerName}/>
        </div>
      )
    }
  }
}

const App = () => {
  return(
    <div>Hello</div>
  )
};

const Appp = () => {
  return(
    <div>HHHHHHH</div>
  )
};

// export const Test = wrapComponent(App);
// export const TestS = wrapComponent(Appp);

export default wrapComponent;
