"use client";
import KobayashiMaru from "./KobayashiMaru";
import { useIncrement } from "./useIncrement";
import { useReducer } from "react";

type KobayashiState = {
  nav: number;
  tac: number;
  com: number;
};

export type Dispatch = {
  type: string;
};

const reducer = (state: KobayashiState, action: Dispatch): KobayashiState => {
  if (action.type === "increment_nav") {
    return { ...state, nav: state.nav + 1 };
  }
  if (action.type === "increment_tac") {
    return { ...state, tac: state.tac + 1 };
  }
  if (action.type === "increment_com") {
    return { ...state, com: state.com + 1 };
  }
  return { ...state };
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, {
    nav: 0,
    tac: 0,
    com: 0,
  });

  useIncrement(state.nav, 30, () => dispatch({ type: "increment_nav" }));
  useIncrement(state.tac, 70, () => dispatch({ type: "increment_tac" }));
  useIncrement(state.com, 120, () => dispatch({ type: "increment_com" }));

  return (
    <main className="min-h-screen p-24">
      <KobayashiMaru {...state} />
    </main>
  );
}
