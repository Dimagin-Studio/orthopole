import MotionButton from "../Animations/MotionButton"
import { Link } from "react-router-dom"
import NavBar from "../NavBar/NavBar"

export default function Header() {
    return (
        <header
            className="w-full h-screen text-[#FBF8F3] flex flex-col gap-[24px] md:gap-0 bg-cover bg-no-repeat overflow-hidden"
            style={{ backgroundImage: "url('/images/hero-section.png')" }}
        >
            {/* Menu de navigation */}
            <NavBar />

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
                        <MotionButton as="div" className="bg-[#2C4A6E] hover:bg-[#1e344f] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] text-center">
                            Prendre rendez-vous
                        </MotionButton>
                    </Link>
                    <Link to="/specialites" className="w-full md:w-fit">
                        <MotionButton as="div" className="text-[#0C1A2E] bg-[#C9BBA8] hover:bg-[#ac9c86] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] text-center">
                            Découvrir nos spécialités
                        </MotionButton>
                    </Link>
                </div>
            </section>
        </header>
    )
}