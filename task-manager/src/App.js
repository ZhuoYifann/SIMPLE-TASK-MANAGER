import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from './taskSlice'

function App() {

  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()
  const taskList = useSelector((state) => state.tasks.taskList)

  function handleAddTask() {
    if (inputValue.trim() === '') {
      alert('Please type a task first!')
      return
    }
    dispatch(addTask(inputValue))
    setInputValue('')
  }

  return (
    <div className="container">
      <h1>My Task List</h1>

      <div className="input-row">
        <input
          type="text"
          placeholder="Type a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input-box"
        />
        <button onClick={handleAddTask} className="add-btn">
          Add Task
        </button>
      </div>

      <ul className="task-list">
        {taskList.map((task, index) => (
          <li key={index} className="task-item">
            {task}
          </li>
        ))}
      </ul>

      {taskList.length === 0 && (
        <p className="empty-text">No tasks yet. Add one above!</p>
      )}
    </div>
  )
}

export default App