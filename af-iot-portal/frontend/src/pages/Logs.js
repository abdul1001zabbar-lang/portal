import React from "react";
import Layout from "../components/Layout";

import {
    Typography,
    Card,
    CardContent,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from "@mui/material";

function Logs() {

    const logs = [
        {
            id: 1,
            timestamp: "30-Jun-2026 10:00",
            eventType: "LOGIN",
            message: "Admin Logged In",
            status: "SUCCESS"
        },
        {
            id: 2,
            timestamp: "30-Jun-2026 10:10",
            eventType: "DEVICE",
            message: "Sensor001 Added",
            status: "SUCCESS"
        },
        {
            id: 3,
            timestamp: "30-Jun-2026 10:15",
            eventType: "ALARM",
            message: "Temperature Alarm Raised",
            status: "CRITICAL"
        }
    ];

    return (
        <Layout>

            <Typography variant="h4" gutterBottom>
                Structured Logging & Metrics
            </Typography>

            <Card>
                <CardContent>

                    <Typography variant="h6">
                        Application Logs
                    </Typography>

                    <br />

                    <Table>

                        <TableHead>
                            <TableRow>

                                <TableCell><b>ID</b></TableCell>
                                <TableCell><b>Timestamp</b></TableCell>
                                <TableCell><b>Event Type</b></TableCell>
                                <TableCell><b>Message</b></TableCell>
                                <TableCell><b>Status</b></TableCell>

                            </TableRow>
                        </TableHead>

                        <TableBody>

                            {logs.map(log => (

                                <TableRow key={log.id}>

                                    <TableCell>{log.id}</TableCell>

                                    <TableCell>
                                        {log.timestamp}
                                    </TableCell>

                                    <TableCell>
                                        {log.eventType}
                                    </TableCell>

                                    <TableCell>
                                        {log.message}
                                    </TableCell>

                                    <TableCell>
                                        {log.status}
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

export default Logs;