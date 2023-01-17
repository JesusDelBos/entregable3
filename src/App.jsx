import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import header from '../src/assets/img/rectangle-1.svg'
import Riandm_app from './components/Riandm_app'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
          <img src = {header} alt="" width="100%" />
      </header>
      <Riandm_app />
      
      <footer>

      </footer>
    </div>
  )
}

export default App
