import React from 'react'
import Button from '../components/Button'
import Legend from '../components/Legend'


export default function ButtonsContainer({countries, themes, updateChosenCountry, updateChosenTheme, chosenCountry, chosenTheme, location}) {
        
    return (
        <>
        <aside className='policyButtons'>
            <p>See </p>
            <Button
                text = { "country" }
                items = { countries }
                updateChoice = { updateChosenCountry }
                chosen = { chosenCountry }
            />
            <Button
                text = { "category" }
                items = { themes }
                updateChoice = { updateChosenTheme }
                chosen = { chosenTheme }

            />
        </aside>
        {
            location === "/response-tracker"
            ?
            <Legend />
            :
            null
        }
        </>
    )
}
