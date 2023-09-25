import React, { useEffect } from 'react';
import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import './App.css';

import DashBoard from './PagesforSideBar/DashBoard';
import Profile from './PagesforSideBar/Profile';
import Settings from './PagesforSideBar/Settings';
import About from './PagesforSideBar/About';

import Parties from './PagesforSideBar/Parties';
import Home from './Components/Home';
import Feedback from './Components/Feedback';
import FAQ from './Components/FAQ';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';

const ScrolltoTop=()=>{
  const {pathname}=useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])
  return null;
}

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>

    <Route path="/navbar"  element={<Home/>}></Route>
    <Route path='/dashboard' element={<DashBoard/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
    <Route path='/settings' element={<Settings/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/parties' element={<Parties/>}></Route>
    <Route path='/feedback' element={<Feedback/>}></Route>
    <Route path='/terms' element={<Terms/>}></Route>
    <Route path='/privacy' element={<Privacy/>}></Route>
    <Route path="/Login" element ={<Login />}></Route>
    <Route path="/" element ={<SignUp />}></Route>
    <Route path="/faq"  element={<FAQ/>}></Route>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;