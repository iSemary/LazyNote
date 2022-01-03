import React from "react";
import {Toolbar, Typography, Box, AppBar, Button, IconButton} from "@mui/material";
import {Link} from 'react-router-dom'
import {VscNotebook} from 'react-icons/vsc';
import {CgMenuGridO} from 'react-icons/cg';
import {BiLogInCircle} from 'react-icons/bi'
import {IoIosPersonAdd} from 'react-icons/io'
function Header() {
    return (
        <Box sx={{flexGrow: 0, m: 0}}>
            <AppBar position="static" className="main-backgroundColor-lazy">
                <Toolbar>
                    <Typography variant="h6" component={Link} color="inherit" to={'/'} sx={{flexGrow: 1}}>
                        <VscNotebook/> LazyNote
                    </Typography>
                    <Button component={Link} color="inherit" to={'/login'}><BiLogInCircle></BiLogInCircle>&nbsp;Login</Button>
                    <Button component={Link} color="inherit" to={'/register'}><IoIosPersonAdd></IoIosPersonAdd>&nbsp;Register</Button>
                    <IconButton
                        color="inherit"
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{m: 0}}
                    >
                        <CgMenuGridO/>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;
