import React from 'react'
import { Link } from 'react-router-dom';
import { withContentful } from 'react-contentful';

function Menu({ contentful }) {
    
    const { client, locale, renderPromises } = contentful;
    // console.log(client);
    // console.log(client.getEntries().then(o => console.log(o)));
    // console.log(locale);
    // console.log(renderPromises);
    // console.log(client.getContentTypes().then(objects => console.log(objects.items)));
    
    return (
        <>
        <nav>
            <ul>
            {/* the <li>s below will be created by fetching the page names from contentful, this is test only */}
            <li><Link to="/about">About</Link></li>
            <li><Link to="/principles">Principles</Link></li>
            </ul>
        </nav>

        <p>created by xyz </p>
        <p>thanks to xyz </p>
        </>
    )
}

export default withContentful(Menu);
