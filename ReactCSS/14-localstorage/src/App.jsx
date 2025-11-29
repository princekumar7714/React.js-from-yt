import React from 'react'

function App() {
  // localStorage.setItem("username", "sarthak")
  // const user = localStorage.getItem("username");
  // console.log(user)
  // localStorage.removeItem("username");

  // const user = {
  //   username : "prince",
  //   age : 12,
  //   add : "baraut"
  // }

  // localStorage.setItem("user" , JSON.stringify(user))

  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user)
  return (
    
    <div>App</div>
  ) 
}

export default App