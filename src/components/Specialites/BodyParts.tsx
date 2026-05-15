import { motion, useInView, type Variants } from "motion/react"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { Bone, Hand, Footprints, PersonStanding, Spline } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
}

const bodyParts: { label: string; icon: LucideIcon; to: string }[] = [
    { label: "ÉPAULE", icon: Bone, to: "/equipes#dr-louis-gossing" },
    { label: "COUDE", icon: Bone, to: "/equipes#dr-denis-williame" },
    { label: "POIGNET", icon: Bone, to: "/equipes#dr-denis-williame" },
    { label: "MAIN", icon: Hand, to: "/equipes#dr-denis-williame" },
    { label: "HANCHE", icon: PersonStanding, to: "/equipes#dr-valery-fabre" },
    { label: "GENOU", icon: Bone, to: "/equipes#dr-valery-fabre" },
    { label: "CHEVILLE", icon: Bone, to: "/equipes#chirurgie-orthopedique" },
    { label: "PIED", icon: Footprints, to: "/equipes#chirurgie-orthopedique" },
    { label: "COLONNE", icon: Spline, to: "/equipes#dr-eric-manche" },
]

export default function BodyParts() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[16px]"
        >
            {bodyParts.map((part) => {
                const Icon = part.icon;
                return (
                    <motion.div key={part.label} variants={itemVariants}>
                        <Link to={part.to} className="block group">
                            <div className="p-[24px] bg-[#F9F9F9] dark:bg-[#F5F3EF] flex flex-col items-center justify-center gap-[12px] h-[140px] md:h-[160px] cursor-pointer transition-colors hover:bg-[#EFEDE8] dark:hover:bg-[#E8E5DE]">
                                <Icon className="w-[36px] h-[36px] text-[#0C1A2E] transition-transform group-hover:scale-110" strokeWidth={1.5} />
                                <p className="font-medium text-base text-[#0C1A2E] tracking-wide text-center">{part.label}</p>
                            </div>
                        </Link>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
