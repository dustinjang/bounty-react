import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Dustin from "../../assets/Dustin.jpeg";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

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
