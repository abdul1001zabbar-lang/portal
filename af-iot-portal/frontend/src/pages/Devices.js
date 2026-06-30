import React, { useState } from "react";

import Layout from "../components/Layout";

import {
    Typography,
    Card,
    CardContent,
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Grid
} from "@mui/material";

function Devices() {

    const [deviceName, setDeviceName] = useState("");
    const [deviceType, setDeviceType] = useState("");
    const [imei, setImei] = useState("");
    const [location, setLocation] = useState("");

    const [devices, setDevices] = useState([
        {
            id: 1,
            name: "Sensor001",
            type: "Sensor",
            imei: "356789123456789",
            status: "Online",
            location: "Hyderabad"
        },
        {
            id: 2,
            name: "Camera001",
            type: "Camera",
            imei: "356789123456790",
            status: "Offline",
            location: "Mumbai"
        },
        {
            id: 3,
            name: "Gateway001",
            type: "Gateway",
            imei: "356789123456791",
            status: "Online",
            location: "Bangalore"
        }
    ]);

    const addDevice = () => {

        if (
            !deviceName ||
            !deviceType ||
            !imei ||
            !location
        ) {
            alert("Please fill all fields");
            return;
        }

        const nextId =
            devices.length > 0
                ? Math.max(...devices.map(d => d.id)) + 1
                : 1;

        const newDevice = {
            id: nextId,
            name: deviceName,
            type: deviceType,
            imei: imei,
            status: "Online",
            location: location
        };

        setDevices([...devices, newDevice]);

        setDeviceName("");
        setDeviceType("");
        setImei("");
        setLocation("");
    };

    const deleteDevice = (id) => {

        setDevices(
            devices.filter(
                device => device.id !== id
            )
        );
    };

    const toggleStatus = (id) => {

        setDevices(
            devices.map(device =>
                device.id === id
                    ? {
                        ...device,
                        status:
                            device.status === "Online"
                                ? "Offline"
                                : "Online"
                    }
                    : device
            )
        );
    };

    return (
        <Layout>

            <Typography variant="h4" gutterBottom>
                Device Management
            </Typography>

            <Card sx={{ mb: 3 }}>
                <CardContent>

                    <Typography variant="h6">
                        Add New Device
                    </Typography>

                    <br />

                    <Grid container spacing={2}>

                        <Grid item xs={12} md={3}>
                            <TextField
                                fullWidth
                                label="Device Name"
                                value={deviceName}
                                onChange={(e) =>
                                    setDeviceName(e.target.value)
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <TextField
                                fullWidth
                                label="Type"
                                value={deviceType}
                                onChange={(e) =>
                                    setDeviceType(e.target.value)
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField
                                fullWidth
                                label="IMEI"
                                value={imei}
                                onChange={(e) =>
                                    setImei(e.target.value)
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <TextField
                                fullWidth
                                label="Location"
                                value={location}
                                onChange={(e) =>
                                    setLocation(e.target.value)
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ height: "56px" }}
                                onClick={addDevice}
                            >
                                Add Device
                            </Button>
                        </Grid>

                    </Grid>

                </CardContent>
            </Card>

            <Card>
                <CardContent>

                    <Typography variant="h6">
                        Device Inventory
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

                                <TableCell>
                                    <b>Actions</b>
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

                                    <TableCell>

                                        <Button
                                            size="small"
                                            color="warning"
                                            variant="contained"
                                            sx={{ mr: 1 }}
                                            onClick={() =>
                                                toggleStatus(device.id)
                                            }
                                        >
                                            Edit
                                        </Button>

                                        <Button
                                            size="small"
                                            color="error"
                                            variant="contained"
                                            onClick={() =>
                                                deleteDevice(device.id)
                                            }
                                        >
                                            Delete
                                        </Button>

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

export default Devices;