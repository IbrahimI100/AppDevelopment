import React from 'react';
import './Parties.css';

function Parties() {
  return (
    <div className='bg'>
      <a href="/navbar" className='home-link'>Home</a> 
      <div className="teams-container">
        <div className="team" style={{backgroundColor:"rgba(255,255,255,0.4)"}}>
          <h2>Real Madrid</h2>
          <strong><p>
            Real Madrid is a professional football club based in Madrid, Spain. They are one of the most successful clubs in the world, with a rich history and a large fan base.
          </p></strong>
        </div>
        <div className="team" style={{backgroundColor:"rgba(255,255,255,0.4)"}}>
          <h2>FC Barcelona</h2>
          <strong><p>
            FC Barcelona, commonly referred to as Barcelona, is a professional football club based in Barcelona, Spain. They are known for their attacking style of play and have a fierce rivalry with Real Madrid.
          </p>
          </strong>
        </div>
        <div className="team" style={{backgroundColor:"rgba(255,255,255,0.4)"}}>
          <h2>FC Bayern Munich</h2>
          <strong>
          <p>
            FC Bayern Munich, often referred to as Bayern, is a professional football club based in Munich, Germany. They are one of the most successful clubs in German and European football history.
          </p></strong>
        </div>
        <div className="team" style={{backgroundColor:"rgba(255,255,255,0.4)"}}>
          <h2>Manchester City FC</h2>
          <strong>
          <p>
            Manchester City FC is a professional football club based in Manchester, England. They have experienced significant success in recent years and are known for their attacking style of play.
          </p>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Parties;
