import React, {useState, useEffect} from 'react';
import Analog from './components/Analog';
import Digital from './components/Digital';

import './App.css'

const App = () => {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    const handleDate = () => {
        const date = new Date();
        setHours(date.getHours());
        setMinutes(date.getMinutes());
        setSeconds(date.getSeconds());
      }
    
      useEffect(() => {
        const interVal = setInterval(handleDate, 0);
        return () => {
          clearInterval(interVal)
        }
      }, [])

    return (
        <div className='app'>
           <Analog hours={hours} minutes={minutes} seconds={seconds} />
           <Digital hours={hours} minutes={minutes} seconds={seconds} />
           
        </div>
    );
};

export default App;