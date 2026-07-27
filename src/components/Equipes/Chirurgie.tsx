import { motion, useInView } from "motion/react";
import { useState, useRef } from "react";
import PopUp from "./PopUp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MotionButton from "../Animations/MotionButton";

export default function Chirurgie() {
  const [selectedDoctor, setSelectedDoctor] = useState<{
    imageSrc: string;
    name: string;
    specialty: string;
    availability: string;
    progenda?: string;
    sections: {
      title: string;
      items: string[];
    }[];
  } | null>(null);

  const doctors = [
    {
      id: "dr-valery-fabre",
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
          items: ["Diplôme de chirurgie orthopédique – UCL"],
        },
      ],
    },
    {
      id: "dr-louis-gossing",
      name: "Dr. Louis Gossing",
      specialty: "CHIRURGIE DE L'ÉPAULE",
      availability: "Disponible dès 13h",
      imageSrc: "/images/photos-chirurgien/louis-gossing.jpg",
      sections: [
        {
          title: "Domaines d'intervention",
          items: ["Chirurgie de l’épaule"],
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
      id: "dr-denis-williame",
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
      id: "dr-eric-manche",
      name: "Dr. Eric Manche",
      specialty: "CHIRURGIE DE LA HANCHE, DU GENOU ET DE LA COLONNE",
      availability: "Disponible dès 13h",
      imageSrc: "/images/photos-chirurgien/eric-manche.jpeg",
      sections: [
        {
          title: "Domaines d'intervention",
          items: [
            "Chirurgie de la hanche et du genou",
            "Chirurgie de la colonne",
            "Chirurgie traumatologique",
          ],
        },
      ],
    },
    {
      id: "dr-thibaut-leemrijse",
      name: "Dr. Thibaut Leemrijse",
      specialty: "CHIRURGIE DU PIED ET DE LA CHEVILLE",
      availability: "Sur rendez-vous",
      imageSrc: "/images/photos-practicien/thibaut.jpeg",
      sections: [
        {
          title: "Domaines d'intervention",
          items: ["Chirurgie du pied", "Chirurgie de la cheville"],
        },
        {
          title: "Formations",
          items: [
            "Université de Louvain",
            "Paris, Attaché consultant Hôpital Bichat, DIU Podologie Cochin ; Microchirurgie",
            "Professeur Clinique à l'UCL depuis 2007",
            "Ancien co-fondateur du Foot and Ankle Institute Bruxelles (2009-2024)",
            "Auteur du livre « Pathologie du pied et de la cheville », Elsevier Masson 2015",
          ],
        },
        {
          title: "Distinctions",
          items: [
            "Lauréat du 1er Prix European Foot and Ankle Society EFAS-EFORT (1999)",
          ],
        },
      ],
    },
    {
      id: "dr-juan-toussaint",
      name: "Dr. Juan Toussaint",
      specialty: "CHIRURGIE DE LA COLONNE",
      availability: "Sur rendez-vous",
      imageSrc: "/images/photos-practicien/DR-TOUSSAINT-whitebg.jpg",
      sections: [
        {
          title: "Domaines d'intervention",
          items: [
            "Pathologie rachidienne dégénérative",
            "Chirurgie robotique de la colonne",
            "Approche pluridisciplinaire",
          ],
        },
        {
          title: "Formations",
          items: [
            "Diplôme en médecine – UCL (2018)",
            "Diplôme en orthopédie – UCL (2024)",
            "Fellowship en chirurgie du rachis – Bordeaux Nord Aquitaine, aux côtés du Pr JC Le Huec (2024-2025)",
            "DIU en chirurgie robotique de la colonne (2025)",
          ],
        },
      ],
    },
    {
      id: "dr-bernard-geulette",
      name: "Dr. Bernard Geulette",
      specialty: "CHIRURGIE DU GENOU ET DE LA HANCHE",
      availability: "Sur rendez-vous",
      imageSrc: "/images/photos-practicien/docteur-geulette.JPG",
      sections: [
        {
          title: "Domaines d'intervention",
          items: [
            "Chirurgie du genou",
            "Chirurgie de la hanche",
            "Orthopédie générale (à l'exclusion du rachis et des membres supérieurs : épaules, mains)",
          ],
        },
      ],
    },
  ];

  const carouselRef = useRef(null);
  const isInView = useInView(carouselRef, {
    once: true,
    margin: "0px 0px -80px 0px",
  });

  return (
    <section
      id="chirurgie-orthopedique"
      className="relative px-[24px] md:px-[48px] py-[32px] md:py-[64px] flex flex-col gap-[48px]"
    >
      <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-left text-2xl md:text-5xl leading-[1.4] tracking-tight">
            Chirurgie Orthopédique
          </h1>

          {/* Flèches — visibles uniquement si nécessaire */}
          <div className="flex gap-[16px] justify-center md:justify-start">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>

        <CarouselContent
          ref={carouselRef}
          className="-ml-[32px] md:-ml-[48px] pt-[24px] md:pt-[48px]"
        >
          {doctors.map((doctor, index) => (
            <CarouselItem
              key={index}
              id={doctor.id}
              className="pl-[32px] md:pl-[48px] basis-[85%] md:basis-1/2 lg:basis-1/4 scroll-mt-[100px]"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.18,
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
        progenda={selectedDoctor?.progenda}
        sections={selectedDoctor?.sections ?? []}
      />
    </section>
  );
}
