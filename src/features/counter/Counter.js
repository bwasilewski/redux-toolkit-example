import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

const Counter = ({count}) => {
  const increment = () => {
    store.dispatch({ type: "counter/increment" })
  }

  const decrement = () => {
    store.dispatch({ type: "counter/decrement" })
  }

  const incrementByAmount = () => {
    store.dispatch({ type: "counter/incrementByAmount", payload: 5 })
  }

  return (
    <div>
      <h1>Counter</h1>
      <div className="is-flex">
        <button onClick={decrement} type="button">Decrement</button>
        <h2>{count}</h2>
        <button onClick={increment} type="button">Increment</button>
        <button onClick={incrementByAmount} type="button">
          Increment by amount
        </button>
      </div>
    </div>
  );
}
 
const mapStateToProps = (state) => {
  return {
    count: state.counter.value
  }
}

export default connect(mapStateToProps)(Counter)