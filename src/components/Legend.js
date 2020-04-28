import React from 'react'

export default function Legend() {

    return (
        <aside className="legend-section">
            <h4> Explanations </h4>
            <p className="legend-types-p">Types:</p>
            <ul className="legend-ul">
                <li><strong>Observed response</strong> - observered responses to COVID by people and communities. </li>
                <br/>
                <li><strong>Temporary measure</strong> - measures put in place by Governments as a temporary response to COVID. </li>
                <br/>
                <li><strong>Law or Policy</strong> - law enacted by a Government in response to COVID.</li>
            </ul>
            <p className="legend-icons-p">Icons:</p>
            <img src={require('../assets/images/progressive.png')} className="legend-tracker-doodles" alt="progressive action icon"/><span>Progressive action</span><br/>
            <img src={require('../assets/images/regressive.png')} className="legend-tracker-doodles" alt="regressive action icon"/><span>Regressive action</span><br/>
            <img src={require('../assets/images/neutral.png')} className="legend-tracker-doodles" alt="neutral action icon"/><span>Neutral or "too early to tell"</span><br/>
        </aside>
    )
}
