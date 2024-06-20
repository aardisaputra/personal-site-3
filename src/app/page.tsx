import Image from "next/image";
import { inter, robotoCondensed400, robotoCondensed500 } from "./fonts";
import ExpandableView from "./expandableView";

export default function Home() {
  return (
    <main className="">
      {/* Hero Section START */}
      <div className="flex justify-center mb-5 mt-6">
        <div className="relative w-[85%] h-96 z-10">
          <div className="absolute w-full h-full translate-x-5 translate-y-5 bg-black" />
          <Image
            src="/jakarta.jpeg"
            fill
            className="object-cover sepia-[0.5] brightness-50 border-solid border-4 border-black"
            alt="Picture of jakarta"
          />
          <div className={`${robotoCondensed400.className}`}>
            <p className="absolute z-10 ml-[1.4em] mt-[14.1em] text-l">
              Hi, my name is
            </p>
          </div>
          <div className={`${robotoCondensed500.className}`}>
            <h1 className="absolute z-10 ml-[0.3em] mt-[5.3em] text-5xl">
              AUSTIN
              <br />
              ARDISAPUTRA
            </h1>
          </div>
        </div>
        <div className="relative w-[1.25rem] h-96 z-10"></div>
      </div>
      {/* Hero Section END */}

      {/* About Section START */}
      <div className="flex flex-row mt-10">
        <div className="relative w-1/2 h-[16rem] z-10">
          <div className="flex flex-col">
            <div className="relative h-[2.5rem] z-10">
              <div className="flex justify-center">
                <div className="relative w-[10rem] h-[2.5rem] z-10">
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
            <div className="relative h-[11rem] z-10 mx-5">
              <h3
                className={`${robotoCondensed400.className} text-black text-center`}
              >
                Welcome to a glimpse of my professional/creative endeavors. I
                code and drink diet coke. Talk to me about fintech, full-stack
                dev, my Indonesian roots, ETL pipelines, or anything.
              </h3>
            </div>
            <div className="relative h-[2.5rem] z-10">
              <div className="flex justify-center">
                <div className="relative w-[10rem] h-[2.5rem] z-10">
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
                <div className="relative w-[10rem] h-[14rem] z-10">
                  <div className="absolute w-full h-full right-[0.75rem] top-[0.75rem] bg-black" />
                  <Image
                    src="/austin.png"
                    fill
                    className="object-cover border-solid border-4 border-black"
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
      <div className="flex flex-col mt-7 space-y-8">
        <ExpandableView title="SKILLS">
          <h1>TEST</h1>
        </ExpandableView>
        <ExpandableView title="EXPERIENCE">
          <h1>TEST</h1>
        </ExpandableView>
        <ExpandableView title="PROJECTS">
          <h1>TEST</h1>
        </ExpandableView>
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
