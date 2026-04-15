import { Hamburger } from "../Hamburger/Hamburger"
import { Link, useLocation } from "react-router-dom"

export default function NavBar() {
    const { pathname } = useLocation();
    const isHome = pathname === "/";
    const spanColor = isHome ? "bg-[#FBF8F3]" : "bg-[#0C1A2E]";

    return (
        <>
            <Hamburger>
                <div className="flex flex-col lg:flex-row gap-[86px] lg:gap-6 items-center w-full h-full pb-[48px] lg:pb-0">
                    {/* <ul> centré */}
                    <ul className={`flex flex-col lg:flex-row lg:gap-[24px] justify-between lg:justify-center items-center font-semibold leading-[1.4] list-none text-center w-full h-full mx-auto ${isHome ? "text-[#FBF8F3]" : "text-[#FBF8F3] lg:text-[#0C1A2E]"}`}>
                        <li><Link to="/" className={`${isHome ? "lg:hover:text-[#b8cae2]" : "lg:hover:text-[#2d5183]"}`}>Accueil</Link></li>
                        <li><Link to="/specialites" className={`${isHome ? "lg:hover:text-[#b8cae2]" : "lg:hover:text-[#2d5183]"}`}>Nos spécialités</Link></li>
                        <li><Link to="/equipes" className={`${isHome ? "lg:hover:text-[#b8cae2]" : "lg:hover:text-[#2d5183]"}`}>Nos équipes</Link></li>
                        <li><Link to="/infos" className={`${isHome ? "lg:hover:text-[#b8cae2]" : "lg:hover:text-[#2d5183]"}`}>Infos/Contact</Link></li>
                    </ul>
                    {/* Bouton "RENDEZ-VOUS" */}
                    <Link to="/infos#contact-form" className="w-fit">
                        <div className={`text-[#0C1A2E] font-medium leading-[23.48px] px-[24px] py-[10px] whitespace-nowrap ${isHome ? "bg-[#C9BBA8] hover:bg-[#ac9c86] " : "bg-[#C9BBA8] hover:bg-[#ac9c86] lg:text-[#FBF8F3] lg:bg-[#0C1A2E] lg:hover:bg-[#1e395e]"}`}>
                            RENDEZ-VOUS
                        </div>
                    </Link>
                </div>
            </Hamburger>
        </>
    );
}