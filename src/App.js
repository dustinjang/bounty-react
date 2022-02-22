import React, { Fragment } from "react";
import Header from "./components/layout/Header";
import Account from "./components/layout/Account";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/layout/Home";
import BountyDetail from "./components/bounties/BountyDetail";
import { Redirect } from "react-router-dom";
import BountyInput from "./components/bounties/BountyInput";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/bounty" />
        </Route>
        <Route path="/bounty" exact>
          <Home />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/bounty/:bountyId">
          <BountyDetail />
        </Route>
        <Route path="/newBounty">
          <BountyInput />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
