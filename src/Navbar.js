import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; 

export default function Navbar() {
    return (
        <nav className="Nav-bar">
            <FontAwesomeIcon icon={faEarthAmericas} className="nav-icon" />
            <p className="nav-bar-heading">My Travel Journal</p>
        </nav>
    );
}
