import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import MotionButton from "../Animations/MotionButton"
import type { Doctor } from "@/data/doctors"

type PopUpProps = {
    isOpen: boolean;
    onClose: () => void;
    doctors: Doctor[];
};

function SectionsList({ sections }: { sections: Doctor["sections"] }) {
    return (
        <>
            {sections.map((section, index) => (
                <div key={index} className="flex flex-col gap-[4px]">
                    <h4 className="font-semibold">{section.title}</h4>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-[15px] font-[Outfit] leading-[1.4]">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}

function AvailabilityInfo({ specialty, availability }: { specialty: string; availability: string }) {
    return (
        <div className="flex flex-col gap-[12px]">
            <p className="font-[Outfit] text-[16px] text-[#2C4A6EBF]">
                {specialty}
            </p>
            <div className="px-[8px] py-[4px] w-fit md:max-w-[409px] flex items-center gap-[8px] bg-[#EEEEEE] font-[Outfit] text-sm leading-[1.4]">
                <div className="h-[5px] w-[5px] md:h-[7px] md:w-[8px] bg-[#4CDE78] rounded-full flex items-center justify-center text-[#4CDE78] text-xs">
                    •
                </div>
                <p>{availability}</p>
            </div>
            <a
                href="tel:+3225233033"
                className="font-[Outfit] text-sm text-[#2C4A6EBF] hover:text-[#2C4A6E] w-fit"
            >
                📞 Secrétariat — 02/523.30.33
            </a>
        </div>
    );
}

function RdvButton({ progenda }: { progenda?: string }) {
    return progenda ? (
        <MotionButton
            as="a"
            href={progenda}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0C1A2E] hover:bg-[#172D47] text-[#FBF8F3] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit text-center block"
        >
            PRENDRE RDV
        </MotionButton>
    ) : (
        <MotionButton
            as="a"
            href="/infos#prise-de-rdv"
            className="bg-[#0C1A2E] hover:bg-[#172D47] text-[#FBF8F3] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit text-center block"
        >
            PRENDRE RDV
        </MotionButton>
    );
}

export default function PopUp({ isOpen, onClose, doctors }: PopUpProps) {
    const popupRef = useRef<HTMLDivElement>(null);
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setExpanded({}); // Reset à chaque ouverture
        } else {
            document.body.style.overflow = "auto";
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    const isMulti = doctors.length > 1;
    const single = doctors[0];

    return (
        <AnimatePresence>
            {isOpen && doctors.length > 0 && (
                <>
                    {/* Fond flouté — apparition progressive */}
                    <motion.div
                        className="fixed inset-0 z-10 bg-black/25 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    />

                    {/* Popup — grandit depuis le centre */}
                    <div className="fixed inset-0 z-20 overflow-y-auto">
                        <div className="min-h-full flex items-center justify-center p-[16px] md:p-[24px]">
                            {!isMulti ? (
                                <motion.div
                                    ref={popupRef}
                                    className="relative bg-[#FFFFFF] shadow-2xl w-full max-w-[768px]"
                                    initial={{ opacity: 0, scale: 0.92, y: 16 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 8 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                >
                                    {/* Container */}
                                    <div className="flex flex-col md:flex-row md:h-[503px]">

                                        {/* Image — cachée sur mobile */}
                                        <div className="hidden md:block w-2/5 h-full p-[24px] shrink-0">
                                            <img
                                                src={single.imageSrc}
                                                alt={single.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Zone de texte */}
                                        <div className="w-full md:w-3/5 h-full p-[24px] flex flex-col justify-between min-h-0 dark:text-[#0C1A2E]">

                                            {/* Header fixe avec X — hors de la zone scrollable */}
                                            <div className="flex items-start justify-between gap-[8px] shrink-0 mb-[12px]">
                                                <h3 className="text-[28px] font-semibold">{single.name}</h3>
                                                <button
                                                    onClick={onClose}
                                                    className="text-xl text-gray-500 hover:text-gray-800 cursor-pointer shrink-0 mt-[4px]"
                                                    aria-label="Fermer"
                                                >
                                                    ✕
                                                </button>
                                            </div>

                                            {/* Zone scrollable */}
                                            <div className="flex flex-col gap-[24px] md:overflow-y-auto md:min-h-0 flex-1">
                                                <AvailabilityInfo specialty={single.specialty} availability={single.availability} />

                                                {/* Infos */}
                                                <div className="flex flex-col gap-[12px]">

                                                    {/* Mobile : contenu tronqué ou complet */}
                                                    <div className={`md:hidden flex flex-col gap-[12px] overflow-hidden transition-all duration-300 ${expanded[single.name] ? "" : "max-h-[140px]"}`}>
                                                        <SectionsList sections={single.sections} />
                                                    </div>

                                                    {/* Bouton Lire plus — mobile uniquement */}
                                                    <button
                                                        onClick={() => setExpanded((prev) => ({ ...prev, [single.name]: !prev[single.name] }))}
                                                        className="md:hidden text-left text-sm font-[Outfit] text-[#2C4A6E] underline w-fit"
                                                    >
                                                        {expanded[single.name] ? "Lire moins..." : "Lire plus..."}
                                                    </button>

                                                    {/* Desktop : contenu complet */}
                                                    <div className="hidden md:flex flex-col gap-[12px]">
                                                        <SectionsList sections={single.sections} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-[24px] shrink-0">
                                                <RdvButton progenda={single.progenda} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    ref={popupRef}
                                    className={`relative w-full ${doctors.length === 2 ? "max-w-[820px]" : "max-w-[1200px]"}`}
                                    initial={{ opacity: 0, scale: 0.92, y: 16 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 8 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                >
                                    {/* Bouton fermer — commun aux fiches */}
                                    <button
                                        onClick={onClose}
                                        className="absolute -top-[36px] right-0 text-xl text-white/90 hover:text-white cursor-pointer"
                                        aria-label="Fermer"
                                    >
                                        ✕
                                    </button>

                                    {/* Fiches côte à côte — même taille, même importance */}
                                    <div className={`grid grid-cols-1 gap-[16px] ${doctors.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
                                        {doctors.map((doctor) => (
                                            <div
                                                key={doctor.name}
                                                className="bg-[#FFFFFF] shadow-2xl flex flex-col md:h-[600px] dark:text-[#0C1A2E]"
                                            >
                                                {/* Image — cachée sur mobile */}
                                                <div className="hidden md:block p-[16px] pb-0 shrink-0">
                                                    <img
                                                        src={doctor.imageSrc}
                                                        alt={doctor.name}
                                                        className="w-full h-[220px] object-cover"
                                                        style={{ objectPosition: doctor.imagePosition ?? "center 25%" }}
                                                    />
                                                </div>

                                                <div className="p-[16px] md:p-[20px] flex flex-col gap-[12px] flex-1 md:min-h-0">
                                                    <h3 className="text-[22px] font-semibold leading-[1.2]">{doctor.name}</h3>

                                                    <AvailabilityInfo specialty={doctor.specialty} availability={doctor.availability} />

                                                    {/* Mobile : contenu tronqué ou complet */}
                                                    <div className={`md:hidden flex flex-col gap-[12px] overflow-hidden transition-all duration-300 ${expanded[doctor.name] ? "" : "max-h-[110px]"}`}>
                                                        <SectionsList sections={doctor.sections} />
                                                    </div>

                                                    {/* Bouton Lire plus — mobile uniquement */}
                                                    <button
                                                        onClick={() => setExpanded((prev) => ({ ...prev, [doctor.name]: !prev[doctor.name] }))}
                                                        className="md:hidden text-left text-sm font-[Outfit] text-[#2C4A6E] underline w-fit"
                                                    >
                                                        {expanded[doctor.name] ? "Lire moins..." : "Lire plus..."}
                                                    </button>

                                                    {/* Desktop : contenu scrollable */}
                                                    <div className="hidden md:flex flex-col gap-[12px] overflow-y-auto min-h-0 flex-1">
                                                        <SectionsList sections={doctor.sections} />
                                                    </div>

                                                    <div className="pt-[8px] md:pt-[12px] shrink-0 mt-auto">
                                                        <RdvButton progenda={doctor.progenda} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
