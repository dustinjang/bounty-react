import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardHeader } from "@mui/material";
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
          <Link
            to={`/bounty/${props.description}`}
            style={{ textDecoration: "none" }}
          >
            <Button>Details</Button>
          </Link>
        }
        title={props.user}
      />
      <CardContent>
        <Typography variant="body1">{props.description}</Typography>

        <Typography variant="subtitle1" component="div">
          Cost for Failure: {props.failureCost}
        </Typography>
        <Typography>{props.dateDue}</Typography>
      </CardContent>
    </Card>
  );
};

export default BountyItem;
