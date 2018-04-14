//
// Step 1: Provide username and password.
// Step 2: Get "temporary authentication key".
// Step 3: Create "Project" in Guide page.
// Step 4: Provide test data and run.
//

import React from 'react';
import StandaloneMockStepOne from './StandaloneMockStepOne.jsx';
import StandaloneMockStepTwo from './StandaloneMockStepTwo.jsx';
import StandaloneMockStepThree from './StandaloneMockStepThree';

class StandaloneMock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="mockmock-div">
        <div id="mockmock-intro">
          <p>
            Welcome to the "Mock Mock" service.
            You will get an overview of the whole process on how to use Mock Service in Tech Noobs.
          </p>
        </div>
        <div>
          <p style={{textAlign: 'center'}}>
            Please follow the following steps to explore your "Mock Service" journey.
          </p>
        </div>
        <div id="mockmock-steps">
        </div>
        <StandaloneMockStepOne />
        <StandaloneMockStepTwo />
        <StandaloneMockStepThree />
      </div>
    )
  }
}

// Steps component
class MockSteps extends React.Component {
  constructor() {
    super();
  }
}

// Step 2
class MockStepTwo extends React.Component {

}

// Step 3
class MockStepThree extends React.Component {

}

// Step 4
class MockStepFour extends React.Component {

}

export default StandaloneMock;
