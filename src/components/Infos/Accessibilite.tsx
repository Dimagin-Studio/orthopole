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

export default function Accessibilite() {
    const refRow1 = useRef(null);
    const refRow2 = useRef(null);
    const isInView1 = useInView(refRow1, { once: true, margin: "0px 0px -80px 0px" });
    const isInView2 = useInView(refRow2, { once: true, margin: "0px 0px -80px 0px" });

    return (
        <section className="px-[24px] md:px-[48px] pt-[48px] md:pt-[96px] pb-[80px] md:pb-[160px] flex flex-col gap-[32px] md:gap-[64px] items-center">
            {/* Header */}
            <div className="max-w-[540px] flex flex-col gap-[24px] text-center">
                <h2 className="text-3xl md:text-[56px] leading-[1.2] tracking-tight">Accessibilité PMR</h2>
                <p className="font-[Outfit] text-sm md:text-base leading-[1.4]">Informations officielles concernant l'accessibilité du centre pour les personnes à mobilité réduite.</p>
            </div>

            {/* Container */}
            <div className="flex flex-col gap-[16px] dark:text-[#0C1A2E]">
                {/* Row 1 */}
                <motion.div
                    ref={refRow1}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView1 ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]"
                >
                    {/* Image 1 */}
                    <motion.div variants={itemVariants}>
                        <img src="/images/photos-accessibilite/photo1.png" alt="Ascenseur accessible" className="hidden md:block w-full h-full object-cover object-center" />
                    </motion.div>
                    {/* Texte 1 */}
                    <motion.div
                        variants={itemVariants}
                        className="h-[235px] md:h-full p-[12px] md:p-[24px] flex flex-col justify-between text-center md:text-left bg-[#F9F9F9]"
                    >
                        <h4 className="text-[32px] leading-[1.4] tracking-tight">Ascenseur accessible</h4>
                        <p className="font-[Outfit] leading-[1.4]">Ascenseurs accessibles permettant un accès facile à tous les étages.</p>
                    </motion.div>
                    {/* Image 2 */}
                    <motion.div variants={itemVariants}>
                        <img src="/images/photos-accessibilite/photo2.png" alt="Rampes d'accès" className="hidden md:block w-full h-full object-cover object-center" />
                    </motion.div>
                    {/* Texte 2 */}
                    <motion.div
                        variants={itemVariants}
                        className="h-[235px] md:h-full p-[12px] md:p-[24px] flex flex-col justify-between text-center md:text-left bg-[#F9F9F9]"
                    >
                        <h4 className="text-[32px] leading-[1.4] tracking-tight">Rampes d'accès</h4>
                        <p className="font-[Outfit] leading-[1.4]">Rampes d'accès sécurisées facilitant la circulation des fauteuils roulants.</p>
                    </motion.div>
                </motion.div>

                {/* Row 2 */}
                <motion.div
                    ref={refRow2}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView2 ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]"
                >
                    {/* Texte 3 */}
                    <motion.div
                        variants={itemVariants}
                        className="h-[235px] md:h-full p-[12px] md:p-[24px] flex flex-col justify-between text-center md:text-left bg-[#F9F9F9]"
                    >
                        <h4 className="text-[32px] leading-[1.4] tracking-tight">Toilettes adaptées</h4>
                        <p className="font-[Outfit] leading-[1.4]">Sanitaires spécialement aménagés pour garantir confort et autonomie.</p>
                    </motion.div>
                    {/* Image 3 */}
                    <motion.div variants={itemVariants}>
                        <img src="/images/photos-accessibilite/photo3.png" alt="Toilettes adaptées" className="hidden md:block w-full h-full object-cover object-center" />
                    </motion.div>
                    {/* Texte 4 */}
                    <motion.div
                        variants={itemVariants}
                        className="h-[235px] md:h-full p-[12px] md:p-[24px] flex flex-col justify-between text-center md:text-left bg-[#F9F9F9]">
                        <h4 className="text-[32px] leading-[1.4] tracking-tight">Parking gratuit et accessible en face</h4>
                        <p className="font-[Outfit] leading-[1.4]">Places de stationnement réservées à proximité de l'entrée.</p>
                    </motion.div>
                    {/* Image 4 */}
                    <motion.div variants={itemVariants}>
                        <img src="/images/photos-accessibilite/photo4.png" alt="Parking gratuit et accessible en face" className="hidden md:block w-full h-full object-cover object-center" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}