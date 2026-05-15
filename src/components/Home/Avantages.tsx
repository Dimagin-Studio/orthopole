import { motion, useInView, type Variants } from "motion/react"
import { useRef } from "react"
import { Link } from "react-router-dom"

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

const avantages: { src: string; alt: string; text: string; to?: string }[] = [
    { src: "/images/photos-figma/doctor.png", alt: "Icône docteur", text: "Centre dédié à l'appareil locomoteur" },
    { src: "/images/photos-figma/hospital-bed.png", alt: "Icône lit d'hôpital", text: "Plateau technique moderne" },
    { src: "/images/photos-figma/medical-paper.png", alt: "Icône papier médical", text: "Parcours patient optimisé" },
    { src: "/images/photos-figma/call.png", alt: "Icône téléphone", text: "Prise de rendez-vous rapide", to: "/infos#contact-form" },
];

export default function Avantages() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

    return (
        <section className="px-[24px] md:px-[48px] py-[40px] md:py-[80px] text-base dark:text-[#0C1A2E] md:text-lg leading-[1.4]">
            {/* Avantages */}
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]"
            >
                {avantages.map((item, index) => {
                    const card = (
                        <motion.div
                            variants={itemVariants}
                            className={`p-[24px] bg-[#F9F9F9] dark:bg-[#F5F3EF] flex flex-col justify-between place-items-center md:place-items-start text-center md:text-left h-[160px] md:h-[200px] transition-colors ${item.to ? "cursor-pointer hover:bg-[#EFEDE8] dark:hover:bg-[#E8E5DE]" : ""}`}>
                            <img src={item.src} alt={item.alt} width="46" height="46" />
                            <p>{item.text}</p>
                        </motion.div>
                    );
                    return item.to ? (
                        <Link key={index} to={item.to} className="block">{card}</Link>
                    ) : (
                        <div key={index}>{card}</div>
                    );
                })}
            </motion.div>
        </section>
    )
}