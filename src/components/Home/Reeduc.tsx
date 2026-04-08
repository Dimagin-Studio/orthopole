import { Link } from "react-router-dom";

export default function Reeduc() {
    return (
        <>
            {/* Du diagnostique à la rééducation */}
            <section className="px-[24px] md:px-[48px] py-[40px] md:py-[80px]">
                <div className="md:h-[460px] bg-[#F9F9F9] px-4 md:px-[48px] py-[32px] md:py-[64px] flex flex-col md:flex-row gap-[32px] md:gap-0 justify-between items-center md:items-start">
                    {/* Zone text */}
                    <div className="md:max-w-[400px] lg:max-w-[580px] flex flex-col gap-[24px] md:gap-[40px]">
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
                        <div className="w-full md:w-fit px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] bg-[#0C1A2E] text-[#FBF8F3] font-medium text-center leading-[23.48px]">
                            <Link to="/equipes">NOS ÉQUIPES</Link>
                        </div>
                    </div>

                    {/* Zone images */}
                    <div className="h-full flex flex-col md:flex-col lg:flex-row gap-[16px] md:gap-[23px]">
                        {/* Image 1 */}
                        <img
                            src="/images/reeduc1.jpg"
                            alt="Rééducation"
                            className="w-full h-full md:w-[170px] md:h-[171px] lg:w-[212px] lg:h-[213px] object-cover object-center self-end"
                        />

                        {/* Image 2 */}
                        <img
                            src="/images/reeduc2.jpg"
                            alt="Rééducation"
                            className="w-full h-full md:w-[180px] md:h-[195px] lg:w-[224px] lg:h-[242px] object-cover object-center"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}