import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mesas from './components/Mesas';
import Navbar from "./layouts/navbar/navbar"
import Corretor from './components/Corretor';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
      <Route exact path="/" element={<Login />} />

        <Route exact path="/dashboard" element={<Mesas />} />
        <Route exact path="/corretor" element={<Corretor />} />

      </Routes> 
    </div>
  );
}

export default App;
