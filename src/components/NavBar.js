import React from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../assets/images/hamburger.png'
import Menu from './Menu';

export default function NavBar() {
  const isBrowser = document.documentElement.clientWidth > 1775;
    return (
        <nav className='nav-bar'>
            <h2> Feminist Response to COVID-19</h2>
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
