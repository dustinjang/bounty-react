import React from "react";
import Grid from "@mui/material/Grid";
import { Avatar, Typography } from "@mui/material";
import Dustin from "../../assets/Dustin.jpeg";
import { Container } from "@mui/material";

const Account = () => {
  const style = {
    textAlign: "center",
  };

  return (
    <Container>
      <Grid item xs={12}>
        <Container>
          <Avatar src={Dustin} />
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Dustin Jang</Typography>
        <Typography variant="body1">36 Bounties</Typography>
        <Typography variant="body1">20 Completed</Typography>
        <Typography variant="body1">16 Failed</Typography>
        <Typography variant="body1">Owes:$35</Typography>
      </Grid>
    </Container>
  );
};

export default Account;
