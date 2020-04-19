import React from 'react'
import Button from '../components/Button'

export default function ButtonsContainer({countries, themes, updateChosenCountry, updateChosenTheme}) {

    return (
        <aside className='policyButtons'>
            <p>See </p>
            <Button
                text={"country"}
                items={countries}
                updateChoice ={updateChosenCountry}
            />
            <Button
                text={"category"}
                items={themes}
                updateChoice ={updateChosenTheme}
            />
        </aside>
    )
}
