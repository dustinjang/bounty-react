import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Account from "./Account";
import { NavLink } from "react-router-dom";
import Dustin from "../../assets/Dustin.jpeg";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="xl">
          <NavLink to="/">
            <Typography color="white" component="div" variant="h6">
              Bounties
            </Typography>
          </NavLink>
        </Container>
        <NavLink to="/Account">
          <IconButton>
            <Avatar src={Dustin} />
          </IconButton>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
