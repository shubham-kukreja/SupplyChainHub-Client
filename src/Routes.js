import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AddProductPage from "./pages/AddProductPage";
import BuildSupplyChain from "./pages/BuildSupplyChain";
import CreatePage from "./pages/CreatePage";
import DeployContractPage from "./pages/DeployContractPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <CreatePage />
      </Route>
      <Route path="/build" exact>
        <BuildSupplyChain />
      </Route>
      <Route path="/product" exact>
        <AddProductPage />
      </Route>
      <Route path="/deploy" exact>
        <DeployContractPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
