import Image from "next/image";
import Navbar from "@/components/Navbar";
import Posztok from "@/components/Turrmedia/Posztok";

const Turrmedia = async () => {
  return (
    <>
      <Navbar />
      <div className="bg-[url('/images/iskola.png')] bg-bottom bg-clip-padding h-2/4 bg-no-repeat bg-cover">
        <div className="h-full flex justify-center ">
          <h1 className=" flex justify-center self-center items-center text-center text-white font-bold text-xl sm:text-4xl md:text-8xl stroke-black stroke text-shadow-inside">
            TürrMédia
          </h1>
        </div>
      </div>

      <span className="h-screen">
        <Posztok />
      </span>
    </>
  );
};

export default Turrmedia;
