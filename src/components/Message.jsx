import React from 'react'

function Message() {

    function handleClick(){
        console.log("Button Clicked");
    }

  return (
    <div>
        <button onClick={handleClick}>Click here to get a menu</button>
    </div>
  )
}

export default Message