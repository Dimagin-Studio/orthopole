import { useState } from "react";

type FAQItem = {
    question: string;
    answer: string[];
};

type FAQSection = {
    title: string;
    items: FAQItem[];
};

const faqSections: FAQSection[] = [
    {
        title: "Consultation en chirurgie orthopédique",
        items: [
            {
                question: "Comment se déroule une première consultation ?",
                answer: ["La consultation débute par un interrogatoire complet (antécédents, symptômes), suivi d’un examen clinique. Le praticien analyse votre imagerie afin de poser un diagnostic précis et discuter avec vous des différentes options thérapeutiques."],
            },
            {
                question: "Dois-je réaliser des examens avant la consultation ?",
                answer: ["Oui, un bilan radiographique récent (moins de 6 mois) est recommandé. Si nécessaire, celui-ci peut-être réalisé sur place avant votre rendez-vous."],
            },
            {
                question: "Dois-je passer par mon médecin traitant avant de consulter ?",
                answer: ["Il est recommandé d’avoir été orienté par votre médecin traitant et d’avoir débuté une prise en charge médicale."],
            },
            {
                question: "L'imagerie est-elle accessible uniquement aux patients du centre ?",
                answer: ["Non, l’imagerie est accessible à tous, y compris aux patients externes. Un examen peut également être réalisé avant la consultation si nécessaire."],
            },
        ],
    },
    {
        title: "Prise de rendez-vous (chirurgie orthopédique & kinésithérapie)",
        items: [
            {
                question: "Comment prendre rendez-vous ?",
                answer: ["Les rendez-vous peuvent être pris :",
                    "• En ligne via le secrétariat électronique",
                    "• Par téléphone auprès du secrétariat."],
            },
            {
                question: "Quels documents dois-je apporter ?",
                answer: ["• Carte d’identité",
                    "• Prescription médicale (si applicable)",
                    "• Examens récents (radiographie, IRM, scanner, compte-rendu opératoire…)"],
            },
            {
                question: "Quels sont les horaires du secrétariat physique ?",
                answer: ["<strong>• Mercredi, jeudi, vendredi</strong>",
                    "<strong>• 08h30 – 12h30 / 13h30 – 17h30</strong>"],
            },
        ],
    },
    {
        title: "Kinésithérapie",
        items: [
            {
                question: "Ai-je besoin d'une prescription pour la kinésithérapie ?",
                answer: ["Oui, une prescription médicale est obligatoire pour débuter un traitement."],
            },
            {
                question: "Comment se déroule la prise en charge en kinésithérapie ?",
                answer: ["Un bilan initial est réalisé afin d’évaluer votre condition et définir un programme personnalisé. La rééducation combine exercices ciblés et travail en salle afin de favoriser un retour progressif aux activités quotidiennes et sportives."],
            },
            {
                question: "Quelle tenue dois-je prévoir ?",
                answer: ["Une tenue confortable permettant de bouger facilement est recommandée."],
            },
            {
                question: "Combien de temps dure une séance ?",
                answer: ["Une séance dure environ 30 minutes, avec possibilité d’exercices complémentaires en salle selon votre programme."],
            },
            {
                question: "Combien de séances seront nécessaires ?",
                answer: ["Le nombre de séances dépend de votre pathologie et de votre évolution. Un plan de traitement est défini dès le bilan initial."],
            },
        ],
    },
    {
        title: "Informations pratiques (chirurgie & kinésithérapie)",
        items: [
            {
                question: "Quels moyens de paiement sont acceptés ?",
                answer: ["• QR code / paiement mobile",
                    "• Espèces",
                    "• Bancontact (radiologie)",
                    "(Pour la kinésithérapie, les modalités peuvent varier selon le praticien)"],
            },
            {
                question: "Comment annuler un rendez-vous ?",
                answer: ["Merci de prévenir au moins <strong>24h à l’avance</strong>. Toute séance non annulée dans ce délai pourra être facturée."],
            },
        ],
    },
    {
        title: "Le centre",
        items: [
            {
                question: "Pourquoi choisir Orthopole ?",
                answer: ["Orthopole propose une prise en charge globale de l’appareil locomoteur, réunissant chirurgiens orthopédiques, kinésithérapeutes et imagerie au sein d’un même centre.",
                    "Cette organisation permet un diagnostic rapide, un suivi coordonné et une rééducation adaptée, dans un environnement structuré et efficace.",
                    "Chaque patient bénéficie d’un accompagnement personnalisé, avec pour objectif un retour optimal aux activités du quotidien comme aux activités sportives."],
            },
        ],
    },
];

export default function Faq() {
    const [openItem, setOpenItem] = useState<[number, number] | null>(null);

    const toggleItem = (sectionIndex: number, itemIndex: number) => {
        setOpenItem(openItem?.[0] === sectionIndex && openItem?.[1] === itemIndex ? null : [sectionIndex, itemIndex]);
    };

    return (
        <>
            <section id="faq" className="px-[24px] md:px-[48px] py-[40px] md:pt-[128px] md:pb-[48px] md:pb-[96px] grid grid-cols-1 gap-[48px] place-items-center">
                {/* Header */}
                <h2 className="text-center text-3xl md:text-5xl leading-[1.4] tracking-tight">
                    Questions fréquentes
                </h2>

                {/* Container */}
                <div className="md:w-[720px] flex flex-col gap-[40px]">
                    {faqSections.map((section, sectionIndex) => (
                        <FAQSection
                            key={sectionIndex}
                            title={section.title}
                            items={section.items}
                            sectionIndex={sectionIndex}
                            openItem={openItem}
                            toggleItem={toggleItem}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

function FAQSection({ title, items, sectionIndex, openItem, toggleItem }: {
    title: string;
    items: FAQItem[];
    sectionIndex: number;
    openItem: [number, number] | null;
    toggleItem: (sectionIndex: number, itemIndex: number) => void;
}) {
    return (
        <div className="w-full flex flex-col gap-[20px]">
            <h3 className="text-sm italic font-medium leading-[1.4]">
                {title}
            </h3>
            <div className="flex flex-col gap-[8px]">
                {items.map((item, itemIndex) => (
                    <FAQItem
                        key={itemIndex}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openItem?.[0] === sectionIndex && openItem?.[1] === itemIndex}
                        onToggle={() => toggleItem(sectionIndex, itemIndex)}
                    />
                ))}
            </div>
        </div>
    );
}

function FAQItem({ question, answer, isOpen, onToggle }: {
    question: string;
    answer: string[];
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className={`w-full ${isOpen ? "border-[0.8px] border-[#0C1A2E] bg-[#FFFFFF]" : "bg-[#FFFFFFBF]"}`}>
            <button
                onClick={onToggle}
                className="w-full cursor-pointer flex justify-between items-center gap-[8px] px-[24px] py-[16px] text-left hover:bg-gray-100 transition-colors duration-200"
            >
                <span className="text-base md:text-lg font-medium leading-[1.4]">{question}</span>
                <span className="text-4xl">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && (
                <div className="px-[24px] py-[24px] text-sm md:text-base font-[Outfit] font-light leading-[1.4] flex flex-col gap-2">
                    {answer.map((paragraph, index) => (
                        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                </div>
            )}
        </div>
    );
}