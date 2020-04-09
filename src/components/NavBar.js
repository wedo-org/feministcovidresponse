import React from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../assets/images/hamburger.png'
import Menu from './Menu';
const isMobile = window.innerWidth < 768;


export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <h2> Feminist Response to Covid-19</h2>
            {
              isMobile
              ?
              <Link to="/menu">
                <img src={hamburger} className="hamburger-menu" alt="menu"  tabIndex="0"/>
              </Link>
              :
              <Menu />
            }
        </nav>
    )
}
