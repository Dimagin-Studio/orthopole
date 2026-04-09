import { Link } from "react-router-dom";
import { useState } from "react";
import PopUp from "./PopUp";

export default function Kine() {
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
            name: "Dr. Alexis De Wael",
            specialty: "KINÉSITHÉRAPEUTE EN RÉHABILITATION",
            availability: "Disponible lundi, mardi, mercredi après-midi, jeudi, vendredi matin",
            imageSrc: "/images/photos-kines/alexis-de-wael.jpeg",
            paragraphs: [
                "Domaines d’intervention :",
                "• Troubles musculo-squelettiques",
                "• Rééducation pré et post-opératoire",
                "• Troubles de la marche et de l’équilibre",
                "• Reconditionnement physique",
                "Formation :",
                "• Master en kinésithérapie – ISEK",
                "• Formation KINÉSPORT Expert (en cours)",
            ],
        },
        {
            name: "Dr. François Dessart",
            specialty: "KINÉSITHÉRAPEUTE EN RÉHABILITATION",
            availability: "Disponible lundi, mercredi, jeudi (8h–17h) – samedi (10h–14h)",
            imageSrc: "/images/photos-kines/françois-dessart.JPG",
            paragraphs: [
                "Domaines d’intervention :",
                "• Blessures en course à pied",
                "• Rééducation de la main",
                "• Rééducation post-opératoire",
                "• Pathologies musculo-squelettiques",
                "Formation :",
                "• Master en kinésithérapie et réadaptation – ULB",
                "• Spécialisation en course à pied",
                "• Formations en kinésithérapie de la main",
            ],
        },
        {
            name: "Dr. Vanina Ullens",
            specialty: "KINÉSITHÉRAPEUTE EN RÉHABILITATION",
            availability: "Disponible mardi, mercredi, vendredi après-midi",
            imageSrc: "/images/photos-kines/vanina-ullens.jpeg",
            paragraphs: [
                "Domaines d’intervention :",
                "• Pathologies du sport",
                "• Rééducation post-opératoire",
                "• Rééducation fonctionnelle",
                "Formation :",
                "• Master en kinésithérapie – Haute École Léonard de Vinci",
            ],
        },
        {
            name: "Dr. Sylvie Machiels",
            specialty: "KINÉSITHÉRAPEUTE EN RÉHABILITATION",
            availability: "Disponible lundi, mardi, jeudi (7h30–18h) – vendredi (7h30–13h)",
            imageSrc: "/images/photos-figma/sylvie-machiels.png",
            paragraphs: [
                "Domaines d’intervention :",
                "• Rééducation postopératoire(membre inférieur, épaule)",
                "• Pathologies du sport",
                "• Course à pied",
                "• Dry Needling",
                "Formation :",
                "• Master en kinésithérapie et réadaptation – UCL",
                "• Thérapie manuelle (IFOMPT) – UCL",
                "• Kinésithérapeute du sport (Kinesport Expert)",
            ],
        },
    ];

    return (
        <section id="kinesitherapie-reathletisation" className="relative px-[24px] md:px-[48px] py-[32px] md:py-[64px] flex flex-col gap-[48px]">
            <div>
                <h1 className="text-3xl md:text-5xl leading-[1.4] tracking-tight">
                    Kinésithérapie & Reathlétisation
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
                info={selectedDoctor?.info}
                paragraphs={selectedDoctor?.paragraphs}
            />
        </section>
    );
}