import { Hamburger } from "../Hamburger/Hamburger"
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <>
            <nav className="w-full px-[24px] md:px-[48px] py-[16px] text-lg flex flex-col md:flex-row gap-y-[16px] md:gap-y-0 gap-x-[16px] md:gap-x-[32px] md:items-center justify-items-start md:justify-between text-center">
                {/* Titre "ORTHOPOLE" (colonne 1, à gauche) */}
                <div className="text-xl font-medium leading-[1.4] justify-self-center md:justify-self-start">
                    ORTHOPOLE
                </div>

                {/* Contenu du menu */}
                <Hamburger>
                    <>
                        {/* Version desktop/tablette */}
                        <div className="hidden md:flex md:justify-between md:items-center w-full">
                            {/* <ul> centré */}
                            <ul className="flex justify-start gap-[24px] font-semibold leading-[1.4] list-none w-full">
                                <li><a href="">Chirurgie</a></li>
                                <li><Link to="/specialites">Nos spécialités</Link></li>
                                <li><Link to="/equipes">Nos équipes</Link></li>
                                <li><a href="">Infos/Contact</a></li>
                            </ul>
                            {/* Bouton "RENDEZ-VOUS" à droite */}
                            <div className="text-[#F5F3EF] bg-[#0C1A2E] font-medium leading-[23.48px] px-[24px] py-[10px] w-fit">
                                <a href="">RENDEZ-VOUS</a>
                            </div>
                        </div>

                        {/* Version mobile */}
                        <div className="md:hidden flex flex-col gap-6 items-center w-full">
                            <ul className="flex flex-col gap-[24px] font-semibold text-[#FBF8F3] leading-[1.4] list-none w-fit text-center">
                                <li><Link to="/specialites">Nos spécialités</Link></li>
                                <li><Link to="/equipes">Nos équipes</Link></li>
                                <li><a href="">À propos</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                            <div className="text-[#0C1A2E] bg-[#C9BBA8] font-medium leading-[23.48px] px-[24px] py-[10px] w-full mx-auto">
                                <a href="">RENDEZ-VOUS</a>
                            </div>
                        </div>
                    </>
                </Hamburger>
            </nav>
        </>
    )
}