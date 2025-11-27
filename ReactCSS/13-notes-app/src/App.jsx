import React, { useState } from "react";


function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
       const copyTask = [...task];
      
    copyTask.push({title, details})
    setTask(copyTask);
     console.log(copyTask)
    setTitle("");
    setDetails("");
  };
 
  const deleteNote =(idx)=>{
   const copyTask = [...task];
   copyTask.splice(idx,1);
   setTask(copyTask)
  }
  
  return (
    <div className="h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
       
        }}
        className="flex justify-between items-start  p-10"
      >
        <div className=" flex items-start flex-col  gap-5 w-1/2 ">
          <h1 className="text-3xl font-bold ml-10 mb-2">ADD Notes</h1>
          <input
            type="text"
            placeholder="enter task here"
            className="px-5 w-full py-2 border-2 font-medium outline-none rounded"
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />
          <textarea
            type="text"
            placeholder="write details"
            className="px-5 w-full  h-32 py-2 flex flex-row  font-medium items-start border-2 outline-none rounded"
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          />
          <button className="bg-white w-full active:bg-gray-400 text-black outline-none px-5 py-2 font-medium rounded">
            {" "}
            Add notes
          </button>
        </div>
        <img
          className="h-52 rotate-y-180"
          src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
          alt=""
        />
      </form>

      <div className=" bg-black mb-3 border-t-2">
        <h1 className="text-3xl font-bold ml-10 mb-2">Recent Notes</h1>
        <div className="flex flex-wrap gap-3 ml-10 overflow-auto">
        {task.map(function(elm,idx){
          return   <div key={idx} className=" relative flex flex-col items-start justify-between h-52 w-52 rounded-2xl p-8 px-9 pb-10  bg-cover text-black bg-[url('https://png.pngtree.com/png-clipart/20230413/original/pngtree-paper-notes-with-realistic-shadow-transparent-png-image_9049390.png')]">
        
            <h3 className="leading-tight font-bold text-xl">{elm.title}</h3>
            <p className="mt-4 leading-tight font-medium text-gray-600">{elm.details}</p>
            <button onClick={()=>{
              deleteNote(idx)
            }} className="w-full bg-red-500 cursor-pointer active:scale-95 font-bold rounded text-white">Delete</button>
          </div>
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
