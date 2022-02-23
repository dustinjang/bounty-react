import React, { Fragment, useContext } from "react";
import Header from "./components/layout/Header";
import Account from "./pages/Account";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import BountyDetail from "./pages/BountyDetail";
import { Redirect } from "react-router-dom";
import BountyInput from "./components/bounties/BountyInput";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/Welcome";
import AuthPage from "./pages/AuthPage";

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
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
