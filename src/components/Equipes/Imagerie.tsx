import { useState } from "react"
import PopUp from "./PopUp"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Imagerie() {
    const [selectedDoctor, setSelectedDoctor] = useState<{
        imageSrc: string;
        name: string;
        specialty: string;
        availability: string;
        phone?: string;
        progenda?: string;
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
        // {
        //     name: "Dr. Émilie Dupont",
        //     specialty: "RADIOLOGUE SENIOR",
        //     availability: "Disponible dès 13h",
        //     imageSrc: "/images/photos-figma/emilie-dupont.png",
        //     sections: [ // Pas d'infos disponibles
        //         {
        //             title: "Domaines d'intervention",
        //             items: [
        //                 "Prothèse de hanche",
        //                 "Prothèse totale de genou (assistance robotique)",
        //                 "Prothèse partielle de genou",
        //                 "Chirurgie ménisco-ligamentaire (arthroscopie)",
        //             ],
        //         },
        //         {
        //             title: "Formations",
        //             items: [
        //                 "Diplôme de chirurgie orthopédique – UCL",
        //             ],
        //         },
        //     ],
        // },
        // {
        //     name: "Dr. Sophie Lefèvre",
        //     specialty: "INFIRMIÈRE SPÉCIALISTE EN RADIOLOGIE",
        //     availability: "Disponible dès 13h",
        //     imageSrc: "/images/photos-figma/camille-robert.png",
        //     sections: [ // Pas d'infos disponibles
        //         {
        //             title: "Domaines d'intervention",
        //             items: [
        //                 "Prothèse de hanche",
        //                 "Prothèse totale de genou (assistance robotique)",
        //                 "Prothèse partielle de genou",
        //                 "Chirurgie ménisco-ligamentaire (arthroscopie)",
        //             ],
        //         },
        //         {
        //             title: "Formations",
        //             items: [
        //                 "Diplôme de chirurgie orthopédique – UCL",
        //             ],
        //         },
        //     ],
        // },
        // {
        //     name: "Dr. Pierre Moreau",
        //     specialty: "RESPONSABLE DE LA SÉCURITÉ RADIOLOGIQUE",
        //     availability: "Disponible dès 13h",
        //     imageSrc: "/images/equipe.png",
        //     sections: [ // Pas d'infos disponibles
        //         {
        //             title: "Domaines d'intervention",
        //             items: [
        //                 "Prothèse de hanche",
        //                 "Prothèse totale de genou (assistance robotique)",
        //                 "Prothèse partielle de genou",
        //                 "Chirurgie ménisco-ligamentaire (arthroscopie)",
        //             ],
        //         },
        //         {
        //             title: "Formations",
        //             items: [
        //                 "Diplôme de chirurgie orthopédique – UCL",
        //             ],
        //         },
        //     ],
        // },
    ];

    return (
        <section id="imagerie-radiologie" className="relative px-[24px] md:px-[48px] py-[32px] md:py-[64px] flex flex-col gap-[48px]">
            <Carousel
                opts={{ align: "start", dragFree: true }}
                className="w-full"
            >
                <div className="flex items-center justify-between">
                    <h1 className="text-left text-2xl md:text-5xl leading-[1.4] tracking-tight">
                        Imagerie & Radiologie
                    </h1>

                    {/* Flèches — visibles uniquement si nécessaire */}
                    <div className="flex gap-[12px] justify-center md:justify-start">
                        <CarouselPrevious className="static translate-y-0" />
                        <CarouselNext className="static translate-y-0" />
                    </div>
                </div>

                <CarouselContent className="-ml-[32px] md:-ml-[48px] pt-[24px] md:pt-[48px]">
                    {doctors.map((doctor, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-[32px] md:pl-[48px] basis-[85%] md:basis-1/2 lg:basis-1/4"
                        >
                            <div className="flex flex-col gap-[16px] text-center md:text-left">
                                {/* <img
                                    src={doctor.imageSrc}
                                    alt={doctor.name}
                                    className="w-full h-[400px] md:h-[375px] object-cover object-center cursor-pointer"
                                    onClick={() => setSelectedDoctor(doctor)}
                                /> */}
                                <div className="flex flex-col gap-[8px]">
                                    <h6 className="text-lg leading-[1.4]">{doctor.name}</h6>
                                    <p className="font-[Outfit] text-sm text-[#2C4A6EBF] dark:text-[#acacac] leading-[1.4]">
                                        {doctor.specialty}
                                    </p>
                                    <button
                                        className="bg-[#0C1A2E] hover:bg-[#172D47] dark:bg-[#C9BBA8] dark:hover:bg-[#ac9c86] text-[#FBF8F3] dark:text-[#0C1A2E] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit text-center cursor-pointer"
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
                phone={selectedDoctor?.phone}
                progenda={selectedDoctor?.progenda}
                sections={selectedDoctor?.sections ?? []}
            />
        </section>
    );
}