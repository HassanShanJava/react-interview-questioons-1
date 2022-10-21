import React, {useState} from "react"
import "../styles/Counter.css"

const Counter = () => {

    const [counter, setCounter]=useState(0);
    const CounterIncrease=()=>setCounter(counter+1)
    const CounterDecrease=()=>setCounter(counter-1)

  return (
    <div>
        <h1>My Counter</h1>
        <button onClick={CounterIncrease}>Count Increase</button>
        <p>{counter}</p>
        <button onClick={CounterDecrease}>Count Decrease</button>
    </div>
  )
}

export default Counter