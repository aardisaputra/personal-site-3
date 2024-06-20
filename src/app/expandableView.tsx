"use client";

import { ReactNode, useState } from "react";
import { robotoCondensed500 } from "./fonts";

interface Props {
  title: string;
  children: ReactNode;
}

export default function ExpandableView({ title, children }: Props) {
  const [expandState, setExpandState] = useState(false);

  return (
    <div
      className={`relative mx-[2rem] transition-all duration-300 ease-in-out ${expandState ? "h-[24rem]" : "h-[8rem]"}`}
      onClick={() => {
        setExpandState(!expandState);
      }}
    >
      <svg
        className="absolute z-10 fill-white shrink-0 ml-8 mt-[3em]"
        width="32"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="13"
          width="32"
          height="7"
          rx="1"
          className={`origin-center transition duration-200 ease-out ${!expandState && "rotate-180"}`}
        />
        <rect
          y="13"
          width="32"
          height="7"
          rx="1"
          className={`origin-center rotate-90 transition duration-200 ease-out ${expandState && "!rotate-180"}`}
        />
      </svg>
      <div className={robotoCondensed500.className}>
        <h1 className="absolute z-10 ml-[1.7em] mt-[0.85em] text-5xl">
          {title}
        </h1>
      </div>
      <div className="absolute w-full h-full right-3 translate-y-3 bg-[#736C6C]" />
      <div className="absolute w-full h-full bg-[#000000]">
        {expandState && children}
      </div>
    </div>
  );
}
