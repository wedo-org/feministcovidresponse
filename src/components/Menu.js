import React from 'react'
import { NavLink } from 'react-router-dom';

function Menu() {

  return (
        <section className='menu-list'>
          <nav>
              <ul>
              <li><NavLink to="/about" className="Nav_link" activeClassName="activeRoute">About</NavLink></li>
              <li><NavLink to="/principles" className="Nav_link" activeClassName="activeRoute">Principles</NavLink></li>
              <li><NavLink to="/resources" className="Nav_link" activeClassName="activeRoute">Resources</NavLink></li>
              <li><NavLink to="/online-dialogues" className="Nav_link" activeClassName="activeRoute">Online Dialogues</NavLink></li>
              <li><NavLink to="/response-tracker" className="Nav_link" activeClassName="activeRoute">Response Tracker</NavLink></li>
              </ul>
          </nav>
          <section className="languages">
            <span>EN </span>
            <span> / ES </span>
            <span> / FR </span>
        </section>
{/*         
          <footer id='footerBrowser'>
            <p>created by xyz </p>
            <p>thanks to xyz </p>
          </footer> */}

        </section>
    )
}

export default Menu;
