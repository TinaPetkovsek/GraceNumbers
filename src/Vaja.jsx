import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
export default function Vaja() {
  const [number, setNumber] = useState(33);
  const [numbers, setNumbers] = useState([1, 2, 3]);

  return (
    <div>
      <div>Vrednost je: {number}</div>
      <div>
        Seznam st je:
        {numbers.map((a) => (
          <li>{a * 3}</li>
        ))}
      </div>
      <Button onClick={() => setNumber(4)}>dodaj st v seznam</Button>
    </div>
  );
}
