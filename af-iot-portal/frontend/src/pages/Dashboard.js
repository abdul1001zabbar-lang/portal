import React, { useEffect, useState } from "react";

import Layout from "../components/Layout";

import {
    Typography,
    Grid,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@mui/material";

import { getDevices } from "../data/deviceStorage";

function Dashboard() {

    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const storedDevices = getDevices();
        setDevices(storedDevices);
    }, []);

    const totalDevices = devices.length;

    const onlineDevices =
        devices.filter(
            device => device.status === "Online"
        ).length;

    const offlineDevices =
        devices.filter(
            device => device.status === "Offline"
        ).length;

    const activeAlarms = 5;

    return (
        <Layout>

            <Typography variant="h4">
                AF IoT Dashboard
            </Typography>

            <br />

            <Grid container spacing={3}>

                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                Total Devices
                            </Typography>

                            <Typography variant="h3">
                                {totalDevices}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                Online
                            </Typography>

                            <Typography variant="h3">
                                {onlineDevices}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                Offline
                            </Typography>

                            <Typography variant="h3">
                                {offlineDevices}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                Active Alarms
                            </Typography>

                            <Typography variant="h3">
                                {activeAlarms}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>

            <br />

            <Card>
                <CardContent>

                    <Typography variant="h5">
                        Recent Events
                    </Typography>

                    <br />

                    {devices.length > 0 ? (
                        devices.slice(-3).map((device) => (
                            <Typography key={device.id}>
                                ✅ {device.name} Registered / Updated
                            </Typography>
                        ))
                    ) : (
                        <Typography>
                            No recent events
                        </Typography>
                    )}

                </CardContent>
            </Card>

            <br />

            <Card>
                <CardContent>

                    <Typography variant="h5">
                        Device List
                    </Typography>

                    <br />

                    <Table>

                        <TableHead>
                            <TableRow>

                                <TableCell>
                                    <b>ID</b>
                                </TableCell>

                                <TableCell>
                                    <b>Device Name</b>
                                </TableCell>

                                <TableCell>
                                    <b>Type</b>
                                </TableCell>

                                <TableCell>
                                    <b>IMEI</b>
                                </TableCell>

                                <TableCell>
                                    <b>Status</b>
                                </TableCell>

                                <TableCell>
                                    <b>Location</b>
                                </TableCell>

                            </TableRow>
                        </TableHead>

                        <TableBody>

                            {devices.map((device) => (

                                <TableRow key={device.id}>

                                    <TableCell>
                                        {device.id}
                                    </TableCell>

                                    <TableCell>
                                        {device.name}
                                    </TableCell>

                                    <TableCell>
                                        {device.type}
                                    </TableCell>

                                    <TableCell>
                                        {device.imei}
                                    </TableCell>

                                    <TableCell>
                                        {device.status}
                                    </TableCell>

                                    <TableCell>
                                        {device.location}
                                    </TableCell>

                                </TableRow>

                            ))}

                        </TableBody>

                    </Table>

                </CardContent>
            </Card>

        </Layout>
    );
}

export default Dashboard;