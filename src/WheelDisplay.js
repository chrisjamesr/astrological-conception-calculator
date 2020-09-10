import React from 'react';

const buttonStyle = {
  margin: '10px'
}
function WheelDisplay({ day, jumpForward, jumpToday }) {

  return (
    <div className="display">
      <h3>{day}</h3>
      <button onClick={jumpForward} style={buttonStyle}>9 Months</button>
      <button onClick={jumpToday} style={buttonStyle}>Today</button>
    </div >
  )
}

export default WheelDisplay;