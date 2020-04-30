import React from 'react'
import {principles} from '../principles-content.js'
import PrincipleCard from '../components/PrincipleCard.js'

export default function PrinciplesContainer({language}) {

    console.log("LANGUAGE", language);
    

    return (
        <section className='main-content'>
            <h1>Principles</h1>
            <h2 className="principles-subtitle">Key Principles for Feminist Response to&nbsp; COVID-19&nbsp;</h2>
            <p className="principles-intro"><strong>Cross-cutting to all these principles is the promotion, protection and fulfillment of human rights and gender equality.</strong> Human rights and their fundamental principles, including the principles of universality, inalienability, interdependence, indivisiblity, equality, non-discrimination, non-derogation and accountability, must guide all actions taken in response to COVID-19. This includes collective rights, such as the rights of Indigenous Peoples, migrant, displaced and refugee populations as well as labour rights. While restrictions on some rights in the context of the current public health emergency may be warranted, any measures must be necessary, proportionate to the current risk, have a specific time and duration, and be applied in a non-discriminatory way. Further, the current crisis must not be used to promote stigmatization, discrimination and hate speech, nor silence dissent or protest, attack human rights and environmental defenders, especially women human rights defenders, or undermine the exercise of other rights, like sexual and reproductive rights.  The response to COVID-19 must be gender-responsive and advance gender equality, and must ensure the fulfillment of women’s human rights as recognized in international treaties and agreements.</p>
            <a href={require(`../assets/files/principles-${language}.pdf`)} target="_blank" rel="noopener noreferrer">Download PDF</a>
            <div className="accordion">
                {
                    principles.map((principle) => 
                        <PrincipleCard key={principle.title} principle={principle} />
                    )
                }
            </div>
        </section>
    )
}
