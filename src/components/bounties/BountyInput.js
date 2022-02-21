import React, { useState } from "react";
import Button from "@mui/material/Button";

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
    <form onSubmit={submitHandler}>
      <div>
        <label>User </label>
        <select value={enteredUser} onChange={userDropDownHandler}>
          <option value="Dustin">Dustin</option>
          <option value="Phill">Phill</option>
        </select>
      </div>
      <div>
        <label>Bounty </label>
        <input
          type="text"
          value={enteredBounty}
          onChange={descriptionChangeHandler}
        />
      </div>
      <div>
        <label>Due Date </label>
        <input
          value={enteredDueDate}
          type="date"
          onChange={dateChangeHandler}
        />
      </div>
      <div>
        <label>Cost for Failure </label>
        <input
          value={enteredFailureCost}
          type="number"
          min="0.01"
          step="0.01"
          onChange={failureCostChangeHandler}
        />
      </div>
      <div>
        <Button type="button" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          Add Bounty
        </Button>
      </div>
    </form>
  );
};

export default BountyInput;
