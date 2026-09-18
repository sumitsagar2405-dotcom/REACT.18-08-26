import React from 'react'
import Card from './component/card'
import { nav } from "./component/card";

const App = ()=>{
  return <div>
    
    <Card/>
    {nav()}
    {Card()}
  </div>
}

export default App