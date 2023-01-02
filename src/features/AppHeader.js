import React from 'react'
import { connect } from 'react-redux'

const AppHeader = ({count}) => {
  return (
    <header className="App-header">
      <h1>Counter Example: {count}</h1>
    </header>
  )
}

function mapStateToProps(state) {
  return {
    count: state.counter.value
  }
}

export default connect(mapStateToProps)(AppHeader)