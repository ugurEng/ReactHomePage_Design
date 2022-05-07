import React from 'react'
import "../Components/Style/Navbar.css"
import logo from '../images/Digital Spaniel logo01-01.png'

function Navbar() {
    return (
        <div className="navbar">
            <div><img className="logo-image"src={logo} alt="Logo" /></div>
            <div className="list">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar