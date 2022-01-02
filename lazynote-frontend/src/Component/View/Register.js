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

function Register() {
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
        Registration Form
      </Typography>
      <FormGroup>
        <FormControl sx={{ marginBottom: "7px" }}>
          <TextField autoFocus label="First Name" variant="outlined" />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <TextField label="Last Name" variant="outlined" />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <TextField label="E-Mail" variant="outlined" />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup aria-label="gender" defaultValue="1" name="radio-buttons-group">
                    <FormControlLabel control={<Radio/>} value="1" label="Male"/>
                    <FormControlLabel control={<Radio/>} value="0" label="Female"/>
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <TextField label="Password" variant="outlined" type="password" />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <TextField
            label="Password Confirmation"
            variant="outlined"
            type="password"
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <Button variant="text" className="main-backgroundColor-lazy">
            Create Account
          </Button>
        </FormControl>
      </FormGroup>
    </Box>
  );
}

export default Register;
