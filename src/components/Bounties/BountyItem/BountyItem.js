import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const BountyItem = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{props.user}</Typography>
        <Typography variant="body2">{props.description}</Typography>
        <span>Cost for Failure: {props.failureCost}</span>
        <p>{props.dateDue.toLocaleDateString("en-US")}</p>
      </CardContent>
    </Card>
  );
};

export default BountyItem;
