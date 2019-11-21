import React from 'react'; 

const CountDownText = (props) => {
    return(
        <div>
            <h1>{props.text} </h1>
            <h1>{props.launchDate.toUTCString()}</h1>
        </div>
    )
}

export default CountDownText; 