import React from 'react'

function App() {

  const formhandle =(e)=>{
     e.preventDefault();
    console.log("form submit");
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formhandle(e)
      }}> 
      <input type="text" placeholder='enter your name' />
      <button>submit</button>
    </form>
    </div>
  )
}

export default App