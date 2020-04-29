import React from 'react';
import { useTranslation } from "react-i18next";


export default function ItemCard({item, location}) {
    const { t } = useTranslation();

    const makeDate = () => {
        // console.log("hi");
        // let date = item.eventDate
        // return date
        // const date = new Date(item.date)
        // const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
        // const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
        // const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
        // return `${day} ${month} ${year}`
    }

    const markProgressive = () => { 
        let img;       
        switch (item.progressive) {
            case "progressive":
                img = <img src={require('../assets/images/progressive.png')} className="tracker-doodles" alt="progressive action icon"/>
                break
            case "regressive":
                img = <img src={require('../assets/images/regressive.png')} className="tracker-doodles" alt="regressive action icon"/>
                break
            case "neutral":
                img = <img src={require('../assets/images/neutral.png')} className="tracker-doodles" alt="need to watch action icon"/>
                break
            default:
                img = null
        }
        return img
    }     

    return (
        <section className='item' >
            {
                location === "/resources"
                ?
                <section className="blob-resources">
                    <img src={require('../assets/images/blue-blob.png')} className="blue-blob" alt=""/>
                    <h4 className="response-title">{item.title}</h4>
                </section>
                :
                <h4 className='item-title'>
                    {markProgressive()}{item.title}
                </h4>
            }
            {
                item.types
                ?
                <section className='type-section'>
                    <p> {t("Types of response")}:
                        {item.types.map((type) => <span id='type' key={`${type}-${item.title}`}>{t(type)}</span>)}
                    </p>
                </section>
                :
                null
            }
            <p className="item-description">{item.description}
            <br/><br/>
                <a href={item.link} target="_blank" rel="noopener noreferrer"><span id='read-more'>{t("Read more")} <i className="gg-external" alt="external source icon"></i></span></a>
            </p>
        </section>
    )
}
