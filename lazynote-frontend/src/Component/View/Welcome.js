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
  AppBar,
  Grid,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Button,
  LinearProgress,
  RadioGroup,
  FormHelperText,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import alertify from "alertifyjs";
function Home() {
  const navigate = useNavigate();
  const [Notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("sanctum/csrf-cookie/").then((res) => {
      axios.get("api/notes/public").then((res) => {
        if (res.data.status === 200) {
          setNotes(res.data.notes);
        }
      });
    });
  }, []);

  let NotesSection = "";
  if (Object.keys(Notes).length > 0) {
    NotesSection = Notes.map((Note, index) => {
      return (
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 450 }}>
            <CardHeader
              title={Note.user_id}
              subheader={Note.created_at}
              avatar={<Avatar sx={{ backgroundColor: "#F2D06B" }}>A</Avatar>}
            />
            <CardContent>
              <Typography variant="h5" color="initial">
                {Note.title}
              </Typography>
              <Typography variant="p" color="initial">
                {Note.body}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    });
  } else {
    NotesSection = (
      <Grid item sx={{ margin: "0 auto" }}>
        <Card>
          <LinearProgress color="success" />
          Loading... Please wait.
        </Card>
      </Grid>
    );
  }

  return (
    <Box component="div" sx={{ margin: 2 }}>
      <Typography variant="body1" color="initial">
        Discover helpful public notes from all over the world
      </Typography>
      <Grid container spacing={2}>
        {NotesSection}
      </Grid>
    </Box>
  );
}

export default Home;
