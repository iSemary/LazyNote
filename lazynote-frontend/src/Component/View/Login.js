import React, { useState } from "react";
import {
  FormGroup,
  FormLabel,
  FormControlLabel,
  TextField,
  Typography,
  Radio,
  FormControl,
  Box,
  AppBar,
  Button,
  RadioGroup,
  FormHelperText,
  CircularProgress,
} from "@mui/material";
import { BiLogInCircle } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import alertify from "alertifyjs";
function Login() {
  const navigate = useNavigate();
  const FormStyle = {
    margin: "0 auto",
    width: "500px",
  };

  const [Login, setLogin] = useState({
    email: "",
    password: "",
    error_list: [],
  });
  const HandleInput = (e) => {
    setLogin({ ...Login, [e.target.name]: e.target.value });
  };

  const LoginHandler = (e) => {
    e.preventDefault();
    setLogin({ ...Login, error_list: null });

    const data = {
      email: Login.email,
      password: Login.password,
    };
    
    axios.get("/sanctum/csrf-cookie").then((res) => {
      axios.post("/api/login", data).then((res) => {
        if (res.data.status === 200) {
          alertify.success(res.data.message);
          setLogin({ ...Login, error_list: [] });
          localStorage.setItem("auth_token", res.data.token);
          navigate("/home");
        } else {
          setLogin({
            ...Login,
            error_list: res.data.message,
          });
          alertify.error(res.data.message);
        }
      });
    });
  };

  return (
    <Box component="form" style={FormStyle} autoComplete="true">
      <Typography
        variant="h5"
        className="main-color-lazy"
        sx={{ marginBottom: "5px" }}
      >
        Login via lazynote
      </Typography>
      <FormGroup>
        <FormControl sx={{ marginBottom: "7px" }}>
          <TextField
            label="E-Mail"
            variant="outlined"
            name="email"
            onChange={HandleInput}
            defaultValue={Login.email}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            onChange={HandleInput}
            defaultValue={Login.password}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <Button
            variant="text"
            className="main-backgroundColor-lazy"
            onClick={LoginHandler}
          >
            {Login.error_list === null ? (
              <CircularProgress />
            ) : (
              <BiLogInCircle></BiLogInCircle>
            )}
            &nbsp; Login
          </Button>
        </FormControl>
      </FormGroup>
    </Box>
  );
}

export default Login;
