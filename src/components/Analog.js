import React from 'react';

import './styles/Analog.css'

const Analog = ({hours, minutes, seconds}) => {

  return (
    <div className="analog">
        <div className="hour" style={{transform: `rotate(${hours * 30}deg)`}}></div>
        <div className="minute" style={{transform: `rotate(${minutes * 6}deg)`}}></div>
        <div className="second" style={{transform: `rotate(${seconds * 6}deg)`}}></div>
	</div>
  );
}

export default Analog;
