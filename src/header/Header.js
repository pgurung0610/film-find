import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <Link to={'/'} className="title">
            <h1>Film Find</h1>
        </Link>
    </header>
)

export default Header;