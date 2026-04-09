import { Hamburger } from "../Hamburger/Hamburger"
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <>
            {/* Contenu du menu */}
            <Hamburger>
                <>
                    {/* Container ul + bouton rdv */}
                    <div className="flex flex-col lg:flex-row gap-6 justify-between items-center w-full">
                        <ul className="flex flex-col lg:flex-row gap-[24px] lg:justify-between font-semibold text-[#FBF8F3] lg:text-[#0C1A2E] lg:hover:text-[#1e395e] leading-[1.4] list-none w-fit text-center">
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/specialites">Nos spécialités</Link></li>
                            <li><Link to="/equipes">Nos équipes</Link></li>
                            <li><Link to="/infos">Infos/Contact</Link></li>
                        </ul>
                        <div className="text-[#0C1A2E] bg-[#C9BBA8] hover:bg-[#ac9c86] lg:text-[#FBF8F3] lg:bg-[#0C1A2E] lg:hover:hover:bg-[#1e395e] font-medium leading-[23.48px] px-[24px] py-[10px] w-full md:w-fit">
                            <Link to="/infos#contact-form">RENDEZ-VOUS</Link>
                        </div>
                    </div>
                </>
            </Hamburger>
        </>
    )
}