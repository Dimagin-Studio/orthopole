import { motion, useInView, type Variants } from "motion/react"
import MotionButton from "../Animations/MotionButton"
import { useRef } from "react"
import { Link } from "react-router-dom"

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const practiciens = [
    // Chirurgiens
    { src: "/images/photos-chirurgien/valery-fabre.jpeg", alt: "Dr. Valery Fabre", name: "Dr. Valery Fabre", specialty: "CHIRURGIE DE LA HANCHE ET DU GENOU", mt: "" },
    { src: "/images/photos-chirurgien/louis-gossing.jpg", alt: "Dr. Louis Gossing", name: "Dr. Louis Gossing", specialty: "CHIRURGIE DE L'ÉPAULE", mt: "mt-0 md:mt-[40px]" },
    { src: "/images/photos-chirurgien/denis-willame.jpg", alt: "Dr. Denis Williame", name: "Dr. Denis Williame", specialty: "CHIRURGIE DE LA MAIN, DU POIGNET ET DU COUDE", mt: "mt-0 md:mt-[80px]" },
    { src: "/images/photos-chirurgien/eric-manche.jpeg", alt: "Dr. Eric Manche", name: "Dr. Eric Manche", specialty: "CHIRURGIE DE LA COLONNE, HANCHE ET DU GENOU", mt: "mt-0 md:mt-[40px]" },
    { src: "/images/photos-practicien/thibaut.jpeg", alt: "Dr. Thibaut Leemrijse", name: "Dr. Thibaut Leemrijse", specialty: "CHIRURGIE DU PIED ET DE LA CHEVILLE", mt: "" },
    { src: "/images/photos-practicien/DR-TOUSSAINT-whitebg.jpg", alt: "Dr. Juan Toussaint", name: "Dr. Juan Toussaint", specialty: "CHIRURGIE DE LA COLONNE", mt: "mt-0 md:mt-[80px]" },
    { src: "/images/photos-practicien/docteur-geulette.png", alt: "Dr. Bernard Geulette", name: "Dr. Bernard Geulette", specialty: "CHIRURGIE DU GENOU ET DE LA HANCHE", mt: "" },
    // Kinésithérapeutes
    { src: "/images/photos-kines/alexis-de-wael.jpeg", alt: "Alexis De Wael", name: "Alexis De Wael", specialty: "KINÉSITHÉRAPEUTE", mt: "mt-0 md:mt-[40px]" },
    { src: "/images/photos-kines/françois-dessart.JPG", alt: "François Dessart", name: "François Dessart", specialty: "KINÉSITHÉRAPEUTE", mt: "mt-0 md:mt-[80px]" },
    { src: "/images/photos-kines/vanina-ullens.jpeg", alt: "Vanina Ullens", name: "Vanina Ullens", specialty: "KINÉSITHÉRAPEUTE", mt: "mt-0 md:mt-[40px]" },
    { src: "/images/photos-figma/sylvie-machiels.png", alt: "Sylvie Machiels", name: "Sylvie Machiels", specialty: "KINÉSITHÉRAPEUTE", mt: "" },
    { src: "/images/photos-kines/strength-care.png", alt: "Anne-Sophie Brysse", name: "Anne-Sophie Brysse", specialty: "KINÉSITHÉRAPEUTE", mt: "mt-0 md:mt-[80px]" },
]

export default function Equipe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

    return (
        <section className="px-[24px] md:px-[48px] pt-[40px] md:pt-[80px] pb-[64px] md:pb-[128px] flex flex-col gap-[40px] md:gap-[80px]">
            {/* L'équipe */}
            {/* Header */}
            <div className="flex flex-col gap-[16px] md:gap-[24px] items-center text-center">
                <p className="px-[8px] py-[4px] font-[Outfit] text-sm text-[#362925] bg-[#EAE2D7] leading-[1.4]">
                    L'ÉQUIPE
                </p>
                <h2 className="max-w-[90%] md:max-w-[768px] text-3xl md:text-4xl lg:text-5xl leading-[1.4] tracking-tight">
                    Une équipe de spécialistes engagés dans une prise en charge personnalisée.
                </h2>
            </div>

            {/* Container */}
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] md:gap-[40px] lg:gap-[48px] justify-items-center text-center md:text-left"
            >
                {practiciens.map((p, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`flex flex-col gap-[16px] w-full md:max-w-[324px] ${p.mt}`}>
                        <img src={p.src} alt={p.alt} className="w-full h-[500px] md:w-[324px] md:h-[375px] object-cover object-center" />

                        <div className="flex flex-col gap-[8px]">
                            <h6 className="text-lg leading-[1.4]">{p.name}</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF] dark:text-[#acacac] leading-[1.4]">{p.specialty}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Button */}
            <Link to="/equipes">
                <MotionButton as="div" className="w-full md:w-fit mx-auto px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] text-[#FBF8F3] dark:text-[#0C1A2E] bg-[#0C1A2E] hover:bg-[#172D47] dark:bg-[#C9BBA8] dark:hover:bg-[#ac9c86] font-medium text-center leading-[23.48px]">
                    DÉCOUVRIR L'ÉQUIPE
                </MotionButton>
            </Link>
        </section>
    )
}