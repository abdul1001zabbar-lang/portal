import React, { useState } from "react";

import {
    Container,
    Paper,
    Typography,
    TextField,
    Button
} from "@mui/material";

import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {

        if (
            username === "admin" &&
            password === "admin123"
        ) {
            navigate("/dashboard");
        } else {
            alert("Invalid Username or Password");
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
                    variant="h4"
                    align="center"
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

                <Button
                    variant="contained"
                    fullWidth
                    onClick={login}
                >
                    Login
                </Button>

            </Paper>

        </Container>
    );
}

export default Login;