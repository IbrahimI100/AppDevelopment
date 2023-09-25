import React from 'react';
import barca from "../Assets/Image/barca.jpg";
import madrid from "../Assets/Image/madrid.jpg";
import bayern from "../Assets/Image/bayern.jpg";
import mancity from "../Assets/Image/mancity.jpg";
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementTotal,
  incrementParty1,
  incrementParty2,
  incrementParty3,
  incrementParty4,
} from '../redux/Counter';
import './DashBoard.css';
import Header from '../Components/NavBar';
import votepage from '../Assets/Image/votepage.jpg';

function DashBoard() {
  const { total, partyCounts } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const parties = [
    {
      name: 'Real Madrid',
      logo: madrid,
      index: 0,
    },
    {
      name: 'FC Barcelona',
      logo: barca,
      index: 1,
    },
    {
      name: 'FC Bayern',
      logo: bayern,
      index: 2,
    },
    {
      name: 'Manchester City',
      logo: mancity,
      index: 3,
    },
  ];

  const handleVote = (partyIndex) => {
    dispatch(incrementTotal());
    switch (partyIndex) {
      case 0:
        dispatch(incrementParty1());
        break;
      case 1:
        dispatch(incrementParty2());
        break;
      case 2:
        dispatch(incrementParty3());
        break;
      case 3:
        dispatch(incrementParty4());
        break;
      default:
        break;
    }
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div className="dashboard-container">
      <Header />
      
      <div className="header-image4">
      <img src={votepage} alt="FCb" />
    </div>
      <h3 className='count-display1'>
        Vote like it's the World Cup final, and your team is counting on you to score the winning goal for a better future
      </h3>
      <div className="party-container">
        {parties.map((party, index) => (
          <div key={index} className="party">
            <div className="party-info">
              <img src={party.logo} alt={`${party.name} Logo`} className="party-logo" />
              <h2>{party.name}</h2>
            </div>
            <button className="vote-button" onClick={() => handleVote(party.index)}>
              Vote
            </button>
          </div>
        ))}
      </div>
      <div className="vote-display">
        <h2 className="count-display">Vote Counts</h2>
        <div className="vote-count">
          Real Madrid: <span>{partyCounts[0]}</span>
        </div>
        <div className="vote-count">
          FC Barcelona: <span>{partyCounts[1]}</span>
        </div>
        <div className="vote-count">
          FC Bayern: <span>{partyCounts[2]}</span>
        </div>
        <div className="vote-count">
          Manchester City: <span>{partyCounts[3]}</span>
        </div>
      </div>
      <h1 className='count-display'>Total people voted: {total}</h1>
    </div>
  );
}

export default DashBoard;
