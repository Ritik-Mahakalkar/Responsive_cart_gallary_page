import React, { useState, useEffect } from "react";
import './Timer.css'
const Time = ({ duration }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1000 : duration));
    }, 1000);
    return () => clearInterval(interval);
  }, [duration]);

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);
  return (
    <div>
       <div className="countdown">
      <h2>Sale end on: {`${hours}h ${minutes}m ${seconds}s`}</h2>
      
    </div>
    </div>
  )
}

export default Time
