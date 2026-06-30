import React, { useState, useEffect } from "react";

import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    FormControlLabel,
    Checkbox
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { getUsers } from "../data/userStorage";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {

        const rememberedUser =
            localStorage.getItem("rememberedUsername");

        if (rememberedUser) {
            setUsername(rememberedUser);
            setRememberMe(true);
        }

    }, []);

    const login = () => {

        const users = getUsers();

        const validUser = users.find(
            user =>
                user.username === username &&
                user.password === password
        );

        if (validUser) {

            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(validUser)
            );

            if (rememberMe) {

                localStorage.setItem(
                    "rememberedUsername",
                    username
                );

            } else {

                localStorage.removeItem(
                    "rememberedUsername"
                );

            }

            navigate("/dashboard");

        } else {

            alert(
                "Invalid Username or Password"
            );

        }
    };

    return (

        <Container
            maxWidth="sm"
            sx={{ mt: 10 }}
        >

            <Paper
                elevation={5}
                sx={{ p: 4 }}
            >

                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                >
                    5G AF IoT Portal
                </Typography>

                <br />

                <TextField
                    fullWidth
                    label="Username"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                />

                <br />
                <br />

                <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <br />
                <br />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={rememberMe}
                            onChange={(e) =>
                                setRememberMe(
                                    e.target.checked
                                )
                            }
                        />
                    }
                    label="Remember Me"
                />

                <br />

                <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={login}
                >
                    Login
                </Button>

                <br />
                <br />

                <Typography
                    align="center"
                    color="text.secondary"
                >
                    Secure Login - Authorized Users Only
                </Typography>

            </Paper>

        </Container>
    );
}

export default Login;