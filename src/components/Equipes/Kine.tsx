import { Link } from "react-router-dom"
import { useState } from "react"
import PopUp from "./PopUp"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Kine() {
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
            name: "Dr. Alexis De Wael",
            specialty: "KINÉSITHÉRAPEUTE EN RÉHABILITATION",
            availability: "Disponible lundi, mardi, mercredi après-midi, jeudi, vendredi matin",
            imageSrc: "/images/photos-kines/alexis-de-wael.jpeg",
            sections: [
                {
                    title: "Domaines d'intervention",
                    items: [
                        "Troubles musculo-squelettiques",
                        "Rééducation pré et post-opératoire",
                        "Troubles de la marche et de l'équilibre",
                        "Reconditionnement physique",
                    ],
                },
                {
                    title: "Formations",
                    items: [
                        "Master en kinésithérapie – ISEK",
                        "Formation KINÉSPORT Expert (en cours)",
                    ],
                },
            ],
        },
        {
            name: "Dr. François Dessart",
            specialty: "KINÉSITHÉRAPEUTE EN RÉHABILITATION",
            availability: "Disponible lundi, mercredi, jeudi (8h–17h) – samedi (10h–14h)",
            imageSrc: "/images/photos-kines/françois-dessart.JPG",
            sections: [
                {
                    title: "Domaines d'intervention",
                    items: [
                        "Blessures en course à pied",
                        "Rééducation de la main",
                        "Rééducation post-opératoire",
                        "Pathologies musculo-squelettiques",
                    ],
                },
                {
                    title: "Formations",
                    items: [
                        "Master en kinésithérapie et réadaptation – ULB",
                        "Spécialisation en course à pied",
                        "Formations en kinésithérapie de la main",
                    ],
                },
            ],
        },
        {
            name: "Dr. Vanina Ullens",
            specialty: "KINÉSITHÉRAPEUTE EN RÉHABILITATION",
            availability: "Disponible mardi, mercredi, vendredi après-midi",
            imageSrc: "/images/photos-kines/vanina-ullens.jpeg",
            sections: [
                {
                    title: "Domaines d'intervention",
                    items: [
                        "Pathologies du sport",
                        "Rééducation post-opératoire",
                        "Rééducation fonctionnelle",
                    ],
                },
                {
                    title: "Formations",
                    items: [
                        "Master en kinésithérapie – Haute École Léonard de Vinci",
                    ],
                },
            ],
        },
        {
            name: "Dr. Sylvie Machiels",
            specialty: "KINÉSITHÉRAPEUTE EN RÉHABILITATION",
            availability: "Disponible lundi, mardi, jeudi (7h30–18h) – vendredi (7h30–13h)",
            imageSrc: "/images/photos-figma/sylvie-machiels.png",
            sections: [
                {
                    title: "Domaines d'intervention",
                    items: [
                        "Rééducation post-opératoire (membre inférieur, épaule)",
                        "Pathologies du sport",
                        "Course à pied",
                        "Dry Needling",
                    ],
                },
                {
                    title: "Formations",
                    items: [
                        "Master en kinésithérapie et réadaptation – UCL",
                        "Thérapie manuelle (IFOMPT) – UCL",
                        "Kinésithérapeute du sport (Kinesport Expert)",
                    ],
                },
            ],
        },
        {
            name: "Dr. Anne-Sophie",
            specialty: "KINÉSITHÉRAPEUTE DU SPORT",
            availability: "Disponible lundi, mardi, jeudi, vendredi",
            imageSrc: "/images/photos-kines/strength-care.png",
            sections: [
                {
                    title: "Domaines d'intervention",
                    items: [
                        "Pathologies sportives (sports de combat et sports de force)",
                        "Rééducation post-opératoire (genou, épaule)",
                        "Pathologies de surcharge (membre inférieur, lombaire, épaule)",
                        "Rééducation fonctionnelle",
                    ],
                },
                {
                    title: "Formations",
                    items: [
                        "Kinésithérapie générale – Parnasse ISEI",
                        "Kinésithérapie du sport – UCL / ULiège",
                        "Thérapie manuelle orthopédique – UCL",
                    ],
                },
            ],
        },
    ];

    return (
        <section id="kinesitherapie-reathletisation" className="relative px-[24px] md:px-[48px] py-[32px] md:py-[64px] flex flex-col gap-[48px]">
            <Carousel
                opts={{ align: "start", dragFree: true }}
                className="w-full"
            >
                <div className="flex items-center justify-between">
                    <h1 className="text-center md:text-left text-3xl md:text-5xl leading-[1.4] tracking-tight">
                        Kinésithérapie & Reathlétisation
                    </h1>

                    {/* Flèches — visibles uniquement si nécessaire */}
                    <div className="flex gap-[12px] justify-center md:justify-start">
                        <CarouselPrevious className="static translate-y-0" />
                        <CarouselNext className="static translate-y-0" />
                    </div>
                </div>

                <CarouselContent className="-ml-[32px] md:-ml-[48px] pt-[48px]">
                    {doctors.map((doctor, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-[32px] md:pl-[48px] basis-[85%] md:basis-1/2 lg:basis-1/4"
                        >
                            <div className="flex flex-col gap-[16px] text-center md:text-left">
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
                                    <button
                                        className="bg-[#0C1A2E] hover:bg-[#1e395e] text-[#FBF8F3] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit text-center cursor-pointer"
                                        onClick={() => setSelectedDoctor(doctor)}
                                    >
                                        PRENDRE RDV
                                    </button>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

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