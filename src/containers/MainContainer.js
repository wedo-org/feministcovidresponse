import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ItemsContainer from './ItemsContainer';
import About from '../components/About'
import NotFound from '../components/NotFound'
import PrinciplesContainer from './PrinciplesContainer'

export default function MainContainer() {

    return (
        <main className='main-container'>
            <Switch>
                <Route exact path="/" component={About} />
                <Route path="/about" component={About} />
                <Route path="/principles" component={PrinciplesContainer} />
                <Route path="/(resources|online-dialogues|response-tracker)/" component={(props) => <ItemsContainer {...props} items={{/* some function or data */}}/>}  />
                <Route component={NotFound} />
            </Switch>
        </main>
    )
}
