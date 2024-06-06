"use client";
import KobayashiMaru from "./KobayashiMaru";
import React, { useReducer, useState } from "react";

export default function Home() {
  const initialState = { nav: 0, tac: 0, com:0 }
  const reducer = (state = initialState, action: { type: any; }) => {
    switch(action.type) {
      case "set_values":
        return {
        ...state,
          nav: 255,
          tac: 255,
          com: 255
        };
      default:
        return state;
    }
    return state
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const [result, setResult] = useState(false)
  return (
    <main className="min-h-screen p-24">
      <KobayashiMaru {...state} />
      <button onClick={() => {
        dispatch({ type: 'set_values' })
      }}>Set Values
      </button><br/>
      <button onClick={() => {
        let r = state.tac === 255 && state.com === 255 && state.nav === 255;
        setResult(r)
      }}>Check Values
      </button>
      <p>Result: {result ? "Success" : "Fail"}</p>
    </main>
  );
}
