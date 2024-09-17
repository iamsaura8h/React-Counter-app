import { useState } from "react";

function App() {
  
  let [counter,setCounter]=useState(15);


  const AddValue =() => {
    setCounter(counter+1)
  }

  const removeValue = () =>{
    if(counter<=0){
      setCounter(0)
    }else{
      setCounter(counter-1)
    }
  }

  return (
   
    <>
      <h1>Counter Component</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={AddValue} >inc value</button>
      <button onClick={removeValue} >dec value</button>
    </>
  );
}

export default App;
