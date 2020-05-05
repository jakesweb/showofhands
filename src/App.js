import React from "react";
import styled from "styled-components";
import { Link, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Create from "./components/Create";
import Results from "./components/Results";
import Find from "./components/Find";

const Header = styled.div`
  text-align: center;
  a {
    color: #010101;
    font-weight: bold;
    margin: 0 2%;
    text-decoration: none;
  }
`;

function App() {
  return (
    <>
      <Header>
        <h1>
          <Link to="/">Show of Hands</Link>
        </h1>
        <Link to="/create">Create Poll</Link>
        <Link to="/results">Poll Results</Link>
        <Link to="/find">Find Poll</Link>
      </Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/results" component={Results} />
        <Route path="/find" component={Find} />
      </Switch>
    </>
  );
}

export default App;
