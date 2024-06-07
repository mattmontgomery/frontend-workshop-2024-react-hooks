"use client";
import KobayashiMaru from "./KobayashiMaru";
import React, { useDebugValue, useEffect, useReducer, useState } from "react";
import { checkResult, getResult, TARGET_VALUE } from "@/app/utils";

export default function Home() {
  const initialState = { nav: 0, tac: 0, com:0 }
  const reducer = (state = initialState, action: { type: any; }) => {
    switch(action.type) {
      case "increment-nav":
        return {
        ...state,
          nav: state.nav < TARGET_VALUE ? state.nav+1: state.nav,
        };
      case "increment-tac":
        return {
          ...state,
          tac: state.tac < TARGET_VALUE ? state.tac+1: state.tac,
        };
      case "increment-com":
        return {
          ...state,
          com: state.com < TARGET_VALUE ? state.com+1: state.com,
        };
      default:
        return state;
    }
    return state
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const [thrusters, setThrusters] = useState(false)
  let r = getResult(state.nav, state.tac, state.com)
  useEffect(() => {
    let timer = setTimeout(function() {
      if (thrusters) {
        dispatch({type:'increment-tac'})
        dispatch({type:'increment-com'})
        dispatch({type:'increment-nav'})
      }
    }, 100)
    return () => {
      clearTimeout(timer)
    }
  })
  return (
    <main className="min-h-screen p-24">
      <KobayashiMaru {...state} />
      <button onClick={() => {
        setThrusters(!thrusters)
      }}>Engage Thrusters
      </button>
      <br/>
    </main>
  );
}
