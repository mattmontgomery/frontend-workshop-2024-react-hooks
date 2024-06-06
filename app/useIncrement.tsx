import React, { useDebugValue, useEffect } from "react";

export const useIncrement = (
  num: number,
  speed: number,
  incFunc: () => void
) => {
  const run = num < 255;

  useDebugValue(run);

  useEffect(() => {
    const interval = setInterval(() => {
      if (run) {
        incFunc();
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => {
      clearInterval(interval);
    };
  }, [run]);
};
