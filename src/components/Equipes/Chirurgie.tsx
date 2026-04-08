// Chirurgie.tsx
import { useState } from "react";
import PopUp from "./PopUp";

export default function Chirurgie() {
    const [selectedDoctor, setSelectedDoctor] = useState<{
        imageSrc: string;
        name: string;
        specialty: string;
        availability: string;
        info?: string;
        paragraphs?: string[];
    } | null>(null);

    const doctors = [
        {
            name: "Dr. Valery Fabre",
            specialty: "CHIRURGIE DE LA HANCHE ET DU GENOU",
            availability: "Disponible dès 13h",
            imageSrc: "/images/equipe.png",
            paragraphs: [
                "Le Dr. Fabre est spécialisé dans la chirurgie mini-invasive de la hanche et du genou, offrant des solutions personnalisées pour chaque patient.",
                "Son approche combine expertise technique et suivi attentif pour assurer une récupération optimale.",
                "Il utilise les dernières technologies pour minimiser la douleur et accélérer la guérison. Chaque intervention est adaptée aux besoins spécifiques du patient, garantissant ainsi des résultats durables et satisfaisants.",
            ],
        },
        {
            name: "Dr. Louis Gossing",
            specialty: "CHIRURGIE DE L'ÉPAULE",
            availability: "Disponible dès 13h",
            imageSrc: "/images/equipe.png",
            paragraphs: [
                "Expert en chirurgie de l'épaule, notamment en arthroscopie et en réparation de la coiffe des rotateurs.",
                "Assure un suivi personnalisé pour chaque patient, avec des protocoles de rééducation adaptés.",
            ],
        },
        {
            name: "Dr. Denis Williame",
            specialty: "CHIRURGIE DE LA MAIN, DU POIGNET ET DU COUDE",
            availability: "Disponible dès 13h",
            imageSrc: "/images/equipe.png",
            info: "Spécialiste des interventions sur la main, le poignet et le coude, avec une approche personnalisée pour chaque patient.",
        },
        {
            name: "Dr. Eric Manche",
            specialty: "CHIRURGIE DE LA COLONNE, HANCHE ET DU GENOU",
            availability: "Disponible dès 13h",
            imageSrc: "/images/equipe.png",
            info: "Chirurgien orthopédique spécialisé dans la colonne vertébrale, les prothèses de hanche et de genou.",
        },
    ];

    return (
        <section className="relative px-[24px] md:px-[48px] py-[32px] md:py-[64px] flex flex-col gap-[48px]">
            <div>
                <h1 className="text-3xl md:text-5xl leading-[1.4] tracking-tight">
                    Chirurgie Orthopédique
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] md:gap-[48px] justify-items-center text-center md:text-left">
                {doctors.map((doctor, index) => (
                    <div key={index} className="flex flex-col gap-[16px] md:max-w-[324px]">
                        <img
                            src={doctor.imageSrc}
                            alt={doctor.name}
                            className="w-full h-full md:w-[324px] md:h-[375px] object-cover object-center cursor-pointer"
                            onClick={() => setSelectedDoctor(doctor)}
                        />
                        <div className="flex flex-col gap-[8px]">
                            <h6 className="text-lg leading-[1.4]">{doctor.name}</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF] leading-[1.4]">
                                {doctor.specialty}
                            </p>
                            <p className="bg-[#0C1A2E] text-[#FBF8F3] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit text-center cursor-pointer">
                                <a href="">PRENDRE RDV</a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <PopUp
                isOpen={!!selectedDoctor}
                onClose={() => setSelectedDoctor(null)}
                imageSrc={selectedDoctor?.imageSrc || ""}
                name={selectedDoctor?.name || ""}
                specialty={selectedDoctor?.specialty || ""}
                availability={selectedDoctor?.availability || ""}
                info={selectedDoctor?.info}
                paragraphs={selectedDoctor?.paragraphs}
            />
        </section>
    );
}