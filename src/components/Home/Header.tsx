import MotionButton from "../Animations/MotionButton"
import { Link } from "react-router-dom"
import NavBar from "../NavBar/NavBar"

export default function Header() {
    return (
        <header className="relative w-full h-screen text-[#FBF8F3] flex flex-col gap-[24px] md:gap-0 overflow-hidden">
            <img
                src="/images/hero-section.webp"
                alt=""
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />

            {/* Menu de navigation */}
            <NavBar />

            {/* Section centre */}
            <section className="max-w-[781px] lg:max-w-[900px] px-[24px] md:px-[48px] pb-[48px] h-full flex flex-col gap-[24px] md:gap-[48px] justify-center text-center md:text-left">
                <div className="flex flex-col gap-[24px] md:gap-[32px] place-items-center md:place-items-start">
                    <h1 className="text-[28px] md:text-[40px] lg:text-[44px] leading-[1.2] tracking-tight flex flex-col gap-[12px] md:gap-[16px] lg:whitespace-nowrap">
                        <span>Centre privé de chirurgie orthopédique</span>
                        <span>Imagerie médicale</span>
                        <span>Kinésithérapie et réathlétisation</span>
                    </h1>

                    <p className="text-base md:text-lg leading-[1.4]">Prise en charge globale du diagnostic à la rééducation</p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-[24px] md:gap-[32px] font-medium leading-[23.48px]">
                    <Link to="/infos#prise-de-rdv" className="w-full md:w-fit">
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