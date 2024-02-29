import Image from "next/image";
import Navbar from "@/components/Navbar";
import rolunk from "../../public/rolunk.css";

const RolunkOldal = () => {
    return(
    <div>
        <Navbar />
        <h1 className="focim">A képekre kattintva részletes leírást találhatsz a csapatok tagjairól!</h1>
        <div className="pagecontent">
        <div className="devteam">
            <h1>Fejlesztőcsapat</h1>
            <Image
                width={243}
                height={633}
                quality={100}
                src="/images/csapatplaceholder.png"
                className="placeholderkep"
            />
            <ul>
                <li className="tagcim">Tagok:</li>
                <li>Krizsák Kornél</li>
                <li>Bujáki "Kupak" Erik</li>
                <li>Dóczi Adrián Márk</li>
                <li>Dávid Csaba</li>
                <li>Foki Zoltán</li>
            </ul>

        </div>

        <div className="podcastteam">
            <h1>Podcast-stáb</h1>
            <Image
                width={243}
                height={633}
                quality={100}
                src="/images/csapatplaceholder.png"
                className="placeholderkep"
            />
            <ul>
                <li className="tagcim">Tagok:</li>
                <li>Bujáki Erik Attila</li>
                <li>Krizsák Kornél</li>
                <li>Rezsneki Bence</li>
                <li>Szalai Petra</li>
                <li>Pál Ágnes</li>
            </ul>

        </div>
        </div>
    </div>
    )

}

export default RolunkOldal;