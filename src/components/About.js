import React from 'react';
import PrincipleCard from '../components/PrincipleCard.js'

  
  export default function About(props){

    const info = {
      title: "Current Crisis",
      paragraphs: "The COVID-19 pandemic is upending economies, changing mobility patterns, disrupting social networks, altering informal and formal workplaces and flows, and redefining the concept of essential work and who performs it. The public health and security responses have far-reaching impacts, amplifying existing humanitarian, care, social, economic and political crises. It is laying bare structural injustices and inequalities deeply ingrained in our societies and systems that thrive on exclusion, breed corporate dominance and wealth concentration and exploit the majority of humanity, particularly those most marginalized and politically disenfranchised. \n The responses to these interlinked crises deeply threaten human rights and democracy. In many countries, curfews and lockdowns are being brutally enforced by military and police forces, often most cruelly targeting the most marginalized groups. Countries are implementing, or considering increased, digital surveillance - all which harbor potential long-term implications for rights to privacy, right to information, freedom of expression and freedom of association. Other responses center corporation bailouts rather than supporting those most in need. Overall, multilateral solidarity has been lacking. \n However, some have moved swiftly to respond to this crisis by strengthening social protection measures, expanding access to healthcare, ensuring incomes, coupled with a global reorientation of what kind of work is considered “essential”, with people all over the world recognizing the vital role of frontline workers, from healthcare to sanitation. These are measures deeply in line with feminist analysis and advocacy as core tenants for upholding human rights and promoting gender equality. Now more than ever, policy, strategy and response must be rooted in systemic feminist analysis, and guided by feminist principles."      
    }

    return (
      <section className='main-content'>
          <h1>About</h1>
          <div className="about-section">
            <p className="about-intro">As feminists - organizations and activists, working across global movements centered on human rights, sustainable development, and economic and social justice - we have come together in a moment of collective organizing to outline key principles for a just a resilient recovery from the ongoing global pandemic, as well as to track responses and uplift collective action of feminists around the world. </p>
            <img className="doodle-about" src={require('../assets/images/doodle-about.png')} alt=""/>
          </div>
          <div className="accordion">
              <PrincipleCard key={info.title} principle={info} />
            </div>
      </section>
  )
}