import React from 'react';
import Sidebar from '../components/Sidebar';
import HabitList from '../components/HabitList.jsx';
import './Dashboard.css';

const Dashboard = () => {  
  return (
        <div className='dashBoardContainer'>
          <div className="dash"> 
            <Sidebar />
          </div>

          <div className="main-content">
            <HabitList />
          </div>
        </div>      
  ) 
}

export default Dashboard
