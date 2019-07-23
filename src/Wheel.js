import React from 'react'
import wheel from './zodiac_wheel_modified.svg';

function Wheel ({currentPosition}){ 
    return(
        <section className="wheel animated" >
              <img src={wheel} className="App-logo" alt="logo"
                  style={{
                    transform: `rotate(${currentPosition}deg)`
                  }}
              />
        </section>          
    );
}

export default Wheel