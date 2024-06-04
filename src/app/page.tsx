import Image from "next/image";

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
        <div className="relative w-1/2 h-96 z-10">
          <div className="flex flex-col">
            <div className="relative h-[8rem] z-10 bg-[#303d43]"></div>
            <div className="relative h-[8rem] z-10 bg-[#305743]"></div>
            <div className="relative h-[8rem] z-10 bg-[#303d43]"></div>
          </div>
        </div>
        <div className="relative w-1/2 h-96 z-10 bg-[#1da100]">
          <div className="flex flex-col justify-center">
            <div className="relative h-[4rem] z-10 bg-[#303d43]"></div>
            <div className="relative h-[16rem] z-10 bg-[#305743]"></div>
            <div className="relative h-[4rem] z-10 bg-[#303d43]"></div>
          </div>
        </div>
      </div>
      {/* About Section END */}

      {/* More Info Section START */}
      <div className="flex flex-col mt-10 space-y-4">
        <div className="relative h-[8rem] z-10 bg-[#f16640]"></div>
        <div className="relative h-[8rem] z-10 bg-[#f16640]"></div>
        <div className="relative h-[8rem] z-10 bg-[#f16640]"></div>
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
