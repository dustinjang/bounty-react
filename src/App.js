import React, { Fragment } from "react";
import Header from "./components/layout/Header";
import Account from "./components/layout/Account";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/layout/Home";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Account">
          <Account />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
