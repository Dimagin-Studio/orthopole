import { Hamburger } from "../Hamburger/Hamburger";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header
                className="w-full h-screen text-[#FBF8F3] flex flex-col gap-[24px] md:gap-0 bg-cover bg-no-repeat overflow-hidden"
                style={{ backgroundImage: "url('/images/hero-section.png')" }}
            >
                {/* Contenu du menu */}
                <Hamburger>
                    {/* Container ul + bouton rdv */}
                    <div className="flex flex-col lg:flex-row gap-[72px] lg:gap-6 items-center w-full h-full pt-[24px] lg:pt-0">
                        <ul className="flex flex-col lg:flex-row gap-[72px] lg:gap-[24px] justify-center items-center font-semibold leading-[1.4] list-none text-center w-full mx-auto">
                            <li><Link to="/" className="lg:hover:text-[#2d5183]">Accueil</Link></li>
                            <li><Link to="/specialites" className="lg:hover:text-[#2d5183]">Nos spécialités</Link></li>
                            <li><Link to="/equipes" className="lg:hover:text-[#2d5183]">Nos équipes</Link></li>
                            <li><Link to="/infos" className="lg:hover:text-[#2d5183]">Infos/Contact</Link></li>
                        </ul>
                        {/* Bouton "RENDEZ-VOUS" */}
                        <Link to="/infos#contact-form" className="w-fit">
                            <div className="text-[#0C1A2E] bg-[#C9BBA8] hover:bg-[#ac9c86] font-medium leading-[23.48px] px-[24px] py-[10px] whitespace-nowrap">
                                RENDEZ-VOUS
                            </div>
                        </Link>
                    </div>
                </Hamburger>

                {/* Section centre */}
                <section className="max-w-[781px] px-[24px] md:px-[48px] pb-[48px] h-full flex flex-col gap-[24px] md:gap-[48px] justify-center text-center md:text-left">
                    <div className="flex flex-col gap-[16px] place-items-center md:place-items-start">
                        <p className="w-fit px-[8px] py-[4px] font-[Outfit] text-sm bg-[#FBF8F314] leading-[1.4]">Centre privé</p>

                        <h1 className="text-[32px] md:text-[56px] leading-[1.2] tracking-tight">
                            Chirurgie orthopédique, imagerie médicale, kinésithérapie et réathlétisation
                        </h1>

                        <p className="text-base md:text-lg leading-[1.4]">Prise en charge complète du diagnostique à la rééducation</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-[24px] md:gap-[32px] font-medium leading-[23.48px]">
                        <Link to="/infos#contact-form" className="w-full md:w-fit">
                            <p className="bg-[#2C4A6E] hover:bg-[#1e344f] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] text-center">
                                Prendre rendez-vous
                            </p>
                        </Link>
                        <Link to="/specialites" className="w-full md:w-fit">
                            <p className="text-[#0C1A2E] bg-[#C9BBA8] hover:bg-[#ac9c86] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] text-center">
                                Découvrir nos spécialités
                            </p>
                        </Link>
                    </div>
                </section>
            </header>
        </>
    )
}