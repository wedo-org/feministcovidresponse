import React from 'react'
import { Link } from 'react-router-dom';
import { withContentful } from 'react-contentful';
const isBrowser = window.innerWidth > 1775;

function Menu({ contentful }) {

    const { client, locale, renderPromises } = contentful;
    // console.log(client);
    // console.log(client.getEntries().then(o => console.log(o)));
    // console.log(locale);
    // console.log(renderPromises);
    // console.log(client.getContentTypes().then(objects => console.log(objects.items)));

    return (
        <section className='menu-list'>
          <nav>
              <ul>
              {/* the <li>s below will be created by fetching the page names from contentful, this is test only */}
              <li><Link to="/about">About</Link></li>
              <li><Link to="/principles">Principles</Link></li>
              <li><Link to="/#">Resources</Link></li>
              <li><Link to="/#">Policy Tracker</Link></li>
              <li><Link to="/#">Events</Link></li>
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
