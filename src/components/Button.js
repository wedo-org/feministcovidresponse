import React from 'react'

export default function Button({text, items, updateChoice}) {

    const plural = text.replace("y", "ies")

    const handleChoice = (e) => {
        updateChoice(e.target.value)
    }

    return (
        <>
          <select className='policyOption' onChange={(e) => handleChoice(e)}>
            <option  value="All"> {`choose ${plural}`} </option>
              {
                  items.map(item =>  <option value={item} key={item}>{item}</option>)
              }
          </select>
        </>
    )

}
