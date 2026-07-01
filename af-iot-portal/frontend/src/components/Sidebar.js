import React from "react";

import {
    Drawer,
    Toolbar,
    List,
    ListItemButton,
    ListItemText,
    Divider,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
                    <ListItemText
                        primary="IoT Device DB Management"
                    />
                </ListItemButton>

                {/* SIM Management Menu */}

                <Accordion
                    sx={{
                        backgroundColor: "#263238",
                        color: "white",
                        boxShadow: "none"
                    }}
                >

                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon
                                sx={{ color: "white" }}
                            />
                        }
                    >
                        <ListItemText
                            primary="SIM Management"
                        />
                    </AccordionSummary>

                    <AccordionDetails>

                        <ListItemButton>
                            <ListItemText
                                primary="Install SIM"
                            />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemText
                                primary="Access SIM"
                            />
                        </ListItemButton>

                        <ListItemButton
                            component={Link}
                            to="/sim"
                        >
                            <ListItemText
                                primary="Create New SIM"
                            />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemText
                                primary="Configure SIM"
                            />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemText
                                primary="Available SIMs"
                            />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemText
                                primary="Reserve SIM"
                            />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemText
                                primary="Manage Features"
                            />
                        </ListItemButton>

                    </AccordionDetails>

                </Accordion>

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
                    <ListItemText
                        primary="Structured Logging & Metrics"
                    />
                </ListItemButton>

                <Divider />

                {/* Analytics */}

                <ListItemButton>
                    <ListItemText primary="Analytics" />
                </ListItemButton>

                <Divider />

                {/* Admin */}

                {isAdmin && (
                    <>
                        <ListItemButton
                            component={Link}
                            to="/users"
                        >
                            <ListItemText
                                primary="User & Access Management"
                            />
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
                    onClick={() =>
                        localStorage.removeItem(
                            "loggedInUser"
                        )
                    }
                >
                    <ListItemText primary="Logout" />
                </ListItemButton>

            </List>

        </Drawer>
    );
}

export default Sidebar;