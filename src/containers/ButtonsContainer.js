import React from 'react'
import Button from '../components/Button'
import Legend from '../components/Legend'


export default function ButtonsContainer({countries, categories, updateChosenCountry, updateChosenCategory, chosenCountry, chosenTheme, location}) {
        
    return (
        <>
        <aside className='policyButtons'>
            <p>See </p>
            <Button
                text = { "countries" }
                items = { countries }
                updateChoice = { updateChosenCountry }
                chosen = { chosenCountry }
            />
            <Button
                text = { "categories" }
                items = { categories }
                updateChoice = { updateChosenCategory }
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
