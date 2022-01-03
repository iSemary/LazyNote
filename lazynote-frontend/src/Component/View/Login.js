import React from "react";
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
} from "@mui/material";
import {BiLogInCircle} from 'react-icons/bi'

function Login() {
  const FormStyle = {
    margin: "0 auto",
    width: "500px",
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
          <TextField label="E-Mail" variant="outlined" />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <TextField label="Password" variant="outlined" type="password" />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <Button variant="text" className="main-backgroundColor-lazy">
            <BiLogInCircle></BiLogInCircle> &nbsp; Login
          </Button>
        </FormControl>
      </FormGroup>
    </Box>
  );
}

export default Login;
