import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Form({ setDate }) {
  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    const numericValue = value.replace(/\D/g, "");
    let trimmedValue;

    if (id === "day") {
      trimmedValue = Math.min(parseInt(numericValue) || 0, 30);
      setDay(trimmedValue);
      if (trimmedValue.toString().length >= 2) {
        monthRef.current.focus();
      }
    } else if (id === "month") {
      trimmedValue = Math.min(parseInt(numericValue) || 0, 12);
      setMonth(trimmedValue);
      if (trimmedValue.toString().length >= 2) {
        yearRef.current.focus();
      }
    } else if (id === "year") {
      trimmedValue = Math.min(parseInt(numericValue) || 0, 2024);
      setYear(numericValue.slice(0, 4));
      if (trimmedValue.toString().length >= 4) {
        dayRef.current.focus();
      }
    }
  };

  useEffect(() => {
    setDate(`${day}${month}${year}`);
  }, [day, month, year, setDate]);

  return (
    <div className="flex mx-auto space-x-8">
      <div className="flex flex-col mb-4">
        <label className="mb-1 font-bold text-gray-500 text-sm" htmlFor="day">
          DAY
        </label>
        <input
          className="focus:outline-none text-2xl text-center border-2 rounded-xl font-bold max-w-20 min-h-14"
          type="text"
          id="day"
          value={day}
          onChange={handleChange}
          ref={dayRef}
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-bold text-gray-500 text-sm" htmlFor="month">
          MONTH
        </label>
        <input
          className="focus:outline-none text-2xl text-center border-2 rounded-xl font-bold max-w-20 min-h-14"
          type="number"
          id="month"
          value={month}
          onChange={handleChange}
          ref={monthRef}
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-bold text-gray-500 text-sm" htmlFor="year">
          YEAR
        </label>
        <input
          className="focus:outline-none text-2xl text-center border-2 rounded-xl font-bold max-w-20 min-h-14"
          type="text"
          id="year"
          value={year}
          onChange={handleChange}
          ref={yearRef}
        />
      </div>
    </div>
  );
}

Form.propTypes = {
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
};
