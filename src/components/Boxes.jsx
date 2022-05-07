import React from 'react';

// import styled from 'styled-components';

// const divStyle = { backgroundColor: '#000000', width: "50%", margin: "0 auto" }

const Boxes = (props) => {
    // const [boxes, setBoxes] = useState("");

    return (
        <div>
            {props.colors.map((color, i) => {
                return (
                    <div key={i} style={{
                        height: "75px",
                        width: "75px",
                        display: "inline-block",
                        margin: "10px",
                        backgroundColor: color
                    }}>
                    </div>
                )
            })}
        </div>
    )
}

export default Boxes