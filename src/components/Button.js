import React from 'react'

export default function Button({text, items, updateChoice, chosen}) {    

    const handleChoice = (e) => {        
        updateChoice(e.target.value)
    }    

    return (
        <>
          <select value={chosen} className='policyOption' onChange={(e) => handleChoice(e)}>
            <option  value="All"> {`choose ${text}`} </option>
              {
                  items.map(item =>  <option value={item} key={item}>{item}</option>)
              }
          </select>
        </>
    )

}
