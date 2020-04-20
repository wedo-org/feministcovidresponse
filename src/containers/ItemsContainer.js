import React, { useState, useEffect } from 'react'
import ItemCard from '../components/ItemCard'
import ButtonsContainer from './ButtonsContainer';
import { withContentful } from 'react-contentful';
import { fetchResourcesForThePage, fetchCountries, fetchThemes } from '../utils.js'

function ItemsContainer(props) {

    const [ entries, updateEntries ] = useState([])
    const [ title, updateTitle ] = useState('')
    const [ countries, updateCountries ] = useState([])
    const [ themes, updateThemes ] = useState([])
    const [ chosenCountry, updateChosenCountry ] = useState('All')
    const [ chosenTheme, updateChosenTheme ] = useState('All')

    useEffect( () => {
      sectionTitle()
      getCountries()
      getThemes()
    }, [])

    const getEntries = async (location) => {
      const items = await fetchResourcesForThePage(location);
      updateEntries(items)
      return items;
    }

    const getCountries = async () => {
        let countries = await fetchCountries();
        updateCountries(countries)
        countries = countries.sort((a,b) => a.localeCompare(b))
        return countries
    }

    const getThemes = async () => {
        let themes = await fetchThemes()
        updateThemes(themes)
        themes = themes.sort((a,b) => a.localeCompare(b))
        return themes
    }

    const filterEntriesByCountry = () => {
        let filteredEntries;
        if (chosenCountry !== "All"){
            filteredEntries =  entries.filter(entry => {
                return entry.fields.country.some(country => country.fields.name === chosenCountry)
            })
        } else {
            filteredEntries = entries
        }
            return filteredEntries
    }

    const filterEntriesByTheme = (filteredEntries) => {
        let finishedFilteredArr;
        if (chosenTheme !== "All"){
            finishedFilteredArr =  filteredEntries.filter(entry => {
                // just in case some entry doesn't have a theme
                if (entry.fields.theme) {
                return entry.fields.theme.some(theme => theme.fields.name === chosenTheme)
                } else {
                return null
                }
            })
        } else {
            finishedFilteredArr = filteredEntries
        }
        if (props.location.pathname !== "Events"){
            finishedFilteredArr = finishedFilteredArr.sort((a,b) => a.sys.createdBy - b.sys.createdBy)
        } else {
            finishedFilteredArr = finishedFilteredArr.sort((a,b) => a.fields.date - b.fields.date)
        }
        return finishedFilteredArr
    }

    const sectionTitle = () => {
        let title;
        let requestTitle;
        switch (props.location.pathname) {
            case "/policy-tracker":
                title = "Policy Tracker"
                requestTitle = "Policy"

                break
            case "/events":
                title = "Events"
                break
            case "/resources":
                title = "Resources"
                requestTitle = "Tools"
                break
            default:
                title = ""
        }

        updateTitle(title)
        getEntries(requestTitle || title)
        return title;
    }

    return (
        <section className='ItemsContainer'>
          <section className='main-title'>
            <section>
              <h1> {title} </h1>
            </section>
            <section className='buttons-and-items'>
              <aside className='buttons-container'>
                <ButtonsContainer
                    countries={ countries }
                    themes={ themes }
                    updateChosenCountry ={ updateChosenCountry }
                    updateChosenTheme={ updateChosenTheme }
                />
              </aside>

              <section id='policy-content'>
                <ul>
                    {
                        filterEntriesByTheme(filterEntriesByCountry()).map((item)=>
                        <li key={item.sys.id}>
                            <ItemCard item={item}/>
                        </li>)
                    }
                </ul>
              </section>
            </section>

          </section>
        </section>
    )
}

export default withContentful(ItemsContainer);
