import React from 'react';
import {Note, StepInstructions} from './StandaloneMockUtils.jsx';

class StandaloneMockStepThree extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <StepInstructions
          stepTitle="Step 3: Create Mock Project"
          stepInsContent="Step 3 instruction content"
          />
        {/*<Note noteContent={
          <p>
            In this part, you won't be required to register a new user.
            Instead, please click the button below to create a random user.
          </p>} />*/}
        <ProjectPanel />
      </div>
    )
  }
}

class ProjectPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      hasProject: false
    };
  }

  render() {
    return(
      <div className="mm-step">
        a
      </div>
    )
  }
}

class ProjectStructure extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div></div>
    )
  }
}

export default StandaloneMockStepThree;
