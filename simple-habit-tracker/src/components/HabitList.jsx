import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPlus } from "react-icons/fa";
import { faSquare, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { Sparkles } from 'lucide-react';
import './HabitList.css';


const HabitList = () => {
    const [tasks, setTasks] = useState([]); 
    const [taskInput, setTaskInput] = useState('');
    const [completedTasks, setCompletedTasks] = useState({});
    const [streaks, setStreaks] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [quote, setQuote] = useState('');

  useEffect(() => {
    const quotes = [
        "Success is the sum of small efforts, repeated day in and day out.",
        "Your future is created by what you do today, not tomorrow.",
        "Small daily improvements are the key to staggering long-term results.",
        "The secret of getting ahead is getting started.",
        "Don't break the chain! Stay consistent.",
        "The only way to do great work is to love what you do",
        "Believe you can and you're halfway there!",
        "Don't watch the clock, do what it does. Keep Going!",
        "The future belongs to those who believe in the beuty of their dreams!",
        "The difference between ordinary and extraordinary is that little extra",
        "Start where you are. Use what you have. Do what you can.",
        "You don't have to be extreme, just consistent.",
        "Your habits will determine your future.",
        "Discipline is choosing between what you want now and what you want most.",
        "Don't wait. The time will never be just right.",
        "Motivation gets you going, but discipline keeps you growing."
    ];

    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
    
    const storedCompletions = JSON.parse(localStorage.getItem('completedTasks') || '{}');
    setCompletedTasks(storedCompletions);

    const storedStreaks = JSON.parse(localStorage.getItem('streaks') || '{}');
    setStreaks(storedStreaks);

    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);

    const lastReset = localStorage.getItem('lastReset');
    if (!lastReset || new Date().getTime() - lastReset > 24 * 60 * 60 *1000) {
        resetCompletion();
    }
    }, []);

  const addTask = (taskText) => {
    if (taskText.trim() === '') {
      alert('Enter a habit!');
      return;
    }

    if (taskText.trim().length > 10) {
        alert("Habit character cannot exceed more than 10!");
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
                        <h2 style={{marginBottom: '0'}}>
                            Habits
                        </h2>
                    </div>

                    <div id="habit-app" style={{}}>
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
                                    <button style={{width: "90px", height: "35px"}} className="remove-btn" onClick={() => removeTask(task)}>
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
                            <h3>Streak:<span style={{color: "gray", fontSize: '15px'}}>  this shows the number of days you keep committed to! </span></h3>
                            <ul style={{overflowY: "auto", height: "100px"}}>
                                {Object.entries(streaks).map(([task, count]) => (
                                    <li key={task}>{task}: {count} day</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MotivationSection" style={{padding: '20px', backgroundColor: "#f5f5f5", borderRadius: '8px', textAlign: "center", boxShadow: '5px 4px 8px rgba(0,0,0,0.1)', width: '550px', marginRight: '10px'}}>
                <h3 style={{display: 'flex', flexDirection: 'row', gap: "15px", textAlign: 'center'}}> 
                    <div>
                        <Sparkles />
                    </div>
                    <div>
                        Daily Motivation
                    </div>
                </h3>
                <p style={{fontStyle: "italic", fontSize:'18px'}}>"{quote}"</p>
            </div>
        </div>
    </>
    );
};

export default HabitList