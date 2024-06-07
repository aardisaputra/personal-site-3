import Image from "next/image";
import { inter, roboto_mono } from "./fonts";
import ExpandableView from "./expandableView";

export default function Home() {
  return (
    <main className="">
      {/* Hero Section START */}
      <div className="flex justify-center mb-5 mt-10">
        <div className="relative w-9/12 h-96 z-10">
          <div className="absolute w-full h-full translate-x-5 translate-y-5 bg-[#1da1f2]" />
          <Image
            src="/jakarta.jpeg"
            fill
            className="object-cover"
            alt="Picture of jakarta"
          />
        </div>
        <div className="relative w-[1.25rem] h-96 z-10"></div>
      </div>
      {/* Hero Section END */}

      {/* About Section START */}
      <div className="flex flex-row mt-10">
        <div className="relative w-1/2 h-[16rem] z-10">
          <div className="flex flex-col">
            <div className="relative h-[4rem] z-10">
              <div className="flex justify-center">
                <div className="relative w-[10rem] h-[4rem] z-10">
                  <Image
                    src="/line.svg"
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                    alt="Connecting line"
                  />
                </div>
              </div>
            </div>
            <div className="relative h-[8rem] z-10 m-auto">
              <h3 className={`${inter.className} text-black`}>
                Lorem Ipsum I guess
              </h3>
            </div>
            <div className="relative h-[4rem] z-10">
              <div className="flex justify-center">
                <div className="relative w-[10rem] h-[4rem] z-10">
                  <Image
                    src="/line.svg"
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                    alt="Connecting line"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-1/2 h-[16rem] z-10">
          <div className="flex flex-col justify-center">
            <div className="relative h-[1rem] z-10"></div>
            <div className="relative h-[14rem] z-10">
              <div className="flex justify-center">
                <div className="relative w-[12rem] h-[12rem] z-10">
                  <div className="absolute w-full h-full right-5 top-5 bg-[#1da1f2]" />
                  <Image
                    src="/austin.png"
                    fill
                    className="object-cover"
                    alt="Picture of Austin"
                  />
                </div>
                <div className="relative w-[1.25rem] h-[1.25rem] z-10"></div>
              </div>
            </div>
            <div className="relative h-[1rem] z-10"></div>
          </div>
        </div>
      </div>
      {/* About Section END */}

      {/* More Info Section START */}
      <div className="flex flex-col mt-10 space-y-8">
        <ExpandableView />
        <ExpandableView />
        <ExpandableView />
      </div>
      {/* More Info Section END */}

      {/* Footer Section START */}
      <div className="flex flex-row mt-10">
        <div className="relative w-1/4 h-[5rem] z-10 bg-[#40f172]"></div>
        <div className="relative w-1/4 h-[5rem] z-10 bg-[#ebf140]"></div>
        <div className="relative w-1/4 h-[5rem] z-10 bg-[#40f172]"></div>
        <div className="relative w-1/4 h-[5rem] z-10 bg-[#ebf140]"></div>
      </div>
      {/* Footer Section END */}
    </main>
  );
}
