import { useState } from 'react'
import { prompt } from 'react-dom';
import './App.css'

function App() {
  const [tasks, setTasks] = useState(['A']);
  const addTask=()=>{
    const newTask = prompt("Enter the Task:");
    if(newTask){
      setTasks([...tasks,newTask]);
    }
  };
  return (
    <>
      <div className="container">
        <div className="title">To Do List</div>
        <div className="menu-list-wrapper">
          <div className="Menu">
            <label className="label-menu">MENU</label>
            <button className="item1" onClick={addTask}>➕</button>
            <button className="item2">Ⓜ️</button>
            <button className="item3">🔍</button>
            <button className="item4">✔️</button>
          </div>
          <div className="list">
          {tasks.map((task, index) => (
              <div key={index} className={`card${index + 1}`}>{task}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
