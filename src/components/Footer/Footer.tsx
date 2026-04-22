import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="px-[24px] md:px-[48px] pt-[48px] md:pt-[96px] pb-[24px] md:pb-[48px] bg-[#172D47] dark:bg-[#0C1A2E] text-[#F5F3EF] flex flex-col gap-[32px] md:gap-[48px]">
                {/* Infos & Newsletter */}
                <section className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_1fr] gap-[32px] md:gap-[40px] lg:gap-[80px] w-full">

                    {/* Liens */}
                    <div className="flex flex-col gap-[16px] md:gap-[24px] md:text-left text-center">
                        <h5 className="font-[Geist] font-medium leading-[24px] text-[16px] md:text-[18px]">/ Liens</h5>
                        <ul className="list-none flex flex-col gap-[8px] md:gap-[16px] font-[Outfit] text-[14px] md:text-[16px] leading-[1.4]">
                            <li><Link to="/equipes#chirurgie-orthopedique" className="hover:text-[#b8cae2]">Chirurgie</Link></li>
                            <li><Link to="/equipes#imagerie-radiologie" className="hover:text-[#b8cae2]">Radiologie</Link></li>
                            <li><Link to="/equipes#kinesitherapie-reathletisation" className="hover:text-[#b8cae2]">Kinésithérapie</Link></li>
                            <li><Link to="/infos" className="hover:text-[#b8cae2]">À propos</Link></li>
                            <li><Link to="/infos#faq" className="hover:text-[#b8cae2]">Aide & FAQ</Link></li>
                            <Link to="/infos#contact-form" className="hover:text-[#b8cae2]">Contact</Link>
                        </ul>
                    </div>

                    {/* Ligne verticale */}
                    <div className="hidden md:block border-l border-[#F5F3EF14] h-auto self-stretch"></div>

                    {/* Informations de contact */}
                    <div className="flex flex-col gap-[16px] md:gap-[24px] md:text-left text-center">
                        <h5 className="font-[Geist] font-medium leading-[24px] text-[16px] md:text-[18px]">/ Informations de contact</h5>
                        <ul className="list-none flex flex-col gap-[8px] md:gap-[16px] font-[Outfit] text-[14px] md:text-[16px] leading-[1.4]">
                            <li>info@orthopole.com</li>
                            <li>Lun-Ven, 9:00-17:00</li>
                            <li>14 Rue Carnot, 92300 Levallois-Perret, France</li>
                        </ul>
                    </div>

                    {/* Ligne verticale */}
                    <div className="hidden md:block border-l border-[#F5F3EF14] h-auto self-stretch"></div>

                    {/* Newsletter */}
                    <div className="flex flex-col gap-[16px] md:gap-[24px] text-center md:text-left leading-[1.4]">
                        <form action="" className="font-[Outfit] flex flex-col gap-[16px] md:gap-[24px] items-center md:items-start">
                            <p className="text-[14px] md:text-[16px] max-w-[300px] md:max-w-none">Recevez des mises à jour, des conseils de santé et des informations exclusives.</p>
                            <input
                                type="email"
                                name="email"
                                placeholder="Entrez votre adresse e-mail"
                                className="border-b border-gray-500 py-[12px] md:py-[24px] text-[14px] md:text-[16px] focus:outline-none w-full max-w-[300px]"
                            />
                            <button
                                type="submit"
                                className="w-fit px-[12px] md:px-[16px] py-[6px] md:py-[8px] font-[Geist] font-medium bg-[#C9BBA8] hover:bg-[#ac9c86] text-[#0C1A2E] text-[14px] md:text-[16px] cursor-pointer"
                            >
                                S'abonner
                            </button>
                        </form>
                    </div>
                </section>

                {/* Ligne horizontale */}
                <hr className="border-[#F5F3EF14]" />

                {/* Footer Titre */}
                <section className="flex justify-center md:justify-start items-center">
                    <h1 className="font-medium text-[60px] md:text-[150px] lg:text-[260px] text-[#8C817D] leading-[1.4] tracking-tight">Orthopole</h1>
                </section>

                {/* Copyright */}
                <section className="font-[Outfit] text-[12px] md:text-[13px] leading-[1.4] flex flex-col md:flex-row justify-between items-center gap-[16px] md:gap-0">
                    <div className="text-center md:text-left w-full">
                        &copy; Orthopole 2026. Tous droits réservés.
                    </div>

                    <ul className="list-none flex flex-wrap justify-center md:justify-end gap-[8px] lg:gap-[16px] w-full">
                        <li><a href="" className="text-[12px] md:text-[13px] hover:text-[#b8cae2]">Mentions légales</a></li>
                        <span className="hidden md:inline">-</span>
                        <li><a href="" className="text-[12px] md:text-[13px] hover:text-[#b8cae2]">Politique de confidentialité</a></li>
                        <span className="hidden md:inline">-</span>
                        <li><a href="" className="text-[12px] md:text-[13px] hover:text-[#b8cae2]">Contact</a></li>
                    </ul>
                </section>
            </footer>
        </>
    )
}