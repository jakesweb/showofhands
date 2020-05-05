// create a poll and provide a link to the user
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin: 2%;
`;

const Create = () => (
  <Div>
    <form>
      <input type="text" id="name" placeholder="Name" />
    </form>
  </Div>
);

export default Create;
