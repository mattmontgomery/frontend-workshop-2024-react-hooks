import React, { PropsWithChildren } from "react";

export default function Screen(props: PropsWithChildren) {
  return (
    <div className="bg-black min-h-96 w-full p-8 text-white rounded-3xl flex flex-col gap-4">
      {props.children}
    </div>
  );
}
