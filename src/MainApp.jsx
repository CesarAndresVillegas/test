import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { InputForm } from "./components/TestInputForm";
import { TestLayout } from "./components/TestLayout";

export const MainApp = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/layout/:clientId">
            <TestLayout />
          </Route>
          <Route exact path="/">
            <InputForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

