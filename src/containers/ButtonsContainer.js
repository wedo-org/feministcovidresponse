import React from 'react'
import Button from '../components/Button'

export default function ButtonsContainer({countries, themes, updateChosenCountry, updateChosenTheme, chosenCountry, chosenTheme}) {

    return (
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
    )
}
