import React from 'react'
import Fruits from './Fruits'

function FruitsTest() {
    // const fruits = ["Apple","Orange","Mango","Banana","Grape"]
    const fruits =[
        {name:"Apple",price: 10, soldout: false},
        {name:"Mango",price: 7, soldout: false},
        {name:"Orange",price: 2, soldout: true},
        {name:"Banana",price: 5, soldout: false},
        {name:"Grape",price: 6, soldout: true}
    ]

  return (
    <div>

        <ul>
            {fruits.map(fruit => 
                <Fruits
                    key={fruit.name}
                    name={fruit.name}
                    price={fruit.price}
                    soldout={fruit.soldout}
                />
            )}
        </ul>
        
    </div>
  )
}

export default FruitsTest





// JS
// const prices=[10,20,30]

// const discount = prices.map(price=>price* 31/100)

// console.log(discount)

// {fruits.map(fruit => 
//     <Fruits 
//         key={fruit.name}
//         name={fruit.name} 
//         price={fruit.price}
//         soldout={fruit.soldout}
//     />
// )}

