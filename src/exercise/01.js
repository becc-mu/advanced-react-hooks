// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// const countReducer = (state, action) => ({
//   ...state,
//   ...(typeof action === 'function' ? action(state) : action),
// })
const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + action.step}
    case 'DECREMENT':
      return {count: state.count - action.step}
    case 'RESET':
      return init(state.initialCount || 0)
    default:
      throw new Error(`Unsupported action type: ${action.type}`)
  }
}
const init = initialCount => ({count: initialCount})

function Counter({initialCount = 0, step = 1}) {
  const [state, despatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state
  const increment = () => despatch({type: 'INCREMENT', step})

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => despatch({type: 'INCREMENT', step})}>+</button>
      <button onClick={() => despatch({type: 'DECREMENT', step})}>-</button>
      <button onClick={() => despatch({type: 'RESET', step})}>reset</button>
    </div>
  )
}

function App() {
  return <Counter />
}

export default App
