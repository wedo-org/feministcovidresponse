import React from 'react'

export default function ItemCard({item}) {    
    
    return (
        <>
            <h4>{item.fields.title}</h4>
            <strong> Types: </strong>
            {
                item.fields.type.map((type) => <span key={type.sys.id}>{type.fields.name}</span>)
            }
            <p>{item.fields.description}</p>
        </>
    )
}
