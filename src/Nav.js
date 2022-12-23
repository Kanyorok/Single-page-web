import React from "react";
import { Link } from "react-router-dom";

function Nav(){

    var link ={
        color:"white",
        textDecoration: "none",
        backgroundColor: "Green",
        padding: "10px",
        borderRadius: "7px",
        fontSize: "20px",
        fontStyle: "bold",
        margin: "20px"
    }

    return <div>
        <nav style={{ backgroundColor:"crimson", padding:"25px" }}>
            <Link style={link} to="/">Home</Link>
            <Link style={link} to="/about">About</Link>
            <Link style={link} to="/contact"> Contact</Link>
        </nav>
    </div>

}

export default Nav;