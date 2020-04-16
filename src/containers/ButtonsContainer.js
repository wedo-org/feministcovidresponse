import React from 'react'
import Button from '../components/Button'

export default function ButtonsContainer({countries, themes, updateChosenCountry, updateChosenTheme}) {
    
    return (
        <>
            <label>See </label>
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
        </>
    )
}
