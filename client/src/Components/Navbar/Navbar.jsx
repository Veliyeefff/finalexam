import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
function Navbar() {
    return (
        <div id='navbar'>
            <div className='navbar-brand'>
                <img src="https://preview.colorlib.com/theme/educature/img/logo.png" alt="" />
            </div>
            <div className="navbar-links">
                <Link to='/'>Home</Link>
                <Link to='/add'>Add</Link>
                <Link to='/wish'>Favourites</Link>
                <p>Courses</p>
                <p>Pages</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Navbar