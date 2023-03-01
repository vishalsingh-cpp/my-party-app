import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [countdown, setCountdown] = useState<number>(100_000);

  useEffect(() => {
    setTimeout(() => {
      setCountdown((v) => v - 1);
    }, 1000);
  }, [countdown]);

  return (
    <div className="App">
      <h1>Vishal's Party</h1>
      <h2>Starts in {countdown}</h2>
    </div>
  );
}
