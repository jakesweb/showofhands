// create a poll and provide a link to the user
import React from "react";
import styled from "styled-components";

import CreatePollStepOne from "./CreatePollStepOne";
import CreatePollStepTwo from "./CreatePollStepTwo";

const Div = styled.div`
  margin: 2%;
  form {
    display: flex;
    flex-direction: column;
    margin: 1.5% 1.5%;
  }
  input {
    margin: 1% 0;
  }
`;

class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
      questions: 1,
      questionOutput: {
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
        question6: "",
        question7: "",
        question8: "",
        question9: "",
        question10: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this._next = this._next.bind(this);
  }

  _next() {
    var currentStep = this.state.currentStep;
    console.log(this.state.questionOutput);

    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    console.log(data.get("name"));
    console.log(data.getAll("question"));
  }

  render() {
    return (
      <Div>
        <form onSubmit={this.handleSubmit}>
          <CreatePollStepOne
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            questions={this.state.questions}
            questionOutput={this.state.questionOutput}
          />
          <button type="button" onClick={this._next}>
            Next
          </button>
          <CreatePollStepTwo
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            questions={this.state.questions}
            questionOutput={this.state.questionOutput}
          />
          <input type="submit" id="submit" value="Submit" />
        </form>
      </Div>
    );
  }
}

export default Create;
