import Image from "next/image";
import {
  inter,
  robotoCondensed400,
  robotoCondensed500,
  robotoCondensed200,
} from "./fonts";
import ExpandableView from "./expandableView";
import { experience_links, project_links, footer_links } from "./links";
import Link from "next/link";

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

  const footer = ["github", "email", "linkedin", "instagram", "resume"];

  return (
    <main className="overscroll-contain bg-matte bg-fixed">
      {/* Hero Section START */}
      <div className="flex justify-center b-5 pt-6">
        <div className="relative sm:w-[60%] xl:w-[40%] 2xl:w-[30%] w-[85%] h-96 z-10">
          <div className="absolute w-full h-full translate-x-5 translate-y-5 bg-black" />
          <Image
            src="/rockstar.gif"
            fill
            className="object-cover sepia-[0.5] brightness-50 border-solid border-4 border-black"
            alt="Hero gif"
          />
          <div className={`${robotoCondensed400.className} shadow-and-slide`}>
            <p className="absolute z-10 ml-[1.4em] mt-[14.1em] text-l">
              Hi, my name is
            </p>
          </div>
          <div
            className={`${robotoCondensed500.className} slide-in-left shadow-and-slide`}
          >
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
      <div className="flex flex-row mt-10 sm:w-[60%] xl:w-[40%] 2xl:w-[30%] mx-auto">
        <div className="relative w-1/2 h-[16rem]">
          <div className="flex flex-col h-full">
            <div className="relative h-[3rem] my-auto xs:h-[2.5rem]">
              <div className="flex justify-center">
                <div className="relative w-[10rem] h-[3rem] xs:h-[2.5rem]">
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
            <div className="relative mx-[2em] py-1 my-auto box-shadow-2xl">
              <h3
                className={`${robotoCondensed400.className} text-black text-center fade-in mx-[0%] md:mx-[1rem] xs:text-sm text-xs`}
              >
                Welcome to a glimpse of my professional/creative endeavors. I
                code and drink diet coke. Talk to me about full-stack
                development, fintech, dev-ops, ETL pipelines, or anything.
              </h3>
            </div>
            <div className="relative h-[3rem] my-auto xs:h-[2.5rem]">
              <div className="flex justify-center">
                <div className="relative w-[10rem] h-[3rem] xs:h-[2.5rem]">
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
        <div className="relative w-1/2 h-[16rem]">
          <div className="flex flex-col justify-center">
            <div className="relative h-[1rem]"></div>
            <div className="relative h-[14rem]">
              <div className="flex justify-center">
                <div className="relative w-[10rem] h-[14rem]">
                  <div className="absolute w-full h-full right-[0.75rem] top-[0.75rem] bg-black" />
                  <Image
                    src="/austin.png"
                    fill
                    className="fade-in object-cover border-solid border-4 border-black"
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
      <div className="flex flex-col mt-7 space-y-8 sm:w-[75%] xl:w-[55%] 2xl:w-[40%] mx-auto">
        <ExpandableView title="SKILLS">
          <div
            className={`${robotoCondensed500.className} mt-[7em] md:mx-[1rem]`}
          >
            <div className="w-full text-center pb-2">
              <h1>Frontend</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-[0.5em] mx-[1em] pb-[3em]">
              {frontendLogos.map((logo) => (
                <div key={logo} className="hover:brightness-50">
                  <Image
                    src={`/${logo}.svg`}
                    width={80}
                    height={80}
                    style={{
                      objectFit: "contain",
                    }}
                    alt={logo}
                  />
                </div>
              ))}
            </div>
            <div className="w-full text-center pb-2">
              <h1>Backend/Data</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-[0.5em] mx-[1em]">
              {backendLogos.map((logo) => (
                <div key={logo} className="hover:brightness-50">
                  <Image
                    src={`/${logo}.svg`}
                    width={80}
                    height={80}
                    style={{
                      objectFit: "contain",
                    }}
                    alt={logo}
                  />
                </div>
              ))}
            </div>
          </div>
        </ExpandableView>
        <ExpandableView title="EXPERIENCE">
          <div className={`${robotoCondensed500.className} mt-[7em]`}>
            <div className="flex flex-col mt-[1em] ml-[2em] xs:ml-[10%] 2xl:ml-[25%] mr-[1em] pb-[1em] gap-5">
              <Link href={experience_links.wealthfront}>
                <div className="flex flex-row gap-3 hover:brightness-50">
                  <Image
                    src={`/wealthfront.svg`}
                    width={80}
                    height={80}
                    style={{
                      objectFit: "contain",
                    }}
                    alt="Wealthfront"
                  />
                  <div className="flex-col mt-[1em]">
                    <h1>SWE Intern @ Wealthfront</h1>
                    <div className={`${robotoCondensed200.className}`}>
                      <h2>May 2024 - Aug 2024</h2>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={experience_links.path}>
                <div className="flex flex-row gap-3 hover:brightness-50">
                  <Image
                    src={`/path.jpeg`}
                    width={80}
                    height={80}
                    style={{
                      objectFit: "contain",
                      borderRadius: "10px",
                    }}
                    alt="Berkeley PATH"
                  />
                  <div className="flex-col mt-[1em]">
                    <h1>Research @ California Path</h1>
                    <div className={`${robotoCondensed200.className}`}>
                      <h2>Jul 2023 - Present</h2>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={experience_links.blum}>
                <div className="flex flex-row gap-3 hover:brightness-50">
                  <Image
                    src={`/blum.jpeg`}
                    width={80}
                    height={80}
                    style={{
                      objectFit: "contain",
                      borderRadius: "100%",
                    }}
                    alt="Blum Hall"
                  />
                  <div className="flex-col mt-[1em]">
                    <h1>Web Dev @ Blum Center</h1>
                    <div className={`${robotoCondensed200.className}`}>
                      <h2>Feb 2022 - May 2024</h2>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={experience_links.oscar}>
                <div className="flex flex-row gap-3 hover:brightness-50">
                  <Image
                    src={`/oscar.jpeg`}
                    width={80}
                    height={80}
                    style={{
                      objectFit: "contain",
                      borderRadius: "30%",
                    }}
                    alt="Oscar Health"
                  />
                  <div className="flex-col mt-[1em]">
                    <h1>SWE Intern @ Oscar Health</h1>
                    <div className={`${robotoCondensed200.className}`}>
                      <h2>May 2023 - Aug 2023</h2>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={experience_links.berkeley}>
                <div className="flex flex-row gap-3 hover:brightness-50">
                  <Image
                    src={`/berkeley.jpeg`}
                    width={80}
                    height={80}
                    style={{
                      objectFit: "contain",
                      borderRadius: "30%",
                    }}
                    alt="Berkeley One IT"
                  />
                  <div className="flex-col mt-[1em]">
                    <h1>Web Accessibility @ Berk One IT</h1>
                    <div className={`${robotoCondensed200.className}`}>
                      <h2>Jul 2022 - Jun 2023</h2>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={experience_links.urbaneyes}>
                <div className="flex flex-row gap-3 hover:brightness-50">
                  <Image
                    src={`/urbaneyes.jpeg`}
                    width={80}
                    height={80}
                    style={{
                      objectFit: "contain",
                      borderRadius: "30%",
                    }}
                    alt="Urban Eyes"
                  />
                  <div className="flex-col mt-[1em]">
                    <h1>Data Eng. @ Urban Eyes</h1>
                    <div className={`${robotoCondensed200.className}`}>
                      <h2>Jun 2022 - Aug 2022</h2>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={experience_links.memoryz}>
                <div className="flex flex-row gap-3 hover:brightness-50">
                  <Image
                    src={`/memoryz.jpeg`}
                    width={80}
                    height={80}
                    style={{
                      objectFit: "contain",
                      borderRadius: "100%",
                    }}
                    alt="Memoryz"
                  />
                  <div className="flex-col mt-[1em]">
                    <h1>SWE Intern @ MemoryZ</h1>
                    <div className={`${robotoCondensed200.className}`}>
                      <h2>Jun 2022 - Aug 2022</h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </ExpandableView>
        <ExpandableView title="PROJECTS">
          <div className={`${robotoCondensed500.className} mt-[7em]`}>
            <div className="flex flex-wrap justify-center gap-6 mt-[8em] md:mx-[4em]">
              <Link href={project_links.wealthdash}>
                <div className="w-[15em] h-[12em] rounded-xl bg-white hover:brightness-50">
                  <div className="relative w-full h-[6em] rounded-xl ">
                    <Image
                      src="/wealthdash.png"
                      fill
                      className="object-contain rounded-t-xl"
                      alt="Wealthdash"
                    />
                  </div>
                  <div className="relative w-[15em] h-[6em] bg-gray-500 rounded-b-xl">
                    <div className="flex-col ml-[1em] pt-[0.75em]">
                      WealthDash
                    </div>
                    <div className={`${robotoCondensed200.className}`}>
                      <div className="flex-col mx-[1em]">
                        Lunch menu voting for Wealthfront employees
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={project_links.pedal}>
                <div className="w-[15em] h-[12em] rounded-xl bg-white hover:brightness-50">
                  <div className="relative w-full h-[6em] rounded-xl ">
                    <Image
                      src="/pedal.png"
                      fill
                      className="object-contain rounded-t-xl"
                      alt="Pedal"
                    />
                  </div>
                  <div className="relative w-[15em] h-[6em] bg-gray-500 rounded-b-xl">
                    <div className="flex-col ml-[1em] pt-[0.75em]">PedaL</div>
                    <div className={`${robotoCondensed200.className}`}>
                      <div className="flex-col mx-[1em]">
                        Instant AI feedback for lecturers and presenters.
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={project_links.littlegems}>
                <div className="w-[15em] h-[12em] rounded-xl bg-white hover:brightness-50">
                  <div className="relative w-full h-[6em] rounded-xl ">
                    <Image
                      src="/littlegems.png"
                      fill
                      className="object-contain rounded-t-xl"
                      alt="Little Gems"
                    />
                  </div>
                  <div className="relative w-[15em] h-[6em] bg-gray-500 rounded-b-xl">
                    <div className="flex-col ml-[1em] pt-[0.75em]">
                      Little Gems
                    </div>
                    <div className={`${robotoCondensed200.className}`}>
                      <div className="flex-col mx-[1em]">
                        Connect with locals to discover hidden gems when
                        traveling
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={project_links.aequalis}>
                <div className="w-[15em] h-[12em] rounded-xl bg-white hover:brightness-50">
                  <div className="relative w-full h-[6em] rounded-xl ">
                    <Image
                      src="/aequalis.jpg"
                      fill
                      className="object-contain rounded-t-xl"
                      alt="Aequalis"
                    />
                  </div>
                  <div className="relative w-[15em] h-[6em] bg-gray-500 rounded-b-xl">
                    <div className="flex-col ml-[1em] pt-[0.75em]">
                      Aequalis
                    </div>
                    <div className={`${robotoCondensed200.className}`}>
                      <div className="flex-col mx-[1em]">
                        Healthcare equity dApp, 2nd best use of Solana in
                        CalHacks 2022.
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={project_links.blacklitterman}>
                <div className="w-[15em] h-[12em] rounded-xl bg-white hover:brightness-50">
                  <div className="relative w-full h-[6em] rounded-xl ">
                    <Image
                      src="/blacklitterman.png"
                      fill
                      className="object-contain rounded-t-xl"
                      alt="UChicago Trading Competition"
                    />
                  </div>
                  <div className="relative w-[15em] h-[6em] bg-gray-500 rounded-b-xl">
                    <div className="flex-col ml-[1em] pt-[0.75em]">
                      Portfolio Rebalancing Bot
                    </div>
                    <div className={`${robotoCondensed200.className}`}>
                      <div className="flex-col mx-[1em]">
                        Won 3rd place in UChicago Trading Competition 2022
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={project_links.tasim}>
                <div className="w-[15em] h-[12em] rounded-xl bg-white hover:brightness-50">
                  <div className="relative w-full h-[6em] rounded-xl ">
                    <Image
                      src="/tasim.png"
                      fill
                      className="object-contain rounded-t-xl"
                      alt="Techincal Analysis Simulator"
                    />
                  </div>
                  <div className="relative w-[15em] h-[6em] bg-gray-500 rounded-b-xl">
                    <div className="flex-col ml-[1em] pt-[0.75em]">
                      Technical Analaysis Simulator
                    </div>
                    <div className={`${robotoCondensed200.className}`}>
                      <div className="flex-col mx-[1em]">
                        Learn and dabble into technical analysis with intuitive
                        UI.
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={project_links.warden}>
                <div className="w-[15em] h-[12em] rounded-xl bg-white hover:brightness-50">
                  <div className="relative w-full h-[6em] rounded-xl ">
                    <Image
                      src="/warden.png"
                      fill
                      className="object-contain rounded-t-xl"
                      alt="Warden"
                    />
                  </div>
                  <div className="relative w-[15em] h-[6em] bg-gray-500 rounded-b-xl">
                    <div className="flex-col ml-[1em] pt-[0.75em]">Warden</div>
                    <div className={`${robotoCondensed200.className}`}>
                      <div className="flex-col mx-[1em]">
                        On-campus safety app awarded 1st place in 2021 CivHacks.
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={project_links.quiconnect}>
                <div className="w-[15em] h-[12em] rounded-xl bg-white hover:brightness-50">
                  <div className="relative w-full h-[6em] rounded-xl ">
                    <Image
                      src="/quiconnect.png"
                      fill
                      className="object-contain rounded-t-xl"
                      alt="QuiConnect"
                    />
                  </div>
                  <div className="relative w-[15em] h-[6em] bg-gray-500 rounded-b-xl">
                    <div className="flex-col ml-[1em] pt-[0.75em]">
                      QuiConnect
                    </div>
                    <div className={`${robotoCondensed200.className}`}>
                      <div className="flex-col mx-[1em]">
                        Basically Apple NameDrop before it existed. Made in 2021
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="h1 bottom-0 text-center w-100% mt-[1.5em]">
              Find more projects in my GitHub!
            </div>
          </div>
        </ExpandableView>
      </div>
      {/* More Info Section END */}
      <div className="h-[3rem]"></div>

      {/* Footer Section START */}
      <div className="sm:w-[80%] xl:w-[60%] 2xl:w-[45%] flex justify-center gap-x-[2em] mx-auto w-full h-[5rem] sticky bottom-0 slide-in-bottom bg-gradient-to-r from-[#8c8970] to-[#4d4b3c] border-t-[7px] border-x-[7px] outline-offset-[-20px] rounded-t-[40px]">
        {footer.map((img: string) => (
          <div
            key={img}
            className="relative h-[2rem] mt-[1rem] shadow-2xl hover:brightness-[170]"
          >
            <Link href={footer_links[img as keyof typeof footer_links]}>
              <Image
                src={`/${img}.svg`}
                width={40}
                height={40}
                style={{
                  objectFit: "contain",
                }}
                alt={img}
              />
            </Link>
          </div>
        ))}
      </div>
      {/* Footer Section END */}
    </main>
  );
}
