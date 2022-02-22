import React from "react";
import Grid from "@mui/material/Grid";
import { Avatar, Typography } from "@mui/material";
import Dustin from "../../assets/Dustin.jpeg";

const Account = () => {
  const style = {
    textAlign: "center",
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Avatar src={Dustin} />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h5">Dustin Jang</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h5">36 Bounties</Typography>
        <Typography variant="h5">20 Completed</Typography>
        <Typography variant="h5">16 Failed</Typography>
        <Typography variant="h5">Owes:$35</Typography>
      </Grid>
    </Grid>
  );
};

export default Account;
