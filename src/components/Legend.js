import React from 'react'

export default function Legend() {

    return (
        <aside className="legend-section">
            <p className="legend-types-p">TYPES:</p>
            <ul className="legend-ul">
                <li>Observed response - observered responses to COVID by people and communities. </li>
                <li>Temporary measure - measures put in place by Governments as a temporary response to COVID. </li>
                <li>Law or Policy - law enacted by a Government in response to COVID.</li>
            </ul>
            <p className="legend-icons-p">ICONS:</p>
            <img src={require('../assets/images/progressive.png')} className="tracker-doodles" alt="progressive action icon"/><span>Progressive action</span><br/>
            <img src={require('../assets/images/regressive.png')} className="tracker-doodles" alt="regressive action icon"/><span>Regressive action</span><br/>
            <img src={require('../assets/images/neutral.png')} className="tracker-doodles" alt="neutral action icon"/><span>Neutral or "too early to tell"</span><br/>
        </aside>
    )
}
