import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Article from "./Article";
import SignIn from "./SignIn";
import Error404 from './Error404';

function App(){

  const appStyle = {
    backgroundColor: '#F3F7F2',
    color: '#1C0B0D',
    width: '100%',
    fontFamily: 'Montserrat Subrayada',
  }

  return (
    <Router>
      <div style={appStyle}>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Article} />
      </Switch>
     </div>
    </Router>
  );
}

export default App;
