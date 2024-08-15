import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="title">To Do List</div>
        <div className="menu-list-wrapper">
          <div className="Menu">
            Menu
            <div className="item1">➕</div>
            <div className="item2">Ⓜ️</div>
            <div className="item3">🔍</div>
            <div className="item4">✔️</div>
          </div>
          <div className="list">
            LIST
            <div className="card1">A</div>
            <div className="card2">B</div>
            <div className="card3">C</div>
            <div className="card4">D</div>
            <div className="card5">E</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
