import React from 'react'
import Header from './NavBar'
import SideBar from './SideBar'
import Footer from './Footer'
import './Home.css';
function Home() {
    
  return (
    <div className='homep' >
     <Header/>
     <SideBar/>
     <Footer/>
    </div>
  )
}

export default Home