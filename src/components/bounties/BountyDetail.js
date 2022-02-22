import React from "react";
import {
  useParams,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

const BountyDetail = () => {
  const params = useParams();

  return (
    <Switch>
      <h1>Bounty Details</h1>
      <p>{params.bountyId}</p>
      <Route path={`/bounty/${params.bounty}/comments`}></Route>
    </Switch>
  );
};

export default BountyDetail;
