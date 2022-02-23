import {
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";

const AuthForm = () => {
  //Ref
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  //State
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCsx8_ga64jWdLaQouU5XQWmFd_HZPIUwU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCsx8_ga64jWdLaQouU5XQWmFd_HZPIUwU";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentification Failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Stack margin={(3, 5, 0, 5)}>
      <Card>
        <CardContent>
          <Typography variant="h5">{isLogin ? "Login" : "Sign Up"}</Typography>
          <form onSubmit={submitHandler}>
            <TextField
              label="Email"
              inputRef={emailInputRef}
              type="email"
              id="email"
              required
            />
            <TextField
              label="Password"
              inputRef={passwordInputRef}
              type="password"
              id="password"
              required
            />
            <Container>
              {!isLoading && (
                <Button>{isLogin ? "Login" : "Create Account"}</Button>
              )}
              {isLoading && <p>Loading...</p>}
              <Button type="button" onClick={switchAuthModeHandler}>
                {isLogin ? "Create new account" : "Login with existing account"}
              </Button>
            </Container>
          </form>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default AuthForm;
