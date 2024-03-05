import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";


export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <div className="w-1/4 bg-gray-200/90 h-full transition-all delay-1000">
            <IoMdClose className="transition-all text-4xl float-right m-2 hover:cursor-pointer" onClick={() => setOpen(!open)} />
          <h1 className="text-center text-4xl font-serif pt-5">TürrAI</h1>
        </div>
      )}


      {!open && (
        <div className="w-10 flex justify-center self-center items-center bg-gray-200/90 h-full">
            <FaLongArrowAltRight className="transition-all text-4xl float-right m-2 hover:cursor-pointer" onClick={() => setOpen(!open)} />
        </div>
      )}
    </>
  );
}
