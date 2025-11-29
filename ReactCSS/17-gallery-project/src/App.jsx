import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
function App() {
  const [userdata, setUserdata] = useState([])
  const [index, setindex] = useState(1)
  const getData = async () =>{
 const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
setUserdata(response.data)
console.log(response.data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printuserData  = <h1 className="text-white text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h1>;
  if(userdata.length>0){
    printuserData = userdata.map(function(elm,idx){
      return <div key={idx}>
      <Card elm = {elm}/>
      </div>
      
    })
  }
  return (
    <div className="h-1000 p-4 bg-black text-white ">
     <h1 className="fixed bg-red-400 text-6xl">{index}</h1>
<div className="flex flex-wrap gap-5 ">
        {printuserData}
</div>
<div className="flex justify-center gap-6 items-center p-4">
  <button 
  style={{opacity : index ==1 ? 0.6 : 1}}
  className="bg-amber-600 text-sm cursor-pointer  active:scale-95 rounded px-4 py-2 font-semibold" 
  
  onClick={()=>{
   if(index>1){
     setindex(index-1)
     setUserdata([])
   }
  }}>Prev</button>
  <h4 className="text-white text-2xl">page : {index}</h4>
  <button className="bg-amber-600 text-sm cursor-pointer  active:scale-95 rounded px-4 py-2 font-semibold" 
  
  onClick={()=>{
    setUserdata([])
setindex(index+1)
  }}>next</button>
</div>
    </div>
  );
}

export default App;
