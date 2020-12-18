// import dependencies
import React from 'react';


// add properties
const userInput = (props) => {
    // assign styling
    const style = {
        border: "2px solid red"
    }


    return (
        <div className = "someInput">
            <input type="text" 
            onChange={props.changed}
            value = {props.currentName} />


        </div>
    )
}






// export
export default userInput;