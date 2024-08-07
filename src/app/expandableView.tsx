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
      className={`relative mx-[2rem] transition-all duration-300 ease-in-out ${
        expandState
          ? title === "SKILLS"
            ? "h-[46rem] md:h-[36rem]"
            : title === "EXPERIENCE"
              ? "h-[52rem]"
              : "h-[120rem] lg:h-[68rem]"
          : "h-[8rem]"
      }`}
      onClick={() => {
        setExpandState(!expandState);
      }}
    >
      <div className="absolute w-full min-h-full right-3 translate-y-3 bg-[#736C6C]" />
      <div className="absolute w-full min-h-full bg-[#000000]">
        {expandState && children}
      </div>
      <svg
        className="absolute fill-white shrink-0 ml-8 mt-[3em]"
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
        <span className="absolute ml-[2.1em] mt-[1.25em] xs:ml-[1.7em] xs:mt-[0.85em] border w-fit bg-gradient-to-r blur-xl from-white to-gray-200 bg-clip-text text-4xl xs:text-5xl box-content font-extrabold text-transparent text-center select-none">
          {title}
        </span>
        <h1 className="absolute ml-[2.1em] mt-[1.25em] xs:ml-[1.7em] xs:mt-[0.85em] bg-gradient-to-r items-center from-white to-gray-200 bg-clip-text text-4xl xs:text-5xl font-extrabold text-transparent select-auto">
          {title}
        </h1>
        {/* <h1 className="absolute ml-[1.7em] mt-[0.85em] text-5xl">{title}</h1> */}
      </div>
    </div>
  );
}
