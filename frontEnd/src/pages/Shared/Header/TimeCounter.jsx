// components/CurrentTime.js

import { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      
      // Adjust to GMT+6
      const gmtPlusSix = new Date(date.getTime() + (6 * 60 * 60 * 1000));

      const hours = gmtPlusSix.getUTCHours().toString().padStart(2, '0');
      const minutes = gmtPlusSix.getUTCMinutes().toString().padStart(2, '0');
      const seconds = gmtPlusSix.getUTCSeconds().toString().padStart(2, '0');

      const formattedTime = `(GMT+6) ${hours}:${minutes}:${seconds}`;
      setTime(formattedTime);
    };

    // Initial call to display time immediately
    updateTime();

    // Update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return <h1>{time}</h1>;
};

export default CurrentTime;
