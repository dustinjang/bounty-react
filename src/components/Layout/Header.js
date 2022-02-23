import React, { useContext } from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Dustin from "../../assets/Dustin.jpeg";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AuthContext from "../../store/auth-context";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // redirect user;
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="xl">
          {isLoggedIn && (
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography color="white" component="div" variant="h6">
                Bounties
              </Typography>
            </Link>
          )}
        </Container>
        {isLoggedIn && (
          <Link to="/account">
            <IconButton>
              <Avatar src={Dustin} />
            </IconButton>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/welcome">
            <Button>Login</Button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/welcome">
            <Button onClick={logoutHandler}>Logout</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
