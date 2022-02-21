import React, { Fragment, useState } from "react";
import BountyInput from "./components/Bounties/BountyInput/BountyInput";
import BountyList from "./components/Bounties/BountyList/BountyList";
import { Container, Stack } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Header from "./components/Layout/Header";

const FAKE_BOUNTIES = [
  {
    id: "b1",
    user: "Dustin", // make drop down selector?
    description: "Go to the gym for 20/28 days",
    failureCost: 99.99, //iterate to a dropdown with options for money, social cost, labor
    dateDue: new Date(2022, 2, 28),
  },
  {
    id: "b2",
    user: "Phill",
    description: "Create UI for Vertalo",
    failureCost: 29.99, //iterate to a dropdown with options for money, social cost, labor
    dateDue: new Date(2021, 4, 28),
  },
  {
    id: "b3",
    user: "Dustin",
    description: "Apply for 3 jobs",
    failureCost: 29.99, //iterate to a dropdown with options for money, social cost, labor
    dateDue: new Date(2022, 4, 28),
  },
];

const App = () => {
  const [bounties, setBounties] = useState(FAKE_BOUNTIES);

  const addBountyHandler = (bountyData) => {
    setBounties((prevBounties) => {
      return [bountyData, ...prevBounties];
    });
  };

  const [formVisible, setFormVisible] = useState(false);

  const formVisibilityHandler = () => {
    setFormVisible(!formVisible);
  };

  const fabStyle = {
    position: "absolute",
    bottom: 16,
    right: 16,
  };

  return (
    <Fragment>
      <Header />
      <Container>
        {formVisible && (
          <BountyInput
            onCancel={formVisibilityHandler}
            onSaveBountyData={addBountyHandler}
          />
        )}
      </Container>
      <Stack margin={(3, 5, 0, 5)} spacing={3}>
        <BountyList bountyItems={bounties} />
      </Stack>
      <Fab sx={fabStyle} color="primary" aria-label="add">
        <AddIcon onClick={formVisibilityHandler} />
      </Fab>
    </Fragment>
  );
};

export default App;
