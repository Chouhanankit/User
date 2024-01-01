import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <Link to="/"><span className="navbar-brand mb-0 text-warning h1">Users-App</span></Link>
                <Link to="/about"><span className="navbar-brand mb-0 text-warning">About</span></Link>
            </div>
        </nav>
    )
}
6
export default Navbar