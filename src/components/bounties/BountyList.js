import React, { Fragment } from "react";
import BountyItem from "./BountyItem";

const BountyList = (props) => {
  return (
    <Fragment>
      {props.bountyItems.map((bounty) => (
        <BountyItem
          key={bounty.id}
          user={bounty.user}
          description={bounty.description}
          failureCost={bounty.failureCost}
          dateDue={bounty.dateDue}
        />
      ))}
    </Fragment>
  );
};

export default BountyList;
