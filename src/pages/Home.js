import React, { Fragment, useState } from "react";
import BountyInput from "../components/bounties/BountyInput";
import BountyList from "./BountyList";
import { Stack } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  const history = useHistory();

  const addBountyHandler = (bountyData) => {
    fetch("https://bounties-e6d08-default-rtdb.firebaseio.com/bounties.json", {
      method: "POST",
      body: JSON.stringify(bountyData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  };

  const [formVisible, setFormVisible] = useState(false);

  const formVisibilityHandler = () => {
    setFormVisible(!formVisible);
  };

  const fabStyle = {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  };

  return (
    <Fragment>
      <Stack margin={(3, 5, 0, 5)} spacing={3}>
        {formVisible && (
          <BountyInput
            onCancel={formVisibilityHandler}
            onSaveBountyData={addBountyHandler}
          />
        )}
        <BountyList />
      </Stack>
      <Fab sx={fabStyle} color="primary" aria-label="add">
        <AddIcon onClick={formVisibilityHandler} />
      </Fab>
    </Fragment>
  );
};

export default Home;
