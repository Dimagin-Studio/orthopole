import { motion, useInView, type Variants } from "motion/react"
import { useRef } from "react"

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.18 }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const avantages = [
    { src: "/images/photos-figma/doctor.png", alt: "Icône docteur", text: "Équipe pluri-disciplinaire spécialisée" },
    { src: "/images/photos-figma/hospital-bed.png", alt: "Icône lit d'hôpital", text: "Plateau technique moderne" },
    { src: "/images/photos-figma/medical-paper.png", alt: "Icône papier médical", text: "Parcours patient coordonné" },
    { src: "/images/photos-figma/call.png", alt: "Icône téléphone", text: "Prise de rendez-vous rapide" },
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
                {avantages.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="p-[24px] bg-[#F9F9F9] dark:bg-[#F5F3EF] flex flex-col justify-between place-items-center md:place-items-start text-center md:text-left h-[160px] md:h-[200px]">
                        <img src={item.src} alt={item.alt} width="46" height="46" />
                        <p>{item.text}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}