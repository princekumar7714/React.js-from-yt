import React, { useState } from 'react'

function App() {
  const [num, setnum] = useState(0);

  function increase(){
    console.log("increseing");
   setnum(num + 10);
  }
  function decrese(){
    console.log("Decresing");
    setnum(num  - 5);
  }
  function mul(){
    console.log("multiply")
    setnum(num  * 2);
  }
  function div(){
    console.log("division")
    setnum(num / 2);
  }
  function Reset(){
    console.log("Reset")
    setnum(0);
  }
  return (
    <div className='flex'>  
      <h1 className='num1'>{num}</h1>
      <button onClick={increase}>increse</button>
      <button onClick={decrese}>Decrese</button>
      <button onClick={mul}>multiply</button>
      <button onClick={div}>divide</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default App