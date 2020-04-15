import React, { withRouter } from 'react'
import ItemCard from '../components/ItemCard'
import ButtonsContainer from './ButtonsContainer';
import { withContentful } from 'react-contentful';

function ItemsContainer(props) {

    // Sylwia: IN THE BELOW FUNCTION WE ALSO NEED TO MAKE A CALL TO AN APPROPRIATE SELECT FUNCTION, e.g. selectResourcesForThePage("Policy") -- let's keep in mind that the sectionTitle is different than what these entries' categories are called on the backend, sadly

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
