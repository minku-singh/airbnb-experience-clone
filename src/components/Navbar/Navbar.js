import React from 'react';
import logo from './../../assets/images/airbnb-logo.png';
import './Navbar.css';

function Navbar() {
    return (
        <div className = "navbar">
            <img id = "navbar--logo" src={logo} alt="airbnb logo" />
        </div>
    )
}

export default Navbar;