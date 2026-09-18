import React from 'react'
import Card from './component/Card'

const App = () => {
  return <div className='parent'>
      <Card name="sumit yadav" age={20} img ="https://images.pexels.com/photos/39390705/pexels-photo-39390705.jpeg"  />
      <Card name="Sarthak sharma" age={28} img = "https://images.pexels.com/photos/2519811/pexels-photo-2519811.jpeg" />
    </div>
}

export default App
