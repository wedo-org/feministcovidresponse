import React from 'react'
import { Link } from 'react-router-dom';
import { withContentful } from 'react-contentful';


function Menu() {

  return (
        <section className='menu-list'>
          <nav>
              <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/principles">Principles</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/online-dialogues">Online Dialogues</Link></li>
              <li><Link to="/response-tracker">Response Tracker</Link></li>
              </ul>
          </nav>
          <footer id='footerBrowser'>
            <p>created by xyz </p>
            <p>thanks to xyz </p>
          </footer>
        </section>
    )
}

export default withContentful(Menu);
