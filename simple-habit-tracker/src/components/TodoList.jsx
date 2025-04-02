import React, { useState, useEffect } from 'react';
import { FaPlus } from "react-icons/fa";
import { faSquare, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import './TodoList.css';

const TodoList = () => {
    const [tasks, setTasks] = useState([]); 
    const [taskInput, setTaskInput] = useState('');
    const [completedTasks, setCompletedTasks] = useState({});
    const [streaks, setStreaks]

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  const addTask = (taskText) => {
    if (taskText.trim() === '') {
      alert('Enter a task!');
      return;
    }

    const newTask = taskText.trim();
    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    setTaskInput('');
  };

  const removeTask = (taskText) => {
    const updatedTasks = tasks.filter(task => task !== taskText);


    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };


  return (
    <div style={{border: '2px solid red', marginTop: '140px'}}>
        <div>
        <h2>
            Habits
        </h2>
    </div>
    <div id="todo-app">
      <div id="AddInput">
        <input
            type="text"
            id="task-input"
            placeholder="Add new habit"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)} 
            onKeyDown={(e) => {
            if (e.key === 'Enter') {
                addTask(taskInput);
            }
            }}
        />
        <button
            id="add-task-btn"
            onClick={() => addTask(taskInput)}> 
            <FaPlus style={{marginRight: '8px' }} /> Add Task
        </button>
      </div>
      <ul id="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              className="remove-btn"
              onClick={() => removeTask(task)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    );
};

export default TodoList
