"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const AI = () => {
  const [isHovered, setIsHovered] = useState(true);

  const aiTanarok = [
    {
      name: "Foki Zoltán",
      img: "/images/fokiAI.jpg",
      href: "/turrai/fokizoltan",
      caption: "mérnök informatikus",
    },
    {
      name: "Taskovics Péter",
      img: "/images/taskovicsAI.png",
      href: "/turrai/taskovicspeter",
      caption: "mérnök informatikus",
    },
    {
      name: "Varga József",
      img: "/images/vargaAI.jpg",
      href: "/turrai/vargajozsef",
      caption: "mérnök informatikus",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="my-16">
        <div className="text-center">
          <h1 className="text-6xl">TürrAI</h1>
          <p className="text-foreground">
            Kérlek válassz egy oktatót, akivel szeretnél beszélgetni!
          </p>
        </div>
        <div className="flex justify-center py-8 gap-5 flex-wrap">
          {aiTanarok.map((tanar) => {
            return (
              <div key={tanar}>
                <div className=" border border-black rounded-lg text-center relative  ">
                  <Button
                    onClick={() => (window.location.href = `${tanar.href}`)}
                    className={`absolute ${
                      isHovered ? "flex" : "hidden"
                    } items-center justify-center w-full -top-2 -left-1 h-4/5 bg-gray-600 opacity-0 hover:opacity-50`}
                  >
                    <p className="font-bold text-md text-blue-200 border hover:bg-gray-700 bg-black/90 opacity-100 border-gray-200 px-5 py-2 rounded-lg">
                      Csevegés
                    </p>
                  </Button>
                  <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  ></div>
                  <Image
                    width={227}
                    height={200}
                    quality={100}
                    src={tanar.img}
                    className="min-h-64 max-h-64 min-w-64 max-w-64 rounded-sm hover:opacity-45 hover:bg-gray-500 "
                  />
                  <div className="my-3">
                    <h1>{tanar.name}</h1>
                    <p className="text-foreground/80">{tanar.caption}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AI;
