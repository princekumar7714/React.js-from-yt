import React, { useState } from 'react'

function App() {
const [num, setnum] = useState({username: "prince", age : 12});

   function clickfub() {
 const newNum = {...num};
 newNum.username = 'Aman';
 newNum.age = 14;
setnum(newNum)
  }
  return (
    <div>
    <h1>{num.username} {num.age}</h1>
      <button onClick={clickfub}> clickeed me </button>
    </div>
  )
}

export default App