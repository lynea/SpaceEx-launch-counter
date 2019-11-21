import React from 'react'; 
import './countDown-container.styles.scss'; 
import CountDownText from '../countDown-text/countDown-text.component'; 

const CountDownContainer = (props) => {
    return(
        <div className='counterContainer'>
            <CountDownText 
                text = {props.text}
                launchDate = {props.launchDate} 
            />
        </div>
    )
}; 

export default CountDownContainer; 