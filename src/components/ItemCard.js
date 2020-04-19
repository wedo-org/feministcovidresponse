import React from 'react'

export default function ItemCard({item}) {

    return (
        <section className='item' >
            <h4 className='item-title'>{item.fields.title}</h4>
            <p>{item.fields.description}</p>
        </section>
    )
}
