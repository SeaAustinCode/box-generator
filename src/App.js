import './App.css';
// import react from 'react';
import Boxes from './components/Boxes';
import Boxes_form from './components/Boxes_form';
import react from 'react';
import React, { useState } from 'react';


function App() {

  // const [boxes, seBoxes] = useState ([
  //   <Boxes/> 
  // ])

  // const [color, setColor] = useState(["red", "blue", "yellow"]); ---> was trying to change into an object 
  // const addBox = (soomeBoxObject) => {
  //   const tempBoxArray = [...Boxes]
  // }

  return (
    <div className="App">
      <Boxes_form /> {/* ArrayOfColor={color}  */}
      {/* <Boxes colors={color} /> */}
    </div>
  );
}

export default App;
