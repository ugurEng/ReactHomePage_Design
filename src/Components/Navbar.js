import React from 'react'
import "../Components/Style/Navbar.css"
import logo from '../images/Digital Spaniel logo01-01.png'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logodiv"><img className="navbar-logo-image"src={logo} alt="Logo" /></div>
            <div className="navbar-ul">
                <ul>
                    <li><a href="#home">Services</a></li>
                    <li><a href="#news">Work</a></li>
                    <li><a href="#contact">About</a></li>
                    <li><a href="#about">Blog</a></li>
                    <li><a href="#about">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar