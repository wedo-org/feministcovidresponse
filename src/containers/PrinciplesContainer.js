import React, {useState} from "react"
import { useTranslation } from "react-i18next";
import openFile from '../assets/images/open-file.png'

export default function PrinciplesContainer({language}) {

    const { t } = useTranslation('princ');

    const [isActive1, updateIsActive1] = useState(false)
    const [isActive2, updateIsActive2] = useState(false)
    const [isActive3, updateIsActive3] = useState(false)
    const [isActive4, updateIsActive4] = useState(false)
    const [isActive5, updateIsActive5] = useState(false)
    const [isActive6, updateIsActive6] = useState(false)

    const toggleClass = (num) => {
        switch (num) {
            case 1:
                updateIsActive1(!isActive1)
                break
            case 2:
                updateIsActive2(!isActive2)
                break
            case 3:
                updateIsActive3(!isActive3)
                break
            case 4:
                updateIsActive4(!isActive4)
                break
            case 5:
                updateIsActive5(!isActive5)
                break
            case 6:
                updateIsActive6(!isActive6)
                break
            default:
                return null
            }
        }

    return (
        <section className="main-content">
            <h1>{t("Principles")}</h1>
            <h2 className="principles-subtitle">{t("Key Principles for Feminist Response to")}&nbsp; COVID-19&nbsp;</h2>
            <p className="principles-intro"><strong>{t("Cross-cutting to all these principles is the promotion, protection and fulfillment of human rights and gender equality")}.</strong> {t("Human rights and their fundamental principles, including the principles of universality, inalienability, interdependence, indivisiblity, equality, non-discrimination, non-derogation and accountability, must guide all actions taken in response to COVID-19")}. {t("This includes collective rights, such as the rights of Indigenous Peoples, migrant, displaced and refugee populations as well as labour rights")}. {t("While restrictions on some rights in the context of the current public health emergency may be warranted, any measures must be necessary, proportionate to the current risk, have a specific time and duration, and be applied in a non-discriminatory way")}. {t("Further, the current crisis must not be used to promote stigmatization, discrimination and hate speech, nor silence dissent or protest, attack human rights and environmental defenders, especially women human rights defenders, or undermine the exercise of other rights, like sexual and reproductive rights")}.  {t("The response to COVID-19 must be gender-responsive and advance gender equality, and must ensure the fulfillment of women’s human rights as recognized in international treaties and agreements")}.</p>
            {/* // eslint-disable-next-line */}
              <section className='openFileLink'>
                <a href={require(`../assets/files/principles-${language}.pdf`)} target="_blank" rel="noopener noreferrer">
                  <img id='openFile' src={openFile} alt='open-file-icon'/>
                  <p>Open in PDF</p>
                </a>
              </section>
            <div className="accordion">
    {/******************************* FIRST PRINCIPLE ******************************* */}
                <div className="accordion-item" onClick={()=>toggleClass(1)}>
                    <section className="blob-principle">
                        <img src={require("../assets/images/orange-blob.png")} className="orange-blob" alt=""/>
                        <a className={`${isActive1 ? "active" : null}`}>{t("COVID-19 responses must centre the well-being of all people in an intersectional manner")}.</a>
                    </section>
                    <div className={`content ${isActive1 ? "active" : null}`}>
                        <p className="principle-description">{t("Any measure to mitigate the effects of COVID-19 should be centered around the well-being of all people, both at the individual and the collective level")}. {t("Responses must take into consideration the multi-dimensional and intersecting forms of inequalities, discrimination and marginalisation that puts particular groups of people at increased risk")}. {t("This includes")}:</p>
                            <ul>
                                <li className="principle-item">{t("Recognizing multiple and intersecting discrimination (such as on the basis of sex, age, race, ethnicity, economic status, geographic status, religion, migration status, disability, sexual orientation and gender identity, expression and sex characteristics, and others) may increase the impact of the COVID-19 pandemic on specific population groups and communities; that women, men and gender non-conforming people within these groups will have different experiences and needs; and develop specific strategies to mitigate and address them")}.</li>
                                <li className="principle-item">{t("Collecting and analyzing disaggregated data so that decision-makers at all levels can take proactive measures to prioritize and target mitigation and response measures to those most affected and those at heightened risk of infection and mortality")}.</li>
                                <li className="principle-item">{t("Reinforcing and expanding social protection systems to include the informal sector, including micro entrepreneurs and self-employed people, especially the most precarious in domestic, care and services work, including sex workers,  to ensure that all people have access to a universal basic income, paid leave, food, and caregiving services")}.</li>
                                <li className="principle-item">{t("Specific actions to identify, protect the rights of, and respond to the needs of marginalized and excluded communities in COVID-19 responses, including people with disabilities, racial or ethnic minorities, indigenous people, displaced and refugees, migrants, older people, LGBTI people, people living with HIV/AIDs and those affected by poverty, as well as people who are in detention, incarcerated or in institutional settings")}.</li>
                                <li className="principle-item">{t("Action to address increases in xenophobia and racism, avoid rhetoric that fuels discrimination, politicizes the pandemic for political gain or that stokes fear, and ensure that COVID-19 responses do not increase violence or discrimination against certain populations")}.</li>
                                <li className="principle-item">{t("Specific actions to fulfill the right to information, including by ensuring that information about the pandemic is available in different languages and formats accessible to people with disabilities, illiterate, and those lacking access to digital spaces while  ensuring the broadest possible access to the internet")}.</li>
                            </ul>
                    </div>
                </div>
{/******************************* SECOND PRINCIPLE ******************************* */}
                <div className="accordion-item" onClick={()=>toggleClass(2)}>
                    <section className="blob-principle">
                        <img src={require("../assets/images/orange-blob.png")} className="orange-blob" alt=""/>
                        <a className={`${isActive2 ? "active" : null}`}>{t("COVID-19 responses must ensure the health and safety of all, including ensuring sexual and reproductive health and rights")}</a>
                    </section>
                    <div className={`content ${isActive2 ? "active" : null}`}>
                        <p className="principle-description">{t("There can be no effective response to a public health crisis that does not center gender equality and vice versa")}. {t("We are witnessing attacks on the human rights of women, girls, and gender non-conforming people by further restricting abortion, access to comprehensive sexuality education, and gender-affirming treatment")}. {t("Restrictions on movement and/or social isolation measures without adequate social safety nets and support for care services have increased the burden of care work on women, and have resulted in surges in domestic, intimate partner, and other forms of gender-based violence across the globe")}. {t("Suggested actions include")}:</p>
                            <ul>
                                <li className="principle-item">{t("Provide all frontline health workers, caregivers and essential workers, of whom 70% are women, with quality personal protective equipment including menstrual hygiene products, psycho-social support, child-care, and address immediate needs, to enable them to provide quality care")}.</li>
                                <li className="principle-item">{t("Ensure uninterrupted access to sexual and reproductive health services, including abortion and gender-affirming care; take action to  facilitate self-care, such as making STI tests, modern contraceptives and abortion pills available over the counter; expand access to midwives and home-based maternal health care; and refrain from establishing COVID-19-prevention strategies that are not grounded in evidence and could cause greater harm")}.</li>
                                <li className="principle-item">{t("Eliminate user fees and increase immediate investments in public health systems to provide comprehensive and quality services that are available, acceptable and accessible, especially to communities most at risk from the pandemic, and help to facilitate long-term improvements in health infrastructure, and the quality and accessibility of care")}.</li>
                                <li className="principle-item">{t("Ensure access to the highest attainable standard of both physical and mental health, including providing access to highly isolated populations to engage in and practice self-care")}.</li>
                                <li className="principle-item">{t("Fulfill funding obligations to UN agencies safeguarding information, access and rights to health services at all times, especially sexual and reproductive health and responses to gender-based violence")}.</li>
                                <li className="principle-item">{t("Ensure women and girls have the support and protection they need to act against any form of injustice, and take early and quick action to prevent violations of their rights that have emerged in other health crises, such as increases in gender-based violence, child, early and forced marriage or removal from school")}.</li>
                                <li className="principle-item">{t("Scale up, resource and sustain as essential services the support systems and mechanisms for reporting and responding to all forms of violence against women and girls, domestic and intimate partner violence and other gender-based violence, including through public awareness campaigns to highlight hotlines, crisis centers, shelters and legal aid; especially in contexts of militarization and ongoing conflicts")}.</li>
                                <li className="principle-item">{t("Engage men and boys to challenge underlying attitudes, stereotypes, social norms and patriarchal power inequalities, including through measures to redistribute unpaid domestic and care work, awareness raising campaigns, as well as bystander intervention programs and community accountability approaches")}.</li>
                            </ul>
                    </div>
                </div>
{/******************************* THIRD PRINCIPLE ******************************* */}
                <div className="accordion-item" onClick={()=>toggleClass(3)}>
                    <section className="blob-principle">
                        <img src={require("../assets/images/orange-blob.png")} className="orange-blob" alt=""/>
                        <a className={`${isActive3 ? "active" : null}`}>{t("COVID-19 responses must promote a comprehensive paradigm shift, relying on adequate and equitable financing")}</a>
                    </section>
                    <div className={`content ${isActive3 ? "active" : null}`}>
                        <p className="principle-description">{t("Response measures to COVID-19 must address underlying macro economic, financial and trade structural injustices and inequalities")}.{t("These shifts must set the framework for the post-COVID world order toward building stronger international cooperation based on human rights, well-being, sustainable development, decent work and gender equality, urgently recognizing, valuing, reducing and redistributing unpaid domestic and care work")}.</p>
                        <p className="principle-description">{t("During the COVID-19 pandemic, it is more important than ever that developed countries fulfill their existing obligations under multiple international UN processes (such as Financing for Development, UNFCCC and the Sustainable Development Goals) to support developing countries financially for urgently needed action")}.{t(" There should be a clear commitment by developed countries to urgently increase financial provision in the form of grants")}. {t("Actions include")}:</p>
                            <ul>
                                <li className="principle-item">{t("Special taxes on financial flows, short-term speculative currency, financial transactions, and concentration of wealth to serve as the basis to raise the necessary public resources to face the current crises")}. {t("Governments should end the corporate capture of the public sphere by means of regulation and fiscal measures")}.</li>
                                <li className="principle-item">{t("The cancellation of all outstanding sovereign debt of developing countries to create the fiscal space for immediate emergency responses")}.</li>
                                <li className="principle-item">{t("Reduce and redirect national and global military budgets to generate the resources that are required to address the COVID-19 pandemic")}.</li>
                                <li className="principle-item">{t("Suspension of bi-, pluri- and multilateral trade and investment agreements, because of their pressure to undermine states’ capacity to regulate businesses to protect public interest by means of investor-state dispute settlement clauses, leading towards the lowest common denominator on labor rights, environmental protection, and current restrictions under intellectual property rights and service provisions that affect people’s right to health")}.</li>
                                <li className="principle-item">{t("Demand a shift in the COVID-19 liquidity needs responses of international and regional financial institutions, such as the World Bank, International Monetary Fund, from the extension of ‘loans’ - to be repaid through conditional austerity measures - to grants that target domestic social welfare and the provision of public goods and services")}.</li>
                                <li className="principle-item">{t("Prohibit corporate lobbying and undue influence on government responses to COVID-19 and halt price gouging")}.{t("Ensure that economic stimulus measures are focused on supporting the well-being of all people, especially the most marginalized and at risk, rather than on large corporate bailouts")}.</li>
                                <li className="principle-item">{t("Provide direct financing to community, youth, feminist and women’s rights organizations and movements who adequately respond to the needs of their communities, and not only governments and UN agencies")}.</li>
                            </ul>
                    </div>
                </div>
{/******************************* FOURTH PRINCIPLE ******************************* */}
                <div className="accordion-item" onClick={()=>toggleClass(4)}>
                    <section className="blob-principle">
                        <img src={require("../assets/images/orange-blob.png")} className="orange-blob" alt=""/>
                        <a className={`${isActive4 ? "active" : null}`}>{t("COVID-19 responses must be based on and strengthen democratic values")}</a>
                    </section>
                    <div className={`content ${isActive4 ? "active" : null}`}>
                        <p className="principle-description">{t("The very basis of our social contract is that the government serves the will of the people, and that should be translated into concrete measures to enable participatory democracy where people with the least power can hold the powerful accountable")}.{t("Even in emergency and crisis, people’s democratic rights, including transparency and accountability, the right to information and freely express their opinions, cannot be violated or restricted")}.</p>
                        <p className="principle-description">{t("During the COVID-19 crisis, the international community must have zero tolerance for restrictions and regulations not proportionate and effective in dealing with the pandemic, that shrink human and democratic rights and personal liberties, establish or consolidate authoritarian regimes, and that are enforced militaristically")}.{t("This includes")}:</p>
                            <ul>
                                <li className="principle-item">{t("All proportionate and effective emergency measures that suspend normal due process, should have detailed timeframes, principles and criteria for phased out, with clear recourse for any violation of rights")}.</li>
                                <li className="principle-item">{t("Safeguard democratic elections, alongside public health, by adapting and reforming election law and voting procedures to allow 100% voting by mail, while ensuring transparent elections free from corruption and coercion")}.</li>
                                <li className="principle-item">{t("Engage communities, specially those most affected, social movements, non-governmental organizations, local government and academics, including women-led and feminist organizations, to develop immediate responses and document lessons learned from taking an intersectional approach to apply to future crises and emergencies")}.</li>
                            </ul>
                    </div>
                </div>
{/******************************* FIFTH PRINCIPLE ******************************* */}
                <div className="accordion-item" onClick={()=>toggleClass(5)}>
                    <section className="blob-principle">
                        <img src={require("../assets/images/orange-blob.png")} className="orange-blob" alt=""/>
                        <a className={`${isActive5 ? "active" : null}`}>{t("COVID-19 responses must promote a just and equitable transition for people and planet")}</a>
                    </section>
                    <div className={`content ${isActive5 ? "active" : null}`}>
                        <p className="principle-description">{t("COVID-19 responses must be a downpayment on a just and equitable transition towards an equal and healthy planet")}. {t("The post-COVID future should not be a return to a carbon-intensive economic system based on patriarchy and neo-liberal capitalism")}. {t("A just and equitable transition involves communities in decarbonization and the transformational shift from the privatization and commodification of resources toward regenerative, sustainable, cooperative, and collective models")}. {t("A just and equitable transition must be focused beyond the obvious sectors of oil and mining, to include affected workers across the global chains and those whose livelihoods have already been disrupted by climate change, which often includes women working in fishing, agriculture and care sectors")}. {t("It is these same communities that are likely to lose income and work due to COVID-19, or that are required to continue working, risking health and well-being")}. {t("Actions include")}:</p>
                            <ul>
                                <li className="principle-item">{t("Divestment from extractive and military-industrial complexes and reinvestment in social and public goods and essential services, including public health and frontline health workers")}.</li>
                                <li className="principle-item">{t("Ensure economic recovery packages work to support frontline workers and industries focused on care and low-carbon infrastructure over polluting industries")}.</li>
                                <li className="principle-item">{t("Halt or impose moratoriums on projects that are environmentally harmful or potentially bring harm to or displace indigenous peoples and local communities")}</li>
                                <li className="principle-item">{t("Strengthen, implement and enforce environmental laws and regulations that control industrial air pollution, a major contributor to community-wide incidence of respiratory ailments in mostly black, brown or low-income areas")}.</li>
                                <li className="principle-item">{t("Promote public health through local economies centered on sustainable food systems and decentralized, community-owned renewable energy systems")}.</li>
                            </ul>
                    </div>
                </div>
{/******************************* SIXTH PRINCIPLE ******************************* */}
                <div className="accordion-item" onClick={()=>toggleClass(6)}>
                    <section className="blob-principle">
                        <img src={require("../assets/images/orange-blob.png")} className="orange-blob" alt=""/>
                        <a className={`${isActive6 ? "active" : null}`}>{t("COVID-19 responses must be guided by cooperation, multilateralism and global justice")}</a>
                    </section>
                    <div className={`content ${isActive6 ? "active" : null}`}>
                        <p className="principle-description">{t("An ambitious multilateral response must be based on the principles of human rights, historical responsibility, accountability, international cooperation and solidarity – working across nations to address a crisis that knows no borders")}. {t("The UN should play a fundamental role in ensuring coordinated, global responses in which all countries have equal voice in decision-making; one that promotes enhanced transparency and inclusivity in addressing cross-border, interlinked systemic issues such as climate change, peace, gender equality with the current health emergency")}. {t("The Sustainable Development Goals, respect for the right to development, the multilateral human rights system, should be the basis for this work")}. {t("In particular, the World Health Organization (WHO) must ensure a coordinated, strategic, equitable and human rights-based response to COVID-19")}. {t("Political grandstanding and blame shifting must not sideline or derail funding to the WHO and undermine its global expertise to address health pandemics")}. {t("Further, organizations like the Office of the High Commission on Human Rights are necessary to monitor human rights in the context of the pandemic and expose abuses in the confusing, rapidly changing and too-often authoritarian, militarized and unplanned national responses")}. {t("As part of this, we must")}:</p>
                            <ul>
                                <li className="principle-item">{t("Ensure UN agencies, treaty bodies and its Member States, uphold the key tenets of the UN")}: {t("peace, human rights, justice, social progress, as they are crucial levers to respond to COVID-19")}.</li>
                                <li className="principle-item">{t("Reinforce and hold the UN accountable to transparent, consistent and equitable engagement with observers and civil society")}.</li>
                                <li className="principle-item">{t("Call for an International Economic Reconstruction and Systemic Reform Summit under the aegis of the UN, to comprehensively address the impacts of the multilayered crises")}.</li>
                            </ul>
                    </div>
                </div>
{/* END OF PRINCIPLES */}
            </div>
        </section>
    )
}
