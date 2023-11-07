import React, { useState, useEffect } from "react";
import { format, isToday, addDays, subDays, isLastDayOfMonth } from "date-fns";
export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const updateCalendar = () => {
      // Update the current date
      const newDate = new Date();
      setCurrentDate(newDate);

      // Check if it's the end of the month and increment the month if needed
      if (isLastDayOfMonth(newDate)) {
        setCurrentDate(addDays(newDate, 1));
      }
    };

    const interval = setInterval(updateCalendar, 1000); // Update every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  const startOfWeek = subDays(currentDate, currentDate.getDay());
  const daysOfWeek = [...Array(7).keys()].map((i) => addDays(startOfWeek, i));

  return (
    <div className="flex w-full mb-3 p-2 bg-white rounded-md shadow dark:border dark:bg-gray-800 dark:border-gray-700 flex-wrap justify-center">
      <div className="text-gray-900 dark:text-white text-lg flex justify-between w-full pb-1">
        <span className="font-semibold px-2">
          {format(currentDate, "MMMM yyyy")}
        </span>{" "}
        <span className="font-bold px-2">
          {format(currentDate, "HH:mm:ss")}
        </span>
      </div>
      <div className="flex w-full justify-center">
        {daysOfWeek.map((date) => (
          <div
            key={date.toISOString()}
            className={`flex group ${
              isToday(date)
                ? "dark:bg-primary-400 bg-primary-500"
                : "dark:hover:bg-primary-700 hover:bg-primary-200 hover:shadow-lg hover-dark-shadow"
            } rounded-md mx-1 transition-all duration-300 cursor-pointer justify-center w-14 ${
              isToday(date)
                ? "text-white"
                : "dark:text-white text-gray-900 group-hover:text-gray-100"
            }`}
          >
            <div className="flex items-center py-3">
              <div className="text-center">
                <p className="text-xs transition-all duration-300">
                  {format(date, "EEE")}
                </p>
                <p className=" transition-all duration-300 font-semibold">
                  {format(date, "dd")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
