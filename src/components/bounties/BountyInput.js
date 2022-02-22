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
      <form onSubmit={submitHandler}>
        <Grid margin={(5, 5, 5, 5)}>
          <FormControl>
            <Box></Box>
            <Select
              labelId="user-label"
              id="user"
              value={enteredUser}
              onChange={userDropDownHandler}
            >
              <MenuItem value={"Dustin"}>Dustin</MenuItem>
              <MenuItem value={"Phill"}>Phill</MenuItem>
            </Select>
            <TextField
              id="Bounty Description"
              label="Bounty Description"
              value={enteredBounty}
              onChange={descriptionChangeHandler}
            />
          </FormControl>
          <Box>
            <label>Due Date </label>
            <input
              value={enteredDueDate}
              type="date"
              onChange={dateChangeHandler}
            />
          </Box>
          <Box>
            <label>Cost for Failure </label>
            <input
              value={enteredFailureCost}
              type="number"
              min="0.01"
              step="0.01"
              onChange={failureCostChangeHandler}
            />
          </Box>
          <Box>
            <Button type="button" onClick={props.onCancel}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Add Bounty
            </Button>
          </Box>
        </Grid>
      </form>
    </Card>
  );
};

export default BountyInput;
