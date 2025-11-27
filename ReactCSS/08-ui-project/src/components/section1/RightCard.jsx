import React from "react";
import RightCardContent from "./RightCardContent";

function RightCard(props) {
  return (
    <div className="h-full w-80 shrink-0 overflow-hidden relative rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src={props.img}
         />
     <RightCardContent id={props.id + 1} tag= {props.tag}/>
    </div>
  );
}

export default RightCard;
