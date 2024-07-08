import React, { useState } from 'react'

function Form() {
  const [name,setName] = useState({firstName: "", lastName: ""})

  function handleSubmit(e){
    // prevent default refresh behavior of Browser
    e.preventDefault();
    console.log(name);
  }

  return (
    <div>
      
      {name.firstName} - {name.lastName}
      <form>
             {/* use spread operator for fname & lname */}      
        <input onChange={(e)=>setName({...name, firstName: e.target.value})} 
        type='text' value={name.firstName}/> 
        <br/><br/>
        <input onChange={(e)=>setName({...name, lastName:e.target.value})} 
        type='text' value={name.lastName} /> <br/><br/>

        <button onClick={(e)=>handleSubmit(e)}>Add</button>  
      </form>
        
    </div>
  )
}

export default Form


// onChange = {function demo(e){
//   return handleChange(e);
// }}

// Spread Operator (...) => copying on existing array

