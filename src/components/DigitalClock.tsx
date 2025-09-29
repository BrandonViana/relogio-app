import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const halfTime = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${halfTime}`;
  }

  function padZero(number: number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="text-black font-bold text-5xl m-0 p-0 dark:text-white ">
      <span>{formatTime()}</span>
    </div>
  );
}

export default DigitalClock;
