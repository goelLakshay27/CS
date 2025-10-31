import { useState } from 'react'
import React from 'react'

function StateHandling() {
    const [counter,setCounter]=useState(20);

    function increaseCounterValue(){
        setCounter(counter+2);
    }
  return (
    <div>
        <h2>Counter value={counter}</h2>
        <button onClick={increaseCounterValue}>Increment counter</button>
        <button onClick={()=>setCounter(counter-2)}>Decrement counter</button>
    </div>
  )
}

export default StateHandling