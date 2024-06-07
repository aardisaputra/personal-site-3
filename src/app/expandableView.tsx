"use client";

import { useState } from "react";

export default function ExpandableView() {
  const [expandState, setExpandState] = useState(false);

  return (
    <div
      className={`relative mx-[2rem] transition-all duration-300 ease-in-out ${expandState ? "h-[24rem]" : "h-[8rem]"}`}
    >
      <div className="absolute w-full h-full right-3 translate-y-3 bg-[#736C6C]" />
      <div
        className="absolute w-full h-full bg-[#000000]"
        onClick={() => {
          setExpandState(!expandState);
        }}
      />
    </div>
  );
}
