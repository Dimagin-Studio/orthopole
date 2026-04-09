import { useState } from 'react';

export default function Contact() {
    const [selectedOption, setSelectedOption] = useState<string>("Spécialité");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    };

    return (
        <>
            <section className="px-[24px] md:px-[48px] pt-[64px] md:pt-[128px] pb-[40px] md:pb-[96px] grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[80px]">
                {/* Image (sauf sur mobiles) */}
                <img
                    src="/images/form.png"
                    alt="Dotceur"
                    className="hidden lg:block object-cover object-center"
                />

                {/* Zone de texte */}
                <div className="flex flex-col gap-[24px] items-center md:items-start text-center md:text-left col-span-2 lg:col-span-1">
                    <p className="px-[8px] py-[4px] font-[Outfit] text-sm text-[#362925] bg-[#EAE2D7] leading-[1.4] w-fit">
                        RÉPONSE SOUS 24H
                    </p>

                    {/* Formulaire */}
                    <form action="" className="flex flex-col justify-between w-full h-full">
                        <h2 className="text-3xl md:text-5xl leading-[1.4] tracking-tight">Formulaire de contact</h2>

                        {/* Inputs + bouton */}
                        <div className="flex flex-col gap-[24px]">
                            {/* Inputs */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] font-[Outfit] text-sm md:text-base leading-[1.4]">
                                {/* Nom */}
                                <input
                                    type="text"
                                    name="nom"
                                    placeholder="Nom"
                                    className="col-span-2 md:col-span-1 border-b border-[#D9D9D9] py-[12px] md:py-[24px] focus:outline-none w-full"
                                    required
                                />

                                {/* Prénom */}
                                <input
                                    type="text"
                                    name="prenom"
                                    placeholder="Prénom"
                                    className="col-span-2 md:col-span-1 border-b border-[#D9D9D9] py-[12px] md:py-[24px] focus:outline-none w-full"
                                    required
                                />

                                {/* Email */}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="col-span-2 border-b border-[#D9D9D9] py-[12px] md:py-[24px] focus:outline-none w-full"
                                    required
                                />

                                {/* Objet */}
                                <input
                                    type="text"
                                    name="objet"
                                    placeholder="Objet"
                                    className="col-span-2 border-b border-[#D9D9D9] py-[12px] md:py-[24px] focus:outline-none w-full"
                                    required
                                />

                                {/* Spécialité */}
                                <select
                                    name="specialite"
                                    id="specialite"
                                    className={`col-span-2 border-b border-[#D9D9D9] py-[12px] md:py-[24px] focus:outline-none w-full 
                                        ${selectedOption === "Spécialité" ? "text-[#757575]" : "text-[#0C1A2E]"
                                        }`}
                                    value={selectedOption}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="Spécialité" disabled selected>Spécialité</option>
                                    <option value="Chirurgie orthopédique" className="text-[#0C1A2E]">Chirurgie orthopédique</option>
                                    <option value="Imagerie" className="text-[#0C1A2E]">Imagerie</option>
                                    <option value="Kinésithérapie" className="text-[#0C1A2E]">Kinésithérapie</option>
                                </select>

                                {/* Message */}
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    cols={50}
                                    placeholder="Message"
                                    className="col-span-2 border-b border-[#D9D9D9] py-[12px] md:py-[24px] focus:outline-none w-full"
                                    required
                                >
                                </textarea>
                            </div>

                            {/* Bouton */}
                            <input type="submit" value="ENVOYER LE MESSAGE" className="bg-[#0C1A2E] text-[#FBF8F3] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit text-center cursor-pointer" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}