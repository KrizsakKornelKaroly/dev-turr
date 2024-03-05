"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import rolunk from "../../public/rolunk.css";
import Popup from 'reactjs-popup';
import ReactModal from 'react-modal';
import { GoX } from "react-icons/go";

import { useState } from "react";

const RolunkOldal = () => {
    
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
     
    return(
    <div>
        <Navbar />
        <ReactModal
              isOpen={open1}
              aria={{
                labelledby: "heading",
                describedby: "full_description"
              }}>
              <h1 id="heading">Fejlesztőcsapat</h1>
              <div id="full_description">
              <div className='modal'>
                                <div className="tagokdiv">
                                <div>
                                    <h3>Krizsák Kornél</h3>
                                    <Image
                                        width={243}
                                        height={633}
                                        quality={100}
                                        src="/images/Profilmenü.png"
                                        className="tagkepek"
                                    />
                                    <ul>
                                        <li>Grafikai tervek</li>
                                        <li>Adatbázis-kezelés</li>
                                        <li>Front-end programozás</li>
                                        <li>Digitalizáció</li>
                                        <li>Dokumentáció</li>    
                                    </ul>                      
                                </div>
                                <div>
                                    <h3>Dávid Csaba</h3>
                                    <Image
                                        width={243}
                                        height={633}
                                        quality={100}
                                        src="/images/Profilmenü.png"
                                        className="tagkepek"
                                    />
                                    <ul>
                                        <li>Grafikai tervek</li>
                                        <li>Fiókrendszer</li>
                                        <li>Adatbázis-kezelés</li>
                                        <li>Hitelesítőrendszer</li>
                                        <li>Full-stack programozás</li>    
                                    </ul>
                                </div>
                                <div>
                                    <h2>Foki Zoltán</h2>
                                    <Image
                                        width={243}
                                        height={633}
                                        quality={100}
                                        src="/images/Profilmenü.png"
                                        className="tagkepek"
                                    />
                                    <ul>
                                        <li>Mentor tanár</li>
                                        <li>Scrum Master</li>
                                        <li>Szakmai tanácsadó</li>
                                        <li>Kapcsolattartó</li>    
                                    </ul>
                                </div>
                                <div>
                                    <h3>Bujáki Erik Attila</h3>
                                    <Image
                                        width={243}
                                        height={633}
                                        quality={100}
                                        src="/images/Profilmenü.png"
                                        className="tagkepek"
                                    />
                                    <ul>
                                        <li>Grafikai tervek</li>
                                        <li>Képszerkesztés</li>
                                        <li>Kapcsolattartás</li>
                                        <li>Anyaggyűjtés</li>
                                        <li>Dokumentáció</li>    
                                    </ul>
                                </div>
                                <div>
                                    <h3>Dóczi Adrián Márk</h3>
                                    <Image
                                        width={243}
                                        height={633}
                                        quality={100}
                                        src="/images/Profilmenü.png"
                                        className="tagkepek"
                                    />
                                    <ul>
                                        <li>TürrAI</li>
                                        <li>Anyaggyűjtés</li>
                                        <li>API kezelés</li>
                                        <li>Szűrőrendszerek</li>
                                        <li>Full-stack programozás</li>    
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div>
                                <button className="bezaras" onClick=
                                    {() => setOpen1(!open1)}>

                                        <GoX className="text-4xl" />
                                </button>
                            </div>
              </div>
        </ReactModal>

        <ReactModal
              isOpen={open2}
              aria={{
                labelledby: "heading",
                describedby: "full_description"
              }}>
              <h1 id="heading">Podcast stáb</h1>
              <div id="full_description">
              <div className='modal'>
                            <div className='content'>
                                <div className="tagokdiv">
                                <div>
                                    <h3>Bujáki Erik Attila</h3>
                                    <Image
                                        width={243}
                                        height={633}
                                        quality={100}
                                        src="/images/Profilmenü.png"
                                        className="tagkepek"
                                    />
                                    <ul>
                                        <li>Műsorvezető</li>
                                        <li>Forgatókönyv-író</li>  
                                    </ul>                      
                                </div>
                                <div>
                                    <h3>Krizsák Kornél</h3>
                                    <Image
                                        width={243}
                                        height={633}
                                        quality={100}
                                        src="/images/Profilmenü.png"
                                        className="tagkepek"
                                    />
                                    <ul>
                                        <li>Műsorvezető</li>
                                        <li>Hangfelvétel</li>
                                        <li>Képi utómunkák</li> 
                                    </ul>
                                </div>
                                <div>
                                    <h3>Rezsneki Bence</h3>
                                    <Image
                                        width={243}
                                        height={633}
                                        quality={100}
                                        src="/images/Profilmenü.png"
                                        className="tagkepek"
                                    />
                                    <ul>
                                        <li>Beugrós műsorvezető</li>
                                        <li>Képfelvétel</li>
                                        <li>Forgatókönyv-író</li>    
                                    </ul>
                                </div>
                                <div>
                                    <h3>Szalai Petra</h3>
                                    <Image
                                        width={243}
                                        height={633}
                                        quality={100}
                                        src="/images/Profilmenü.png"
                                        className="tagkepek"
                                    />
                                    <ul>
                                        <li>Beugrós műsorvezető</li>
                                        <li>Forgatókönyv-író</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>Pál Ágnes</h3>
                                    <Image
                                        width={243}
                                        height={633}
                                        quality={100}
                                        src="/images/Profilmenü.png"
                                        className="tagkepek"
                                    />
                                    <ul>
                                        <li>Moderátor</li>  
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div>
                            <button className="bezaras" onClick=
                                    {() => setOpen2(!open2)}>

                                        <GoX className="text-4xl" />
                                </button>
                            </div>
                        </div>
                                
              </div>
        </ReactModal>
        <h1 className="focim">A képekre kattintva részletes leírást találhatsz a csapatok tagjairól!</h1>
        <div className="pagecontent">
        <div className="devteam">
            <h1>Fejlesztőcsapat</h1>
            <button className="kepmegnyito" onClick={()=>setOpen1(!open1)}>
            <Image
                width={243}
                height={633}
                quality={100}
                src="/images/csapatplaceholder.png"
                className="placeholderkep"
            /></button>
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
            <button className="kepmegnyito" onClick={()=>setOpen2(!open2)}>
            <Image
                width={243}
                height={633}
                quality={100}
                src="/images/csapatplaceholder.png"
                className="placeholderkep"
            /></button>
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