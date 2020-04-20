import React from 'react'

export default function ItemCard({item}) {

    const makeDate = () => {
        const date = new Date(item.fields.date)
        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
        const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
        const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
        return `${day} ${month} ${year}`
    }


    return (
        <section className='item' >
            <h4 className='item-title'>{item.fields.title}</h4>
            {
                item.fields.type
                ?
                <section className='type-section'>
                    <p> Types:
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
            <p>{item.fields.description}</p>

        </section>
    )
}
