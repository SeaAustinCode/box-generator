import React from 'react'
import { useState } from 'react'
import Boxes from './Boxes';

const Boxes_form = (props) => {
    const [boxColor, setBoxColor] = useState("");
    const [color, setColor] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the page from refreshing
        // props.onBoxSubmit(boxColor) //when you submit the new form 
        const tempArray = color
        tempArray.push(boxColor)
        // e.target.value = ""
        boxColor = ""
        setColor(tempArray)
        // const listOfColors = []
        // listOfColors = [...color, e.target.value]
        // setColor(listOfColors)
        // setColor(...color, boxColor)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Color</h1>
            <input onChange={(e) => setBoxColor(e.target.value)} value={boxColor} />
            <input type= "submit" value="add"/>
            </form>
            <Boxes colors={color} />
        </div>
    )
}

export default Boxes_form