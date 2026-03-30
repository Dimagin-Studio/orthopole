export default function Reeduc() {
    return (
        <>
            {/* Du diagnostique à la rééducation */}
            <section className="px-4 md:px-[48px] py-[40px] md:py-[80px]">
                <div className="bg-[#F9F9F9] px-4 md:px-[48px] py-[40px] md:py-[64px] flex flex-col md:flex-row gap-[32px] md:gap-0 justify-between items-center">
                    {/* Zone text */}
                    <div className="md:max-w-[400px] lg:max-w-[580px] flex flex-col gap-[24px] md:gap-[40px]">
                        <div className="flex flex-col gap-[16px] md:gap-[24px]">
                            <h2 className="text-3xl md:text-[40px] tracking-tight leading-[1.2]">
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
                        <div className="w-full md:w-fit mx-auto md:mx-0 px-[24px] py-[10px] bg-[#0C1A2E] text-[#FBF8F3] font-medium text-center leading-[23.48px]">
                            <a href="">NOS ÉQUIPES</a>
                        </div>
                    </div>

                    {/* Zone images */}
                    <div className="flex flex-col md:flex-col lg:flex-row gap-[16px] md:gap-[23px] items-center lg:items-end">
                        {/* Image 1 */}
                        <img
                            src="/images/reeduc1.jpg"
                            alt="Rééducation"
                            className="w-full h-full md:w-[170px] md:h-[171px] lg:w-[212px] lg:h-[213px] object-cover object-center"
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