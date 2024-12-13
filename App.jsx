import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

 
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]); 

  return (
    <div className='main'>
      <div className='heading'><h1>Background-Color-Changer</h1></div>
      <div className='sub'>
        <button className='buttons' style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
        <button className='buttons' style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>
        <button className='buttons' style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>
        <button className='buttons' style={{ backgroundColor: "violet" }} onClick={() => setColor("violet")}>Violet</button>
        <button className='buttons' style={{ backgroundColor: "indigo" }} onClick={() => setColor("indigo")}>Indigo</button>
        <button className='buttons' style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>Yellow</button>
        <button className='buttons' style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")}>Orange</button>
      </div>
    </div>
  );
}

export default App;
