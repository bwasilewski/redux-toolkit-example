import React from 'react'
import { connect } from 'react-redux'

const AppFooter = ({count}) => {
  return (
    <footer className="App-footer">
      <a
        className="App-link"
        href="https://redux.js.org/tutorials/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Redux
      </a>
      <small>{count}</small>
    </footer>
  )
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(AppFooter)