export function Header() {
    return (
        <>
            <header
                className="w-full h-auto md:h-[600px] lg:h-[800px] px-4 md:px-[48px] pt-[16px] pb-[48px] text-[#FBF8F3] flex flex-col gap-[24px] md:gap-0 bg-cover bg-no-repeat overflow-hidden"
                style={{ backgroundImage: "url('/images/hero-section.png')" }}
            >
                {/* Navigation */}
                <nav className="w-full text-lg grid grid-cols-1 md:grid-cols-3 gap-y-[16px] md:gap-y-0 gap-x-[16px] md:gap-x-[32px] items-center justify-items-start md:justify-items-center text-center">
                    <div className="text-xl font-medium leading-[1.4] justify-self-center md:justify-self-start">
                        ORTHOPOLE
                    </div>

                    <ul className="flex flex-col md:flex-row justify-center gap-[24px] font-semibold leading-[1.4] list-none flex-wrap md:flex-nowrap justify-self-center w-full text-center">
                        <li><a href="">Nos spécialités</a></li>
                        <li><a href="">Nos équipes</a></li>
                        <li><a href="">À propos</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>

                    <div className="text-[#0C1A2E] bg-[#C9BBA8] font-medium leading-[23.48px] px-[24px] py-[10px] w-fit h-fit justify-self-center md:justify-self-end">
                        <a href="">RENDEZ-VOUS</a>
                    </div>
                </nav>

                {/* Section centre */}
                <section className="max-w-[722px] flex flex-col gap-[24px] md:gap-[48px] justify-center h-full">
                    <div className="flex flex-col gap-[16px]">
                        <p className="w-fit px-[8px] py-[4px] font-[Outfit] text-sm bg-[#FBF8F314] leading-[1.4]">CENTRE MÉDICO-CHIRURGICAL</p>

                        <h1 className="text-[40px] md:text-[56px] leading-[1.2] tracking-tight">
                            Centre de chirurgie orthopédique, imagerie, kinésithérapie et revalidation
                        </h1>

                        <p className="text-base md:text-lg leading-[1.4]">Une prise en charge complète du diagnostique à la rééducation</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-[24px] md:gap-[32px] font-medium leading-[23.48px]">
                        <p className="bg-[#2C4A6E] px-[24px] py-[10px] w-fit text-center"><a href="">PRENDRE RDV</a></p>
                        <p className="text-[#0C1A2E] bg-[#C9BBA8] px-[24px] py-[10px] w-fit text-center"><a href="">DÉCOUVRIR NOS SPÉCIALITÉS</a></p>
                    </div>
                </section>
            </header>
        </>
    )
}