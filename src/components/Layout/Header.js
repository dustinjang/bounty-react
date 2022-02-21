import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Account from "./Account";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <Typography>Bounties</Typography>
        </Link>
        <Link to="/Account">
          <Account />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
