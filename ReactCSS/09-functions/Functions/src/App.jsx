import React from 'react'

function App() {
   const btn1=()=>{
      // document.writeln("btn was cliccked")
      console.log("btuuron was clicked ")
    }
    const Mouseenter=()=>{
console.log("MouseEnter");
    }
    const Mouseexit=()=>{
      console.log("Mouse exit")
    }

    const onChange=(elm)=>{
      // onChange.style.backgroundColor.red;
      console.log(elm.target.value)
    }
  return (
   
    <div className='box' onMouseMove={Mouseenter}>
     
    </div>
  )
}

export default App