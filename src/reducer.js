import { combineReducers } from "@reduxjs/toolkit"
import counterSlice from "./features/counter/CounterSlice"

export default combineReducers({
  counter: counterSlice,
})