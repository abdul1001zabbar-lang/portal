import React from "react";

import {
    Drawer,
    Toolbar,
    List,
    ListItemButton,
    ListItemText,
    Divider
} from "@mui/material";

import { Link } from "react-router-dom";

const drawerWidth = 240;

function Sidebar() {

    return (

        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,

                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    backgroundColor: "#263238",
                    color: "white"
                }
            }}
        >

            <Toolbar />

            <List>

                <ListItemButton
                    component={Link}
                    to="/dashboard"
                >
                    <ListItemText primary="Dashboard" />
                </ListItemButton>

                <Divider />

                <ListItemButton
                    component={Link}
                    to="/devices"
                >
                    <ListItemText primary="Devices" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemText primary="SIM Inventory" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemText primary="Device Lifecycle" />
                </ListItemButton>

                <Divider />

                <ListItemButton>
                    <ListItemText primary="Event Exposure" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemText primary="Location Monitoring" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemText primary="QoS Management" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemText primary="Traffic Influence" />
                </ListItemButton>

                <Divider />

                <ListItemButton>
                    <ListItemText primary="Events" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemText primary="Alarms" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemText primary="Analytics" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemText primary="Settings" />
                </ListItemButton>

                <Divider />

                <ListItemButton
                    component={Link}
                    to="/"
                >
                    <ListItemText primary="Logout" />
                </ListItemButton>

            </List>

        </Drawer>
    );
}

export default Sidebar;