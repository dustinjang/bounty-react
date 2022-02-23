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
    position: "absolute",
    bottom: 16,
    right: 16,
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
