import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
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
      <Route path="/chat" exact>
        <ChatPage />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
};

export default Routes;
