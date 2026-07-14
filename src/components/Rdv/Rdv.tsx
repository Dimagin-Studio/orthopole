import { motion, useInView, type Variants } from "motion/react"
import MotionButton from "../Animations/MotionButton"
import { Link } from "react-router-dom"
import { useRef } from "react"

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.18 }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
}

const kineContainerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
}

const kineItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
}

export default function Rdv() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

    const kines = [
        {
            name: "Alexis De Wael",
            imageSrc: "/images/photos-kines/alexis-de-wael.jpeg",
            progenda: "",
        },
        {
            name: "François Dessart",
            imageSrc: "/images/photos-kines/françois-dessart.JPG",
            progenda: "https://progenda.be/calendars/dessart-francois-kinesitherapeute-ruisbroek",
        },
        {
            name: "Vanina Ullens",
            imageSrc: "/images/photos-kines/vanina-ullens.jpeg",
            progenda: "",
        },
        {
            name: "Sylvie Machiels",
            imageSrc: "/images/photos-figma/sylvie-machiels.png",
            progenda: "https://progenda.be/calendars/machiels-sylvie-kinesitherapeute-waterloo",
        },
        {
            name: "Anne-Sophie Brysse",
            imageSrc: "/images/photos-kines/strength-care.png",
            progenda: "https://progenda.be/calendars/brysse-anne-sophie-kinesitherapeute-ottignies",
        },
    ];

    const phoneIconPath = "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384";

    return (
        <section className="px-[24px] py-[40px] md:px-[48px] md:py-[96px] flex flex-col gap-[32px] md:gap-[48px] items-center bg-[#EAE2D7] dark:bg-[#0C1A2E]">
            {/* Header */}
            <h1 className="text-3xl md:text-5xl text-center leading-[1.4] tracking-tight">
                Prendre rendez-vous
            </h1>

            {/* Container */}
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] lg:items-start dark:text-[#0C1A2E]"
            >
                {/* Box 1 Chirurgie */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col gap-[24px] p-[24px] bg-[#F9F9F9] dark:bg-[#F5F3EF] lg:h-[220px]"
                >
                    {/* Texte */}
                    <div className="flex flex-col gap-[12px] flex-1">
                        {/* Header */}
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl md:text-[32px] leading-[1.4] tracking-tight">Chirurgie</h3>
                            <img src="/images/hospital-bed.png" alt="Icône lit d'hôpital" width="36" height="36" />
                        </div>

                        <p className="font-[Outfit] leading-[24px]">Prenez rendez-vous via notre système de prise de rendez-vous en ligne.</p>
                    </div>

                    {/* Bouton */}
                    <MotionButton as="div" className="font-medium text-[#FBF8F3] text-center bg-[#0C1A2E] hover:bg-[#172D47] leading-[23px] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit">
                        <Link to="/infos#prise-de-rdv">
                            PRENDRE RDV
                        </Link>
                    </MotionButton>
                </motion.div>

                {/* Box 2 Radio */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col gap-[24px] p-[24px] bg-[#F9F9F9] dark:bg-[#F5F3EF] lg:h-[220px]"
                >
                    {/* Texte */}
                    <div className="flex flex-col gap-[12px] flex-1">
                        {/* Header */}
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl md:text-[32px] leading-[1.4] tracking-tight">Radio</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0C1A2E" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                        </div>

                        <p className="font-[Outfit] leading-[24px]">Prenez rendez-vous par téléphone auprès du secrétariat.</p>
                    </div>

                    {/* Bouton */}
                    <MotionButton
                        as="a"
                        href="tel:+3225233033"
                        className="flex gap-[8px] items-center justify-center font-[Outfit] font-medium text-[#FBF8F3] text-center bg-[#0C1A2E] hover:bg-[#172D47] leading-[23px] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d={phoneIconPath} />
                        </svg>
                        02/523.30.33
                    </MotionButton>
                </motion.div>

                {/* Box 3 Kiné */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col gap-[48px] p-[24px] bg-[#F9F9F9] dark:bg-[#F5F3EF] h-fit"
                >
                    {/* Texte */}
                    <div className="flex flex-col gap-[24px]">
                        {/* Header */}
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl md:text-[32px] leading-[1.4] tracking-tight">Kiné</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0C1A2E" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-activity-icon lucide-activity"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" /></svg>
                        </div>

                        <p className="font-[Outfit] leading-[24px]">Prenez rendez-vous en ligne avec le kinésithérapeute de votre choix.</p>
                    </div>

                    {/* Contact */}
                    <motion.div
                        variants={kineContainerVariants}
                        className="grid grid-cols-1 gap-[32px] md:gap-[8px] font-[Outfit]"
                    >
                        {kines.map((kine, index) => (
                            <motion.div
                                key={index}
                                variants={kineItemVariants}
                                className="flex flex-col md:flex-row gap-[12px] justify-between items-start md:items-center">
                                {/* Image + nom */}
                                <div className="flex gap-[12px] items-center">
                                    <img src={kine.imageSrc} alt={kine.name} className="object-cover object-center w-[52px] h-[52px]" />
                                    <h5>{kine.name}</h5>
                                </div>

                                {/* Bouton PRENDRE RDV — progenda personnel si disponible, sinon iframe i-agenda */}
                                {kine.progenda ? (
                                    <MotionButton
                                        as="a"
                                        href={kine.progenda}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex gap-[8px] items-center justify-center font-[Outfit] font-medium text-[#FBF8F3] text-center text-sm bg-[#0C1A2E] hover:bg-[#172D47] leading-[23px] px-[16px] py-[8px] md:py-[10px] w-full md:w-fit"
                                    >
                                        PRENDRE RDV
                                    </MotionButton>
                                ) : (
                                    <Link to="/infos#prise-de-rdv" className="w-full md:w-fit">
                                        <MotionButton
                                            as="div"
                                            className="flex gap-[8px] items-center justify-center font-[Outfit] font-medium text-[#FBF8F3] text-center text-sm bg-[#0C1A2E] hover:bg-[#172D47] leading-[23px] px-[16px] py-[8px] md:py-[10px] w-full md:w-fit"
                                        >
                                            PRENDRE RDV
                                        </MotionButton>
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bouton */}
                    <div className="flex flex-col md:flex-row justify-between gap-2 font-[Outfit] text-sm">
                        <p>Ou par appel téléphonique auprès du secrétariat</p>

                        <MotionButton as="a" href="tel:+3225233033" className="flex items-center gap-[6px] px-[12px] py-[8px] bg-[#0C1A2E1A] hover:bg-[#d9d2c8] w-fit h-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d={phoneIconPath} />
                            </svg>
                            <p className="text-sm w-full whitespace-nowrap">02/523.30.33</p>
                        </MotionButton>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}