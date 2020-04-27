import React, {useState} from 'react'

export default function PrincipleCard({principle}) {

    const [isActive, updateIsActive] = useState(false)

    const toggleClass = () => {
        updateIsActive(!isActive)
    }        

    return (
        <div className="accordion-item" onClick={()=>toggleClass()}>
            <img src={require('../assets/images/orange-blob.png')} className="orange-blob" alt=""/>
            <a className={`${isActive ? "active" : null}`}>{principle.title}</a>
            <div className={`content ${isActive ? "active" : null}`}>
                <p className="principle-description">{principle.description} </p>
                <ul>
                    {
                        principle.items.map((item) =>
                            <li key={item} className="principle-item">{item}</li>
                        )
                    }
                    </ul>
                
            </div>
        </div>
    )
}
