import { useState } from "react";

type FAQItem = {
    question: string;
    answer: string;
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
                answer: "Exemple réponse.",
            },
            {
                question: "Dois-je réaliser des examens avant la consultation ?",
                answer: "Oui, un bilan radiographique récent (moins de 6 mois) est recommandé. Si nécessaire, celui-ci peut-être réalisé sur place avant votre rendez-vous.",
            },
            {
                question: "Dois-je passer par mon médecin traitant avant de consulter ?",
                answer: "Exemple réponse.",
            },
            {
                question: "L'imagerie est-elle accessible uniquement aux patients du centre ?",
                answer: "Exemple réponse.",
            },
        ],
    },
    {
        title: "Prise de rendez-vous (chirurgie orthopédique & kinésithérapie)",
        items: [
            {
                question: "Comment prendre rendez-vous ?",
                answer: "Exemple test 2.",
            },
            {
                question: "Quels documents dois-je apporter ?",
                answer: "Exemple test 2.",
            },
            {
                question: "Quels sont les horaires du secrétariat physique ?",
                answer: "Exemple test 2.",
            },
        ],
    },
    {
        title: "Kinésithérapie",
        items: [
            {
                question: "Ai-je besoin d'une prescription pour la kinésithérapie ?",
                answer: "Exemple test 3.",
            },
            {
                question: "Comment se déroule la prise en charge en kinésithérapie ?",
                answer: "Exemple test 3.",
            },
            {
                question: "Quelle tenue dois-je prévoir ?",
                answer: "Exemple test 3.",
            },
            {
                question: "Combien de temps dure une séance ?",
                answer: "Exemple test 3.",
            },
            {
                question: "Combien de séances seront nécessaires ?",
                answer: "Exemple test 3.",
            },
        ],
    },
    {
        title: "Informations pratiques (chirurgie & kinésithérapie)",
        items: [
            {
                question: "Quels moyens de paiement sont acceptés ?",
                answer: "Exemple test 4.",
            },
            {
                question: "Comment annuler un rendez-vous ?",
                answer: "Exemple test 4.",
            },
        ],
    },
    {
        title: "Le centre",
        items: [
            {
                question: "Pourquoi choisir Orthopole ?",
                answer: "Exemple réponse.",
            },
        ],
    },
];

export default function Faq() {
    return (
        <>
            <section className="px-[24px] md:px-[48px] py-[40px] md:pt-[128px] md:pb-[48px] md:pb-[96px] grid grid-cols-1 gap-[48px] place-items-center">
                {/* Header */}
                <h1 className="text-center text-3xl md:text-5xl leading-[1.4] tracking-tight">
                    Questions fréquentes
                </h1>

                {/* Container */}
                <div className="md:w-[720px] flex flex-col gap-[40px]">
                    {faqSections.map((section, index) => (
                        <FAQSection key={index} title={section.title} items={section.items} />
                    ))}
                </div>
            </section>
        </>
    )
}

function FAQSection({ title, items }: FAQSection) {
    return (
        <div className="w-full flex flex-col gap-[20px]">
            <h3 className="text-sm italic font-medium leading-[1.4]">
                {title}
            </h3>
            <div className="flex flex-col gap-[8px]">
                {items.map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>
    );
}

function FAQItem({ question, answer }: FAQItem) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`w-full ${isOpen ? "border-[0.8px] border-[#0C1A2E] bg-[#FFFFFF]" : "bg-[#F9F9F9]"}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full cursor-pointer flex justify-between items-center gap-[8px] px-[24px] py-[16px] text-left hover:bg-gray-100 transition-colors duration-200"
            >
                <span className="text-base md:text-lg font-medium leading-[1.4]">{question}</span>
                <span className="text-4xl">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && (
                <div className="px-[24px] py-[24px] text-sm md:text-base font-[Outfit] font-light leading-[1.4]">
                    {answer}
                </div>
            )}
        </div>
    );
}