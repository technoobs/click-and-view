import React from 'react';

// Note Component
class Note extends React.Component {
  constructor(props) {
    super(props);
    this.noteContent = this.props.noteContent;
  }

  render() {
    return(
      <div className="note">
        <div className="label">Note</div>
        <div className="content">{this.noteContent}</div>
      </div>
    )
  }
}

// Step instructions
class StepInstructions extends React.Component {
  constructor(props) {
    super(props);
    this.stepTitle = this.props.stepTitle;
    this.stepInsContent = this.props.stepInsContent;
  }

  render() {
    return(
      <div className="step-instructions">
        <div><h3>{this.stepTitle}</h3></div>
        <div>
          <span>{this.stepInsContent}</span>
        </div>
      </div>
    )
  }
}

export {StepInstructions, Note};
