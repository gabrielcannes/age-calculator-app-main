import { useState } from "react";
import img from "../assets/images/icon-arrow.svg";

// eslint-disable-next-line react/prop-types
export default function Button({ onClick }) {
  const [effect, setEffect] = useState(false);

  const handleClick = () => {
    setEffect(true);
    onClick();
  };

  return (
    <div className="flex mt-4 relative">
      <div className="absolute top-8 left-0 w-full h-0.5 bg-gray-300"></div>
      <img
        onClick={handleClick}
        src={img}
        alt="button"
        className={`${
          effect && `animate-slide-right bg-gray-950`
        } cursor-pointer mx-auto h-16 w-16 p-4 bg-violet-700 rounded-full relative z-10 hover:h-20 hover:w-20 duration-300`}
      />
    </div>
  );
}
