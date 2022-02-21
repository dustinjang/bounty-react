import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Account from "./Account";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink to="/">
          <Typography>Bounties</Typography>
        </NavLink>
        <NavLink to="/Account">
          <Account />
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
