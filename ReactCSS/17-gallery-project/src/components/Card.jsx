import React from 'react'

function Card(props) {
   
  return (
    <div>
         <a href={props.elm.url} target="_blank"> 
         <div className="h-44 w-48  overflow-hidden ml-10 rounded-xl">
        <img className="h-full w-full object-cover" src={props.elm.download_url} alt="" />
      </div>
      <h2 className="ml-10 font-bold text-lg">{props.elm.author}</h2>
       </a>
    </div>
  )
}

export default Card