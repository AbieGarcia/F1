import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <div className="logo">
        <img src="../formula-1-logo.png" />
            <h2 className="titulo_logo"> Fromula1 </h2>
        </div>
        <div className="menu">
            <a>Home</a>
            <a>Drivers</a>
            <a>Constructors</a>
            <a>Fantasy</a>
            <a>LOG IN </a>
            <img src="formula-1-logo.png" width="60" height="44"/>
            </div>
        <div className="icons">
            
        </div>
    </div>


      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
