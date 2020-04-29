import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function Menu({handleLanguageChoice}) {
  const { t } = useTranslation();

  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
        <section className='menu-list'>
          <nav>
              <ul>
              <li><NavLink to="/about" className="Nav_link" activeClassName="activeRoute">{t("About")}</NavLink></li>
              <li><NavLink to="/principles" className="Nav_link" activeClassName="activeRoute">{t("Principles")}</NavLink></li>
              <li><NavLink to="/resources" className="Nav_link" activeClassName="activeRoute">{t("Resources")}</NavLink></li>
              <li><NavLink to="/online-dialogues" className="Nav_link" activeClassName="activeRoute">{t("Online Dialogues")}</NavLink></li>
              <li><NavLink to="/response-tracker" className="Nav_link" activeClassName="activeRoute">{t("Response Tracker")}</NavLink></li>
              </ul>
          </nav>
          <section className="languages" onClick={(e) => changeLanguage(e.target.id)}>
            <span id="en">EN </span>
            <span id="es"> / ES </span>
            <span id="fr"> / FR </span>
        </section>
{/*         
          <footer id='footerBrowser'>
            <p>created by xyz </p>
            <p>thanks to xyz </p>
          </footer> */}

        </section>
    )
}

export default Menu;
