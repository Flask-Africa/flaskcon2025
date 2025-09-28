"use client";

import NumberFlow from "@number-flow/react";
import { useEffect, useState } from "react";

export const Counter = () => {
  const [hours, setHoursTillEvent] = useState(0);
  const [days, setDaysTillEvent] = useState(0);
  const [minutes, setMinutesTillEvent] = useState(0);
  const [seconds, setSecondsTillEvent] = useState(0);

  const setTimeValues = (secondsTillEvent: number) => {
    const secondsInOneDay = 60 * 60 * 24;
    const daysTillEvent = Math.floor(secondsTillEvent / secondsInOneDay);
    secondsTillEvent = secondsTillEvent % secondsInOneDay;
    const secondsInOneHour = 60 * 60;
    const hoursTillEvent = Math.floor(secondsTillEvent / secondsInOneHour);
    secondsTillEvent = secondsTillEvent % secondsInOneHour;
    const secondsInOneMinute = 60;
    const minutesTillEvent = Math.floor(secondsTillEvent / secondsInOneMinute);
    secondsTillEvent = secondsTillEvent % secondsInOneMinute;

    setDaysTillEvent(daysTillEvent);
    setHoursTillEvent(hoursTillEvent);
    setMinutesTillEvent(minutesTillEvent);
    setSecondsTillEvent(secondsTillEvent);
  };

  useEffect(() => {
    const currDate = new Date();
    const eventDate = new Date(2025, 10, 8, 9);
    let secondsTillEvent = Math.floor(
      (eventDate.getTime() - currDate.getTime()) / 1000
    );
    if (secondsTillEvent < 0) return;

    const intervalId = setInterval(() => {
      secondsTillEvent--;
      setTimeValues(secondsTillEvent);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="outline-2 outline-black rounded-t-[40px] md:w-[calc(50%-2px)] md:rounded-tr-none md:border-none md:border-black">
      <div className="px-5 py-[70.5] font-neue   md:py-[54.5] flex justify-center items-center lg:px-10 xl:px-25 max-w-[720px] min-[1440px]:mr-auto">
        <div className="max-w-[400px] mx-auto flex justify-between items-center shrink-0 w-full lg:max-w-none">
          <div className="flex flex-col items-center">
            <em className="not-italic font-extrabold text-[36px] leading-full tracking-neg3 text-offblack lg:w-[90px] lg:inline-block lg:text-[61px]">
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
            <em className="not-italic font-extrabold text-[36px] leading-full tracking-neg3 text-offblack lg:w-[90px] lg:inline-block lg:text-[61px]">
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
            <em className="not-italic font-extrabold text-[36px] leading-full tracking-neg3 text-offblack lg:w-[90px] lg:inline-block lg:text-[61px]">
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
            <em className="not-italic font-extrabold text-[36px] leading-full tracking-neg3 text-offblack lg:w-[90px] lg:inline-block lg:text-[61px]">
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
      </div>
    </div>
  );
};
