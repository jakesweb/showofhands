// create a poll and provide a link to the user
import React from "react";
import styled from "styled-components";

import CreatePollStepOne from "./CreatePollStepOne";

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
      questions: 1,
    };
    this.handleChange = this.handleChange.bind(this);
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
            handleChange={this.handleChange}
            questions={this.state.questions}
          />
          <input type="submit" id="submit" value="Submit" />
        </form>
      </Div>
    );
  }
}

export default Create;
