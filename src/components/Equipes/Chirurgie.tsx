import { Link } from "react-router-dom";
import { useState } from "react";
import PopUp from "./PopUp";

export default function Chirurgie() {
    const [selectedDoctor, setSelectedDoctor] = useState<{
        imageSrc: string;
        name: string;
        specialty: string;
        availability: string;
        sections: {
            title: string;
            items: string[];
        }[];
    } | null>(null);

    const doctors = [
        {
            name: "Dr. Valery Fabre",
            specialty: "CHIRURGIE DE LA HANCHE ET DU GENOU",
            availability: "Disponible dès 13h",
            imageSrc: "/images/photos-chirurgien/valery-fabre.jpeg",
            sections: [
                {
                    title: "Domaines d'intervention",
                    items: [
                        "Prothèse de hanche",
                        "Prothèse totale de genou (assistance robotique)",
                        "Prothèse partielle de genou",
                        "Chirurgie ménisco-ligamentaire (arthroscopie)",
                    ],
                },
                {
                    title: "Formations",
                    items: [
                        "Diplôme de chirurgie orthopédique – UCL",
                    ],
                },
            ],
        },
        {
            name: "Dr. Louis Gossing",
            specialty: "CHIRURGIE DE L'ÉPAULE",
            availability: "Disponible dès 13h",
            imageSrc: "/images/photos-chirurgien/louis-gossing.jpg",
            sections: [
                {
                    title: "Domaines d'intervention",
                    items: [
                        "Chirurgie de l’épaule",
                    ],
                },
                {
                    title: "Formations",
                    items: [
                        "UCL",
                        "Centre d’orthopédie Santy – Lyon",
                        "Clinique Générale – Annecy",
                        "DIU épaule et coude",
                    ],
                },
            ],
        },
        {
            name: "Dr. Denis Williame",
            specialty: "CHIRURGIE DE LA MAIN, DU POIGNET ET DU COUDE",
            availability: "Disponible dès 13h",
            imageSrc: "/images/photos-chirurgien/denis-willame.jpg",
            sections: [
                {
                    title: "Domaines d'intervention",
                    items: [
                        "Chirurgie de la main",
                        "Chirurgie du poignet",
                        "Chirurgie du coude",
                        "Microchirurgie et nerfs périphériques",
                    ],
                },
                {
                    title: "Formations",
                    items: [
                        "Docteur en médecine – UCL",
                        "Master en chirurgie orthopédique et traumatologie – UCL",
                        "Certificat interuniversitaire en pathologie chirurgicale de la main et des nerfs périphériques (UCL – ULB – ULg – Lille)",
                    ],
                },
            ],
        },
        {
            name: "Dr. Eric Manche",
            specialty: "CHIRURGIE DE LA COLONNE, HANCHE ET DU GENOU",
            availability: "Disponible dès 13h",
            imageSrc: "/images/photos-chirurgien/eric-manche.jpeg",
            sections: [
                {
                    title: "Domaines d'intervention",
                    items: [
                        "Chirurgie de la colonne",
                        "Chirurgie de la hanche",
                        "Chirurgie du genou",
                        "Chirurgie traumatologique",
                    ],
                },
            ],
        },
    ];

    return (
        <section id="chirurgie-orthopedique" className="relative px-[24px] md:px-[48px] py-[32px] md:py-[64px] flex flex-col gap-[48px]">
            <div>
                <h1 className="text-center md:text-left text-3xl md:text-5xl leading-[1.4] tracking-tight">
                    Chirurgie Orthopédique
                </h1>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] md:gap-[48px] justify-items-center text-center md:text-left">
                {doctors.map((doctor, index) => (
                    <div key={index} className="flex flex-col gap-[16px] md:max-w-[324px]">
                        <img
                            src={doctor.imageSrc}
                            alt={doctor.name}
                            className="w-full md:w-[324px] md:h-[375px] object-cover object-center cursor-pointer"
                            onClick={() => setSelectedDoctor(doctor)}
                        />
                        <div className="flex flex-col gap-[8px]">
                            <h6 className="text-lg leading-[1.4]">{doctor.name}</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF] leading-[1.4]">
                                {doctor.specialty}
                            </p>
                            <p className="bg-[#0C1A2E] hover:bg-[#1e395e] text-[#FBF8F3] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit text-center cursor-pointer">
                                <Link to="/infos#contact-form">PRENDRE RDV</Link>
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
                sections={selectedDoctor?.sections ?? []}
            />
        </section>
    );
}