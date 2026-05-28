import MotionButton from "../Animations/MotionButton"
import { motion, useInView } from "motion/react"
import { useState, useRef } from "react"
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
        phone?: string;
        progenda?: string;
        sections: {
            title: string;
            items: string[];
        }[];
    } | null>(null);

    const doctors = [
        {
            name: "Alexis De Wael",
            specialty: "KINÉSITHÉRAPEUTE",
            availability: "Disponible lundi, mardi, mercredi après-midi, jeudi, vendredi matin",
            phone: "+32 472 41 82 31",
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
            name: "François Dessart",
            specialty: "KINÉSITHÉRAPEUTE",
            availability: "Disponible lundi, mercredi, jeudi (8h–17h) – samedi (10h–14h)",
            phone: "+32 489 10 18 00", // placeholder
            imageSrc: "/images/photos-kines/françois-dessart.JPG",
            progenda: "https://progenda.be/calendars/dessart-francois-kinesitherapeute-ruisbroek",
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
            name: "Vanina Ullens",
            specialty: "KINÉSITHÉRAPEUTE",
            availability: "Disponible mardi, mercredi, vendredi après-midi",
            phone: "+32 498 66 87 81 ",
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
            name: "Sylvie Machiels",
            specialty: "KINÉSITHÉRAPEUTE",
            availability: "Disponible lundi, mardi, jeudi (7h30–18h) – vendredi (7h30–13h)",
            phone: "+32 489 29 25 98", // placeholder
            imageSrc: "/images/photos-figma/sylvie-machiels.png",
            progenda: "https://progenda.be/calendars/machiels-sylvie-kinesitherapeute-waterloo",
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
            name: "Anne-Sophie",
            specialty: "KINÉSITHÉRAPEUTE",
            availability: "Disponible lundi, mardi, jeudi, vendredi",
            phone: "+32 489 29 25 98", // placeholder
            imageSrc: "/images/photos-kines/strength-care.png",
            progenda: "https://progenda.be/calendars/brysse-anne-sophie-kinesitherapeute-ottignies",
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

    const carouselRef = useRef(null);
    const isInView = useInView(carouselRef, { once: true, margin: "0px 0px -80px 0px" });

    return (
        <section id="kinesitherapie-reathletisation" className="relative px-[24px] md:px-[48px] py-[32px] md:py-[64px] flex flex-col gap-[48px]">
            <Carousel
                opts={{ align: "start", dragFree: true }}
                className="w-full"
            >
                <div className="flex items-center justify-between">
                    <h1 className="text-left text-2xl md:text-5xl leading-[1.4] tracking-tight">
                        Kinésithérapie & Reathlétisation
                    </h1>

                    {/* Flèches — visibles uniquement si nécessaire */}
                    <div className="flex gap-[12px] justify-center md:justify-start">
                        <CarouselPrevious className="static translate-y-0" />
                        <CarouselNext className="static translate-y-0" />
                    </div>
                </div>

                <CarouselContent ref={carouselRef} className="-ml-[32px] md:-ml-[48px] pt-[24px] md:pt-[48px]">
                    {doctors.map((doctor, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-[32px] md:pl-[48px] basis-[85%] md:basis-1/2 lg:basis-1/4 overflow-visible"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeOut",
                                    delay: index * 0.18
                                }}
                                className="flex flex-col gap-[16px] text-center md:text-left h-full"
                            >
                                <div className="overflow-hidden w-full h-[400px] md:h-[375px]">
                                    <motion.img
                                        src={doctor.imageSrc}
                                        alt={doctor.name}
                                        className="w-full h-[400px] md:h-[375px] object-cover object-center cursor-pointer"
                                        onClick={() => setSelectedDoctor(doctor)}
                                        whileHover={{ scale: 1.06, z: 5 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                            type: "spring",
                                            stiffness: 160,
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col gap-[8px] flex-1">
                                    <h6 className="text-lg leading-[1.4]">{doctor.name}</h6>
                                    <p className="font-[Outfit] text-sm text-[#2C4A6EBF] dark:text-[#acacac] leading-[1.4]">
                                        {doctor.specialty}
                                    </p>
                                    <MotionButton
                                        as="button"
                                        className="mt-auto bg-[#0C1A2E] hover:bg-[#172D47] dark:bg-[#C9BBA8] dark:hover:bg-[#ac9c86] text-[#FBF8F3] dark:text-[#0C1A2E] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit text-center cursor-pointer whitespace-nowrap"
                                        onClick={() => setSelectedDoctor(doctor)}
                                    >
                                        PRENDRE RDV
                                    </MotionButton>
                                </div>
                            </motion.div>
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