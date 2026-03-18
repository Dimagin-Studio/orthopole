export function Footer() {
    return (
        <>
            <footer className="pt-[48px] md:pt-[96px] px-[24px] md:px-[48px] pb-[24px] bg-[#172D47] text-[#F5F3EF] flex flex-col gap-[32px] md:gap-[48px]">
                {/* Infos & Newsletter */}
                <section className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-[32px] md:gap-[48px] w-full items-start">
                    {/* Liens & Infos de contact (colonne de gauche) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px] md:gap-[64px] w-full">
                        {/* Liens */}
                        <div className="flex flex-col gap-[16px] md:gap-[24px] md:text-left text-center">
                            <h5 className="font-[Geist] font-medium leading-[24px] text-[16px] md:text-[18px]">/ Liens</h5>
                            <ul className="list-none flex flex-col gap-[8px] md:gap-[16px] font-[Outfit] text-[14px] md:text-[16px] leading-[1.4]">
                                <li>Chirurgie</li>
                                <li>Radiologie</li>
                                <li>Kinésithérapie</li>
                                <li>À propos</li>
                                <li>Aide & FAQ</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                        {/* Informations de contact */}
                        <div className="flex flex-col gap-[16px] md:gap-[24px] md:text-left text-center">
                            <h5 className="font-[Geist] font-medium leading-[24px] text-[16px] md:text-[18px]">/ Informations de contact</h5>
                            <ul className="list-none flex flex-col gap-[8px] md:gap-[16px] font-[Outfit] text-[14px] md:text-[16px] leading-[1.4]">
                                <li>info@orthopole.com</li>
                                <li>Lun-Ven, 9:00-17:00</li>
                                <li>14 Rue Carnot, 92300 Levallois-Perret, France</li>
                            </ul>
                        </div>
                    </div>

                    {/* Ligne verticale (centrée) */}
                    <div className="hidden md:block border-l border-gray-600 h-auto self-stretch mx-2 md:mx-4"></div>

                    {/* Communauté & Newsletter (colonne de droite) */}
                    <div className="flex flex-col gap-[16px] md:gap-[24px] w-full text-center md:text-left">
                        <div className="text-[18px] md:text-[22px] leading-[1.4]">
                            Rejoignez la communauté Orthopole
                        </div>
                        <form action="" className="font-[Outfit] flex flex-col gap-[16px] md:gap-[24px] items-center md:items-start">
                            <p className="text-[14px] md:text-[16px] max-w-[300px] md:max-w-none">Recevez des mises à jour, des conseils de santé et des informations exclusives.</p>
                            <input
                                type="email"
                                placeholder="Entrez votre adresse e-mail"
                                className="border-b border-gray-500 bg-transparent py-[12px] md:py-[24px] text-[14px] md:text-[16px] focus:outline-none w-full max-w-[300px]"
                            />
                            <button
                                type="submit"
                                className="w-fit px-[12px] md:px-[16px] py-[6px] md:py-[8px] font-[Geist] font-medium bg-[#C9BBA8] text-[#0C1A2E] text-[14px] md:text-[16px]"
                            >
                                S'abonner
                            </button>
                        </form>
                    </div>
                </section>

                {/* Ligne horizontale */}
                <hr className="border-gray-600" />

                {/* Footer Logo */}
                <section className="flex justify-center md:justify-start items-center">
                    <h1 className="font-medium text-[60px] md:text-[160px] lg:text-[260px] text-[#8C817D] leading-[0.9] tracking-tight">Orthopole</h1>
                </section>

                {/* Copyright */}
                <section className="font-[Outfit] text-[12px] md:text-[13px] leading-[1.4] flex flex-col md:flex-row justify-between items-center gap-[16px]">
                    <div className="text-center md:text-left w-full">
                        &copy; Orthopole 2026. Tous droits réservés.
                    </div>

                    <ul className="list-none flex flex-wrap justify-center md:justify-end gap-[8px] md:gap-[16px] w-full">
                        <li><a href="" className="text-[12px] md:text-[13px]">Mentions légales</a></li>
                        <span className="hidden md:inline">-</span>
                        <li><a href="" className="text-[12px] md:text-[13px]">Politique de confidentialité</a></li>
                        <span className="hidden md:inline">-</span>
                        <li><a href="" className="text-[12px] md:text-[13px]">Contact</a></li>
                    </ul>
                </section>
            </footer>
        </>
    )
}