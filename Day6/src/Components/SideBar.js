  import React from 'react';
  import './SideBar.css';
  import { useNavigate } from 'react-router-dom';
  import HowToVoteIcon from '@mui/icons-material/HowToVote';
  import FeedbackIcon from '@mui/icons-material/Feedback';
  import GroupsIcon from '@mui/icons-material/Groups';
  import LogoutIcon from '@mui/icons-material/Logout';

  function SideBar() {
    const navigate = useNavigate();

    const dashboardHandler = () => {
      navigate('/dashboard');
    };

    const profileHandler = () => {
      navigate('/feedback');
    };

    const settingsHandler = () => {
      navigate('/parties');
    };

    const logoutHandler = () => {
      navigate('/login');
    };

    return (
      <div className='sidebar'>
        <div className='sidebar-container'>
          <button className='dashboard' key='/dashboard' onClick={dashboardHandler}>
          <HowToVoteIcon/>
            <strong>Vote now</strong>
          </button>
          <button className='profile' key='/profile' onClick={profileHandler}>
         < FeedbackIcon/>
            <strong>Feedback</strong>
          </button>
          <button className='settings' key='/settings' onClick={settingsHandler}>
          <GroupsIcon />  
            <strong>Teams INFO</strong>
          </button>
          <button className='logout' key='/logout' onClick={logoutHandler}>
          <LogoutIcon/>
            <strong>Logout</strong>
          </button>
        </div>
      </div>
    );
  }

  export default SideBar;
