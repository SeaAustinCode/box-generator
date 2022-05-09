import React from 'react'
import { useState } from 'react'
import Boxes from './Boxes';

const Boxes_form = (props) => {
    const [input, setInput] = useState(""); /* const [boxColor, setBoxColor] = useState("");  */
    const [color, setColor] = useState([]);

// const [boxObject, setBoxObject] = useState ({
//     boxColor: "",
//     color: ""
// })

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the page from refreshing
        // props.onBoxSubmit(boxColor) //when you submit the new form 

        // 1. copy the array - bc state in react is immutable 
        const tempArray = [...color]

        // 2. append to the copy 
        tempArray.push(input)
        setInput("") // not sure if I need this
        
        // 3 set the new array as the new state 
        setColor(tempArray) 

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Color</h1>
            <input onChange={(e) => setInput(e.target.value)} value={input} />
            <button>Add</button>
            </form>
            <Boxes colors={color} />
        </div>
    )
}

export default Boxes_form