import { useState } from 'react'
import {Link} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Welcome to the SASE SDSU Chapter! </h1>
      <div>
                <nav className="nav-bar">
                    <h2 className="site-title"> SASE SDSU Chapter</h2>
                    <div className="headers">
                      <h2> Home </h2>
                      <h2> Executive Board </h2>
                      <h2> Events </h2>
                      <h2> Projects </h2>
                      <h2> Contact </h2>
                    </div>
                </nav>

      </div>
    </>
  )
}

export default App
