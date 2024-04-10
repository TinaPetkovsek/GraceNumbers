import { useEffect, useState } from "react";
import Random from "./Random";
import { Input } from "./components/ui/input";

export default function App() {
  const [fact, setFact] = useState({});
  const [number, setNumber] = useState(0);

  async function getRandomFact() {
    const response = await fetch("http://numbersapi.com/random?json");
    const data = await response.json();
    setFact(data);
  }

  async function getNumberFact(number) {
    const response = await fetch("http://numbersapi.com/" + number + "?json");
    const data = await response.json();
    setFact(data);
  }

  useEffect(() => {
    getRandomFact();
  }, []);

  useEffect(() => {
    getNumberFact(number);
  }, [number]);

  return (
    <div className="container">
      <Input
        placeholder="Vnesi stevilo, ki te zanima..."
        type="number"
        onChange={(e) => setNumber(e.target.value)}
      ></Input>

      <Random fact={fact}></Random>
    </div>
  );
}
