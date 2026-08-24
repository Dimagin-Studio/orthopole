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
                    <li>Chirurgie de l'épaule</li>
                    <li>Chirurgie de la main, du poignet et du coude</li>
                    <li>Microchirurgie et chirurgie des nerfs périphériques</li>
                    <li>Chirurgie de la hanche (prothèse totale de hanche)</li>
                    <li>Chirurgie prothétique du genou (prothèse totale et partielle de genou avec assistance robotique)</li>
                    <li>Chirurgie arthroscopique du genou (traitement des lésions de cartilage et des lésions ménisco-ligamentaires)</li>
                    <li>Chirurgie de la cheville et du pied</li>
                    <li>Chirurgie du rachis</li>
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
                    <li>Kinésithérapie générale et du sport</li>
                    <li>Rééducation post-opératoire</li>
                    <li>Thérapie manuelle</li>
                    <li>Rééducation de la main</li>
                    <li>Dry Needling</li>
                </ul>
                <p className="font-semibold">Kinésithérapie générale / Post-opératoire / Thérapie manuelle</p>
            </>
        ),
    },
    {
        id: "reathletisation",
        backgroundImage: "url('/images/reathletisation.jpeg')",
        blur: true,
        title: "Réathlétisation",
        teamLink: "/equipes#kinesitherapie-reathletisation",
        content: (
            <>
                <p>Notre salle de sport dédiée permet une reprise progressive et sécurisée des activités physiques et sportives, après une blessure ou une intervention chirurgicale.</p>
                <p>Nos thérapeutes vous accompagnent sur des exercices ciblés de renforcement musculaire, de proprioception et de préparation fonctionnelle, jusqu'au retour complet sur le terrain.</p>
                <ul className="list-disc list-inside">
                    <li className="list-none">Nous intervenons notamment dans :</li>
                    <li>Réathlétisation post-opératoire</li>
                    <li>Retour au sport après blessure ligamentaire</li>
                    <li>Rééducation de la course à pied</li>
                    <li>Prévention des récidives</li>
                </ul>
                <p className="font-semibold">Réathlétisation / Renforcement fonctionnel</p>
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
                        className="relative w-full p-[20px] md:p-[40px] flex justify-center lg:justify-end overflow-hidden"
                    >
                        {/* Image de fond — floutée uniquement si demandé (les autres assets ont déjà un flou cuit) */}
                        <div
                            aria-hidden="true"
                            className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${field.blur ? "blur-sm scale-110" : ""}`}
                            style={{ backgroundImage: field.backgroundImage }}
                        />
                        <div className="relative w-full md:w-[608px] flex flex-col gap-[24px] px-[16px] md:px-[32px] py-[16px] md:pt-[48px] md:pb-[32px] bg-[#F9F9F9F2] dark:bg-[#111F30] font-[Outfit] leading-[1.4]">
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
                                <Link to="/infos#prise-de-rdv" className="w-full md:w-fit">
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