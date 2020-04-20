import React from 'react'

export default function ItemCard({item}) {

    return (
        <section className='item' >
            <h4 className='item-title'>{item.fields.title}</h4>
            <strong> Types: </strong>
            {
                item.fields.type.map((type) => <span key={type.sys.id}>{type.fields.name}</span>)
            }
            <p>{item.fields.description}</p>
        </section>
    )
}
