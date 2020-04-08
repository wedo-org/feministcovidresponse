import React from 'react'
import ItemCard from '../components/ItemCard'
import ButtonsContainer from './ButtonsContainer';

export default function ItemsContainer({location:{pathname}}) {

    const sectionTitle = () => {
        let title;
        switch (pathname) {
            case "/policy-tracker":
                title = "Policy Tracker"
                break
            case "/events":
                title = "Events"
                break
            case "/resources":
                title = "Resources"
                break
            default:
                title = ""
        }
        return title
    }

    return (
        <>
        <h1> {sectionTitle()} </h1>
        <section>

            <ButtonsContainer/>
            <ul>
                <li><ItemCard /></li>
            </ul>
        </section>
        </>
    )
}
