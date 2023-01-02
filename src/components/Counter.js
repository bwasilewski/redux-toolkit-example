import React, { useState } from 'react';


const defaultState = 0

const Counter = () => {
  const [currentCount, setCurrentCount] = useState(defaultState)

  const increment = () => setCurrentCount(currentCount + 1);

  const decrement = () => setCurrentCount(currentCount - 1);

  return (
    <div>
      <h1>Counter</h1>
      <div className="is-flex">
        <button onClick={decrement} type="button">Decrement</button>
        <h2>{currentCount}</h2>
        <button onClick={increment} type="button">Increment</button>
      </div>
    </div>
  );
}
 
export default Counter