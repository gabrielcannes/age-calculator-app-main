import PropTypes from "prop-types";

export default function Answer({ time }) {
  return (
    <div className="flex flex-col mx-auto">
      <div className=" flex space-x-2">
        <span className="text-violet-700 font-bold text-7xl italic">
          {time.years}
        </span>
        <span className="font-bold italic text-7xl">years</span>
      </div>
      <div className="flex space-x-2">
        <span className="text-violet-700 font-bold text-7xl italic">
          {time.months}
        </span>
        <span className="font-bold italic text-7xl">months</span>
      </div>
      <div className="flex space-x-2">
        <span className="text-violet-700 font-bold text-7xl italic">
          {time.days}
        </span>
        <span className="font-bold italic text-7xl">days</span>
      </div>
    </div>
  );
}

Answer.propTypes = {
  time: PropTypes.shape({
    years: PropTypes.string,
    months: PropTypes.string,
    days: PropTypes.string,
  }).isRequired,
};
