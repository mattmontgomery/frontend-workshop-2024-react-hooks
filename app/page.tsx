"use client";
import KobayashiMaru from "./KobayashiMaru";
import { useReducer, useEffect } from "react";

type KobayashiState = {
  nav: number;
  tac: number;
  com: number;
};

type Dispatch = {
  type: string;
};

const reducer = (state: KobayashiState, action: Dispatch): KobayashiState => {
  if (action.type === "increment_nav") {
    return { ...state, nav: state.nav + 1 };
  }
  return { ...state };
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, {
    nav: 0,
    tac: 0,
    com: 0,
  });

  const runNav = state.nav < 255;

  useEffect(() => {
    const interval = setInterval(() => {
      if (runNav) {
        dispatch({ type: "increment_nav" });
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => {
      clearInterval(interval);
    };
  }, [runNav]);

  return (
    <main className="min-h-screen p-24">
      <KobayashiMaru {...state} />
    </main>
  );
}
