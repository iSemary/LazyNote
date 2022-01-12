import React, { useState, useEffect, useRef } from "react";
import {
  FormGroup,
  FormLabel,
  FormControlLabel,
  TextField,
  Typography,
  Radio,
  FormControl,
  Box,
  MenuItem,
  Select,
  AppBar,
  Button,
  RadioGroup,
  InputLabel,
  FormHelperText,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import { CgTag } from "react-icons/cg";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import alertify from "alertifyjs";
function AddTag() {
  const navigate = useNavigate();
  const ExistTags = useRef([]);

  const [Tags, setTags] = useState([]);
  const [Tag, setTag] = useState([]);
  const FormStyle = {
    margin: "0 auto",
    width: "500px",
  };

  const HandleInput = (e) => {
    setTag({ ...Tag, [e.target.name]: e.target.value });
  };
  const TagSubmitHandler = (e) => {
    const data = {
      name: Tag.name,
    };
    axios.get("sanctum/csrf-cookie/").then((res) => {
      axios.post("api/tags/store", data).then((res) => {
        if (res.data.status === 200) {
          alertify.success(res.data.message);
          // append new created tag to the list to top
          setTags([res.data.tag,...Tags]);
        } else {
          alertify.error(res.data.message);
        }
      });
    });
  };

  useEffect(() => {
    axios.get("sanctum/csrf-cookie/").then((res) => {
      axios.get("api/tags").then((res) => {
        if (res.data.status === 200) {
          setTags(res.data.tags);
        }
      });
    });
  }, []);

  let TagsSection = null;
  if (Object.keys(Tags).length > 0) {
    TagsSection = Tags.map((Tag, index) => {
      return (
        <ListItem key={Tag.id}>
          <ListItemIcon>
            <CgTag />
          </ListItemIcon>
          <ListItemText primary={Tag.name} secondary={Tag.created_at} />
        </ListItem>
      );
    });
  }

  return (
    <Box component="form" style={FormStyle} autoComplete="true">
      <Typography
        variant="h5"
        className="main-color-lazy"
        sx={{ marginBottom: "5px" }}
      >
        Create a new tag
      </Typography>
      <FormGroup>
        <FormControl sx={{ marginBottom: "7px" }}>
          <TextField
            label="Tag Name"
            variant="outlined"
            name="name"
            onChange={HandleInput}
            defaultValue={Tag.name}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <Button
            variant="text"
            className="main-backgroundColor-lazy"
            onClick={TagSubmitHandler}
          >
            {Tag.error_list === null ? <CircularProgress /> : ""}
            &nbsp; Create New Tag
          </Button>
        </FormControl>
      </FormGroup>

      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        ref={ExistTags}
        id="ExistTags"
      >
        {TagsSection}
      </List>
    </Box>
  );
}

export default AddTag;
