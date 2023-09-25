  import React from 'react';
  import './Parties.css';
  import barcaImage from '../Assets/Image/barca.jpg';
  import madridImage from '../Assets/Image/madrid.jpg';
  import bayernImage from '../Assets/Image/bayern.jpg'; // Import the Bayern Munich image
  import mancityImage from '../Assets/Image/mancity.jpg'; // Import the Manchester City image
  import Header from '../Components/NavBar';
  // Import your header component
  import teamspic from '../Assets/Image/aboutpic.jpg';
  function Parties() {
    return (
      <div className="parties-container">
        <Header /> {/* Include your header component here */}
        <div className="header-image5">
        <img src={teamspic} alt="FCb" />
      </div>
        <div className="teams-container">
          <div className="team">
            <img
              className="team-logo"
              src={barcaImage}
              alt="FC Barcelona Logo"
            />
            <div className="team-info">
              <h2 className="team-name">FC Barcelona</h2>
              <strong>
                <p className="team-description">
                  FC Barcelona, commonly referred to as Barcelona, is a
                  professional football club based in Barcelona, Spain. They are
                  known for their attacking style of play and have a fierce
                  rivalry with Real Madrid.
                </p>
              </strong>
            </div>
          </div>

          <div className="team">
            <img
              className="team-logo"
              src={madridImage}
              alt="Real Madrid Logo"
            />
            <div className="team-info">
              <h2 className="team-name">Real Madrid</h2>
              <strong>
                <p className="team-description">
                  Real Madrid is a professional football club based in Madrid,
                  Spain. They are one of the most successful clubs in the world,
                  with a rich history and a large fan base.
                </p>
              </strong>
            </div>
          </div>

          <div className="team">
            <img
              className="team-logo"
              src={bayernImage} // Use the Bayern Munich image
              alt="FC Bayern Munich Logo"
            />
            <div className="team-info">
              <h2 className="team-name">FC Bayern Munich</h2>
              <strong>
                <p className="team-description">
                  FC Bayern Munich, often referred to as Bayern, is a professional
                  football club based in Munich, Germany. They are one of the most
                  successful clubs in German and European football history.
                </p>
              </strong>
            </div>
          </div>

          <div className="team">
            <img
              className="team-logo"
              src={mancityImage} // Use the Manchester City image
              alt="Manchester City FC Logo"
            />
            <div className="team-info">
              <h2 className="team-name">Manchester City FC</h2>
              <strong>
                <p className="team-description">
                  Manchester City FC is a professional football club based in
                  Manchester, England. They have experienced significant success in
                  recent years and are known for their attacking style of play.
                </p>
              </strong>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Parties;
