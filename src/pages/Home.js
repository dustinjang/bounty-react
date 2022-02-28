import React, { Fragment, useState } from "react";
import BountyInput from "../components/bounties/BountyInput";
import BountyList from "./BountyList";
import { Stack } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const Home = () => {
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
        {formVisible && <BountyInput onCancel={formVisibilityHandler} />}
        <BountyList />
      </Stack>
      <Fab sx={fabStyle} color="primary" aria-label="add">
        <AddIcon onClick={formVisibilityHandler} />
      </Fab>
    </Fragment>
  );
};

export default Home;
