import { Hamburger } from "../Hamburger/Hamburger";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header
                className="w-full h-auto md:h-[600px] lg:h-[800px] px-4 md:px-[48px] pt-[16px] pb-[48px] text-[#FBF8F3] flex flex-col gap-[24px] md:gap-0 bg-cover bg-no-repeat overflow-hidden"
                style={{ backgroundImage: "url('/images/hero-section.png')" }}
            >
                {/* Navigation */}
                <nav className="w-full text-lg flex flex-col md:flex-row gap-y-[16px] md:gap-y-0 gap-x-[16px] md:gap-x-[32px] md:items-center justify-items-start md:justify-between text-center">
                    {/* Titre "ORTHOPOLE" */}
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
                                    <li><Link to="/">Accueil</Link></li>
                                    <li><Link to="/specialites">Nos spécialités</Link></li>
                                    <li><a href="">Nos équipes</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                                {/* Bouton "RENDEZ-VOUS" à droite */}
                                <div className="text-[#0C1A2E] bg-[#C9BBA8] font-medium leading-[23.48px] px-[24px] py-[10px] w-fit">
                                    <a href="">RENDEZ-VOUS</a>
                                </div>
                            </div>

                            {/* Version mobile */}
                            <div className="md:hidden flex flex-col gap-6 w-full">
                                <ul className="flex flex-col gap-[24px] font-semibold leading-[1.4] list-none w-full text-center">
                                    <li><Link to="/specialites">Nos spécialités</Link></li>
                                    <li><a href="">Nos équipes</a></li>
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

                {/* Section centre */}
                <section className="max-w-[781px] h-full flex flex-col gap-[24px] md:gap-[48px] justify-center text-center md:text-left">
                    <div className="flex flex-col gap-[16px]">
                        <p className="w-fit px-[8px] py-[4px] font-[Outfit] text-sm bg-[#FBF8F314] leading-[1.4]">Centre privé</p>

                        <h1 className="text-[40px] md:text-[56px] leading-[1.2] tracking-tight">
                            Chirurgie orthopédique, imagerie médicale, kinésithérapie et réathlétisation
                        </h1>

                        <p className="text-base md:text-lg leading-[1.4]">Prise en charge complète du diagnostique à la rééducation</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-[24px] md:gap-[32px] font-medium leading-[23.48px]">
                        <p className="bg-[#2C4A6E] px-[24px] py-[10px] w-full md:w-fit text-center"><a href="">Prendre rendez-vous</a></p>
                        <Link to="/specialites" className="text-[#0C1A2E] bg-[#C9BBA8] px-[24px] py-[10px] w-full md:w-fit text-center">Découvrir nos spécialités</Link>
                    </div>
                </section>
            </header>
        </>
    )
}