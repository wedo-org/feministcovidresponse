import React from 'react';
import AboutCard from './AboutCard.js'
import { Trans, useTranslation } from "react-i18next";

export default function About(props){
    const { t } = useTranslation(["about"]);

    return (
      <section className='main-content'>
          <h1>{t("title")}</h1>
          <div className="about-section">
            <p className="about-intro">{t("intro")} </p>
            <img className="doodle-about" src={require('../assets/images/doodle-about.png')} alt=""/>
          </div>
          {/* <div className="about-section">
            <p className="about-intro">
            <Trans i18nKey="about:second-intro">
              Read below to find a short analysis of the current crisis as well as a list of individuals and organizations who have been involved in this collective reflection. If you are interested in submitting resources to this website, please email feministresponse[at]wedo.org. In the coming weeks, submissions will be able to be made directly via this website. We also hope to continually add new information to best amplify the actions of networks around the world.
            </Trans>
            </p>
          </div> */}
          <div className="accordion">
              <AboutCard />
            </div>
      </section>
  )
}