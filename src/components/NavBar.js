import React from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../assets/images/hamburger.png'
import logo from '../assets/images/logo.png'
import Menu from './Menu';

export default function NavBar() {
    return (
        <nav className='nav-bar'>
        
            <a href="/about"> <img id='logo' src={logo} alt='logo'/></a>
            <section id='isBrowser'>
              <Menu/>
            </section>

            <section id='isNotBrowser'>
              <Link to="/menu">
                <img src={hamburger} className="hamburger-menu" alt="menu"  tabIndex="0"/>
              </Link>
            </section> 
        </nav>
    )
}
