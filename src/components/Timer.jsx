import React, { useEffect, useState } from "react";

const Timer = () => {
  const timeStyles = {
    background: "-webkit-linear-gradient(white, #38495a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const targetDate = new Date("March 20, 2024 00:00:00").getTime();

  const [time, setTime] = useState(targetDate - Date.now());

  const getFormattedTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    return (
      <div className="w-[550px] flex items-center justify-around rounded-xl my-10 gap-3">
        <div className="flex flex-col items-center bg-[rgba(255,255,255,0.05)] p-5 rounded-md gap-3 flex-grow shadow-2xl">
          <span className="font-bold text-5xl" style={timeStyles}>
            {days}
          </span>
          <span style={timeStyles}>Days</span>
        </div>
        <div className="flex flex-col items-center bg-[rgba(255,255,255,0.05)] p-5 rounded-md gap-3 flex-grow shadow-2xl">
          <span className="font-bold text-5xl" style={timeStyles}>
            {hours % 24}
          </span>
          <span style={timeStyles}>Hours</span>
        </div>
        <div className="flex flex-col items-center bg-[rgba(255,255,255,0.05)] p-5 rounded-md gap-3 flex-grow shadow-2xl">
          <span className="font-bold text-5xl" style={timeStyles}>
            {minutes % 60}
          </span>
          <span style={timeStyles}>Minutes</span>
        </div>
        <div className="flex flex-col items-center bg-[rgba(255,255,255,0.05)] p-5 rounded-md gap-3 flex-grow shadow-2xl">
          <span className="font-bold text-5xl" style={timeStyles}>
            {seconds % 60}
          </span>
          <span style={timeStyles}>Seconds</span>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (time <= 0) {
    clearInterval();
    return <div className="text-white">Countdown ended</div>;
  }

  return <div className="text-white">{getFormattedTime(time)}</div>;
};

export default Timer;
