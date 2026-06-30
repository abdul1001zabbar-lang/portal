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
    Grid,
    MenuItem,
    Alert
} from "@mui/material";

import {
    getUsers,
    saveUsers
} from "../data/userStorage";

function Users() {

    const loggedInUser =
        JSON.parse(
            localStorage.getItem("loggedInUser")
        );

    const isAdmin =
        loggedInUser &&
        loggedInUser.role === "ADMIN";

    const [username, setUsername] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [role, setRole] =
        useState("");

    const [users, setUsers] =
        useState(getUsers());

    if (!isAdmin) {
        return (
            <Layout>

                <Alert severity="error">
                    Access Denied. Only ADMIN can manage users.
                </Alert>

            </Layout>
        );
    }

    const updateUsers = (updatedUsers) => {
        setUsers(updatedUsers);
        saveUsers(updatedUsers);
    };

    const addUser = () => {

        if (!username || !password || !role) {
            alert("Please fill all fields");
            return;
        }

        const usernameExists =
            users.some(
                user => user.username === username
            );

        if (usernameExists) {
            alert("Username already exists");
            return;
        }

        const nextId =
            users.length > 0
                ? Math.max(...users.map(user => user.id)) + 1
                : 1;

        const newUser = {
            id: nextId,
            username: username,
            password: password,
            role: role
        };

        const updatedUsers = [
            ...users,
            newUser
        ];

        updateUsers(updatedUsers);

        setUsername("");
        setPassword("");
        setRole("");
    };

    const deleteUser = (id) => {

        const userToDelete =
            users.find(user => user.id === id);

        if (
            userToDelete &&
            userToDelete.username === "admin"
        ) {
            alert("Default admin user cannot be deleted");
            return;
        }

        const updatedUsers =
            users.filter(
                user => user.id !== id
            );

        updateUsers(updatedUsers);
    };

    return (
        <Layout>

            <Typography variant="h4" gutterBottom>
                User & Access Management
            </Typography>

            <Card sx={{ mb: 3 }}>
                <CardContent>

                    <Typography variant="h6">
                        Add New User
                    </Typography>

                    <br />

                    <Grid container spacing={2}>

                        <Grid item xs={12} md={3}>
                            <TextField
                                fullWidth
                                label="Username"
                                value={username}
                                onChange={(e) =>
                                    setUsername(e.target.value)
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField
                                fullWidth
                                type="password"
                                label="Password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField
                                fullWidth
                                select
                                label="Role"
                                value={role}
                                onChange={(e) =>
                                    setRole(e.target.value)
                                }
                            >
                                <MenuItem value="ADMIN">
                                    ADMIN
                                </MenuItem>

                                <MenuItem value="OPERATOR">
                                    OPERATOR
                                </MenuItem>

                                <MenuItem value="VIEWER">
                                    VIEWER
                                </MenuItem>
                            </TextField>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ height: "56px" }}
                                onClick={addUser}
                            >
                                Add User
                            </Button>
                        </Grid>

                    </Grid>

                </CardContent>
            </Card>

            <Card>
                <CardContent>

                    <Typography variant="h6">
                        User List
                    </Typography>

                    <br />

                    <Table>

                        <TableHead>
                            <TableRow>

                                <TableCell>
                                    <b>ID</b>
                                </TableCell>

                                <TableCell>
                                    <b>Username</b>
                                </TableCell>

                                <TableCell>
                                    <b>Password</b>
                                </TableCell>

                                <TableCell>
                                    <b>Role</b>
                                </TableCell>

                                <TableCell>
                                    <b>Actions</b>
                                </TableCell>

                            </TableRow>
                        </TableHead>

                        <TableBody>

                            {users.map((user) => (

                                <TableRow key={user.id}>

                                    <TableCell>
                                        {user.id}
                                    </TableCell>

                                    <TableCell>
                                        {user.username}
                                    </TableCell>

                                    <TableCell>
                                        ********
                                    </TableCell>

                                    <TableCell>
                                        {user.role}
                                    </TableCell>

                                    <TableCell>

                                        <Button
                                            variant="contained"
                                            color="error"
                                            size="small"
                                            onClick={() =>
                                                deleteUser(user.id)
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

export default Users;