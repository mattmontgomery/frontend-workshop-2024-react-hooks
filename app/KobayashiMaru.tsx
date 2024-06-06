import React from "react";

import Screen from "./components/Screen";

import KobayashiMaruImage from "./KobayashiMaruImage.png";
import Image from "next/image";

export default function KobayashiMaru(props: {
  nav: number;
  tac: number;
  com: number;
}) {
  return (
    <div>
      <Screen>
        <div className="grid grid-cols-[1fr,2fr]">
          <div className="relative">
            <Image
              height="350"
              alt="The USS Enterprise in three-dimensional space"
              src={KobayashiMaruImage}
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
              <div className="pl-8">147,943 M.T.</div>
              <div className="uppercase text-right">Cargo Capacity:</div>
              <div className="pl-8">97,00</div>
            </div>
          </div>
        </div>
        <div>
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
    </div>
  );
}
