import React, { withRouter } from 'react'
import ItemCard from '../components/ItemCard'
import ButtonsContainer from './ButtonsContainer';
import { withContentful } from 'react-contentful';

function ItemsContainer(props) {

    const sectionTitle = () => {
        let title;
        switch (props.location.pathname) {
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
                {
                    props.items.map((item)=> <li><ItemCard item={item}/></li>)
                }
            </ul>
        </section>
        </>
    )
}

export default withContentful(ItemsContainer);
