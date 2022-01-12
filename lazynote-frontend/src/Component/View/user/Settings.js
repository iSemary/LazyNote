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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import alertify from "alertifyjs";
function Settings() {
  const navigate = useNavigate();

  const LogOutAllHandler = (e) => {
    axios.get("/sanctum/csrf-cookie").then((res) => {
      axios.post("/api/logout/all").then((res) => {
        if (res.data.status === 200) {
          localStorage.removeItem("auth_token");
          navigate("/");
        }
      });
    });
  };

  return (
    <Box component="form" autoComplete="true">
      <Typography
        variant="h5"
        className="main-color-lazy"
        sx={{ marginBottom: "5px" }}
      >
        Settings
      </Typography>
      <Button variant="text" color="inherit" onClick={LogOutAllHandler}>
        Logout from all devices
      </Button>
    </Box>
  );
}

export default Settings;
