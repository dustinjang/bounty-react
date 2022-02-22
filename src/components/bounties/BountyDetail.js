import React, { Fragment } from "react";
import {
  useParams,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

const BountyDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Bounty Details</h1>
      <p>{params.bountyId}</p>
    </Fragment>
  );
};

export default BountyDetail;
