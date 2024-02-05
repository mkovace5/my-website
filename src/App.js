import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import './App.css';
import Home from "./Pages/Home/Home";
import PCF from './Pages/PCFPage/PCF';

function App() {

  return (
    <Router> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/PCF' element={<PCF/>}/>
      </Routes>
    </Router>
  )
};

export default App;
