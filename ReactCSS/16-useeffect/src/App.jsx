import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [num, setnum] = useState(0);
  const [num2, setnum2] = useState(1000);

  useEffect(function () {
    console.log("useeffcet is runing ");
  }, [num2]);

  return (
    <div>
      <h1> value of num is {num}</h1>
      <h1> value of num2 is {num2}</h1>
      <button
        onClick={() => {
          setnum(num + 1);
        
        }}
        onMouseEnter={
          () => {
        
          setnum2(num2 + 1);
           } }
      >
        click me
      </button>
    </div>
  );
}

export default App;
