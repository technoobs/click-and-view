
import React from 'react';
// require('bootstrap/dist/css/bootstrap.min.css');

// Component to serve user login and sign in activities
class UserConsole extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("You clicked");
  }

  render() {
    return(
      <div className="text-center">
        <button type="button" className="btn btn-primary head-button"
          onClick={this.handleClick}>Sign up</button>
        <button type="button" className="btn btn-light head-button head-button-login"
          onClick={this.handleClick}>Login</button>
      </div>
    );
  }
}



export default UserConsole;
