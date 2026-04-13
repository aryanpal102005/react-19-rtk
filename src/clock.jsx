import React, { useState, useEffect } from "react";

function Clock({ color }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 style={{ color: color }}>
      {time.toLocaleTimeString()}
    </h1>
  );
}

export default Clock;