import React from 'react';
// import stylesheet
import "./UserOutput.css"

// TASK HERE IS TO CREATE TWO PARAGRAPHS



const userOutput = (prop) => {
    return (
        // use a div becasue i want multiple elements together
        // <div className = "contentSeparation">
        <div className="UserOutput">
            {/* <p>Username: {prop.username}</p> */}
            <p>{prop.someUserInput}</p>
        </div>


        // </div>

    )

}





// export
export default userOutput;