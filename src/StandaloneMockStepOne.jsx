import React from 'react';
import {Note, StepInstructions} from './StandaloneMockUtils.jsx';
import {
  Button,
  ButtonToolbar,
  ControlLabel,
  Form,
  FormGroup,
  FormControl,
  Col
} from 'react-bootstrap/lib/';

class StandaloneMockStepOne extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <StepInstructions
          stepTitle="Step 1: Login"
          stepInsContent="Step 1 instruction content"
          />
        <Note noteContent={
          <p>
            In this part, you won't be required to register a new user.
            Instead, please click the button below to create a random user.
          </p>} />
        <UserLogin />
      </div>
    )
  }
}

// Login form
class UserLogin extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <RandomUser />
      </div>
    )
  }
}

// Random username
class RandomUser extends React.Component {
  constructor() {
    super();
    this.state = {
      is_loggedIn: false,
      username: "",
      password: ""
    };
  }

  render() {
    return(
      <div>
        <UserLoginForm />
      </div>
    )
  }
}

class UserLoginForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div className="mm-step">
        <div id="mm-userloginForm">
          <Form horizontal>
            <FormGroup controlId="mockUserLoginUserName">
              <Col componentClass={ControlLabel} sm={2}>
                Username
              </Col>
              <Col sm={10}>
                <FormControl type="string" placeholder="Username" />
              </Col>
            </FormGroup>
            <FormGroup controlId="mockUserLoginPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>
          </Form>
          <Button bsStyle="primary" className="mock-btn-primary" style={{marginRight: '1rem'}}>
            Get random user
          </Button>
          <Button bsStyle="success" style={{marginLeft: '1rem'}}>Login</Button>
        </div>
      </div>
    )
  }
}

export default StandaloneMockStepOne;
