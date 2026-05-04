import { motion, useInView, type Variants } from "motion/react"
import MotionButton from "../Animations/MotionButton"
import { useState, useRef } from 'react'

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.18 }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

    const [selectedOption, setSelectedOption] = useState<string>("Spécialité");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    };

    return (
        <section id="contact-form" className="px-[24px] md:px-[48px] pt-[64px] md:pt-[128px] pb-[40px] md:pb-[96px] grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[80px]">
            {/* Image (sauf sur mobiles) */}
            <img
                src="/images/form.png"
                alt="Docteur"
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
                        <motion.div
                            ref={ref}
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="grid grid-cols-1 md:grid-cols-2 gap-[16px] font-[Outfit] text-sm md:text-base leading-[1.4]"
                        >
                            {/* Nom */}
                            <motion.input
                                variants={itemVariants}
                                type="text"
                                name="nom"
                                placeholder="Nom"
                                className="col-span-2 md:col-span-1 border-b border-[#D9D9D9] py-[12px] md:py-[24px] focus:outline-none w-full"
                                required
                            />

                            {/* Prénom */}
                            <motion.input
                                variants={itemVariants}
                                type="text"
                                name="prenom"
                                placeholder="Prénom"
                                className="col-span-2 md:col-span-1 border-b border-[#D9D9D9] py-[12px] md:py-[24px] focus:outline-none w-full"
                                required
                            />

                            {/* Email */}
                            <motion.input
                                variants={itemVariants}
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="col-span-2 border-b border-[#D9D9D9] py-[12px] md:py-[24px] focus:outline-none w-full"
                                required
                            />

                            {/* Objet */}
                            <motion.input
                                variants={itemVariants}
                                type="text"
                                name="objet"
                                placeholder="Objet"
                                className="col-span-2 border-b border-[#D9D9D9] py-[12px] md:py-[24px] focus:outline-none w-full"
                                required
                            />

                            {/* Spécialité */}
                            <motion.select
                                variants={itemVariants}
                                name="specialite"
                                id="specialite"
                                className={`col-span-2 border-b border-[#D9D9D9] py-[12px] md:py-[24px] focus:outline-none w-full 
                                        ${selectedOption === "Spécialité" ? "text-[#757575]" : "text-[#0C1A2E] dark:text-[#FBF8F3]"
                                    }`}
                                value={selectedOption}
                                onChange={handleChange}
                                required
                            >
                                <option value="Spécialité" disabled selected>Spécialité</option>
                                <option value="Chirurgie orthopédique" className="text-[#0C1A2E] dark:text-[#FBF8F3]">Chirurgie orthopédique</option>
                                <option value="Imagerie" className="text-[#0C1A2E] dark:text-[#FBF8F3]">Imagerie</option>
                                <option value="Kinésithérapie" className="text-[#0C1A2E] dark:text-[#FBF8F3]">Kinésithérapie</option>
                            </motion.select>

                            {/* Message */}
                            <motion.textarea
                                variants={itemVariants}
                                id="message"
                                name="message"
                                rows={5}
                                cols={50}
                                placeholder="Message"
                                className="col-span-2 border-b border-[#D9D9D9] py-[12px] md:py-[24px] focus:outline-none w-full"
                                required
                            >
                            </motion.textarea>
                        </motion.div>

                        {/* Submit */}
                        <div className="flex">
                            <MotionButton as="div">
                                <input type="submit" value="ENVOYER LE MESSAGE" className="text-[#FBF8F3] dark:text-[#0C1A2E] bg-[#0C1A2E] hover:bg-[#172D47] dark:bg-[#C9BBA8] dark:hover:bg-[#ac9c86] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit text-center cursor-pointer" />
                            </MotionButton>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}