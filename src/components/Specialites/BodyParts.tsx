import { motion, useInView, type Variants } from "motion/react"
import { useRef, useState } from "react"
import PopUp from "../Equipes/PopUp"
import { doctors, type Doctor } from "@/data/doctors"

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

type Zone = "epaule" | "coude" | "poignet" | "main" | "hanche" | "genou" | "cheville" | "pied" | "colonne"

// Positions des marqueurs sur la silhouette (viewBox 0 0 100 210).
// Articulations symétriques → un marqueur de chaque côté.
const markers: Record<Zone, [number, number][]> = {
    epaule: [[37, 44], [63, 44]],
    coude: [[29, 72], [71, 72]],
    poignet: [[26, 99], [74, 99]],
    main: [[25, 106], [75, 106]],
    hanche: [[42, 101], [58, 101]],
    genou: [[42, 150], [58, 150]],
    cheville: [[43, 192], [57, 192]],
    pied: [[43, 200], [57, 200]],
    colonne: [], // surlignage vertical géré à part
}

function BodySilhouette({ zone }: { zone: Zone }) {
    const base = "#C7D0DC"
    const accent = "#2C4A6E"
    return (
        <svg
            viewBox="0 0 100 210"
            className="h-[70px] md:h-[80px] w-auto transition-transform group-hover:scale-110"
            aria-hidden="true"
        >
            {/* Silhouette */}
            <g fill={base} stroke={base}>
                <circle cx="50" cy="18" r="12" />
                <rect x="35" y="33" width="30" height="68" rx="14" />
                <polyline points="37,44 29,72 26,99" fill="none" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="63,44 71,72 74,99" fill="none" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="25" cy="106" r="5" />
                <circle cx="75" cy="106" r="5" />
                <polyline points="43,98 42,150 43,194" fill="none" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="57,98 58,150 57,194" fill="none" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                <ellipse cx="43" cy="200" rx="7" ry="4" />
                <ellipse cx="57" cy="200" rx="7" ry="4" />
            </g>

            {/* Zone surlignée */}
            {zone === "colonne" ? (
                <rect x="46.5" y="35" width="7" height="63" rx="3.5" fill={accent} />
            ) : (
                markers[zone].map(([cx, cy], i) => (
                    <g key={i}>
                        <circle cx={cx} cy={cy} r="11" fill={accent} opacity="0.22" />
                        <circle cx={cx} cy={cy} r="5" fill={accent} />
                    </g>
                ))
            )}
        </svg>
    )
}

const bodyParts: { label: string; zone: Zone }[] = [
    { label: "ÉPAULE", zone: "epaule" },
    { label: "COUDE", zone: "coude" },
    { label: "POIGNET", zone: "poignet" },
    { label: "MAIN", zone: "main" },
    { label: "HANCHE", zone: "hanche" },
    { label: "GENOU", zone: "genou" },
    { label: "CHEVILLE", zone: "cheville" },
    { label: "PIED", zone: "pied" },
    { label: "COLONNE", zone: "colonne" },
]

// Chirurgiens associés à chaque zone (d'après leurs domaines d'intervention).
// Plusieurs spécialistes → fiches ouvertes côte à côte, sans hiérarchie.
const zoneDoctorIds: Record<Zone, string[]> = {
    epaule: ["dr-louis-gossing"],
    coude: ["dr-denis-williame"],
    poignet: ["dr-denis-williame"],
    main: ["dr-denis-williame"],
    hanche: ["dr-valery-fabre", "dr-eric-manche", "dr-bernard-geulette"],
    genou: ["dr-valery-fabre", "dr-eric-manche", "dr-bernard-geulette"],
    cheville: ["dr-thibaut-leemrijse"],
    pied: ["dr-thibaut-leemrijse"],
    colonne: ["dr-eric-manche", "dr-juan-toussaint"],
}

export default function BodyParts() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
    const [selectedDoctors, setSelectedDoctors] = useState<Doctor[]>([]);

    const openZone = (zone: Zone) => {
        const zoneDoctors = zoneDoctorIds[zone]
            .map((id) => doctors.find((doctor) => doctor.id === id))
            .filter((doctor): doctor is Doctor => !!doctor);
        setSelectedDoctors(zoneDoctors);
    };

    return (
        <>
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[16px]"
            >
                {bodyParts.map((part) => (
                    <motion.div key={part.label} variants={itemVariants}>
                        <button type="button" onClick={() => openZone(part.zone)} className="block group w-full">
                            <div className="p-[24px] bg-[#F9F9F9] dark:bg-[#F5F3EF] flex flex-col items-center justify-center gap-[12px] h-[150px] md:h-[170px] cursor-pointer transition-colors hover:bg-[#EFEDE8] dark:hover:bg-[#E8E5DE]">
                                <BodySilhouette zone={part.zone} />
                                <p className="font-medium text-base text-[#0C1A2E] tracking-wide text-center">{part.label}</p>
                            </div>
                        </button>
                    </motion.div>
                ))}
            </motion.div>

            <PopUp
                isOpen={selectedDoctors.length > 0}
                onClose={() => setSelectedDoctors([])}
                doctors={selectedDoctors}
            />
        </>
    );
}
