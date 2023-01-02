import React, { useState } from 'react'
import store from '../../store'

const Counter = () => {
  const [count, setCount] = useState(store.getState().counter.value)

  const increment = () => {
    store.dispatch({ type: "counter/increment" })
    setCount(store.getState().counter.value)
  }

  const decrement = () => {
    store.dispatch({ type: "counter/decrement" })
    setCount(store.getState().counter.value)
  }

  return (
    <div>
      <h1>Counter</h1>
      <div className="is-flex">
        <button onClick={decrement} type="button">Decrement</button>
        <h2>{count}</h2>
        <button onClick={increment} type="button">Increment</button>
      </div>
    </div>
  );
}
 
export default Counter