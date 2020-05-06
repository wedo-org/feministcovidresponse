import React from 'react';
import AboutCard from './AboutCard.js'
import { Trans, useTranslation } from "react-i18next";
import {orgs, coordination, database} from "../assets/data/appreciation.js"

export default function About(props){
    const { t } = useTranslation(["about"]);

    return (
      <section className='main-content'>
          <h1>{t("title")}</h1>
          <div className="about-section">
            <p className="about-intro">{t("intro")} </p>
            <img className="doodle-about" src={require('../assets/images/feminism-blob.png')} alt=""/>
          </div>
          <p>{t("second-intro")} </p>
          <p>{t("app-intro")} </p>
          <ul>
            <h2>{t("devs")}</h2>
            <li><a href="https://github.com/sylwiavargas" target="_blank" rel="noopener noreferrer">Sylwia Vargas</a></li>
            <li><a href="https://github.com/luanesouza" target="_blank" rel="noopener noreferrer">Annie Souza</a></li>
          </ul>
          <ul>
            <h2>{t("database")}</h2>
            {
              database.map((d) => <li key={d}>{d}</li>)
            }
          </ul>
          <ul>
            <h2>{t("coordinators")}</h2>
            {
              coordination.map((c) => <li key={c}>{c}</li>)
            }
          </ul>
          <ul>
            <h2>{t("organizations")}</h2>
            {
              orgs.map((o) => <li key={o}>{o}</li>)
            }
          </ul>
          <div className="accordion">
              <AboutCard />
            </div>
      </section>
  )
}
