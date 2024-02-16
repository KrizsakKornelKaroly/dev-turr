import Image from "next/image";
import navbar from "../public/navbar.css"

const Navbar = () => {
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
        <button>TürrMédia</button>
        <button>TürrCast</button>
        <button>TürrAI</button>
        <button>TürrArchívum</button>
        <button>Rólunk</button>
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

export default Navbar;
