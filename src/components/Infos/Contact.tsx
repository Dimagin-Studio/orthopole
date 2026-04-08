export default function Contact() {
    return (
        <>
            <section className="px-[24px] md:px-[48px] pt-[64px] md:pt-[128px] pb-[40px] md:pb-[96px] grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[80px]">
                {/* Image (sauf sur mobiles) */}
                <img
                    src="/images/form.png"
                    alt="Dotceur"
                    className="hidden md:block object-cover object-center"
                />

                {/* Zone de texte */}
                <div className="flex flex-col justify-between items-center md:items-start text-center md:text-left">
                    <p className="px-[8px] py-[4px] font-[Outfit] text-sm text-[#362925] bg-[#EAE2D7] leading-[1.4] w-fit">
                        RÉPONSE SOUS 24H
                    </p>

                    {/* Formulaire */}
                    <form action="" className="flex flex-col gap-[32px] md:gap-[48px] w-full">
                        <h2 className="text-3xl md:text-5xl leading-[1.4] tracking-tight">Formulaire de contact</h2>

                        {/* Inputs + bouton */}
                        <div className="flex flex-col gap-[24px]">
                            {/* Inputs */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                                {/* Nom */}
                                <input
                                    type="text"
                                    name="nom"
                                    placeholder="Nom"
                                    className="border-b border-[#D9D9D9] bg-transparent py-[12px] md:py-[24px] font-[Outfit] text-[14px] md:text-[16px] leading-[1.4] focus:outline-none w-full"
                                />

                                {/* Prénom */}
                                <input
                                    type="text"
                                    name="prenom"
                                    placeholder="Prénom"
                                    className="border-b border-[#D9D9D9] bg-transparent py-[12px] md:py-[24px] font-[Outfit] text-[14px] md:text-[16px] leading-[1.4] focus:outline-none w-full"
                                />

                                {/* Email */}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="col-span-2 border-b border-[#D9D9D9] bg-transparent py-[12px] md:py-[24px] font-[Outfit] text-[14px] md:text-[16px] leading-[1.4] focus:outline-none w-full"
                                />

                                {/* Objet */}
                                <input
                                    type="text"
                                    name="objet"
                                    placeholder="Objet"
                                    className="col-span-2 border-b border-[#D9D9D9] bg-transparent py-[12px] md:py-[24px] font-[Outfit] text-[14px] md:text-[16px] leading-[1.4] focus:outline-none w-full"
                                />

                                {/* Spécialité */}
                                <input
                                    type="text"
                                    name="specialite"
                                    placeholder="Placeholder spécialité"
                                    className="col-span-2 border-b border-[#D9D9D9] bg-transparent py-[12px] md:py-[24px] font-[Outfit] text-[14px] md:text-[16px] leading-[1.4] focus:outline-none w-full"
                                />

                                {/* Message */}
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    cols="50"
                                    placeholder="Message"
                                    className="col-span-2 border-b border-[#D9D9D9] bg-transparent py-[12px] md:py-[24px] font-[Outfit] text-[14px] md:text-[16px] leading-[1.4] focus:outline-none w-full">
                                </textarea>
                            </div>

                            {/* Bouton */}
                            <p className="bg-[#0C1A2E] text-[#FBF8F3] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit text-center cursor-pointer">
                                <a href="">ENVOYER LE MESSAGE</a>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}