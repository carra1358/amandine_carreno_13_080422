import React from 'react';
import {createRoot} from "react-dom/client"
import { Provider } from 'react-redux';
import store from 'app/redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from 'app/routes/ProtectedRoutes';
import Profile from 'services/profile/views/Profile';
import Login from './services/authentification/views/Login';
import Home from './services/home/views/Home';
import "services/common/styles/styles.scss"




const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
  <Provider store={store}>
  <Router>
      <Routes>
     
       <Route path='/login' element={<Login/>}/>
        <Route path="/profile" element={<ProtectedRoutes><Profile/></ProtectedRoutes>} />
      
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  </Provider>
  </React.StrictMode>
  
);


