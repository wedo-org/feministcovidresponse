import React, { useState, useEffect } from 'react'
import ItemCard from '../components/ItemCard'
import ButtonsContainer from './ButtonsContainer';
import { fetchPage } from '../utils.js';
import { useTranslation } from "react-i18next";


function ItemsContainer(props) {

    const { t } = useTranslation();

    const [ entries, updateEntries ] = useState([])
    const [ title, updateTitle ] = useState('')
    const [ countries, updateCountries ] = useState([])
    const [ categories, updateCategories ] = useState([])
    const [ chosenCountry, updateChosenCountry ] = useState('All')
    const [ chosenCategory, updateChosenCategory ] = useState('All')

    useEffect( () => {
      sectionTitle()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const sectionTitle = () => {
        let title;
        switch (props.location.pathname) {
            case "/response-tracker":
                title = "Response Tracker"
                break
            case "/online-dialogues":
                title = "Online Dialogues"
                break
            case "/resources":
                title = "Resources"
                break
            default:
                title = ""
        }

        updateTitle(title)
        getEntries()
        return title;
    }

    const getEntries = async () => {
        let location = props.location.pathname
        const data = await fetchPage(location);
        let entries = data.items
        updateEntries(entries)
        let categories = data.available_categories
        updateCategories(categories)
        let countries = data.available_countries
        updateCountries(countries)
    }

    const filterEntriesByCountry = () => {
        let filteredEntries;
        if (chosenCountry !== "All"){
            filteredEntries =  entries.filter(entry => {
                if(entry.countries){
                  return entry.countries.some(country => country === chosenCountry)
                } else {
                  return "unsure location"
                }
            })
        } else {
            filteredEntries = entries
        }
            return filteredEntries
    }

    const filterEntriesByCategory = (filteredEntries) => {
        let finishedFilteredArr;
        if (chosenCategory !== "All"){
            finishedFilteredArr =  filteredEntries.filter(item => {
                if (item.categories) {
                return item.categories.some(category => category === chosenCategory)
                } else {
                return null
                }
            })
        } else {
            finishedFilteredArr = filteredEntries
        }
    //     if (props.location.pathname !== "Events"){
    //         finishedFilteredArr = finishedFilteredArr.sort((a,b) => a.sys.createdBy - b.sys.createdBy)
    //     } else {
    //         finishedFilteredArr = finishedFilteredArr.sort((a,b) => a.fields.date - b.fields.date)
    //     }
        return finishedFilteredArr
    }

    return (
        <section className='ItemsContainer'>
          <section className='main-title'>
            <section>
              <h1> {t(title)} </h1>
            </section>
            {
                chosenCountry !== "All" || chosenCategory !== "All"
                ?
                <p className="filters-section"> {t("filters applied")}:&nbsp;
                        {chosenCountry !== "All"
                        ?
                        <span className="filter"
                        onClick={() => updateChosenCountry("All")}
                        >
                            {chosenCountry}
                            <i className="gg-close-r"></i>
                        </span>
                        : null}
                        {chosenCategory !== "All"
                        ?
                        <span className="filter"
                        onClick={() => updateChosenCategory("All")}
                        >
                            {chosenCategory}
                            <i className="gg-close-r"></i>
                        </span>
                        : null}
                </p>
                :
                null
            }
            <section className='buttons-and-items'>
              <aside className='buttons-container'>
                <ButtonsContainer
                    countries={ countries }
                    categories={ categories }
                    updateChosenCountry = { updateChosenCountry }
                    updateChosenCategory = { updateChosenCategory }
                    chosenCountry = { chosenCountry }
                    chosenCategory = { chosenCategory }
                    location={props.location.pathname}
                />
              </aside>

              <section id='policy-content'>
                <ul>
                    {
                        filterEntriesByCategory(filterEntriesByCountry()).map((item)=>
                        <li key={item.title} className="single-item">
                            <ItemCard
                                item={item}
                                location={props.location.pathname}
                                language={props.language}
                            />
                        </li>)
                    }
                </ul>
              </section>
            </section>

          </section>
        </section>
    )
}

export default ItemsContainer;
