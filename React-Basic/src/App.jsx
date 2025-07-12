import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting.jsx'
import { Counter, Timer } from './Counter.jsx'

function App() {
  const user = {name:"Phyoe", age:21};
  return (
    <div>
      <Greeting {...user}/>
      <Counter />
      <Timer />
    </div>
  );
}

export default App
