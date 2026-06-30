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

const drawerWidth = 260;

function Sidebar() {

    const loggedInUser = JSON.parse(
        localStorage.getItem("loggedInUser")
    );

    const isAdmin =
        loggedInUser &&
        loggedInUser.role === "ADMIN";

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,

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

                {/* Dashboard */}

                <ListItemButton
                    component={Link}
                    to="/dashboard"
                >
                    <ListItemText primary="Dashboard" />
                </ListItemButton>

                <Divider />

                {/* Device Management */}

                <ListItemButton
                    component={Link}
                    to="/devices"
                >
                    <ListItemText primary="IoT Device DB Management" />
                </ListItemButton>

                <ListItemButton
                    component={Link}
                    to="/sim"
                >
                    <ListItemText primary="IoT Device SIM Management" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemText primary="Device Lifecycle" />
                </ListItemButton>

                <Divider />

                {/* NEF Services */}

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

                {/* Operations */}

                <ListItemButton>
                    <ListItemText primary="Events" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemText primary="Alarms" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemText primary="Notifications" />
                </ListItemButton>

                <ListItemButton
                    component={Link}
                    to="/logs"
                >
                    <ListItemText primary="Structured Logging & Metrics" />
                </ListItemButton>

                <Divider />

                {/* Analytics */}

                <ListItemButton>
                    <ListItemText primary="Analytics" />
                </ListItemButton>

                <Divider />

                {/* Admin Only */}

                {isAdmin && (
                    <>
                        <ListItemButton
                            component={Link}
                            to="/users"
                        >
                            <ListItemText primary="User & Access Management" />
                        </ListItemButton>

                        <Divider />
                    </>
                )}

                {/* Settings */}

                <ListItemButton>
                    <ListItemText primary="Settings" />
                </ListItemButton>

                <Divider />

                {/* Logout */}

                <ListItemButton
                    component={Link}
                    to="/"
                    onClick={() => {
                        localStorage.removeItem(
                            "loggedInUser"
                        );
                    }}
                >
                    <ListItemText primary="Logout" />
                </ListItemButton>

            </List>

        </Drawer>
    );
}

export default Sidebar;