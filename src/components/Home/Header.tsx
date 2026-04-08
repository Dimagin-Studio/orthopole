import { Hamburger } from "../Hamburger/Hamburger";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header
                className="w-full h-screen px-[24px] md:px-[48px] pt-[16px] pb-[48px] text-[#FBF8F3] flex flex-col gap-[24px] md:gap-0 bg-cover bg-no-repeat overflow-hidden"
                style={{ backgroundImage: "url('/images/hero-section.png')" }}
            >
                {/* Contenu du menu */}
                <Hamburger>
                    <>
                        {/* Container ul + bouton rdv */}
                        <div className="flex flex-col md:flex-row gap-6 justify-between items-center w-full">
                            <ul className="flex flex-col md:flex-row gap-[24px] md:justify-between font-semibold leading-[1.4] list-none w-fit text-center">
                                <li><Link to="/">Accueil</Link></li>
                                <li><Link to="/specialites">Nos spécialités</Link></li>
                                <li><Link to="/equipes">Nos équipes</Link></li>
                                <li><Link to="/infos">Infos/Contact</Link></li>
                            </ul>
                            <div className="text-[#0C1A2E] bg-[#C9BBA8] font-medium leading-[23.48px] px-[24px] py-[10px] w-full md:w-fit">
                                <a href="">RENDEZ-VOUS</a>
                            </div>
                        </div>
                    </>
                </Hamburger>

                {/* Section centre */}
                <section className="max-w-[781px] h-full flex flex-col gap-[24px] md:gap-[48px] justify-center text-center md:text-left">
                    <div className="flex flex-col gap-[16px] place-items-center md:place-items-start">
                        <p className="w-fit px-[8px] py-[4px] font-[Outfit] text-sm bg-[#FBF8F314] leading-[1.4]">Centre privé</p>

                        <h1 className="text-[32px] md:text-[56px] leading-[1.2] tracking-tight">
                            Chirurgie orthopédique, imagerie médicale, kinésithérapie et réathlétisation
                        </h1>

                        <p className="text-base md:text-lg leading-[1.4]">Prise en charge complète du diagnostique à la rééducation</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-[24px] md:gap-[32px] font-medium leading-[23.48px]">
                        <p className="bg-[#2C4A6E] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit text-center"><a href="">Prendre rendez-vous</a></p>
                        <Link to="/specialites" className="text-[#0C1A2E] bg-[#C9BBA8] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit text-center">Découvrir nos spécialités</Link>
                    </div>
                </section>
            </header>
        </>
    )
}