import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPlus } from "react-icons/fa";
import { faSquare, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import './HabitList.css';

const motivationalQuotes = [
    "Success is the sum of small efforts, repeated day in and day out.",
    "Your future is created by what you do today, not tomorrow.",
    "Small daily improvements are the key to staggering long-term results.",
    "The secret of getting ahead is getting started.",
    "Don't break the chain! Stay consistent."
];

const HabitList = () => {
    const [tasks, setTasks] = useState([]); 
    const [taskInput, setTaskInput] = useState('');
    const [completedTasks, setCompletedTasks] = useState({});
    const [streaks, setStreaks] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

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
  
    const updatedStreaks = { ...streaks };
    delete updatedStreaks[taskText];
    setStreaks(updatedStreaks);
    localStorage.setItem('streaks', JSON.stringify(updatedStreaks));
    };

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
    <>
        <div className="dash-Container">
            <div className="Habit-Container" style={{marginTop: '70px'}}>
                <div>
                    <div className="searchBar">
                        <input
                            type="text"
                            placeholder="Search habits..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ width: '43%', padding: '8px', marginBottom: '0px', marginLeft: '70px', marginTop: "10px" , border: "0.9px solid #bfbdbd"}}
                            />
                    </div>
                    <div>
                        <h2 style={{marginLeft: "8%", marginBottom: '0'}}>
                            Habits
                        </h2>
                    </div>

                    <div id="habit-app">
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
                            {tasks.filter(task => task.toLowerCase().includes(searchTerm.toLowerCase()))
                            .map((task, index) => (
                            <li key={index} style={{width: '100%', display: "flex", flexDirection: "column"}}>
                                <div style={{display: 'flex', flexDirection: "row", alignItems:"center", gap:"10px"}}>
                                    <FontAwesomeIcon 
                                        icon={completedTasks[task] ? faCheckSquare : faSquare} 
                                        onClick={() => toggleTaskCompletion(task)} 
                                        style={{ cursor: 'pointer', marginRight: '10px' , fontSize: '20px', color: completedTasks[task] ? '#2A858F' : '#ff6347' }}/>
                                    <span 
                                        style={{ textDecoration: completedTasks[task] ? 'line-through' : 'none', opacity: completedTasks[task] ? 0.5 : 1 }}>
                                        {task}
                                    </span>
                                    <button className="remove-btn" onClick={() => removeTask(task)}>
                                    Remove
                                    </button>
                                </div>
                                <div>
                                    <div className="hr" style={{ backgroundColor: '#2A858F', border: "none", margin: "6px", width: "100%"}}></div>
                                </div>
                            </li>
                            ))}
                        </ul>
                        <div style={{marginTop: '7px', fontWeight:'bold', padding: "0px"}}>
                            <h3>Streak:</h3>
                            <ul style={{overflowY: "auto", height: "100px"}}>
                                {Object.entries(streaks).map(([task, count]) => (
                                    <li key={task}>{task}: {count} day</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '100%' }}>
                <h3>💡 Daily Motivation</h3>
                <p style={{ fontStyle: 'italic', fontSize: '16px', color: '#555' }}>
                    "{randomQuote}"
                </p>
            </div>
        </div>
    </>
    );
};

export default HabitList