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

class StandaloneMockStepTwo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <StepInstructions
          stepTitle="Step 2: Get API authentication key"
          stepInsContent={<div>
            <p>
              An API key is used to authenticate user's identity. In normal case,
              an API key will be changed in a peroid of time for security. However,
              users can choose to use persistent API key, so no worries about the key
              change.
            </p>
          </div>}
          />
        <Note noteContent={
            <p>
              In this part, a temporary API key will be provided because a random user
              is created. The API key is only available for 30 minutes. When the time
              limit exceeds, you will be required to use another random user.
            </p>
          } />
        <AuthenticationKeyForm />
      </div>
    )
  }
}

class AuthenticationKeyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      hasKey: false,
      userName: "",
      password: ""
    };
  }

  render() {
    return(
      <div className="mm-step">
        <div id="mm-apiKeyForm">
          <Form horizontal>
            <FormGroup controlId="mockAPIKeyForm">
              <Col componentClass={ControlLabel} sm={2} style={{backgroundColor: 'yellow', paddingRight: '2px'}}>
                API Key
              </Col>
              <Col sm={9} style={{backgroundColor: 'blue', paddingLeft: '3px', paddingRight: '3px'}}>
                <FormControl type="string" placeholder="Key Value" />
              </Col>
              <Col sm={1} style={{backgroundColor: 'green', paddingLeft: '3px'}}>
                asd
              </Col>
            </FormGroup>
          </Form>
          <Button bsStyle="primary" className="mock-btn-primary" style={{marginRight: '1rem'}}>
            Generate Key
          </Button>
          <Button bsStyle="success" style={{marginLeft: '1rem'}}>
            Create Project
          </Button>
        </div>
      </div>
    )
  }
}

export default StandaloneMockStepTwo;
