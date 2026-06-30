import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import Users from "./pages/User & Access Management";
import Logs from "./pages/Logs";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />
                <Route
                    path="/logs"
                    element={<Logs />}
                />

                <Route
                    path="/devices"
                    element={<Devices />}
                />

                <Route
                    path="/users"
                    element={<Users />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;