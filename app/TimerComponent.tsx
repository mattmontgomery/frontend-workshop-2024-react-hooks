import React, { useEffect, useState } from "react";
import Screen from "./components/Screen";

export default function TimerComponent() {
  const [runs, setRuns] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer");
    }, 1000);
    return () => clearInterval(timer);
  });
  return <Screen>Iterations: {runs}</Screen>;
}
