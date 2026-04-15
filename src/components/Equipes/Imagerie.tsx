import { useState } from "react";
import PopUp from "./PopUp";

export default function Imagerie() {
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
            name: "Dr. Lucien Martin",
            specialty: "TECHNICIEN EN IMAGERIE MÉDICALE",
            availability: "Disponible dès 13h",
            imageSrc: "/images/photos-figma/marc-lefevre.png",
            sections: [ // Pas d'infos disponibles
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
            name: "Dr. Émilie Dupont",
            specialty: "RADIOLOGUE SENIOR",
            availability: "Disponible dès 13h",
            imageSrc: "/images/photos-figma/emilie-dupont.png",
            sections: [ // Pas d'infos disponibles
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
            name: "Dr. Sophie Lefèvre",
            specialty: "INFIRMIÈRE SPÉCIALISTE EN RADIOLOGIE",
            availability: "Disponible dès 13h",
            imageSrc: "/images/photos-figma/camille-robert.png",
            sections: [ // Pas d'infos disponibles
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
            name: "Dr. Pierre Moreau",
            specialty: "RESPONSABLE DE LA SÉCURITÉ RADIOLOGIQUE",
            availability: "Disponible dès 13h",
            imageSrc: "/images/equipe.png",
            sections: [ // Pas d'infos disponibles
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
    ];

    return (
        <section id="imagerie-radiologie" className="relative px-[24px] md:px-[48px] py-[32px] md:py-[64px] flex flex-col gap-[48px]">
            <div>
                <h1 className="text-center md:text-left text-3xl md:text-5xl leading-[1.4] tracking-tight">
                    Imagerie & Radiologie
                </h1>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] md:gap-[48px] justify-items-center text-center md:text-left">
                {doctors.map((doctor, index) => (
                    <div key={index} className="flex flex-col gap-[16px] w-full md:max-w-[324px]">
                        <img
                            src={doctor.imageSrc}
                            alt={doctor.name}
                            className="w-full h-[500px] md:h-[375px] object-cover object-center cursor-pointer"
                            onClick={() => setSelectedDoctor(doctor)}
                        />
                        <div className="flex flex-col gap-[8px]">
                            <h6 className="text-lg leading-[1.4]">{doctor.name}</h6>
                            <p className="font-[Outfit] text-sm text-[#2C4A6EBF] leading-[1.4]">
                                {doctor.specialty}
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