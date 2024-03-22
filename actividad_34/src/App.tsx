import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Breeds from './Breeds';
import Detalls from './Detalls'
import NavBar from './components/Nav';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='container'>
      <NavBar/>
      <Routes>
        <Route index element={<Breeds/>} />
        <Route path="/raza" element={<Detalls/>}/>
      </Routes>
    </div>
  );
}

export default App;
