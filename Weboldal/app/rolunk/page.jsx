import Image from "next/image";
import Navbar from "@/components/Navbar";
import rolunk from "../../public/rolunk.css";


const RolunkOldal = () => {
    return(
    <div>
        <Navbar />

        <div className="devteam">
            <h1>Fejlesztőcsapat</h1>
            <Image
                width={243}
                height={633}
                quality={100}
                src="/images/bujjael.jpeg"
                className="widemanusok"
            />
            <ul>
                <li>Krizsák Kornél</li>
                <li>Bujáki "Kupak" Erik</li>
                <li>Dóczi Adrián Márk</li>
                <li>Dávid Csaba</li>
                <li>Foki Zoltán</li>
            </ul>

        </div>
    </div>
    )

}

export default RolunkOldal;