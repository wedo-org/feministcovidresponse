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

    const selectResources = () => {
        return entries.filter((e) => e.sys.contentType.sys.id === "resource")
    }

    let data = selectResources()

    console.log(data);

    return (
        <main className='main-container'>
            <Switch>
                <Route exact path="/" component={About} />
                <Route path="/about" component={About} />
                <Route path="/principles" component={Principles} />
                <Route path="/(resources|events|policy-tracker)/" component={(props) => <ItemsContainer {...props} items={data}/>}  />
                <Route component={NotFound} />
            </Switch>
        </main>
    )
}
