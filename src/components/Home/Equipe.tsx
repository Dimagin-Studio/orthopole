import { Link } from "react-router-dom";

export default function Equipe() {
    return (
        <>
            {/* L'équipe */}
            <section className="px-[24px] md:px-[48px] pt-[40px] md:pt-[80px] pb-[64px] md:pb-[128px] flex flex-col gap-[40px] md:gap-[80px]">
                {/* Header */}
                <div className="flex flex-col gap-[16px] md:gap-[24px] items-center text-center">
                    <p className="px-[8px] py-[4px] font-[Outfit] text-sm text-[#362925] bg-[#EAE2D7] leading-[1.4]">
                        L'ÉQUIPE
                    </p>
                    <h2 className="max-w-[90%] md:max-w-[768px] text-3xl md:text-4xl lg:text-5xl leading-[1.4] tracking-tight">
                        Une équipe de spécialistes engagés dans une prise en charge personnalisée.
                    </h2>
                </div>

                {/* Container */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] md:gap-[40px] lg:gap-[48px] justify-items-center text-center md:text-left">
                    {/* Card 1 */}
                    <div className="flex flex-col gap-[16px] w-full md:max-w-[324px]">
                        <img
                            src="/images/photos-chirurgien/valery-fabre.jpeg"
                            alt="Dr. Valery Fabre"
                            className="w-full h-[500px] md:w-[324px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[8px]">
                            <h6 className="text-lg leading-[1.4]">Dr. Valery Fabre</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF] leading-[1.4]">CHIRURGIE DE LA HANCHE ET DU GENOU</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col gap-[16px] w-full md:max-w-[324px] mt-0 md:mt-[40px]">
                        <img
                            src="/images/photos-chirurgien/louis-gossing.jpg"
                            alt="Dr. Louis Gossing"
                            className="w-full h-[500px] md:w-[324px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[8px]">
                            <h6 className="text-lg leading-[1.4]">Dr. Louis Gossing</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF] leading-[1.4]">CHIRURGIE DE L'ÉPAULE</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col gap-[16px] w-full md:max-w-[324px] mt-0 md:mt-[80px]">
                        <img
                            src="/images/photos-chirurgien/denis-willame.jpg"
                            alt="Dr. Denis Williame"
                            className="w-full h-[500px] md:w-[324px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[8px]">
                            <h6 className="text-lg leading-[1.4]">Dr. Denis Williame</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF] leading-[1.4]">CHIRURGIE DE LA MAIN, DU POIGNET ET DU COUDE</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex flex-col gap-[16px] w-full md:max-w-[324px] mt-0 md:mt-[40px]">
                        <img
                            src="/images/photos-chirurgien/eric-manche.jpeg"
                            alt="Dr. Eric Manche"
                            className="w-full h-[500px] md:w-[324px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[8px]">
                            <h6 className="text-lg leading-[1.4]">Dr. Eric Manche</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF] leading-[1.4]">CHIRURGIE DE LA COLONNE, HANCHE ET DU GENOU</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="flex flex-col gap-[16px] w-full md:max-w-[324px]">
                        <img
                            src="/images/photos-figma/camille-robert.png"
                            alt="Dr. Camille Robert"
                            className="w-full h-[500px] md:w-[324px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[8px]">
                            <h6 className="text-lg leading-[1.4]">Dr. Camille Robert</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF] leading-[1.4]">OPHTALMOLOGIST</p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="flex flex-col gap-[16px] w-full md:max-w-[324px] mt-0 md:mt-[80px]">
                        <img
                            src="/images/photos-figma/marc-lefevre.png"
                            alt="Dr. Marc Lefevre"
                            className="w-full h-[500px] md:w-[324px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[8px]">
                            <h6 className="text-lg leading-[1.4]">Dr. Marc Lefevre</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF] leading-[1.4]">ENDOCRINOLOGIST</p>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <Link to="/equipes">
                    <div className="w-full md:w-fit mx-auto px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] text-[#FBF8F3] bg-[#0C1A2E] hover:bg-[#1e395e] font-medium text-center leading-[23.48px]">
                        DÉCOUVRIR L'ÉQUIPE
                    </div>
                </Link>
            </section>
        </>
    )
}