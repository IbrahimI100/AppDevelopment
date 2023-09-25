import React from 'react';
import Header from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="main-content">
        <SideBar />
        <div className="content">
          {/* Your main content goes here */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
