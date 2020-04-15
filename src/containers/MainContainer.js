import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import { contentfulClient } from '../utils.js'
import ItemsContainer from './ItemsContainer';
import About from '../components/About'
import NotFound from '../components/NotFound'
import Principles from '../components/Principles'

export default function MainContainer() {

    const [entries, updateEntries] = useState([])

    contentfulClient.getEntries()
    .then((response) => {
        // console.log("ENTRIES", response.items);
        updateEntries(response.items)
    })
    .catch(console.error)

    // selects all resources (i.e. not countries, not themes, not types)
    const selectResources = () => {
        return entries.filter((entry) => entry.sys.contentType.sys.id === "resource")
    }

    // returns resources for each page -- it accepts an argument of a string that's the name of the page
    const selectResourcesForThePage = (str) => {
        return selectResources().filter((entry) => entry.fields.category.fields.name === str)
    }
    // console.log(selectResourcesForThePage("Tools"))
    // console.log(selectResourcesForThePage("Policy"))

    /////////////// RETURNS ALL AVAILABLE COUNTRIES
    const selectCountries = () => {
        return entries.filter((entry) => entry.sys.contentType.sys.id === "country").map((c) => c.fields.name)
    }
    // console.log(selectCountries());
    
    /////////////// RETURNS ALL AVAILABLE THEMES
    const selectThemes = () => {
        return entries.filter((entry) => entry.sys.contentType.sys.id === "name").map((c) => c.fields.name)
    }
    // console.log(selectThemes()) 
    

    return (
        <main className='main-container'>
            <Switch>
                <Route exact path="/" component={About} />
                <Route path="/about" component={About} />
                <Route path="/principles" component={Principles} />
                <Route path="/(resources|events|policy-tracker)/" component={(props) => <ItemsContainer {...props} items={selectResources()}/>}  />
                <Route component={NotFound} />
            </Switch>
        </main>
    )
}
