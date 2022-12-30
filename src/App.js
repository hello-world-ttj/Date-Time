import './App.css';
import calender from './calendar.gif'
import clock from './clock.gif'
import React, { useState, useEffect } from 'react';
function App() {
  const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1000);
    }, []);
  var hours = dateState.getHours();
  var AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = (hours % 12) || 12;
  hours = (hours < 10 ? "0" + hours : hours);
  var minutes = dateState.getMinutes();
  minutes = (minutes < 10 ? "0" + minutes : minutes);
  var finalTime = hours + ":" + minutes + " " + AmOrPm;
  return (
    <div className="container shadow-2xl w-[300px] h-[300px] hover:scale-[1.2] drop-shadow-xl rounded-lg transition duration-700 ease-in-out">
      <div className="flex items-center flex-col">
        <div className='max-w-sm rounded overflow-hidden grid gap-4'>
        <img src={calender} alt="calendar" />
          <div>
            <strong>{dateState.toDateString()}</strong>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden grid gap-4'>
        <img src={clock} alt="calendar" />
          <div>
            <strong>{finalTime}</strong>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
