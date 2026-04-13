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
                <div className="flex flex-col gap-[16px]">
                    {/* Row images 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
                        {/* Image 1 */}
                        <div>
                            <img src="/images/photos-accessibilite/photo1.png" alt="Ascenseur accessible" width="100%" height="100%" />
                        </div>

                        {/* Texte 1 */}
                        <div className="h-[235px] md:h-full p-[12px] md:p-[24px] flex flex-col justify-between text-center md:text-left bg-[#F9F9F9]">
                            <h4 className="text-[32px] leading-[1.4] tracking-tight">Ascenseur accessible</h4>
                            <p className="font-[Outfit] leading-[1.4]">Ascenseurs accessibles permettant un accès facile à tous les étages.</p>
                        </div>

                        {/* Image 2 */}
                        <div>
                            <img src="/images/photos-accessibilite/photo2.png" alt="Rampes d'accès" width="100%" />
                        </div>

                        {/* Texte 2 */}
                        <div className="h-[235px] md:h-full p-[12px] md:p-[24px] flex flex-col justify-between text-center md:text-left bg-[#F9F9F9]">
                            <h4 className="text-[32px] leading-[1.4] tracking-tight">Rampes d'accès</h4>
                            <p className="font-[Outfit] leading-[1.4]">Rampes d'accès sécurisées facilitant la circulation des fauteuils roulants.</p>
                        </div>
                    </div>

                    {/* Row images 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
                        {/* Texte 3 */}
                        <div className="h-[235px] md:h-full p-[12px] md:p-[24px] flex flex-col justify-between text-center md:text-left bg-[#F9F9F9]">
                            <h4 className="text-[32px] leading-[1.4] tracking-tight">Toilettes adaptées</h4>
                            <p className="font-[Outfit] leading-[1.4]">Sanitaires spécialement aménagés pour garantir confort et autonomie.</p>
                        </div>

                        {/* Image 3 */}
                        <div>
                            <img src="/images/photos-accessibilite/photo3.png" alt="Toilettes adaptées" width="100%" />
                        </div>

                        {/* Texte 4 */}
                        <div className="h-[235px] md:h-full p-[12px] md:p-[24px] flex flex-col justify-between text-center md:text-left bg-[#F9F9F9]">
                            <h4 className="text-[32px] leading-[1.4] tracking-tight">Parking gratuit et accessible en face</h4>
                            <p className="font-[Outfit] leading-[1.4]">Places de stationnement réservées à proximité de l'entrée.</p>
                        </div>

                        {/* Image 4 */}
                        <div>
                            <img src="/images/photos-accessibilite/photo4.png" alt="Parking gratuit et accessible en face" width="100%" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}