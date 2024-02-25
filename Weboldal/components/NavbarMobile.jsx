import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarMobile = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "TürrMédia", href: "turrmedia" },
    { id: 2, text: "TürrCast", href: "turrcast" },
    { id: 3, text: "TürrAI", href: "turrAi" },
    { id: 4, text: "TürrArchivum", href: "turrArchivum" },
    { id: 5, text: "Rólunk", href: "rolunk" },
  ];

  return (
    <div className="bg-navmenu flex justify-between items-center h-16 mx-auto px-4 text-white">
      <div>
        <Image
          width={243}
          height={633}
          quality={100}
          src="/images/turrszaz.png"
          className=""
        />
      </div>

      <div className="flex items-center justify-center gap-5">
        <Link href={"/"}>
          <Image
            width={45}
            height={45}
            quality={100}
            src="/images/Profilmenü.png"
            className=""
          />
        </Link>

        <div onClick={handleNav} className="block ">
          {nav ? (
            <span style={{ fontSize: "1.5rem" }}>&#10006;</span>
          ) : (
            <span style={{ fontSize: "1.5rem" }}>&#x2630;</span>
          )}
        </div>

        <ul
          className={
            nav
              ? "fixed flex flex-col items-center justify-center gap-4 left-0 top-16 w-full h-[50%] rounded-b-[25px] pb-5 border-r-gray-900 bg-navmenu ease-in-out duration-500"
              : "ease-in-out w-[60%] h-[50%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {navItems.map((item) => (
            <Link
              className="flex items-center justify-center px-4 py-2 shadow-xl border-b-[3px] rounded-xl hover:opacity-70 bg-navgombok duration-300 cursor-pointer border-black mx-auto w-[50%]"
              href={item.href}
            >
              <li key={item.id}>{item.text}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;
