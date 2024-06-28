import Image from "next/image";
import {
  inter,
  robotoCondensed400,
  robotoCondensed500,
  robotoCondensed200,
} from "./fonts";
import ExpandableView from "./expandableView";

export default function Home() {
  const frontendLogos = [
    "react",
    "tailwind",
    "next-logo",
    "typescript",
    "flutter",
  ];

  const backendLogos = [
    "mongodb",
    "kubernetes",
    "aws",
    "gcp",
    "java",
    "sql",
    "pandas",
    "python",
  ];

  return (
    <main className="">
      {/* Hero Section START */}
      <div className="flex justify-center mb-5 mt-6">
        <div className="relative w-[85%] h-96 z-10">
          <div className="absolute w-full h-full translate-x-5 translate-y-5 bg-black" />
          <Image
            src="/bg.webp"
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
                code and drink diet coke. Talk to me about full-stack
                development, fintech, dev-ops, ETL pipelines, or anything.
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
          <div className={`${robotoCondensed500.className} mt-[7em]`}>
            <div className="w-full text-center pb-2">
              <h1>Frontend</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-[0.5em] mx-[1em] pb-[3em]">
              {frontendLogos.map((logo) => (
                <Image
                  key={logo}
                  src={`/${logo}.svg`}
                  width={80}
                  height={80}
                  style={{
                    objectFit: "contain",
                  }}
                  alt="Connecting line"
                />
              ))}
            </div>
            <div className="w-full text-center pb-2">
              <h1>Backend/Data</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-[0.5em] mx-[1em]">
              {backendLogos.map((logo) => (
                <Image
                  key={logo}
                  src={`/${logo}.svg`}
                  width={80}
                  height={80}
                  style={{
                    objectFit: "contain",
                  }}
                  alt="Connecting line"
                />
              ))}
            </div>
          </div>
        </ExpandableView>
        <ExpandableView title="EXPERIENCE">
          <div className={`${robotoCondensed500.className} mt-[7em]`}>
            <div className="flex flex-col mt-[0.5em] ml-[3em] pb-[1em] gap-5">
              <div className="flex flex-row gap-3">
                <Image
                  src={`/wealthfront.svg`}
                  width={80}
                  height={80}
                  style={{
                    objectFit: "contain",
                  }}
                  alt="Connecting line"
                />
                <div className="flex-col mt-[1em]">
                  <h1>SWE Intern @ Wealthfront</h1>
                  <div className={`${robotoCondensed200.className}`}>
                    <h2>May 2024 - Aug 2024</h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <Image
                  src={`/path.jpeg`}
                  width={80}
                  height={80}
                  style={{
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                  alt="Connecting line"
                />
                <div className="flex-col mt-[1em]">
                  <h1>Research @ California Path</h1>
                  <div className={`${robotoCondensed200.className}`}>
                    <h2>Jul 2023 - Present</h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <Image
                  src={`/blum.jpeg`}
                  width={80}
                  height={80}
                  style={{
                    objectFit: "contain",
                    borderRadius: "100%",
                  }}
                  alt="Connecting line"
                />
                <div className="flex-col mt-[1em]">
                  <h1>Web Dev @ Blum Center</h1>
                  <div className={`${robotoCondensed200.className}`}>
                    <h2>Feb 2022 - May 2024</h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <Image
                  src={`/oscar.jpeg`}
                  width={80}
                  height={80}
                  style={{
                    objectFit: "contain",
                    borderRadius: "30%",
                  }}
                  alt="Connecting line"
                />
                <div className="flex-col mt-[1em]">
                  <h1>SWE Intern @ Oscar Health</h1>
                  <div className={`${robotoCondensed200.className}`}>
                    <h2>May 2023 - Aug 2023</h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <Image
                  src={`/berkeley.jpeg`}
                  width={80}
                  height={80}
                  style={{
                    objectFit: "contain",
                    borderRadius: "30%",
                  }}
                  alt="Connecting line"
                />
                <div className="flex-col mt-[1em]">
                  <h1>Web Accessibility @ Berk One IT</h1>
                  <div className={`${robotoCondensed200.className}`}>
                    <h2>Jul 2022 - Jun 2023</h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <Image
                  src={`/urbaneyes.jpeg`}
                  width={80}
                  height={80}
                  style={{
                    objectFit: "contain",
                    borderRadius: "30%",
                  }}
                  alt="Connecting line"
                />
                <div className="flex-col mt-[1em]">
                  <h1>Data Eng. @ Urban Eyes</h1>
                  <div className={`${robotoCondensed200.className}`}>
                    <h2>Jun 2022 - Aug 2022</h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <Image
                  src={`/memoryz.jpeg`}
                  width={80}
                  height={80}
                  style={{
                    objectFit: "contain",
                    borderRadius: "100%",
                  }}
                  alt="Connecting line"
                />
                <div className="flex-col mt-[1em]">
                  <h1>SWE Intern @ MemoryZ</h1>
                  <div className={`${robotoCondensed200.className}`}>
                    <h2>Jun 2022 - Aug 2022</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ExpandableView>
        <ExpandableView title="PROJECTS">
          <div className={`${robotoCondensed500.className} mt-[7em]`}>
            <div className="flex flex-wrap justify-center">
              <div className="w-[15em] h-[12em] bg-white rounded-xl">
                <div className="relative w-[15em] h-[6em] top-[6em] bg-gray-500 rounded-b-xl">
                  <div className="flex-col ml-[1em] pt-[1em]">WealthDash</div>
                  <div className={`${robotoCondensed200.className}`}>
                    <div className="flex-col ml-[1em]">
                      Lunch menu voting for Wealthfront employees
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
