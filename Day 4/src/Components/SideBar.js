import React from 'react';
import './SideBar.css';
import { useNavigate } from 'react-router-dom';

function SideBar() {
  const navigate = useNavigate();

  const dashboardHandler = () => {
    navigate('/dashboard');
  };

  const profileHandler = () => {
    navigate('/profile');
  };

  const settingsHandler = () => {
    navigate('/settings');
  };

  const logoutHandler = () => {
    navigate('/login');
  };

  return (
    <div className='sidebar'>
      <div className='sidebar-container'>
        <button className='dashboard' key='/dashboard' onClick={dashboardHandler}>
        <strong>DashBoard</strong>
        </button>
        <button className='profile' key='/profile' onClick={profileHandler}>
        <strong>Profile</strong>
        </button>
        
        <button className='settings' key='/settings' onClick={settingsHandler}>
          <strong>Settings</strong>
        </button>
        <button className='logout' key='/logout' onClick={logoutHandler}>
        <strong>Logout</strong>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
