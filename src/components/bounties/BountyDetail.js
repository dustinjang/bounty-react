import { Card, CardContent, Typography } from "@mui/material";
import React, { Fragment } from "react";
import {
  useParams,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import { Stack } from "@mui/material";

const BountyDetail = () => {
  const params = useParams();

  return (
    <Stack margin={(3, 5, 0, 5)} spacing={3}>
      <Card>
        <CardContent>
          <Typography variant="h5">Bounty Details</Typography>
          <Typography variant="body1">{params.bountyId}</Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default BountyDetail;
