import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Dustin from "../../assets/Dustin.jpeg";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="xl">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography color="white" component="div" variant="h6">
              Bounties
            </Typography>
          </Link>
        </Container>
        <Link to="/account">
          <IconButton>
            <Avatar src={Dustin} />
          </IconButton>
        </Link>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
