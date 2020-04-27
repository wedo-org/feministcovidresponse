import React from 'react'

export default function ItemCard({item}) {
    const makeDate = () => {
        const date = new Date(item.fields.date)
        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
        const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
        const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
        return `${day} ${month} ${year}`
    }

    const markProgressive = () => {
        if (item.fields.progressive) {
            return "⬆️"
        } else if (typeof(item.fields.progressive) === "undefined"){
            return null
        } else {
            return "⬇️ "
        }
    }

    console.log(item);
    

    return (
        <section className='item' >
                {
                    item.fields.category.fields.name === "Tools"
                    ?
                    <section className="blob-resources">
                        <img src={require('../assets/images/blue-blob.png')} className="blue-blob" alt=""/>
                        <h4 className="response-title">{item.fields.title}</h4>
                    </section>
                    :
                    <h4 className='item-title'>
                        {markProgressive()}{item.fields.title}
                    </h4>
                }
            {
                item.fields.type
                ?
                <section className='type-section'>
                    <p> Types of response:
                      {item.fields.type.map((type) => <span id='type' key={type.sys.id}>{type.fields.name}</span>)}
                    </p>
                </section>
                :
                null
            }
            {
                item.fields.category.fields.name === "Events"
                ?
                <>
                    <strong> When: </strong>
                    {makeDate()}
                </>
                :
                null
            }
            <p className="item-description">{item.fields.description}
            <br/><br/>
                <a href={item.fields.link} target="_blank" rel="noopener noreferrer"><span id='read-more'>Read more <i className="gg-external" alt="external source icon"></i></span></a>
            </p>
        </section>
    )
}
