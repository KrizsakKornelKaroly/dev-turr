"use client"
import Image from "next/image";
import navbar from "../public/navbar.css"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";



const NavbarDesktop = () => {
  return (
    <div className="fullNav">
      <div className="kep">
      <Image
                width={243}
                height={633}
                quality={100}
                src="/images/turrszazwm.png"
                className=""
        />
      </div>
      <div className="NavGombok">
        <button><Link href="/turrmedia">TürrMédia</Link></button>
        <button>TürrCast</button>
        <button><Link href="/turrai">TürrAI</Link></button>
        <button>TürrArchívum</button>
        <button><Link href="/rolunk">Rólunk</Link></button>
      </div>
      <div className="userNav">
          <button id="profilkep">
          <Image
                width={60}
                height={60}
                quality={100}
                src="/images/Profilmenü.png"
                className=""/>
          </button>
      </div>
    </div>
    
  );
};

export default NavbarDesktop;
