import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
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
