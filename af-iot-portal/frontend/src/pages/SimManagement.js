import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";

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

function SimManagement() {

    const [iccid, setIccid] = useState("");
    const [imsi, setImsi] = useState("");
    const [msisdn, setMsisdn] = useState("");
    const [operator, setOperator] = useState("");
    const [assignedDevice, setAssignedDevice] = useState("");

    const [sims, setSims] = useState([]);

    // ✅ Load SIMs from backend
    useEffect(() => {

        axios
            .get("http://localhost:8080/sims")
            .then((res) => {
                setSims(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    // ✅ Add SIM
    const addSim = () => {

        if (!iccid || !imsi || !assignedDevice) {
            alert("Please fill required fields");
            return;
        }

        axios
            .post("http://localhost:8080/sims", {
                simNumber: iccid,
                imsi: imsi,
                status: "Active",
                deviceName: assignedDevice
            })
            .then((res) => {

                setSims([
                    ...sims,
                    res.data
                ]);

                setIccid("");
                setImsi("");
                setMsisdn("");
                setOperator("");
                setAssignedDevice("");

            })
            .catch((err) => {
                console.log(err);
            });

    };

    // ✅ Delete SIM
    const deleteSim = (id) => {

        axios
            .delete(`http://localhost:8080/sims/${id}`)
            .then(() => {

                setSims(
                    sims.filter(
                        sim => sim.id !== id
                    )
                );

            })
            .catch((err) => {
                console.log(err);
            });

    };

    return (

        <Layout>

            <Typography variant="h4" gutterBottom>
                IoT Device SIM Management
            </Typography>

            <Card sx={{ mb: 3 }}>
                <CardContent>

                    <Typography variant="h6">
                        Register New SIM
                    </Typography>

                    <br />

                    <Grid container spacing={2}>

                        <Grid item xs={12} md={2}>
                            <TextField
                                fullWidth
                                label="ICCID"
                                value={iccid}
                                onChange={(e) =>
                                    setIccid(e.target.value)
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <TextField
                                fullWidth
                                label="IMSI"
                                value={imsi}
                                onChange={(e) =>
                                    setImsi(e.target.value)
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <TextField
                                fullWidth
                                label="MSISDN (Optional)"
                                value={msisdn}
                                onChange={(e) =>
                                    setMsisdn(e.target.value)
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <TextField
                                fullWidth
                                label="Operator (Optional)"
                                value={operator}
                                onChange={(e) =>
                                    setOperator(e.target.value)
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <TextField
                                fullWidth
                                label="Assigned Device"
                                value={assignedDevice}
                                onChange={(e) =>
                                    setAssignedDevice(e.target.value)
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ height: "56px" }}
                                onClick={addSim}
                            >
                                Add SIM
                            </Button>
                        </Grid>

                    </Grid>

                </CardContent>
            </Card>

            <Card>
                <CardContent>

                    <Typography variant="h6">
                        SIM Inventory Database
                    </Typography>

                    <br />

                    <Table>

                        <TableHead>
                            <TableRow>
                                <TableCell><b>ID</b></TableCell>
                                <TableCell><b>SIM Number</b></TableCell>
                                <TableCell><b>IMSI</b></TableCell>
                                <TableCell><b>Status</b></TableCell>
                                <TableCell><b>Assigned Device</b></TableCell>
                                <TableCell><b>Actions</b></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>

                            {sims.map((sim) => (

                                <TableRow key={sim.id}>

                                    <TableCell>{sim.id}</TableCell>
                                    <TableCell>{sim.simNumber}</TableCell>
                                    <TableCell>{sim.imsi}</TableCell>
                                    <TableCell>{sim.status}</TableCell>
                                    <TableCell>{sim.deviceName}</TableCell>

                                    <TableCell>

                                        <Button
                                            size="small"
                                            color="error"
                                            variant="contained"
                                            onClick={() =>
                                                deleteSim(sim.id)
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

export default SimManagement;