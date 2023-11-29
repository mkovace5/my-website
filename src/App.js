import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import './App.css';
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {

  return (
    <Router> 
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  )
};

export default App;
