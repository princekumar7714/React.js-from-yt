import React from 'react'
import RightCard from './RightCard'

function RightText(props) {
 
  return (
    <div id='right' className=' h-full flex flex-nowrap rounded-4xl gap-5 overflow-x-auto p-4 w-2/3  ' >
     { props.users.map(function(elm, idx){

      return <RightCard key={idx} id ={idx} img={elm.img} tag = {elm.tag}/>

})}
    </div>
  )
}

export default RightText