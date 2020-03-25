import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Article from "./Article";
import SignIn from "./SignIn";

function App(){
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <Article />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
