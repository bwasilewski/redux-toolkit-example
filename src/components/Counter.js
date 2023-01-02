import React, { useState } from 'react'
import store from '../store'

const Counter = () => {
  const [count, setCount] = useState(store.getState().count)

  const increment = () => {
    store.dispatch({ type: "counter/incremented" })
    setCount(store.getState().count)
  }

  const decrement = () => {
    store.dispatch({ type: "counter/decremented" })
    setCount(store.getState().count)
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