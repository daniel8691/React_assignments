import React from 'react';


// create a validation to handles text length
const validation = (props) => {

    let validationMessage = 'Text long enough';

    // check if true
    if (props.inputLength <=5) {
        validationMessage = "Text too short";
    }

    // return a paragraph 
    return (
        <div>
            <p>{validationMessage}</p>

            {/* <p>Text long enough</p>
            <p>Text too short</p> */}
        </div>

    )
        
}

export default validation;