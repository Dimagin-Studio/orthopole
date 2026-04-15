import { Hamburger } from "../Hamburger/Hamburger";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <Hamburger>
                <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-6 items-center w-full h-full pt-[24px] lg:pt-0">
                    {/* <ul> centré */}
                    <ul className="flex flex-col lg:flex-row gap-[32px] lg:gap-[24px] justify-center items-center font-semibold text-[#FBF8F3] lg:text-[#0C1A2E] leading-[1.4] list-none text-center w-full mx-auto">
                        <li><Link to="/" className="lg:hover:text-[#2d5183]">Accueil</Link></li>
                        <li><Link to="/specialites" className="lg:hover:text-[#2d5183]">Nos spécialités</Link></li>
                        <li><Link to="/equipes" className="lg:hover:text-[#2d5183]">Nos équipes</Link></li>
                        <li><Link to="/infos" className="lg:hover:text-[#2d5183]">Infos/Contact</Link></li>
                    </ul>
                    {/* Bouton "RENDEZ-VOUS" */}
                    <Link to="/infos#contact-form" className="w-fit">
                        <div className="text-[#0C1A2E] bg-[#C9BBA8] hover:bg-[#ac9c86] lg:text-[#FBF8F3] lg:bg-[#0C1A2E] lg:hover:bg-[#1e395e] font-medium leading-[23.48px] px-[24px] py-[10px] whitespace-nowrap">
                            RENDEZ-VOUS
                        </div>
                    </Link>
                </div>
            </Hamburger>
        </>
    );
}