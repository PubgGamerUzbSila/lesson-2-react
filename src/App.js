import { useState } from "react";
import "./App.css";


function App() {

  let [count, setCount] = useState(0);

  let increment = () => {
    setCount((c) => c + 1)
  }

  let reset = ()=>{
    setCount(()=> 0 )
  }
  let decrement = () => {
    setCount((c) => c - 1)
  }

  let incby7 = () => {
    setCount((c) => c + 7)
  }

  let decby7 = () => {
    setCount((c) => c - 7)
  }

  let multiply = () => {
    setCount((c) => c * 2)
  }

  let devide = () => {
    setCount((c) => c / 2)
  }
  
  
  return <div className="box">
    <span className="count">{count}</span>
      <div className="all">
         <button onClick={increment}>Increment</button>
         <button onClick={reset}>Reset</button>
         <button onClick={decrement}>Decrement</button>
         <button onClick={incby7}>Incby7</button>
         <button onClick={decby7}>Decby-7</button>
         <button onClick={multiply}>Muit2</button>
         <button onClick={devide}>Div2</button>
      </div>
  </div>
}

export default App;
