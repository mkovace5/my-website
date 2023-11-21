import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';


function App() {

  return (
    <Router> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
