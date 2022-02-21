import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const BountyItem = (props) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <IconButton>
            <Avatar></Avatar>
          </IconButton>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.user}
        subheader={props.dateDue.toLocaleDateString("en-US")}
      />
      <CardContent>
        <Typography variant="body1">{props.description}</Typography>
        <Typography variant="body2">
          Cost for Failure: {props.failureCost}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BountyItem;
