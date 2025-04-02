import React from 'react'
import Sidebar from '../components/Sidebar'
import TodoList from '../components/TodoList.jsx';
import './Dashboard.css';

const Dashboard = () => {

  return (
    <div id='dashBoardBody'>
        <div className='dashBoardContainer'>
          <div className='dash' style={{border: 'none'}}>
            <Sidebar />
          </div>

          <div className="main-content">
            <TodoList />
          </div>
        </div>
    </div>
      
  ) 
}

export default Dashboard
