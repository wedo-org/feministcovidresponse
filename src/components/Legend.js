import React from 'react'
import regressive from '../assets/images/mobile-regressive.png';
import progressive from '../assets/images/mobile-progressive.png';
import neutral from '../assets/images/mobile-neutral.png';

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
            <section className='legend-icons'>
              <p className="legend-icons-p">Icons:</p>
              <img src={progressive} className="legend-tracker-doodles" alt="progressive action icon"/><span>Progressive action</span><br/>
              <img src={regressive} className="legend-tracker-doodles" alt="regressive action icon"/><span>Regressive action</span><br/>
              <img src={neutral} className="legend-tracker-doodles" alt="neutral action icon"/><span>Neutral or "too early to tell"</span><br/>
            </section>
        </aside>
    )
}
