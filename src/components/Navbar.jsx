import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo-section">
                <Link to='/'><p className="logo">CodeFE</p></Link>
                <p className="sub-title-nav">Practice CSS</p>
            </div>
        </nav>
    )
}
