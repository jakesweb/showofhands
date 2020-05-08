// create a poll and provide a link to the user
import React from "react";
import styled from "styled-components";

class CratePollStepTwo extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }

    return (
      <>
        {Object.entries(this.props.questionOutput).map((output, index) => {
          if (output[1] !== "") {
            return (
              <input
                key={index}
                type="text"
                name="answer"
                id="answer"
                placeholder={output[1]}
              />
            );
          }
        })}
      </>
    );
  }
}

export default CratePollStepTwo;
