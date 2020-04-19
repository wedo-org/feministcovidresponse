import React from 'react'
import { Link } from 'react-router-dom';
import { withContentful } from 'react-contentful';


function Menu() {
  console.log(document.documentElement.clientWidth);
  console.log(window.screen.availWidth);
  const isBrowser = window.screen.availWidth > 1775;
  
  return (
        <section className='menu-list'>
          <nav>
              <ul>
              {/* the <li>s below will be created by fetching the page names from contentful, this is test only */}
              <li><Link to="/about">About</Link></li>
              <li><Link to="/principles">Principles</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/policy-tracker">Policy Tracker</Link></li>
              <li><Link to="/events">Events</Link></li>
              </ul>
          </nav>
          {
            isBrowser
            ?
            false
            :
            <footer>
              <p>created by xyz </p>
              <p>thanks to xyz </p>
            </footer>
          }
        </section>
    )
}

export default withContentful(Menu);
