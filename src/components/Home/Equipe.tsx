export default function Equipe() {
    return (
        <>
            {/* L'équipe */}
            <section className="px-4 md:px-[48px] pt-[40px] md:pt-[80px] pb-[64px] md:pb-[128px] flex flex-col gap-[40px] md:gap-[80px]">
                {/* Header */}
                <div className="flex flex-col gap-[16px] md:gap-[24px] items-center text-center leading-[1.4]">
                    <p className="px-[8px] py-[4px] font-[Outfit] text-sm text-[#362925] bg-[#EAE2D7]">
                        L'ÉQUIPE
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-[90%] md:max-w-[768px] tracking-tight">
                        Une équipe de spécialistes engagés dans une prise en charge personnalisée.
                    </h2>
                </div>

                {/* Container */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] md:gap-[40px] lg:gap-[48px] justify-items-center text-center md:text-left">
                    {/* Card 1 */}
                    <div className="flex flex-col gap-[16px]">
                        <img
                            src="/images/equipe.png"
                            alt="Dr. Valery Fabre"
                            className="w-full h-full md:w-[324px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[12px]">
                            <h6 className="text-lg">Dr. Valery Fabre</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF]">CHIRURGIE DE LA HANCHE ET DU GENOU</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col gap-[16px] mt-0 md:mt-[40px]">
                        <img
                            src="/images/equipe.png"
                            alt="Dr. Louis Gossing"
                            className="w-full h-full md:w-[324px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[12px]">
                            <h6 className="text-lg">Dr. Louis Gossing</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF]">CHIRURGIE DE L'ÉPAULE</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col gap-[16px] mt-0 md:mt-[80px]">
                        <img
                            src="/images/equipe.png"
                            alt="Dr. Denis Williame"
                            className="w-full h-full md:w-[324px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[12px]">
                            <h6 className="text-lg">Dr. Denis Williame</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF]">CHIRURGIE DE LA MAIN, DU POIGNET ET DU COUDE</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex flex-col gap-[16px] mt-0 md:mt-[40px]">
                        <img
                            src="/images/equipe.png"
                            alt="Dr. Eric Manche"
                            className="w-full h-full md:w-[324px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[12px]">
                            <h6 className="text-lg">Dr. Eric Manche</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF]">CHIRURGIE DE LA COLONNE, HANCHE ET DU GENOU</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="flex flex-col gap-[16px]">
                        <img
                            src="/images/equipe.png"
                            alt="Dr. Camille Robert"
                            className="w-full h-full md:w-[324px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[12px]">
                            <h6 className="text-lg">Dr. Camille Robert</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF]">OPHTALMOLOGIST</p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="flex flex-col gap-[16px] mt-0 md:mt-[80px]">
                        <img
                            src="/images/equipe.png"
                            alt="Dr. Marc Lefevre"
                            className="w-full h-full md:w-[324px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[12px]">
                            <h6 className="text-lg">Dr. Marc Lefevre</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF]">ENDOCRINOLOGIST</p>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="w-full md:w-fit mx-auto px-[24px] py-[10px] text-[#FBF8F3] bg-[#0C1A2E] font-medium text-center leading-[23.48px]">
                    <p><a href="">DÉCOUVRIR L'ÉQUIPE</a></p>
                </div>
            </section>
        </>
    )
}