import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

function Page1Content(props) {
  return (
    <div className='py-3 flex items-center gap-10 justify-between  h-[95vh]  px-18'>
        <LeftText/>
        <RightText users = {props.users} tag ={props.tag} />
    </div>
  )
}

export default Page1Content