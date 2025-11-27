import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

function App() {
  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1661627507929-f47f5080c33a?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1664475709166-73cc645242c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
      intro: '',
      tag: 'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1663013214350-ba40ee75bb22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661421838493-6fbed44e0f73?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'undercont'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661421838493-6fbed44e0f73?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'undercont'
    },
  ]
  return (
    <div>
      <Section1 users={users}/>
      {/* <Section2/> */}
    </div>
  )
}

export default App