import React from 'react'

export default function ItemCard({item}) {
    
    return (
        <>
            <h4>{item.fields.title}</h4>
            <p>{item.fields.description}</p>
        </>
    )
}
