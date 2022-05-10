import React from 'react'
import "../Components/Style/Navbar.css"
import logo from '../images/Digital Spaniel logo01-01.png'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logodiv"><img className="logo-image"src={logo} alt="Logo" /></div>
            <div className="list">
                <ul>
                    <li><a className="list-a" href="#home">Services</a></li>
                    <li><a className="list-a" href="#news">Work</a></li>
                    <li><a className="list-a" href="#contact">About</a></li>
                    <li><a className="list-a" href="#about">Blog</a></li>
                    <li><a className="list-a" href="#about">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar