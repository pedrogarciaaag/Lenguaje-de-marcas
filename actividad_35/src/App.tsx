import React from 'react';
import InfoBrawlers from './InfoBrawlers';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,marginBottom:'20px'}}>
        <h1>Brawlers</h1>
        <img src='https://i.pinimg.com/564x/11/87/e3/1187e364cb74cd075036916186fd482f.jpg' style={{ height: '50px', marginLeft: '10px' }}></img>
      </div>
      <InfoBrawlers/>
    </div>
  );
}

export default App;
