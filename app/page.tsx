"use client";
import KobayashiMaru from "./KobayashiMaru";
import React, { useEffect, useReducer, useState } from "react";

export default function Home() {
  const initialState = { nav: 0, tac: 0, com:0 }
  const reducer = (state = initialState, action: { type: any; }) => {
    switch(action.type) {
      case "cheat":
        return {
          ...state,
          nav: 254,
          tac: 254,
          com: 254,
        };
      case "increment-nav":
        return {
        ...state,
          nav: state.nav+1,
        };
      case "increment-tac":
        return {
          ...state,
          tac: state.tac+1,
        };
      case "increment-com":
        return {
          ...state,
          com: state.com+1,
        };
      default:
        return state;
    }
    return state
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const [result, setResult] = useState(false)
  const [thrusters, setThrusters] = useState(false)
  useEffect(() => {
    setTimeout(function() {
      if (thrusters) {
        dispatch({type:'increment-tac'})
        dispatch({type:'increment-com'})
        dispatch({type:'increment-nav'})
      }
    }, 1000)
  })
  return (
    <main className="min-h-screen p-24">
      <KobayashiMaru {...state} />
      <button onClick={() => {
        setThrusters(!thrusters)
      }}>Engage Thrusters
      </button>
      <br/>
      <button onClick={() => {
        let r = state.tac === 255 && state.com === 255 && state.nav === 255;
        setResult(r)
      }}>Check Values
      </button>
      <p>Result: {result ? "Success" : "Fail"}</p>
    </main>
  );
}
