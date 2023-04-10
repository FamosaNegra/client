import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mesas from './components/Mesas';
import Navbar from "./layouts/navbar/navbar"
import Footer from "./layouts/footer/footer"

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route exact path="/dashboard" element={<Mesas />} />
      </Routes> 
    <Footer />

    </div>
  );
}

export default App;
