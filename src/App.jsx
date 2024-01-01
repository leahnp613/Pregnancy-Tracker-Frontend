import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://www.svgrepo.com/svg/35764/pregnant-woman-and-fetus" target="_blank">
          <img src="https://www.svgrepo.com/svg/35764/pregnant-woman-and-fetus" className="logo" alt="Pregnant Woman and Fetus SVG" />
        </a>
      </div>
      <h1>Pregnancy Tracker</h1>
      <div className="card">
        <button>Create A Free Profile Today!
        </button>
        <p>
          Created by Leah Nagarpowers
        </p>
      </div>
      <p className="read-the-docs">
        Track your pregnancy each week with this tool!
      </p>
    </div>
  )
}

export default App
