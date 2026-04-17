import { Hamburger } from "../Hamburger/Hamburger"
import { Link, useLocation } from "react-router-dom"
import { DarkModeToggle } from "../DarkMode/DarkModeToggle"
import { useDarkMode } from "../hooks/useDarkMode"

export default function NavBar() {
    const { pathname } = useLocation();
    const isHome = pathname === "/";
    const spanColor = isHome ? "lg:hover:text-[#b8cae2]" : "lg:hover:text-[#2d5183]";
    const { isDark } = useDarkMode();

    return (
        <>
            <Hamburger isDark={isDark}>
                <div className="flex flex-col lg:flex-row justify-between lg:gap-6 items-center w-full h-full pb-[48px] lg:pb-0">
                    {/* Liens de navigation */}
                    <ul className={`flex flex-col lg:flex-row justify-evenly lg:gap-[24px] lg:justify-center items-center font-semibold leading-[1.4] list-none text-center w-full h-full mx-auto ${isHome ? "text-[#FBF8F3]" : "text-[#FBF8F3] lg:text-[#0C1A2E]"}`}>
                        <li><Link to="/" className={`${spanColor}`}>Accueil</Link></li>
                        <li><Link to="/specialites" className={`${spanColor}`}>Nos spécialités</Link></li>
                        <li><Link to="/equipes" className={`${spanColor}`}>Nos équipes</Link></li>
                        <li><Link to="/infos" className={`${spanColor}`}>Infos/Contact</Link></li>
                    </ul>
                    {/* Groupe bouton dark mode + RENDEZ-VOUS */}
                    <div className="flex items-center gap-[24px] w-full lg:w-fit justify-center lg:justify-end">
                        <DarkModeToggle isHome={isHome} />
                        <Link to="/infos#contact-form" className="w-fit">
                            <div className={`text-[#0C1A2E] font-medium leading-[23.48px] px-[24px] py-[10px] whitespace-nowrap ${isHome ? "bg-[#C9BBA8] hover:bg-[#ac9c86]" : "bg-[#C9BBA8] hover:bg-[#ac9c86] lg:text-[#FBF8F3] lg:bg-[#0C1A2E] lg:hover:bg-[#1e395e]"}`}>
                                RENDEZ-VOUS
                            </div>
                        </Link>
                    </div>
                </div>
            </Hamburger>
        </>
    );
}