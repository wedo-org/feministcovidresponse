import React from 'react';
  
  export default function About(props){

    return (
      <section className='main-content'>
          <h1>About</h1>
          <div className="about-section">
            <p className="about-intro">As feminists - organizations and activists, working across global movements centered on human rights, sustainable development, and economic and social justice - we have come together in a moment of collective organizing to outline key principles for a just a resilient recovery from the ongoing global pandemic, as well as to track responses and uplift collective action of feminists around the world. </p>
            <img className="doodle-about" src={require('../assets/images/doodle-about.png')} alt=""/>

          </div>
      </section>
  )
}