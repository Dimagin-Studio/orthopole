import { Link } from "react-router-dom";

export default function Rdv() {
    return (
        <>
            <section className="px-[24px] py-[40px] md:px-[48px] md:py-[96px] flex flex-col gap-[32px] md:gap-[48px] items-center bg-[#EAE2D7]">
                {/* Header */}
                <h1 className="text-3xl md:text-5xl text-center leading-[1.4] tracking-tight">
                    Prendre rendez-vous
                </h1>

                {/* Container */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
                    {/* Box 1 Chirurgie */}
                    <div className="flex flex-col gap-[24px] p-[24px] bg-[#F9F9F9] h-fit">
                        {/* Texte */}
                        <div className="flex flex-col gap-[12px]">
                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl md:text-[32px] leading-[1.4] tracking-tight">Chirurgie</h3>
                                <img src="/images/hospital-bed.png" alt="Icône lit d'hôpital" width="36" height="36" />
                            </div>

                            <p className="font-[Outfit] leading-[24px]">Prenez rendez-vous via notre système de prise de rendez-vous en ligne.</p>
                        </div>

                        {/* Bouton */}
                        <Link to="/infos#contact-form" className="font-medium text-[#FBF8F3] text-center bg-[#0C1A2E] hover:bg-[#1e395e] leading-[23px] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit">
                            PRENDRE RDV
                        </Link>
                    </div>

                    {/* Box 2 Radio */}
                    <div className="flex flex-col gap-[24px] p-[24px] bg-[#F9F9F9] h-fit">
                        {/* Texte */}
                        <div className="flex flex-col gap-[12px]">
                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl md:text-[32px] leading-[1.4] tracking-tight">Radio</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0C1A2E" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                            </div>

                            <p className="font-[Outfit] leading-[24px]">Prenez rendez-vous par téléphone auprès du secrétariat.</p>
                        </div>

                        {/* Bouton */}
                        <a href="tel:0189291885" className="flex gap-[8px] items-center justify-center font-[Outfit] font-medium text-[#FBF8F3] text-center bg-[#0C1A2E] hover:bg-[#1e395e] leading-[23px] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                            </svg>
                            01 89 29 18 85
                        </a>
                    </div>

                    {/* Box 3 Kiné */}
                    <div className="flex flex-col gap-[48px] p-[24px] bg-[#F9F9F9] h-fit">
                        {/* Texte */}
                        <div className="flex flex-col gap-[24px]">
                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl md:text-[32px] leading-[1.4] tracking-tight">Kiné</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0C1A2E" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-activity-icon lucide-activity"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" /></svg>
                            </div>

                            <p className="font-[Outfit] leading-[24px]">Prenez rendez-vous par appel téléphonique.</p>
                        </div>

                        {/* Contact */}
                        <div className="grid grid-cols-1 gap-[32px] md:gap-[8px] font-[Outfit]">
                            {/* Contact 1 */}
                            <div className="flex flex-col md:flex-row gap-[12px] justify-between items-start md:items-center">
                                {/* Image + texte */}
                                <div className="flex gap-[12px] items-center">
                                    <img src="/images/contact.png" alt="Dr Claire Dupont" width="52" height="52" className="object-center" />
                                    <h5>Claire Dupont</h5>
                                </div>

                                {/* Boutons */}
                                <div className="flex gap-[8px]">
                                    {/* Calendrier */}
                                    <Link to="/infos" className="px-[12px] py-[8px] md:py-[10px] bg-[#C9BBA8] hover:bg-[#ac9c86] object-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0C1A2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-plus2-icon lucide-calendar-plus-2"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M10 16h4" /><path d="M12 14v4" /></svg>
                                    </Link>

                                    {/* Téléphone */}
                                    <a href="tel:0189292598" className="flex gap-[8px] items-center font-[Outfit] font-medium text-[#FBF8F3] text-center text-sm bg-[#0C1A2E] hover:bg-[#1e395e] leading-[23px] px-[12px] py-[8px] md:py-[10px] w-fit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                                            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                                        </svg>
                                        01 89 29 25 98
                                    </a>
                                </div>
                            </div>

                            {/* Contact 2 */}
                            <div className="flex flex-col md:flex-row gap-[12px] justify-between items-start md:items-center">
                                {/* Image + texte */}
                                <div className="flex gap-[12px] items-center">
                                    <img src="/images/photos-figma/sophie-lambert.png" alt="Dr Sophie Lambert" width="52" height="52" className="object-center" />
                                    <h5>Sophie Lambert</h5>
                                </div>

                                {/* Boutons */}
                                <div className="flex gap-[8px]">
                                    {/* Calendrier */}
                                    <Link to="/infos" className="px-[12px] py-[8px] md:py-[10px] bg-[#C9BBA8] hover:bg-[#ac9c86] object-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0C1A2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-plus2-icon lucide-calendar-plus-2"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M10 16h4" /><path d="M12 14v4" /></svg>
                                    </Link>

                                    {/* Téléphone */}
                                    <a href="tel:0189101800" className="flex gap-[8px] items-center font-[Outfit] font-medium text-[#FBF8F3] text-center text-sm bg-[#0C1A2E] hover:bg-[#1e395e] leading-[23px] px-[12px] py-[8px] md:py-[10px] w-fit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                                            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                                        </svg>
                                        01 89 10 18 00
                                    </a>
                                </div>
                            </div>

                            {/* Contact 3 */}
                            <div className="flex flex-col md:flex-row gap-[12px] justify-between items-start md:items-center">
                                {/* Image + texte */}
                                <div className="flex gap-[12px] items-center">
                                    <img src="/images/photos-figma/thomas-moland.png" alt="Dr Thomas Moland" width="52" height="52" className="object-center" />
                                    <h5>Thomas Moland</h5>
                                </div>

                                {/* Boutons */}
                                <div className="flex gap-[8px]">
                                    {/* Calendrier */}
                                    <Link to="/infos" className="px-[12px] py-[8px] md:py-[10px] bg-[#C9BBA8] hover:bg-[#ac9c86] object-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0C1A2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-plus2-icon lucide-calendar-plus-2"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M10 16h4" /><path d="M12 14v4" /></svg>
                                    </Link>

                                    {/* Téléphone */}
                                    <a href="tel:0189292598" className="flex gap-[8px] items-center font-[Outfit] font-medium text-[#FBF8F3] text-center text-sm bg-[#0C1A2E] hover:bg-[#1e395e] leading-[23px] px-[12px] py-[8px] md:py-[10px] w-fit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                                            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                                        </svg>
                                        01 89 29 25 98
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Bouton */}
                        <div className="flex flex-col md:flex-row justify-between gap-2 font-[Outfit] text-sm">
                            <p>Ou par appel téléphonique auprès du secrétariat</p>

                            <a href="tel:0189422385" className="flex items-center gap-[6px] px-[12px] py-[8px] bg-[#0C1A2E1A] hover:bg-[#d9d2c8] w-fit h-fit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                                </svg>
                                <p className="text-sm w-full whitespace-nowrap">01 89 42 23 85</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}