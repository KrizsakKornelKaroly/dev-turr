import Image from "next/image"
import Navbar from "@/components/Navbar"
import Posztok from "@/components/Turrmedia/Posztok"

const Turrmedia = () => {
    return(
        <>
            <Navbar />
            <div className="bg-[url('/images/iskola.png')] bg-bottom bg-clip-padding h-2/6 bg-no-repeat bg-cover">
                <div className="h-full flex justify-center ">
                    <h1 className="flex justify-center self-center items-center text-center text-white font-bold text-8xl stroke-black stroke">TürrMédia</h1>
                </div>
            </div>
            <Posztok />
        </>
    )
}

export default Turrmedia