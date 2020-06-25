import React from "react";
import { Main, Chat } from "@pages/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
