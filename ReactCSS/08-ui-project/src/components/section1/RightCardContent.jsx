import React from 'react'

function RightCardContent(props) {
  return (
    <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between">
        <h2 className="bg-white rounded-full text-2xl font-semibold h-14 w-14 flex justify-center items-center"> {props.id}</h2>
        <div>
          <p className="text-xl mb-10 text-white leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi porro
            quasi deleniti maiores ut?
          </p>
          <div className="flex justify-between">
            <button className=" bg-blue-600 text-white font-medium px-8 py-2 rounded-full">{props.tag}</button>
            <button  className=" bg-blue-600 text-white font-medium px-3 py-2 rounded-full" >
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent