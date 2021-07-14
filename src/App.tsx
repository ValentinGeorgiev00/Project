import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import LoginForm from "./Components/LoginForm";
import Nav from "./Components/Navigation";
import RegisterForm from "./Components/RegisterForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={LoginForm} />
          <Route path="/Register" component={RegisterForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
