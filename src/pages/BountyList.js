import React, { Fragment, useState, useEffect } from "react";
import BountyItem from "../components/bounties/BountyItem";

const BountyList = () => {
  const [bounties, setBounties] = useState([]);

  useEffect(() => {
    const fetchBounties = async () => {
      const response = await fetch(
        "https://bounties-e6d08-default-rtdb.firebaseio.com/bounties.json"
      );
      const responseData = await response.json();

      const loadedBounties = [];

      for (const key in responseData) {
        loadedBounties.push({
          id: key,
          user: responseData[key].user,
          description: responseData[key].description,
          failureCost: responseData[key].failureCost,
          dateDue: responseData[key].dateDue,
        });
      }

      setBounties(loadedBounties);
    };

    fetchBounties();
  }, []);

  const bountiesList = bounties.map((bounty) => (
    <BountyItem
      key={bounty.id}
      user={bounty.user}
      description={bounty.description}
      failureCost={bounty.failureCost}
      dateDue={bounty.dateDue}
    />
  ));

  return <Fragment>{bountiesList}</Fragment>;
};

export default BountyList;
