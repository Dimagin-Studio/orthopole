export default function Accessibilite() {
    return (
        <>
            <section className="px-[24px] md:px-[48px] pt-[48px] md:pt-[96px] pb-[80px] md:pb-[160px] flex flex-col gap-[32px] md:gap-[64px] items-center">
                {/* Header */}
                <div className="max-w-[540px] flex flex-col gap-[24px] text-center">
                    <h2 className="text-3xl md:text-[56px] leading-[1.2] tracking-tight">Accessibilité PMR</h2>
                    <p className="font-[Outfit] text-sm md:text-base leading-[1.4]">Informations officielles concernant l'accessibilité du centre pour les personnes à mobilité réduite.</p>
                </div>

                {/* Container */}
                <div className="flex flex-col gap-[16px] w-full">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-[16px]">
                        {/* Paire 1 */}
                        <div className="grid grid-cols-2 lg:contents gap-[16px]">
                            <img src="/images/photos-accessibilite/photo1.png" alt="Ascenseur accessible" className="w-full h-full object-cover object-center" />
                            <div className="p-[12px] md:p-[24px] flex flex-col justify-between text-center md:text-left bg-[#F9F9F9]">
                                <h4 className="text-[32px] leading-[1.4] tracking-tight">Ascenseur accessible</h4>
                                <p className="font-[Outfit] leading-[1.4]">Ascenseurs accessibles permettant un accès facile à tous les étages.</p>
                            </div>
                        </div>
                        {/* Paire 2 */}
                        <div className="grid grid-cols-2 lg:contents gap-[16px]">
                            <img src="/images/photos-accessibilite/photo2.png" alt="Rampes d'accès" className="w-full h-full object-cover object-center" />
                            <div className="p-[12px] md:p-[24px] flex flex-col justify-between text-center md:text-left bg-[#F9F9F9]">
                                <h4 className="text-[32px] leading-[1.4] tracking-tight">Rampes d'accès</h4>
                                <p className="font-[Outfit] leading-[1.4]">Rampes d'accès sécurisées facilitant la circulation des fauteuils roulants.</p>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-[16px]">
                        {/* Paire 3 */}
                        <div className="grid grid-cols-2 lg:contents gap-[16px]">
                            <div className="p-[12px] md:p-[24px] flex flex-col justify-between text-center md:text-left bg-[#F9F9F9]">
                                <h4 className="text-[32px] leading-[1.4] tracking-tight">Toilettes adaptées</h4>
                                <p className="font-[Outfit] leading-[1.4]">Sanitaires spécialement aménagés pour garantir confort et autonomie.</p>
                            </div>
                            <img src="/images/photos-accessibilite/photo3.png" alt="Toilettes adaptées" className="w-full h-full object-cover object-center" />
                        </div>
                        {/* Paire 4 */}
                        <div className="grid grid-cols-2 lg:contents gap-[16px]">
                            <div className="p-[12px] md:p-[24px] flex flex-col justify-between text-center md:text-left bg-[#F9F9F9]">
                                <h4 className="text-[32px] leading-[1.4] tracking-tight">Parking gratuit et accessible en face</h4>
                                <p className="font-[Outfit] leading-[1.4]">Places de stationnement réservées à proximité de l'entrée.</p>
                            </div>
                            <img src="/images/photos-accessibilite/photo4.png" alt="Parking gratuit et accessible en face" className="w-full h-full object-cover object-center" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}