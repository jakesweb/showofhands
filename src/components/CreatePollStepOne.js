// create a poll and provide a link to the user
import React from "react";
import styled from "styled-components";

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

class CratePollStepOne extends React.Component {
  updateQuestions = (e) => {
    this.props.questionOutput[e.target.id] = e.target.value;
    console.log(this.props.questionOutput);
  };

  createQuestions = (num) => {
    const input = [];

    for (var i = 1; i <= num; i++) {
      input.push(
        <>
          <input
            type="text"
            id={"question" + i}
            name={"question" + i}
            placeholder={"Question #" + i}
            onChange={this.updateQuestions}
          />
        </>
      );
    }

    return input;
  };

  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }

    return (
      <>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name of the Poll"
        />
        <input
          type="date"
          id="end"
          name="enddate"
          value={new Date().toISOString().split("T")[0]}
          min={new Date().toISOString().split("T")[0]}
          placeholder="What day to end the poll"
        />
        <input
          type="number"
          id="questions"
          min="1"
          max="10"
          name="questions"
          value={this.props.questions}
          placeholder="How many questions do you want to ask?"
          onChange={this.props.handleChange}
        />
        {this.createQuestions(this.props.questions)}
      </>
    );
  }
}

export default CratePollStepOne;
