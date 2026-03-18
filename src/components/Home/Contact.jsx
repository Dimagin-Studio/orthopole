export function Contact() {
    return (
        <>
            {/* Prise de rdv & Map */}
            <section className="px-[24px] md:px-[48px] pt-[48px] md:pt-[80px] pb-[64px] md:pb-[128px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[32px] md:gap-[64px] items-center">
                {/* Zone text header & Tel */}
                <div className="flex flex-col gap-[32px] md:gap-[48px] mx-auto lg:mx-0 lg:w-[540px]">
                    {/* Header */}
                    <div className="flex flex-col gap-[24px] md:gap-[32px] text-center lg:text-left">
                        <h2 className="text-[28px] md:text-[36px] lg:text-5xl leading-[1.4] tracking-tight">
                            Besoin d'un rendez-vous ou d'une information ?
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-[16px] md:gap-[24px] font-medium">
                            <p className="text-[#F5F3EF] bg-[#0C1A2E] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-fit">
                                <a href="">PRENDRE RENDEZ-VOUS</a>
                            </p>
                            <p className="border border-[#0C1A2E] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-fit">
                                <a href="">NOUS CONTACTER</a>
                            </p>
                        </div>
                    </div>

                    {/* Téléphone */}
                    <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-2 font-[Outfit] text-center lg:text-left">
                        <p className="font-light">Ou par téléphone sur</p>
                        <span className="px-[12px] py-[8px] flex items-center gap-2 bg-[#0C1A2E0D]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                            </svg>
                            01 89 29 18 85
                        </span>
                    </div>
                </div>

                {/* Map */}
                <div className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[632px] mx-auto lg:mx-0 lg:justify-self-end">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5246.758788432707!2d2.2867164997522473!3d48.889106327404555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f8511307857%3A0xe5649db3eabc9e52!2s14%20Rue%20Carnot%2C%2092300%20Levallois-Perret%2C%20France!5e0!3m2!1sfr!2sbe!4v1773396113398!5m2!1sfr!2sbe"
                        width="100%"
                        height="300"
                        className="w-full md:h-[350px] lg:h-[480px]"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </>
    )
}