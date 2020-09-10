import React from 'react'
// import wheel from './zodiac_wheel_modified.svg';
import wheel from './Zodiac_wheel.svg';
// import WheelDisplay from './WheelDisplay

function Wheel({ currentPosition }) {
    return (
        <section >
            <img src={wheel}
                className="wheel animated"
                alt="zodiac wheel"
                style={
                    {
                        transform: `rotate(${currentPosition}deg)`,
                        height: "50%",
                        width: "50%"
                    }
                }
            />

        </section>
    );
}

export default Wheel