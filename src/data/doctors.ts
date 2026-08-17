export type Doctor = {
  id?: string;
  name: string;
  specialty: string;
  availability: string;
  imageSrc: string;
  /** object-position du recadrage photo dans les fiches compactes (défaut : "center 25%") */
  imagePosition?: string;
  progenda?: string;
  sections: {
    title: string;
    items: string[];
  }[];
};

export const doctors: Doctor[] = [
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
    imagePosition: "center 40%",
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
    imagePosition: "center 45%",
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
