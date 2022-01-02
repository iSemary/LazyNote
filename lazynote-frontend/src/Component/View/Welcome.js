import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
  Avatar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import TestPng from "../../assets/img/default.png";
import { MdOutlineNoteAdd } from "react-icons/md";
function Welcome() {
  const [user, SetUser] = useState(false);
  const navigate = useNavigate();
  function AddNoteBtn() {
    if (user) {
      alert("Create Note");
    } else {
      navigate("/login");
    }
  }

  return (
    <Box component="div" sx={{ margin: 2 }}>
      <Typography variant="h5" style={{ textAlign: "center" }} color="initial">
        Discover helpful public notes from all over the world
      </Typography>
      {/* Public Notes */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 450 }}>
            <CardHeader
              title="Abdelrahman Samir"
              avatar={<Avatar sx={{ backgroundColor: "#F2D06B" }}>A</Avatar>}
            />
            <CardMedia
              component="img"
              height="194"
              image={TestPng}
              alt="Note Image"
            />
            <CardContent>
              <Typography variant="body1" color="initial">
                Hello
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 450 }}>
            <CardHeader
              title="Abdelrahman Samir"
              avatar={<Avatar sx={{ backgroundColor: "#F2D06B" }}>A</Avatar>}
            />
            <CardContent>
              <Typography variant="body1" color="initial">
                Medium Top 10 Programming Languages to Learn in 2020
                [infographic] | by Agile Actors | PlayBook | Medium Visit Images
                may be subject to copyright. Learn More
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 450 }}>
            <CardHeader
              title="Abdelrahman Samir"
              avatar={<Avatar sx={{ backgroundColor: "#F2D06B" }}>A</Avatar>}
            />
            <CardMedia
              component="img"
              height="194"
              image={TestPng}
              alt="Note Image"
            />
            <CardContent>
              <Typography variant="body1" color="initial">
                Hello
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 450 }}>
            <CardHeader
              title="Abdelrahman Samir"
              avatar={<Avatar sx={{ backgroundColor: "#F2D06B" }}>A</Avatar>}
            />

            <CardContent>
              <Typography variant="body1" color="initial">
                Hello
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 450 }}>
            <CardHeader
              title="Abdelrahman Samir"
              avatar={<Avatar sx={{ backgroundColor: "#F2D06B" }}>A</Avatar>}
            />
            <CardMedia
              component="img"
              height="194"
              image={TestPng}
              alt="Note Image"
            />
            <CardContent>
              <Typography variant="body1" color="initial">
                Hello
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* Create Note Button */}
      <IconButton
        aria-label="Add Note"
        size="large"
        style={{ position: "fixed", bottom: "15px", right: "15px" }}
        className="main-backgroundColor-lazy"
        onClick={AddNoteBtn}
      >
        <MdOutlineNoteAdd></MdOutlineNoteAdd>
      </IconButton>
    </Box>
  );
}

export default Welcome;
