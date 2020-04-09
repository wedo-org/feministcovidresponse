import React from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../assets/images/hamburger.png'

export default function NavBar() {
    return (
        <nav>
            <Link to="/menu"><img src={hamburger} className="hamburger" alt="menu"  tabIndex="0"/></Link>
        </nav>
    )
}
