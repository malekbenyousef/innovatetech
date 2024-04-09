import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/hompage/Header';
import {Home} from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Login from './routes/login';
import Settings from './routes/Settings';
import SignUp from './routes/SignUpn';
import Dashboard from './routes/login';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Settings />} />
      </Routes>
      
      
    </>
  );
}

export default App;