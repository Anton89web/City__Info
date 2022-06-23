
import React, { useState, useEffect } from 'react';

export default function Time() {
  let [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const changeTime = setInterval(() => setTime(time = new Date().toLocaleTimeString()), 1000);
    return () => {
      clearInterval(changeTime);
    }
  });

  return (<p>Текущее время : {time}</p>);
}


