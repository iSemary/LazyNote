import React, { useState, useEffect } from "react";
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
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import alertify from "alertifyjs";
function AddNote() {
  const navigate = useNavigate();
  const [Tags, setTags] = useState([]);
  const [Note, setNote] = useState({
    title: "",
    tag_id: "",
    body: "",
    error_list: [],
  });
  const FormStyle = {
    margin: "0 auto",
    width: "500px",
  };

  const HandleInput = (e) => {
    setNote({ ...Note, [e.target.name]: e.target.value });
  };
  const NoteSubmitHandler = (e) => {
    const data = {
      title: Note.title,
      tag_id: Note.tag_id,
      body: Note.body,
    };
    axios.get("sanctum/csrf-cookie/").then((res) => {
      axios.post("api/notes/store", data).then((res) => {
        if (res.data.status === 200) {
          alertify.success(res.data.message);

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
        <MenuItem value={Tag.id} key={Tag.id}>
          {Tag.name}
        </MenuItem>
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
        Create a new note
      </Typography>
      <FormGroup>
        <FormControl sx={{ marginBottom: "7px" }}>
          <TextField
            label="Note Title"
            variant="outlined"
            name="title"
            onChange={HandleInput}
            defaultValue={Note.title}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <InputLabel id="tagLabel">Tag</InputLabel>
          <Select
            label="Tag"
            labelId="tagLabel"
            id="tagLabel"
            defaultValue={Note.tag_id}
            value={Note.tag_id}
            name="tag_id"
            onChange={HandleInput}
          >
            {TagsSection}
          </Select>
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <TextField
            multiline
            placeholder="What, where, when ..."
            onChange={HandleInput}
            name="body"
            required
            rows={5}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <Button
            variant="text"
            className="main-backgroundColor-lazy"
            onClick={NoteSubmitHandler}
          >
            {Note.error_list === null ? <CircularProgress /> : ""}
            &nbsp; Create New Note
          </Button>
        </FormControl>
      </FormGroup>
    </Box>
  );
}

export default AddNote;
