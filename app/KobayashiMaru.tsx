"use client"
import React, {
  useCallback,
  useDebugValue,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState
} from "react";

import Screen from "./components/Screen";

import KobayashiMaruImage from "./KobayashiMaruImage.png";
import Image from "next/image";
import { calculateDiff, checkResult, getResult, TARGET_VALUE } from "@/app/utils";
import { rotate } from "next/dist/server/lib/squoosh/impl";

export default function KobayashiMaru(props: {
  nav: number;
  tac: number;
  com: number;
}) {
  const [diffNav, diffTac]= useMemo(() => calculateDiff(props.nav, props.tac), [props.nav, props.tac])
  const [result, setResult] = useState(false)
  const [weight, setWeight] = useState(147943)
  const rotate = useRef("rotate(0deg)");
  rotate.current = "rotate("+props.nav+"deg)";
  useDebugValue(result, r => r ? `Success`: `Fail`)
  let rotateDirections = rotate.current
  useLayoutEffect(() => {
    if (props.nav > TARGET_VALUE-1) {
      setWeight(0)
    }
  }, [weight, props.nav])
  return (
    <div>
      <Screen>
        <div className="grid grid-cols-[1fr,2fr]">
          <div className="relative">
            <Image
              height="350"
              alt="The USS Enterprise in three-dimensional space"
              src={KobayashiMaruImage}
              style={{ transform: rotateDirections }}
            />
          </div>
          <div className="grid grid-flow-row gap-8">
            <h3 className="text-4xl uppercase text-center text-orange-400">
              Kobayashi Maru
            </h3>
            <div className="grid grid-flow-row grid-cols-2 gap-x-8 -indent-4 text-lime-300">
              <div className="uppercase text-right">Classification:</div>
              <div className="pl-8">Class III Neutronic Fuel Carrier</div>
              <div className="uppercase text-right">Registry:</div>
              <div className="pl-8">Amber, Tau Ceti IV</div>
              <div className="uppercase text-right">Master:</div>
              <div className="pl-8">Kojiro Vance</div>
              <div className="uppercase text-right">Crew:</div>
              <div className="pl-8">81</div>
              <div className="uppercase text-right">Passengers:</div>
              <div className="pl-8">300</div>
              <div className="uppercase text-right">Dead Weight Tonnage:</div>
              <div className="pl-8">{weight.toLocaleString()} M.T.</div>
              <div className="uppercase text-right">Cargo Capacity:</div>
              <div className="pl-8">97,00</div>
              <div className="uppercase text-right">Distance from ship (Nav):</div>
              <div className="pl-8">{diffNav}</div>
              <div className="uppercase text-right">Distance from ship (Tac):</div>
              <div className="pl-8">{diffTac}</div>
            </div>
          </div>
        </div>
        <div style={{ zIndex: 100 }}>
          <div className="flex flex-row gap-8 text-4xl">
            <div className="text-sky-300">
              <span className="text-xs">NAV</span>
              {props.nav ?? 0}
            </div>
            <div className="text-purple-400">
              <span className="text-xs">TAC</span>
              {props.tac ?? 0}
            </div>
            <div className="text-blue-400">
              <span className="text-xs">COM</span>
              {props.com ?? 0}
            </div>
          </div>
        </div>
      </Screen>
      <button
        style={{ padding: "1em", borderWidth: "medium", borderTopRightRadius: "5em", borderBottomRightRadius: "5em" }}
        onClick={useCallback(() => {
          setResult(getResult(props.nav, props.tac, props.com))
        }, [props])}>Check Values
      </button>
      <p>Result: {checkResult(result)}</p>
    </div>
  );
}
