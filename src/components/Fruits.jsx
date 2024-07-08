import React from 'react'

function Fruits({name,price, soldout}) {
  return (
    <>  
        <li>
          {name} {price} {soldout ? "- soldout" : ""}
        </li>
    </>
  )
}

export default Fruits

