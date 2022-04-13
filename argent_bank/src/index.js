import React from 'react';
import {createRoot} from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from 'services/profile/views/Profile';
import Login from './services/authentification/views/Login';
import Home from './services/home/views/Home';
import "services/common/styles/styles.scss"


const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
   <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>

  </React.StrictMode>
  
);


