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

function SimManagement() {

    const [iccid, setIccid] = useState("");
    const [imsi, setImsi] = useState("");
    const [msisdn, setMsisdn] = useState("");
    const [operator, setOperator] = useState("");

    const [sims, setSims] = useState([
        {
            id: 1,
            iccid: "8991101200003204512",
            imsi: "404450123456789",
            msisdn: "9876543210",
            operator: "Airtel",
            status: "Active"
        },
        {
            id: 2,
            iccid: "8991101200003204513",
            imsi: "404450123456790",
            msisdn: "9876543211",
            operator: "Jio",
            status: "Inactive"
        }
    ]);

    const addSim = () => {

        if (
            !iccid ||
            !imsi ||
            !msisdn ||
            !operator
        ) {
            alert("Please fill all fields");
            return;
        }

        const newSim = {
            id:
                sims.length > 0
                    ? Math.max(...sims.map(s => s.id)) + 1
                    : 1,
            iccid,
            imsi,
            msisdn,
            operator,
            status: "Active"
        };

        setSims([...sims, newSim]);

        setIccid("");
        setImsi("");
        setMsisdn("");
        setOperator("");
    };

    const deleteSim = (id) => {

        setSims(
            sims.filter(sim => sim.id !== id)
        );
    };

    const toggleStatus = (id) => {

        setSims(
            sims.map(sim =>
                sim.id === id
                    ? {
                        ...sim,
                        status:
                            sim.status === "Active"
                                ? "Inactive"
                                : "Active"
                    }
                    : sim
            )
        );
    };

    return (
        <Layout>

            <Typography
                variant="h4"
                gutterBottom
            >
                IoT Device SIM Management
            </Typography>

            <Typography
                variant="subtitle1"
                color="primary"
            >
                SIM Inventory • Subscription Management
            </Typography>

            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 4 }}
            >
                Manage SIM cards used by IoT devices.
            </Typography>

            <Card sx={{ mb: 3 }}>
                <CardContent>

                    <Typography variant="h6">
                        Add New SIM
                    </Typography>

                    <br />

                    <Grid container spacing={2}>

                        <Grid item xs={12} md={3}>
                            <TextField
                                fullWidth
                                label="ICCID"
                                value={iccid}
                                onChange={(e) =>
                                    setIccid(e.target.value)
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={3}>
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
                                label="MSISDN"
                                value={msisdn}
                                onChange={(e) =>
                                    setMsisdn(e.target.value)
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <TextField
                                fullWidth
                                label="Operator"
                                value={operator}
                                onChange={(e) =>
                                    setOperator(e.target.value)
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
                        SIM Inventory
                    </Typography>

                    <br />

                    <Table>

                        <TableHead>

                            <TableRow>

                                <TableCell>
                                    <b>ID</b>
                                </TableCell>

                                <TableCell>
                                    <b>ICCID</b>
                                </TableCell>

                                <TableCell>
                                    <b>IMSI</b>
                                </TableCell>

                                <TableCell>
                                    <b>MSISDN</b>
                                </TableCell>

                                <TableCell>
                                    <b>Operator</b>
                                </TableCell>

                                <TableCell>
                                    <b>Status</b>
                                </TableCell>

                                <TableCell>
                                    <b>Actions</b>
                                </TableCell>

                            </TableRow>

                        </TableHead>

                        <TableBody>

                            {sims.map((sim) => (

                                <TableRow key={sim.id}>

                                    <TableCell>
                                        {sim.id}
                                    </TableCell>

                                    <TableCell>
                                        {sim.iccid}
                                    </TableCell>

                                    <TableCell>
                                        {sim.imsi}
                                    </TableCell>

                                    <TableCell>
                                        {sim.msisdn}
                                    </TableCell>

                                    <TableCell>
                                        {sim.operator}
                                    </TableCell>

                                    <TableCell>
                                        {sim.status}
                                    </TableCell>

                                    <TableCell>

                                        <Button
                                            size="small"
                                            color="warning"
                                            variant="contained"
                                            sx={{ mr: 1 }}
                                            onClick={() =>
                                                toggleStatus(sim.id)
                                            }
                                        >
                                            Status
                                        </Button>

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