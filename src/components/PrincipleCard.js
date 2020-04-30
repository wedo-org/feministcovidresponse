import React, {useState} from 'react'
import orangeBlob from '../assets/images/orange-blob.png';

export default function PrincipleCard({principle}) {

    const [isActive, updateIsActive] = useState(false)

    const toggleClass = () => {
        updateIsActive(!isActive)
    }

    const makeParagraphs = () => {
        let paragraphs = principle.paragraphs.split('\n').map(p => p)
        return paragraphs;
    }

    return (
        <div className="accordion-item" onClick={()=>toggleClass()}>
            <section className="blob-principle">
              <img src={orangeBlob} className="orange-blob" alt=""/>
              <a className={`${isActive ? "active" : null}`}>{principle.title}</a>
            </section>
            <div className={`content ${isActive ? "active" : null}`}>
                {   principle.description
                    ?
                        <p className="principle-description">{principle.description} </p>
                    :
                    null
                }
                {   principle.items
                    ?
                        <ul>
                        {
                            principle.items.map((item) =>
                                <li key={item} className="principle-item">{item}</li>
                            )
                        }
                        </ul>
                    : null
                }
                {   principle.paragraphs
                    ?
                makeParagraphs().map(p => <p className="principle-description" key={principle.title}> {p}</p>)
                    :
                    null
                }
            </div>
        </div>
    )
}
