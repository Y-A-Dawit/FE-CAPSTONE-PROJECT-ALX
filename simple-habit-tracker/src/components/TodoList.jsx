import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPlus } from "react-icons/fa";
import { faSquare, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import './TodoList.css';

const TodoList = () => {
    const [tasks, setTasks] = useState([]); 
    const [taskInput, setTaskInput] = useState('');
    const [completedTasks, setCompletedTasks] = useState({});
    const [streaks, setStreaks] = useState({});

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
    
    const storedCompletions = JSON.parse(localStorage.getItem('completedTasks') || '{}');
    setCompletedTasks(storedCompletions);

    const storedStreaks = JSON.parse(localStorage.getItem('streaks') || '{}');
    setStreaks(storedStreaks);

    const lastReset = localStorage.getItem('lastReset');
    if (!lastReset || new Date().getTime() - lastReset > 24 * 60 * 60 *1000) {
        resetCompletion();
    }
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

    const updatedCompletion = { ...completedTasks };
    delete updatedCompletion[taskText];
    setCompletedTasks(updatedCompletion);
    localStorage.setItem('completedTasks', JSON.stringify(updatedCompletion));
  };

  // starting from this line
  const toggleTaskCompletion = (task) => {
    setCompletedTasks((prev) => {
        const updatedCompletion = { ...prev, [task]: !prev[task] };
        localStorage.setItem('completedTasks', JSON.stringify(updatedCompletion));
        return updatedCompletion;
    });
    
    if (!completedTasks[task]) {
        setStreaks((prev) => {
            const updatedStreaks = { ...prev, [task]: (prev[task] || 0) + 1 };
            localStorage.setItem('streaks', JSON.stringify(updatedStreaks));
            return updatedStreaks;
        });
    }
    };

    const resetCompletion = () => {
        setCompletedTasks({});
        localStorage.setItem('completedTasks', JSON.stringify({}));
        localStorage.setItem('lastReset', new Date().getTime());
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
                <button id="add-task-btn" onClick={() => addTask(taskInput)}> 
                    <FaPlus style={{marginRight: '8px' }} /> Add Task
                </button>
            </div>
            <ul id="task-list">
                {tasks.map((task, index) => (
                <li key={index}>
                    <FontAwesomeIcon 
                        icon={completedTasks[task] ? faCheckSquare : faSquare} 
                        onClick={() => toggleTaskCompletion(task)} 
                        style={{ cursor: 'pointer', marginRight: '10px', fontSize: '20px', color: completedTasks[task] ? 'green' : 'gray' }}/>
                    <span 
                        style={{ textDecoration: completedTasks[task] ? 'line-through' : 'none', opacity: completedTasks[task] ? 0.5 : 1 }}>
                        {task}
                    </span>
                    <button className="remove-btn" onClick={() => removeTask(task)}>
                    Remove
                    </button>
                </li>
                ))}
            </ul>
            <div style={{marginTop: '20px', fontWeight:'bold'}}>
                <h3>Streaks:</h3>
                <ul>
                    {Object.entries(streaks).map(([task, count]) => (
                        <li key={task}>{task}: {count} days</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    );
};

export default TodoList
