import React from 'react';
import AboutCard from './AboutCard.js'
import { useTranslation } from "react-i18next";

export default function About(props){
    const { t } = useTranslation(["about"]);

    return (
      <section className='main-content'>
          <h1>{t("title")}</h1>
          <div className="about-section">
            <p className="about-intro">{t("intro")} </p>
            <img className="doodle-about" src={require('../assets/images/doodle-about.png')} alt=""/>
          </div>
          <div className="accordion">
              <AboutCard />
            </div>
      </section>
  )
}