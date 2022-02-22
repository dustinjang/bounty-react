import React from "react";
import Grid from "@mui/material/Grid";
import { Avatar, CardContent, Typography } from "@mui/material";
import Dustin from "../../assets/Dustin.jpeg";
import { Container } from "@mui/material";
import { Card } from "@mui/material";
import { Stack } from "@mui/material";

const Account = () => {
  const style = {
    textAlign: "center",
  };

  return (
    <Stack margin={(3, 5, 0, 5)}>
      <Card>
        <CardContent>
          <Grid item xs={12}>
            <Avatar src={Dustin} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Dustin Jang</Typography>
            <Typography variant="body1">36 Bounties</Typography>
            <Typography variant="body1">20 Completed</Typography>
            <Typography variant="body1">16 Failed</Typography>
            <Typography variant="body1">Owes:$35</Typography>
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Account;
