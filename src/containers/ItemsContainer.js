import React, { withRouter, useState, useEffect } from 'react'
import ItemCard from '../components/ItemCard'
import ButtonsContainer from './ButtonsContainer';
import { withContentful } from 'react-contentful';
import { fetchResourcesForThePage, fetchCountries, fetchThemes } from '../utils.js'

function ItemsContainer(props) {

    // clicking on the button selects a country or theme, and that filters entries;
    // pass down as props updateChosenCountry and updateChosenCategory to the ButtonCont

    const [ entries, updateEntries ] = useState([])
    const [ title, updateTitle ] = useState('')
    const [ countries, updateCountries ] = useState([])
    const [ themes, updateThemes ] = useState([])
    const [ chosenCountry, updateChosenCountry ] = useState('')
    const [ chosenCategory, updateChosenCategory ] = useState('')

    useEffect( () => {
      sectionTitle()
    }, [])

    useEffect( () => {
        getCountries()
      }, [])

      useEffect( () => {
        getThemes()
      }, [])

    const getEntries = async (location) => {
      const items = await fetchResourcesForThePage(location);
      updateEntries(items)
      return items;
    }

    const getCountries = async () => {
        const countries = await fetchCountries();
        updateCountries(countries)
        return countries
    }

    const getThemes = async () => {
        const themes = await fetchThemes()
        updateThemes(themes)
        return themes
    }


    // Sylwia: IN THE BELOW FUNCTION WE ALSO NEED TO MAKE A CALL TO AN APPROPRIATE SELECT FUNCTION, e.g. selectResourcesForThePage("Policy") -- let's keep in mind that the sectionTitle is different than what these entries' categories are called on the backend, sadly

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
        <>
        <h1> {title} </h1>
        <section>

            <ButtonsContainer/>
            <ul>
                {
                    entries.map((item)=> 
                    <li key={item.sys.id}>
                        <ItemCard item={item}/>
                    </li>)
                }
            </ul>
        </section>
        </>
    )
}

export default withContentful(ItemsContainer);
