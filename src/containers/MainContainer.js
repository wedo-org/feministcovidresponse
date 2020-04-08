import React from 'react'
import ItemsContainer from './ItemsContainer'
import ButtonsContainer from './ButtonsContainer'

export default function MainContainer() {
    return (
        <main>
            hello from main
            <ButtonsContainer/>
            <ItemsContainer />
        </main>
    )
}
