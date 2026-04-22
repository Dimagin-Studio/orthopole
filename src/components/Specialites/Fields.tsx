import { useState } from "react";
import { Link } from "react-router-dom";

const fields = [
    {
        id: "chirurgie-orthopedique",
        backgroundImage: "url('/images/chirurgie.png')",
        title: "Chirurgie orthopédique",
        teamLink: "/equipes#chirurgie-orthopedique",
        content: (
            <>
                <p>Notre service couvre l'ensemble des pathologies de l'appareil locomoteur, incluant la chirurgie orthopédique et traumatologique.</p>
                <ul className="list-disc list-inside">
                    <li className="list-none">Nous réalisons notamment :</li>
                    <li>Prothèses de hanche</li>
                    <li>Prothèses totales et partielles du genou, avec assistance robotique</li>
                    <li>Chirurgie ménisco-ligamentaire par arthroscopie</li>
                    <li>Chirurgie de la main, du poignet et du coude</li>
                    <li>Microchirurgie et chirurgie des nerfs périphériques</li>
                    <li>Chirurgie de l'épaule et de la colonne</li>
                </ul>
                <p>Chaque patient bénéficie d'un accompagnement global, depuis l'évaluation pré-obligatoire jusqu'au suivi post-opératoire, en coordination avec les équipes d'imagerie et de rééducation, afin d'optimiser la récupération fonctionnelle.</p>
                <p className="font-semibold">Membre supérieur (épaule, coude, poignet) / Hanche & genou / Colonne</p>
            </>
        ),
    },
    {
        id: "imagerie-radiologie",
        backgroundImage: "url('/images/imagerie.png')",
        title: "Imagerie & Radiologie",
        teamLink: "/equipes#imagerie-radiologie",
        content: (
            <>
                <p>Notre service d'imagerie médicale permet la réalisation d'examens rapides et précis, directement sur place.</p>
                <p>La radiographie standard est disponible en première intention, avec la possibilité de compléter le diagnostic par des examens plus avancés tels que le CBCT ou l'échographie, en fonction des besoins cliniques.</p>
                <p>Chaque examen s'inscrit dans un parcours coordonné, permettant d'orienter efficacement la prise en charge et le traitement du patient.</p>
            </>
        ),
    },
    {
        id: "kinesitherapie-reathletisation",
        backgroundImage: "url('/images/kine.png')",
        title: "Kinésithérapie & Réathlétisation",
        teamLink: "/equipes#kinesitherapie-reathletisation",
        content: (
            <>
                <p>En collaboration avec les chirurgiens orthopédiques, nous proposons une prise en charge personnalisée basée sur un bilan précis.</p>
                <p>La rééducation combine exercices ciblés et travail en salle de sport afin de restaurer la fonction et permettre un retour progressif aux activités du quotidien comme aux activités sportives.</p>
                <ul className="list-disc list-inside">
                    <li className="list-none">Nous intervenons notamment dans :</li>
                    <li>Rééducation post-opératoire</li>
                    <li>Kinésithérapie générale et du sport</li>
                    <li>Rééducation de la course à pied</li>
                    <li>Rééducation de la main</li>
                    <li>Dry Needling</li>
                </ul>
                <p className="font-semibold">Rééducation post-opératoire / Kiné du sport / Thérapie manuelle / Réathlétisation</p>
            </>
        ),
    },
];

export default function Fields() {
    const [expanded, setExpanded] = useState<boolean[]>(fields.map(() => false));

    const toggle = (index: number) => {
        setExpanded((prev) => prev.map((val, i) => (i === index ? !val : val)));
    };

    return (
        <>
            <section className="px-[24px] md:px-[48px] py-[40px] md:pt-[96px] md:pb-[128px] flex flex-col gap-[32px] md:gap-[64px]">
                {fields.map((field, index) => (
                    <div
                        key={field.id}
                        id={field.id}
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
                                    <p className="bg-[#0C1A2E] hover:bg-[#172D47] text-[#FBF8F3]  dark:bg-[#C9BBA8] dark:hover:bg-[#ac9c86] dark:text-[#0C1A2E] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] text-center">
                                        PRENDRE RDV
                                    </p>
                                </Link>
                                <Link to={field.teamLink} className="w-full md:w-fit">
                                    <p className="bg-[#0C1A2E1A] hover:bg-[#3356871a] dark:bg-[#C9BBA8] dark:hover:bg-[#ac9c86] dark:text-[#0C1A2E] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] text-center">
                                        VOIR L'ÉQUIPE
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}