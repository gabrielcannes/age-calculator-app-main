import { useState } from "react";
import Answer from "./answer";
import Button from "./button";
import Form from "./form";
import AgeCalculator from "../helpers/ageCalculator";

export default function Card() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState({
    years: "",
    months: "",
    days: "",
  });

  const handleClick = () => {
    setTime(AgeCalculator(date));
  };

  return (
    <div className="bg-white rounded-t-3xl rounded-bl-3xl rounded-br-[100px] flex flex-col p-8 mx-8 relative">
      <Form setDate={setDate} />
      <Button onClick={handleClick} />
      <Answer time={time} />
    </div>
  );
}
