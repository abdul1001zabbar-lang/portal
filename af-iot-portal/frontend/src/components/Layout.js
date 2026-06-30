import React from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {

    return (

        <div>

            <Navbar />

            <Sidebar />

            <div
                style={{
                    marginLeft: "240px",
                    marginTop: "70px",
                    padding: "20px"
                }}
            >

                {children}

            </div>

        </div>

    );
}

export default Layout;