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
    <div className="bg-navmenu flex justify-between items-center h-[70px] mx-auto px-4 text-white">
      <div>
        <Image
          layout="responsive"
          width={243}
          height={59.8}
          sizes="(max-width: 450px) 100%, (max-width: 930px) 100%, 243px"
          quality={100}
          src="/images/turrszazwm.png"
          className=""
        />
      </div>

      <div className="flex items-center justify-center gap-5">
        <Link href={"/"}>
          <Image
            layout="responsive"
            width={60}
            height={60}
            sizes="(max-width: 450px) 100%, (max-width: 930px) 100%, 40px"
            quality={100}
            src="/images/Profilmenü.png"
            className=""
          />
        </Link>

        <div onClick={handleNav} className="block">
          {nav ? (
            <span className="close-icon">&#10006;</span>
          ) : (
            <span className="menu-icon">&#x2630;</span>
          )}
        </div>

        <ul
          className={`${
            nav
              ? "absolute z-[99] flex flex-col items-center justify-center gap-4 left-0 right-0 top-16 w-[85vw] rounded-b-[25px] py-5 px-2 border-r-gray-900 bg-navmenu mx-auto"
              : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <Link id="navLink" href={item.href} key={item.id}>
              <li className="flex items-center justify-center px-4 py-2 shadow-xl border-b-[3px] rounded-[90px] hover:opacity-70 bg-navgombok duration-150 cursor-pointer border-black mx-auto w-[72vw] text-2xl">
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .close-icon {
          font-size: 2rem;
        }

        .menu-icon {
          font-size: 2rem;
        }

        @media (max-width: 450px) {
          li {
            font-size: 20px;
            padding: 5px;
          }

          .close-icon,
          .menu-icon {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NavbarMobile;
