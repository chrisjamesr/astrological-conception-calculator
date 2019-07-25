import React from 'react'
import wheel from './zodiac_wheel_modified.svg';
import WheelDisplay from './WheelDisplay';

function Wheel ({currentPosition}){ 
    return(
        <section className="wheel animated" 
                 style={
                    {transform: `rotate(${currentPosition}deg)`}
                  }>
              <img src={wheel} className="App-logo" alt="logo"/>
              
        </section>          
    );
}

export default Wheel