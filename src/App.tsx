import React, { useEffect, useState } from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import LoginForm from "./Components/LoginForm";
import Nav from "./Components/Navigation";
import PublicPage from "./Components/PublicPage";
import RegisterForm from "./Components/RegisterForm";

function App() {
  const [userType, setuserType] = useState<string>("");
  useEffect(() => {
    console.log(userType);
  }, [userType]);
  return (
    <div className="App">
      <Router>
        <Nav userType={userType} />
        <Redirect to="/public/home" />
        <Switch>
          <Route path="/public/home" exact component={PublicPage} />
          <Route path="/portal/home" exact component={PublicPage} />
          <Route
            path="/public/login"
            exact
            component={() => {
              return <LoginForm setuserType={setuserType} />;
            }}
          />
          <Route path="/public/Register" component={RegisterForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
