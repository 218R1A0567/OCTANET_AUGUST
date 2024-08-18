import { useState } from 'react';
import './App.css';
import './App2.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [showCompletedPanel, setShowCompletedPanel] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isModifying, setIsModifying] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
      setShowInput(false);
    }
  };

  const toggleInput = () => {
    setShowInput(!showInput);
    setIsModifying(false);
    setIsDeleting(false);
    setNewTask('');
    setEditIndex(null);
  };

  const toggleModifyMode = () => {
    setIsModifying(!isModifying);
    setIsDeleting(false);
    setShowInput(false);
    setNewTask('');
  };

  const toggleDeleteMode = () => {
    setIsDeleting(!isDeleting);
    setIsModifying(false);
    setShowInput(false);
  };

  const toggleCompletedPanel = () => {
    setShowCompletedPanel(!showCompletedPanel);
  };  

  const startEditing = (index) => {
    setEditIndex(index);
    setNewTask(tasks[index]);
    setShowInput(true);
  };

  const modifyTask = () => {
    if (newTask.trim() !== '' && editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setNewTask('');
      setEditIndex(null);
      setShowInput(false);
      setIsModifying(false);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const markAsDone = (index) => {
    const completedTask = tasks[index];
    setCompletedTasks([...completedTasks, completedTask]);
    deleteTask(index);
  };

  const markAsIncomplete = (index) => {
    const task = completedTasks[index];
    setTasks([...tasks, task]);
    const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updatedCompletedTasks);
  };

  const deleteCompletedTask = (index) => {
    const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updatedCompletedTasks);
  };

  return (
    <>
      <div className="container">
        <div className="title">To Do List</div>
        <div className="menu-list-wrapper">
          <div className="Menu">
            <label className="label-menu">MENU</label>
            <button className="item1" onClick={toggleInput}>➕</button>
            <button className="item2" onClick={toggleModifyMode}>Ⓜ️</button>
            <button className="item3" onClick={toggleDeleteMode}>➖</button>
            <button className="item4" onClick={toggleCompletedPanel}>✔️</button>
          </div>
          {showInput && (
            <div className="task-input-wrapper">
              <input 
                type="text" 
                autoFocus
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                placeholder="Enter a new task" 
              />
              {editIndex === null ? (
                <button onClick={addTask}>Add Task</button>
              ) : (
                <button onClick={modifyTask}>Modify Task</button>
              )}
            </div>
          )}
          <label className='task-label'>Tasks</label>
          <div className="list">
            {tasks.map((task, index) => (
              <div key={index} className={`card card${index + 1}`}>
                <div className="card-inner">
                  <div className="card-front">
                    {task}
                  </div>
                  <div className="card-back">
                    <button onClick={() => markAsDone(index)}>Mark as Done</button>
                  </div>
                </div>
                {isModifying && (
                  <button onClick={() => startEditing(index)}>Select to Modify</button>
                )}
                {isDeleting && (
                  <button onClick={() => deleteTask(index)}>Delete</button>
                )}
              </div>
            ))}
          </div>
        </div>
        {showCompletedPanel && (
          <div className={`completed-panel ${showCompletedPanel ? 'active' : ''}`}>
            <h2>Completed Tasks</h2>
            {completedTasks.map((task, index) => (
              <div key={index} className={`completed-card completed-card${index + 1}`}>
                <div className="completed-task">
                  <s>{task}</s>
                  <div className="completed-actions">
                    <button onClick={() => deleteCompletedTask(index)}>Delete</button>
                    <button onClick={() => markAsIncomplete(index)}>Mark as Incomplete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
