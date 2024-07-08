import React, { useState } from 'react'

function Counter() {
    // state variable => value is for only first var
    const [count,setCount] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);

    function handleClick(){
        setCount(count + 1)   // inc count using setcount
    }

    function decrement(){
        count > 0 ? setCount(count - 1) : ""
    }

    function increaseInc(){
        setIncrementBy(incrementBy + 1)
    }


    function decreaseInc(){
        incrementBy > 1 ? setIncrementBy(incrementBy - 1) : ""
    }

  return (
    <div>
        <h1>Count value is: {count}</h1>
        <button onClick={handleClick}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <h1>We are incrementing the value by: {incrementBy}</h1>
        <button onClick={increaseInc}>Increase Increment</button>
        <button onClick={decreaseInc}>Decrease Decrement</button>
    </div>
  )
}

export default Counter