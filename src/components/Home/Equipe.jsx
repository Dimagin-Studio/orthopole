export function Equipe() {
    return (
        <>
            {/* <!-- L'équipe --> */}
            <section className="px-4 md:px-[48px] pt-[40px] md:pt-[80px] pb-[64px] md:pb-[128px] flex flex-col gap-[40px] md:gap-[80px]">
                {/* <!-- Header --> */}
                <div className="flex flex-col gap-[16px] md:gap-[24px] items-center text-center leading-[1.4]">
                    <p className="px-[8px] py-[4px] font-[Outfit] text-sm text-[#362925] bg-[#EAE2D7]">
                        L'ÉQUIPE
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-[90%] md:max-w-[768px] tracking-tight">
                        Une équipe de spécialistes engagés dans une prise en charge personnalisée.
                    </h2>
                </div>

                {/* <!-- Container --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] md:gap-[40px] lg:gap-[48px] justify-items-center text-center">
                    {/* <!-- Card 1 --> */}
                    <div className="flex flex-col gap-[16px] items-center">
                        <img
                            src="/images/equipe.png"
                            alt="Dr. Julien Lambert"
                            className="w-full md:w-[324px] h-[240px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[12px]">
                            <h6 className="text-lg">Dr. Julien Lambert</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF]">PEDIATRICIAN</p>
                        </div>
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div className="flex flex-col gap-[16px] items-center mt-0 md:mt-[40px]">
                        <img
                            src="/images/equipe.png"
                            alt="Dr. Émilie Dupont"
                            className="w-full md:w-[324px] h-[240px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[12px]">
                            <h6 className="text-lg">Dr. Émilie Dupont</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF]">CARDIOLOGIST</p>
                        </div>
                    </div>

                    {/* <!-- Card 3 --> */}
                    <div className="flex flex-col gap-[16px] items-center mt-0 md:mt-[80px]">
                        <img
                            src="/images/equipe.png"
                            alt="Dr. Claire Martin"
                            className="w-full md:w-[324px] h-[240px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[12px]">
                            <h6 className="text-lg">Dr. Claire Martin</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF]">NEUROLOGIST</p>
                        </div>
                    </div>

                    {/* <!-- Card 4 --> */}
                    <div className="flex flex-col gap-[16px] items-center mt-0 md:mt-[40px]">
                        <img
                            src="/images/equipe.png"
                            alt="Dr. Sophie Petit"
                            className="w-full md:w-[324px] h-[240px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[12px]">
                            <h6 className="text-lg">Dr. Sophie Petit</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF]">GENERAL PRACTITIONER</p>
                        </div>
                    </div>

                    {/* <!-- Card 5 --> */}
                    <div className="flex flex-col gap-[16px] items-center">
                        <img
                            src="/images/equipe.png"
                            alt="Dr. Camille Robert"
                            className="w-full md:w-[324px] h-[240px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[12px]">
                            <h6 className="text-lg">Dr. Camille Robert</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF]">OPHTALMOLOGIST</p>
                        </div>
                    </div>

                    {/* <!-- Card 6 --> */}
                    <div className="flex flex-col gap-[16px] items-center mt-0 md:mt-[80px]">
                        <img
                            src="/images/equipe.png"
                            alt="Dr. Marc Lefevre"
                            className="w-full md:w-[324px] h-[240px] md:h-[375px] object-cover object-center"
                        />
                        <div className="flex flex-col gap-[12px]">
                            <h6 className="text-lg">Dr. Marc Lefevre</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF]">ENDOCRINOLOGIST</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Button --> */}
                <div className="w-[fit-content] mx-auto px-[24px] py-[10px] text-[#FBF8F3] bg-[#0C1A2E] font-medium text-center flex items-center leading-[23.48px]">
                    <p><a href="">DÉCOUVRIR NOTRE ÉQUIPE</a></p>
                </div>
            </section>
        </>
    )
}