import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" exact>
        <HomePage />
      </Route>
      <Route path="/build" exact>
        <CreatePage />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
};

export default Routes;
