import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

const BountyItem = (props) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <IconButton>
            <Link to="/account">
              <Avatar />
            </Link>
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
        <Link to="/bounty/:bountyId" style={{ textDecoration: "none" }}>
          <Typography color="white" variant="body1">
            {props.description}
          </Typography>
        </Link>
        <Typography variant="subtitle1" component="div">
          Cost for Failure: {props.failureCost}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BountyItem;
