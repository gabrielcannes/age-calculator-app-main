import { createContext } from "react";
import Card from "./components/card";

export const DateContext = createContext();

export default function App() {
  return (
    <div className="font-poppins h-screen w-screen bg-slate-100 py-8">
      <Card />
    </div>
  );
}
