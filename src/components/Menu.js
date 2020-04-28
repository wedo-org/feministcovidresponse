import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function Menu({handleLanguageChoice}) {
  const { t } = useTranslation();
  //       <h1>{t("title")}</h1>
// placeholder={t("placeholder")}
 
// The useTranslation hook returns an object that contains the following properties:
// t() - The t function accepts a mandatory parameter as the translation key (public/locales/en/translation.json), and the second optional parameter is the so-called working text. Whenever there is no translation, it defaults to the working text or to the translation key if there is no working text in the first place.
// i18n - This is the initialized i18n instance. It contains several functions, one of which we can use to change the currently selected language. See example below:
// Note: The useTranslation hook will trigger a Suspense if not ready (e.g., pending load of translation files).
// The react-i18n library has a Trans component that we can use to interpolate inner HTML elements, but the majority of the time, we probably won't need it.

  return (
        <section className='menu-list'>
          <nav>
              <ul>
              <li><NavLink to="/about" className="Nav_link" activeClassName="activeRoute">About</NavLink></li>
              <li><NavLink to="/principles" className="Nav_link" activeClassName="activeRoute">Principles</NavLink></li>
              <li><NavLink to="/resources" className="Nav_link" activeClassName="activeRoute">Resources</NavLink></li>
              <li><NavLink to="/online-dialogues" className="Nav_link" activeClassName="activeRoute">Online Dialogues</NavLink></li>
              <li><NavLink to="/response-tracker" className="Nav_link" activeClassName="activeRoute">Response Tracker</NavLink></li>
              </ul>
          </nav>
          <section className="languages" onClick={(e) => handleLanguageChoice(e)}>
            <span id="EN">EN </span>
            <span id="ES"> / ES </span>
            <span id="FR"> / FR </span>
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
