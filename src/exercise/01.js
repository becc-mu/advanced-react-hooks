// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, action) => ({
  ...state,
  ...(typeof action === 'function' ? action(state) : action),
})
const init = initialCount => ({count: initialCount})

function Counter({initialCount = 0, step = 1}) {
  const [state, despatch] = React.useReducer(countReducer, initialCount, init)

  const {count} = state
  const increment = () =>
    despatch(currentState => ({count: currentState.count + step}))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
