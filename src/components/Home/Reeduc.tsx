import MotionButton from "../Animations/MotionButton"
import { Link } from "react-router-dom"

export default function Reeduc() {
    return (
        <section className="px-[24px] md:px-[48px] py-[40px] md:py-[80px]">
            {/* Du diagnostique à la rééducation */}
            <div className="bg-[#F9F9F9] dark:bg-[#F5F3EF] px-4 md:px-[48px] py-[32px] md:py-[64px] flex flex-col lg:flex-row gap-[32px] lg:gap-0 justify-between items-center lg:items-start md:text-center lg:text-left dark:text-[#0C1A2E]">
                {/* Zone text */}
                <div className="md:max-w-[400px] lg:max-w-[580px] flex flex-col gap-[24px] md:gap-[40px] md:items-center lg:items-start">
                    <div className="flex flex-col gap-[16px] md:gap-[24px]">
                        <h2 className="text-3xl md:text-[40px] leading-[1.2] tracking-tight">
                            Du diagnostique à la rééducation
                        </h2>
                        <p className="font-[Outfit] font-light leading-[1.4] text-base md:text-lg">
                            Chaque patient bénéficie d'un parcours structuré : consultation, imagerie si
                            nécessaire, traitement adapté et suivi en revalidation.
                            <br /><br />
                            La collaboration entre nos spécialistes permet une prise en charge fluide et cohérente à chaque étape.
                        </p>
                    </div>
                    {/* Bouton */}
                    <Link to="/equipes">
                        <MotionButton as="div" className="w-full md:w-fit px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] bg-[#0C1A2E] hover:bg-[#172D47] text-[#FBF8F3] font-medium text-center leading-[23.48px]">
                            NOS ÉQUIPES
                        </MotionButton>
                    </Link>
                </div>

                {/* Zone image */}
                <div className="h-full">
                    <img
                        src="/images/reeduc2.jpg"
                        alt="Rééducation"
                        className="w-full h-full object-cover object-center self-end"
                    />
                </div>
            </div>
        </section>
    )
}