import React from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../assets/images/hamburger.png'
import Menu from './Menu';
const isBrowser = document.documentElement.clientWidth > 1775;

export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <h2> Feminist Response to COVID-19</h2>
            {
              isBrowser
              ?
              <Menu/>
              :
              <Link to="/menu">
                <img src={hamburger} className="hamburger-menu" alt="menu"  tabIndex="0"/>
              </Link>
            }
        </nav>
    )
}
