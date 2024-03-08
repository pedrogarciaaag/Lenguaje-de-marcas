import React from 'react';
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from "react-router-dom";

import Inici from "./paths/Inici";
import Intereses from './paths/Interes';
import Restaurants from './paths/Restuarants';
import Hotels from './paths/Hotels';
import Activitats from './paths/Activitats';
import NavBar from './components/Nav';



function App() {
  return (
    <div className='container'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Inici/>} />
        <Route path="/intereses" element={<Intereses/>}/>
        <Route path="/restaurants" element={<Restaurants/>}/>
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/activitats" element={<Activitats/>} />
      </Routes>
    </div>
  );
}

export default App;

