import React, {useState} from 'react';


function App() {
  const [var1, changeVar1] = useState(0)
  function increase(){
    changeVar1 (var1+1)
  }
  function decrease(){
    changeVar1(var1-1)
  }

  function Reset () {
    changeVar1(0)
  }

  function Add () {
    changeVar1(var1+5)
  }
 
  function Minimize () {
    changeVar1(var1-3)
  }
    
  return <div>
    <h1>{var1}</h1>
    <button onClick={decrease}>Reduce by one</button>
    <button onClick={increase}>Increase by one</button>

    <button onClick={Reset}> Reset </button>

    <button onClick={Add}> Add </button>

    <button onClick={Minimize}> Minimize </button>
    </div>

}

export default App;
 