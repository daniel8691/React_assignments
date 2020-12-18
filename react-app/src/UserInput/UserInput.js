// import dependencies
import React from 'react';


// add properties
const userInput = (props) => {
    // assign styling
    const inputStyle = {
        border: "2px solid red"
    }


    return (
        <div className = "someInput">
            <input type="text" 
            style={inputStyle}
            onChange={props.changed}
            value = {props.currentName} />


        </div>
    )
}






// export
export default userInput;