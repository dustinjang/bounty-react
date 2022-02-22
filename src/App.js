import React, { Fragment } from "react";
import Header from "./components/layout/Header";
import Account from "./components/layout/Account";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/layout/Home";
import BountyDetail from "./components/bounties/BountyDetail";
import { Redirect } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Bounty" />
        </Route>
        <Route path="/Bounty" exact>
          <Home />
        </Route>
        <Route path="/Account">
          <Account />
        </Route>
        <Route path="/Bounty/:BountyId">
          <BountyDetail />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
