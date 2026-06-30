import React from "react";

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
    TextField,
    Box
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
    return (
        <AppBar position="fixed">

            <Toolbar>

                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                >
                    AF IoT Portal
                </Typography>

                <Box sx={{ mr: 2 }}>

                    <TextField
                        size="small"
                        placeholder="Search"
                        variant="outlined"
                        sx={{
                            backgroundColor: "white",
                            borderRadius: 1
                        }}
                    />

                </Box>

                <IconButton color="inherit">

                    <Badge
                        badgeContent={4}
                        color="error"
                    >
                        <NotificationsIcon />
                    </Badge>

                </IconButton>

                <IconButton color="inherit">
                    <AccountCircleIcon />
                </IconButton>

            </Toolbar>

        </AppBar>
    );
}

export default Navbar;