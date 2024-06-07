"use client";
import KobayashiMaru from "./KobayashiMaru";
import React, { useDebugValue, useEffect, useReducer, useState } from "react";
import { checkResult, getResult, TARGET_VALUE } from "@/app/utils";

export default function Home() {
  const initialState = { nav: 0, tac: 0, com:0 }
  const [thrusters, setThrusters] = useState(false)
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
  let action = thrusters ? "Disengage" : "Engage"
  return (
    <main className="min-h-screen p-24">
      <KobayashiMaru {...state} />
      <button
        style={{ borderColor: "orange", padding: "1em", borderWidth: "medium", borderTopRightRadius: "5em", borderBottomRightRadius: "5em" }}
        className="text-orange-400"
        onClick={() => {
        setThrusters(!thrusters)
      }}>{action} Thrusters
      </button>
    </main>
  );
}
