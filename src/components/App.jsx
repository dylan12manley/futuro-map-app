import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Article from "./Article";
import SignIn from "./SignIn";
import Error404 from './Error404';

function App(){

  const styledApp = {
    backgroundColor: '#A1BA9A',
    color: '#38171C',
    padding: '12px',
  }

  return (
    <Router>
      <div style={styledApp}>
      <Header />
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Article} />
      </Switch>
     </div>
    </Router>
  );
}

export default App;
