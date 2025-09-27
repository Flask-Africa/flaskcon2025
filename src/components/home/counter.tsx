"use client";

import { padZero } from "@/utils/formatter";
import NumberFlow from "@number-flow/react";
import { useEffect, useState } from "react";

export const Counter = () => {
  const [hours, setHoursTillEvent] = useState(0);
  const [days, setDaysTillEvent] = useState(0);
  const [minutes, setMinutesTillEvent] = useState(0);
  const [seconds, setSecondsTillEvent] = useState(0);

  useEffect(() => {
    const currDate = new Date();
    const eventDate = new Date(2025, 10, 8, 9);
    let secondsTillEvent = Math.floor(
      (eventDate.getTime() - currDate.getTime()) / 1000
    );
    if (secondsTillEvent < 0) return;
    const secondsInOneDay = 60 * 60 * 24;
    let daysTillEvent = Math.floor(secondsTillEvent / secondsInOneDay);
    secondsTillEvent = secondsTillEvent % secondsInOneDay;
    const secondsInOneHour = 60 * 60;
    let hoursTillEvent = Math.floor(secondsTillEvent / secondsInOneHour);
    secondsTillEvent = secondsTillEvent % secondsInOneHour;
    const secondsInOneMinute = 60;
    let minutesTillEvent = Math.floor(secondsTillEvent / secondsInOneMinute);
    secondsTillEvent = secondsTillEvent % secondsInOneMinute;

    setDaysTillEvent(daysTillEvent);
    setHoursTillEvent(hoursTillEvent);
    setMinutesTillEvent(minutesTillEvent);
    setSecondsTillEvent(secondsTillEvent);

    const intervalId = setInterval(() => {
      secondsTillEvent--;
      setSecondsTillEvent(secondsTillEvent);
      if (secondsTillEvent == 0) {
        secondsTillEvent = 59;
        minutesTillEvent--;
        setMinutesTillEvent(minutesTillEvent);
        if (minutesTillEvent == 0) {
          minutesTillEvent = 59;
          hoursTillEvent--;
          setHoursTillEvent(hoursTillEvent);
          if (hoursTillEvent == 0) {
            hoursTillEvent = 23;
            daysTillEvent--;
            setDaysTillEvent(daysTillEvent);
          }
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="px-5 py-[70.5] font-neue outline-2 outline-black rounded-t-[40px] flex justify-between items-center">
      <div className="flex flex-col items-center">
        <em className="not-italic font-extrabold text-[36px] leading-full tracking-neg3 text-offblack">
          <NumberFlow
            value={days}
            format={{
              minimumIntegerDigits: 2,
            }}
          />
        </em>
        <em className="uppercase not-italic leading-full tracking-neg3">
          days
        </em>
      </div>
      <div className="flex flex-col items-center">
        <em className="not-italic font-extrabold text-[36px] leading-full tracking-neg3 text-offblack">
          <NumberFlow
            value={hours}
            format={{
              minimumIntegerDigits: 2,
            }}
          />
        </em>
        <em className="uppercase not-italic leading-full tracking-neg3">
          hours
        </em>
      </div>
      <div className="flex flex-col items-center">
        <em className="not-italic font-extrabold text-[36px] leading-full tracking-neg3 text-offblack">
          <NumberFlow
            value={minutes}
            format={{
              minimumIntegerDigits: 2,
            }}
          />
        </em>
        <em className="uppercase not-italic leading-full tracking-neg3">
          minutes
        </em>
      </div>
      <div className="flex flex-col items-center">
        <em className="not-italic font-extrabold text-[36px] leading-full tracking-neg3 text-offblack">
          <NumberFlow
            value={seconds}
            format={{
              minimumIntegerDigits: 2,
            }}
          />
        </em>
        <em className="uppercase not-italic leading-full tracking-neg3">
          seconds
        </em>
      </div>
    </div>
  );
};
