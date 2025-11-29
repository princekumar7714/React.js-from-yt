import axios from "axios";

function App() {
  // get api data from fetch method 
  // const getData = () => {
  //   console.log("data aa chuka h sir");
  //  const response= fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // };

   // get api data from async await method 
  // async function getdata1(){
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  //   console.log(response)
  // }

  const getData = async () =>{

    const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos")
    console.log(data)
  }
  return (
    <div>
      <button className="btn" onClick={getData}>
        set data
      </button>
     
      {/* <button className="btn" onClick={getdata1}>
        set data
      </button> */}
    </div>
  );
}

export default App;
