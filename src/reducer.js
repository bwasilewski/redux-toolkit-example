const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  // switch on the action.type
  switch (action.type) {
    // if the action.type is "counter/incremented"
    case "counter/incremented":
      // return an object that has a count of state.count + 1
      return {
        count: state.count + 1
      }
    // if the action.type is "counter/decremented"
    case "counter/decremented":
      // return an object that has a count of state.count - 1
      return {
        count: state.count - 1
      }
    // otherwise, return state
    default:
      return state
  }
}

// export the reducer
export default reducer