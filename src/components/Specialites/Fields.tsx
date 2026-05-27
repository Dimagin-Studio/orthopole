import { motion, useInView, type Variants } from "motion/react"
import MotionButton from "../Animations/MotionButton"
import { useState, useRef, Fragment } from "react"
import { Link } from "react-router-dom"
import BodyParts from "./BodyParts"

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.8 }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
}

const fields = [
    {
        id: "chirurgie-orthopedique",
        backgroundImage: "url('/images/chirurgie.png')",
        title: "Chirurgie orthopédique",
        teamLink: "/equipes#chirurgie-orthopedique",
        content: (
            <>
                <p>Notre service couvre l'ensemble des pathologies de l'appareil locomoteur.</p>
                <ul className="list-disc list-inside">
                    <li className="list-none">Domaine de spécialité :</li>
                    <li>Chirurgie de l'épaule</li>
                    <li>Chirurgie de la main, du poignet et du coude</li>
                    <li>Microchirurgie et chirurgie des nerfs périphériques</li>
                    <li>Prothèse totale de hanche</li>
                    <li>Prothèses totales et partielles du genou, avec assistance robotique</li>
                    <li>Ligamentoplastie (genou)</li>
                    <li>Chirurgie du pied et de la cheville</li>
                    <li>Chirurgie de la colonne</li>
                </ul>
                <p>Chaque patient bénéficie d'un accompagnement global, dès l'évaluation pré-obligatoire jusqu'au suivi post-opératoire.</p>
            </>
        ),
    },
    {
        id: "imagerie-radiologie",
        backgroundImage: "url('/images/imagerie.png')",
        title: "Imagerie",
        content: (
            <>
                <p>Notre service de radiologie permet la réalisation d'examens rapides, directement sur place.</p>
                <p>Chaque examen s'inscrit dans un parcours coordonné, permettant d'orienter efficacement la prise en charge et le traitement du patient.</p>
            </>
        ),
    },
    {
        id: "kinesitherapie",
        backgroundImage: "url('/images/kine.png')",
        title: "Kinésithérapie",
        teamLink: "/equipes#kinesitherapie-reathletisation",
        content: (
            <>
                <p>En collaboration avec les chirurgiens orthopédiques, nous proposons une prise en charge personnalisée basée sur un bilan précis.</p>
                <ul className="list-disc list-inside">
                    <li className="list-none">Nous intervenons notamment dans :</li>
                    <li>Rééducation post-opératoire</li>
                    <li>Kinésithérapie générale et du sport</li>
                    <li>Rééducation de la course à pied</li>
                    <li>Rééducation de la main</li>
                    <li>Dry Needling</li>
                    <li>Thérapie manuelle</li>
                </ul>
            </>
        ),
    },
    {
        id: "reathletisation",
        backgroundImage: "url('/images/reathletisation.jpeg')",
        title: "Réathlétisation",
        teamLink: "/equipes#kinesitherapie-reathletisation",
        content: (
            <>
                <p>La rééducation combine exercices ciblés et travail en salle de sport afin de restaurer la fonction et permettre un retour progressif aux activités du quotidien comme aux activités sportives.</p>
                <ul className="list-disc list-inside">
                    <li>Réathlétisation</li>
                </ul>
                <p className="font-semibold">Rééducation post-opératoire / Kiné du sport / Thérapie manuelle / Réathlétisation</p>
            </>
        ),
    },
];

export default function Fields() {
    const [expanded, setExpanded] = useState<boolean[]>(fields.map(() => false));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

    const toggle = (index: number) => {
        setExpanded((prev) => prev.map((val, i) => (i === index ? !val : val)));
    };

    return (
        <section className="px-[24px] md:px-[48px] py-[40px] md:pt-[96px] md:pb-[128px]">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col gap-[32px] md:gap-[64px]"
            >
                {fields.map((field, index) => (
                    <Fragment key={field.id}>
                    <motion.div
                        id={field.id}
                        variants={itemVariants}
                        className="w-full p-[20px] md:p-[40px] flex justify-center lg:justify-end bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: field.backgroundImage }}
                    >
                        <div className="w-full md:w-[608px] flex flex-col gap-[24px] px-[16px] md:px-[32px] py-[16px] md:pt-[48px] md:pb-[32px] bg-[#F9F9F9F2] dark:bg-[#111F30] font-[Outfit] leading-[1.4]">
                            <h2 className="text-[26px] md:text-[40px] text-center md:text-left font-[Raleway] leading-[1.2]">
                                {field.title}
                            </h2>

                            {/* Mobile : tronqué */}
                            <div className={`md:hidden flex flex-col gap-[24px] overflow-hidden transition-all duration-300 ${expanded[index] ? "" : "max-h-[180px]"}`}>
                                {field.content}
                            </div>

                            {/* Bouton Lire plus — mobile uniquement */}
                            <button
                                onClick={() => toggle(index)}
                                className="md:hidden text-left text-sm text-[#2C4A6E] underline w-fit"
                            >
                                {expanded[index] ? "Lire moins..." : "Lire plus..."}
                            </button>

                            {/* Desktop : contenu complet */}
                            <div className="hidden md:flex flex-col gap-[24px]">
                                {field.content}
                            </div>

                            {/* Boutons RDV / Équipe */}
                            <div className="flex flex-col md:flex-row items-center gap-[24px] md:gap-[32px] font-[Raleway] font-medium leading-[23.48px]">
                                <Link to="/infos#contact-form" className="w-full md:w-fit">
                                    <MotionButton className="bg-[#0C1A2E] hover:bg-[#172D47] text-[#FBF8F3]  dark:bg-[#C9BBA8] dark:hover:bg-[#ac9c86] dark:text-[#0C1A2E] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] text-center">
                                        PRENDRE RDV
                                    </MotionButton>
                                </Link>
                                {field.teamLink && (
                                    <Link to={field.teamLink} className="w-full md:w-fit">
                                        <MotionButton className="bg-[#0C1A2E1A] hover:bg-[#3356871a] dark:bg-[#C9BBA8] dark:hover:bg-[#ac9c86] dark:text-[#0C1A2E] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] text-center">
                                            VOIR L'ÉQUIPE
                                        </MotionButton>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                    {field.id === "chirurgie-orthopedique" && (
                        <motion.div variants={itemVariants}>
                            <BodyParts />
                        </motion.div>
                    )}
                    </Fragment>
                ))}
            </motion.div>
        </section>
    );
}