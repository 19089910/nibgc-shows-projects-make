import React, { useEffect, useState } from "react";
import { getCountdown } from "./utils";
import { Calendar } from "lucide-react";

const Countdown = ({ targetDate }) => {
  const [countdown, setCountdown] = useState(getCountdown(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (countdown.finished) {
    return (
      <span className="inline-flex items-center">
        <Calendar size={18} className="mr-1" />
        JÁ ESTREOU!
      </span>
    );
  }

  return (
    <span className="inline-flex items-center">
      <Calendar size={18} className="mr-1" />
      ESTREIA EM: {countdown.days}d {countdown.hours}h {countdown.minutes}m
    </span>
  );
};

export default Countdown;
