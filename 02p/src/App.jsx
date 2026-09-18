import React from 'react'
import card from './component/Card'

const App = () => {
  return <div className='parent'>
      {card()}
      {card()}
      {card()}
      <card />
    </div>
}

export default App
