import React, { useState } from 'react'

function App() {
  const [title, setTitle] = useState("")

  const formhandle =(e)=>{
     e.preventDefault();
    console.log("form submit by" ,title);
    setTitle('');
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formhandle(e)
      }}> 
      <input type="text" placeholder='enter your name'  
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value);
      }}
      />
      <button>submit</button>
    </form>
    </div>
  )
}

export default App