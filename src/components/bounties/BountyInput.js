import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormLabel,
  CardContent,
  Grid,
  Container,
  CardHeader,
  Typography,
  CardActions,
} from "@mui/material";

const BountyInput = (props) => {
  const [enteredUser, setEnteredUser] = useState("Dustin");
  const [enteredBounty, setEnteredBounty] = useState("");
  const [enteredDueDate, setDueDate] = useState();
  const [enteredFailureCost, setFailureCost] = useState("");

  const userDropDownHandler = (event) => {
    setEnteredUser(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredBounty(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDueDate(event.target.value);
  };

  const failureCostChangeHandler = (event) => {
    setFailureCost(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const bountyData = {
      id: Math.random().toString(),
      user: enteredUser,
      description: enteredBounty,
      failureCost: enteredFailureCost,
      dateDue: new Date(enteredDueDate),
    };

    props.onSaveBountyData(bountyData);
  };

  return (
    <Card>
      <CardHeader title={<Typography variant="h6">New Bounty</Typography>} />
      <form onSubmit={submitHandler}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={6} md={8}>
              <Select
                labelId="user-label"
                id="user"
                value={enteredUser}
                onChange={userDropDownHandler}
              >
                <MenuItem value={"Dustin"}>Dustin</MenuItem>
                <MenuItem value={"Phill"}>Phill</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField
                id="date"
                label="Due Date"
                type="date"
                value={enteredDueDate}
                onChange={dateChangeHandler}
                defaultValue={null}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField
                id="Bounty Description"
                label="Bounty Description"
                value={enteredBounty}
                onChange={descriptionChangeHandler}
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField
                id="failurecost"
                label="Cost for Failure"
                value={enteredFailureCost}
                onChange={failureCostChangeHandler}
              />
            </Grid>
            <CardActions>
              <Button type="button" onClick={props.onCancel}>
                Cancel
              </Button>
              <Button variant="contained" type="submit">
                Add Bounty
              </Button>
            </CardActions>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
};

export default BountyInput;
