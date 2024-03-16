"use client";
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
    <div className="navbar bg-navmenu flex justify-between items-center h-[70px] mx-auto text-white">
      <div className="flex items-center justify-center gap-5">
        <img
          layout="responsive"
          width={243}
          height={59.8}
          sizes="(max-width: 300px) 130px, (max-width: 450px) 190px, (max-width: 930px) 243px"
          quality={100}
          src="/images/turrszazwm.png"
          className=""
          alt="Türr logó"
        />
      </div>

      <div className="flex items-center justify-center gap-2 sm:gap-5">
        <Link href={"/"}>
          <img
            layout="responsive"
            width={60}
            height={60}
            sizes="(max-width: 300px) 40px, (max-width: 450px) 50px, (max-width: 930px) 60px"
            quality={100}
            src="/images/Profilmenü.png"
            className=""
            alt="Profilmenü"
          />
        </Link>

        <div onClick={handleNav} className="block">
          {nav ? (
            <button className="close-icon">&#10006;</button>
          ) : (
            <button className="menu-icon">&#x2630;</button>
          )}
        </div>

        <ul
          style={{
            opacity: nav ? 1 : 0,
            transition: `opacity 150ms ease-in-out${nav ? " 150ms" : ""}`,
            visibility: nav ? "visible" : "hidden",
          }}
          className="absolute z-[99] flex flex-col items-center justify-center gap-4 left-0 right-0 top-16 w-[85vw] rounded-b-[25px] py-5 px-2 border-r-gray-900 bg-navmenu mx-auto"
        >
          {navItems.map((item) => (
            <Link id="navLink" href={item.href} key={item.id}>
              <li
                style={{
                  transition: `opacity 150ms ease-in-out${nav ? " 150ms" : ""}`,
                }}
                className="flex items-center justify-center px-4 py-2 shadow-xl border-b-[3px] rounded-[90px] bg-navgombok hover:opacity-70 duration-150 cursor-pointer border-black mx-auto w-[72vw] text-2xl"
              >
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          padding-right: 15px;
        }

        .close-icon,
        .menu-icon {
          width: 30px;
          font-size: 2.5rem;
        }

        @media (max-width: 450px) {
          li {
            font-size: 20px;
            padding: 5px;
          }

          .close-icon,
          .menu-icon {
            font-size: 2rem;
          }
        }

        @media (max-width: 300px) {
          .navbar {
            padding-right: 10px;
          }

          li {
            font-size: 15px;
            padding: 3px;
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
