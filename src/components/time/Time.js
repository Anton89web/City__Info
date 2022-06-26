
import React, { useState, useEffect } from 'react';

export default function Time() {
  let [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const changeTime = setInterval(() => setTime(time = new Date().toLocaleString()), 1000);
    return () => {
      clearInterval(changeTime);
    }
  });

  return (<p>Текущая дата и время : {time}</p>);
}


