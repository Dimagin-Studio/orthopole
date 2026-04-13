import { Link } from "react-router-dom";

export default function Services() {
    return (
        <>
            {/* Découvrez nos services */}
            <section className="px-[24px] md:px-[48px] py-[40px] md:py-[80px] flex flex-col gap-[32px] md:gap-[48px]">
                {/* Header */}
                <div className="flex flex-col gap-[16px] md:gap-[24px] items-center text-center">
                    <p className="px-[8px] py-[4px] font-[Outfit] text-sm text-[#362925] bg-[#EAE2D7] leading-[1.4]">
                        NOS SPÉCIALITÉS
                    </p>
                    <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.4]">
                        Découvrez nos services
                    </h2>
                </div>

                {/* Container */}
                <div className="text-[#F5F3EF] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
                    {/* Box service 1 */}
                    <Link to="/specialites#chirurgie-orthopedique">
                        {/* Conteneur pour l'image et l'overlay */}
                        <div className="relative w-full h-[340px] md:h-[460px] flex flex-col gap-[8px] p-[24px] justify-end">
                            {/* Image de fond */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('/images/photos-figma/home-chirurgie.png')" }}
                            ></div>
                            {/* Overlay progressif (du bas vers la moitié de la hauteur) */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-[#0C1A2E] to-transparent"
                            ></div>
                            {/* Texte par-dessus */}
                            <div className="relative flex flex-col gap-[8px]">
                                <h4 className="text-xl md:text-[22px] font-medium leading-[1.4]">Chirurgie orthopédique</h4>
                                <p className="font-[Outfit] text-sm leading-[1.3]">Réparer et restaurer la mobilité</p>
                            </div>
                        </div>
                    </Link>

                    {/* Box service 2 */}
                    <Link to="/specialites#imagerie-radiologie">
                        {/* Conteneur pour l'image et l'overlay */}
                        <div className="relative w-full h-[340px] md:h-[460px] flex flex-col gap-[8px] p-[24px] justify-end">
                            {/* Image de fond */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('/images/photos-site-web/home-imagerie.png')" }}
                            ></div>
                            {/* Overlay progressif (du bas vers la moitié de la hauteur) */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-[#0C1A2E] to-transparent"
                            ></div>
                            {/* Texte par-dessus */}
                            <div className="relative flex flex-col gap-[8px]">
                                <h4 className="text-xl md:text-[22px] font-medium leading-[1.4]">Radiologie & imagerie</h4>
                                <p className="font-[Outfit] text-sm leading-[1.3]">Diagnostic précis par imagerie</p>
                            </div>
                        </div>
                    </Link>

                    {/* Box service 3 */}
                    <Link to="/specialites#imagerie-radiologie">
                        {/* Conteneur pour l'image et l'overlay */}
                        <div className="relative w-full h-[340px] md:h-[460px] flex flex-col gap-[8px] p-[24px] justify-end">
                            {/* Image de fond */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('/images/photos-figma/home-kine.png')" }}
                            ></div>
                            {/* Overlay progressif (du bas vers la moitié de la hauteur) */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-[#0C1A2E] to-transparent"
                            ></div>
                            {/* Texte par-dessus */}
                            <div className="relative flex flex-col gap-[8px]">
                                <h4 className="text-xl md:text-[22px] font-medium leading-[1.4]">Kinésithérapie</h4>
                                <p className="font-[Outfit] text-sm leading-[1.3]">Renforcer et rééduquer le corps</p>
                            </div>
                        </div>
                    </Link>

                    {/* Box service 4 */}
                    <Link to="/specialites#imagerie-radiologie">
                        {/* Conteneur pour l'image et l'overlay */}
                        <div className="relative w-full h-[340px] md:h-[460px] flex flex-col gap-[8px] p-[24px] justify-end">
                            {/* Image de fond */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('/images/photos-site-web/home-rehabilitation.png')" }}
                            ></div>
                            {/* Overlay progressif (du bas vers la moitié de la hauteur) */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-[#0C1A2E] to-transparent"
                            ></div>
                            {/* Texte par-dessus */}
                            <div className="relative flex flex-col gap-[8px]">
                                <h4 className="text-xl md:text-[22px] font-medium leading-[1.4]">Revalidation fonctionnelle</h4>
                                <p className="font-[Outfit] text-sm leading-[1.3]">Récupérer pleinement ses capacités</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    )
}