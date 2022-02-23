import React from 'react';

import './styles/Digital.css'

const Digital = ({hours, minutes, seconds}) => {

    const digHours = hours < 10 ? `0${hours}` : hours;
    const digitalMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const digitalSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="digital">
        <span>{`${digHours}:${digitalMinutes}:${digitalSeconds}`}</span>
	</div>
  );
}

export default Digital;
