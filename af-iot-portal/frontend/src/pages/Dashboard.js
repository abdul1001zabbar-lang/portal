import React from "react";
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

function Dashboard() {
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
                                100
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
                                82
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
                                18
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
                                5
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

                    <Typography>
                        ✅ Sensor001 Registered
                    </Typography>

                    <Typography>
                        ✅ Camera001 Location Updated
                    </Typography>

                    <Typography>
                        ✅ Alarm Generated
                    </Typography>

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
                                    <b>Device ID</b>
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

                            <TableRow>
                                <TableCell>
                                    Sensor001
                                </TableCell>
                                <TableCell>
                                    Online
                                </TableCell>
                                <TableCell>
                                    Hyderabad
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    Camera001
                                </TableCell>
                                <TableCell>
                                    Offline
                                </TableCell>
                                <TableCell>
                                    Mumbai
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    Gateway001
                                </TableCell>
                                <TableCell>
                                    Online
                                </TableCell>
                                <TableCell>
                                    Bangalore
                                </TableCell>
                            </TableRow>

                        </TableBody>

                    </Table>

                </CardContent>
            </Card>

        </Layout>
    );
}

export default Dashboard;