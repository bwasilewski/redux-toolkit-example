import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './CounterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter</h1>
      <div className="is-flex">
        <button onClick={() => dispatch(decrement())} type="button">Decrement</button>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())} type="button">Increment</button>
        <button onClick={() => dispatch(incrementByAmount())} type="button">
          Increment by amount
        </button>
      </div>
    </div>
  );
}
 
export default Counter