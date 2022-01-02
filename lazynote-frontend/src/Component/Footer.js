import React from "react";
import {Toolbar, Typography, Box, AppBar, List, ListItem,TextField, Button, IconButton, Grid} from "@mui/material";

function Footer() {
    return (
        <Box>
            <AppBar position="static" className="main-backgroundColor-lazy">
                <Grid container spacing={2} sx={{p: 2}}>
                    <Grid item xs={4}>
                        <List>
                            <ListItem>Privacy Policy</ListItem>
                            <ListItem>Terms</ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={4}>
                        <List>
                            <ListItem>About LazyNote</ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={4}>
                        <div>
                            <TextField id="standard-basic" label="First Name" variant="standard" />
                            <TextField id="standard-basic" label="Last Name" variant="standard" />
                            <TextField id="standard-basic" label="E-mail" variant="standard" />
                            <TextField id="standard-basic" label="Message" variant="standard" />
                            <Button color="inherit">Send</Button>
                        </div>
                    </Grid>
                </Grid>
            </AppBar>
        </Box>

    )
}

export default Footer;
