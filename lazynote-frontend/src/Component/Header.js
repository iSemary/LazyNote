import React from "react";
import {
  Toolbar,
  Typography,
  Box,
  AppBar,
  Button,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { VscNotebook, VscSettings } from "react-icons/vsc";
import { CgMenuGridO, CgTag } from "react-icons/cg";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { IoIosPersonAdd } from "react-icons/io";
import { FaMugHot } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdOutlineNoteAdd  } from "react-icons/md";
import alertify from "alertifyjs";
import axios from "axios";
function Header(User) {
  const navigate = useNavigate();

  const LogOutHandler = (e) => {
    e.preventDefault();
    axios.post("/api/logout").then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem("auth_token");
        navigate("/");
      } else {
        alertify.error("Something went wrong!");
      }
    });
  };
  function AddNoteBtn() {
    if (User.User.loggedIn) {
      navigate("/notes/add");
    } else {
      navigate("/login");
    }
  }

  return (
    <Box sx={{ flexGrow: 0, m: 0 }}>
      <AppBar position="static" className="main-backgroundColor-lazy">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            color="inherit"
            to={"/"}
            sx={{ flexGrow: 1,textDecoration:'none' }}
          >
            <VscNotebook /> LazyNote
          </Typography>
          <IconButton
            component={Link}
            to={"/"}
            color="inherit"
            edge="start"
            aria-label="menu"
            sx={{ m: 0 }}
          >
            <FaMugHot />
          </IconButton>
          {User.User.loggedIn ? (
            <>
              <IconButton
                component={Link}
                to={"/home"}
                color="inherit"
                edge="start"
                aria-label="menu"
                sx={{ m: 0 }}
              >
                <IoHome />
              </IconButton>
              <Button component={Link} color="inherit" to={"/tags/add"}>
                <CgTag></CgTag>&nbsp;Add Tags
              </Button>
              <Button component={Link} color="inherit" to={"/settings"}>
                <VscSettings></VscSettings>&nbsp;Settings
              </Button>
              <Button color="inherit" onClick={LogOutHandler}>
                <BiLogOutCircle></BiLogOutCircle>&nbsp;Logout
              </Button>
            </>
          ) : (
            <>
              <Button component={Link} color="inherit" to={"/login"}>
                <BiLogInCircle></BiLogInCircle>&nbsp;Login
              </Button>
              <Button component={Link} color="inherit" to={"/register"}>
                <IoIosPersonAdd></IoIosPersonAdd>&nbsp;Register
              </Button>
            </>
          )}

          <IconButton
            color="inherit"
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ m: 0 }}
          >
            <CgMenuGridO />
          </IconButton>
        </Toolbar>
      </AppBar>
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

export default Header;
