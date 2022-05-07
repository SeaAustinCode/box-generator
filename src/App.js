import './App.css';
// import react from 'react';
import Boxes from './components/Boxes';
import Boxes_form from './components/Boxes_form';
import react from 'react';
import React, { useState } from 'react';


function App() {

  // const [color, setColor] = useState(["red", "blue", "yellow"]);


  return (
    <div className="App">
      <Boxes_form /> {/* ArrayOfColor={color}  */}
      {/* <Boxes colors={color} /> */}
    </div>
  );
}

export default App;
