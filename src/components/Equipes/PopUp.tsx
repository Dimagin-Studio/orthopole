import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

type PopUpDoctorProps = {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    name: string;
    specialty: string;
    availability: string;
    sections: {
        title: string;
        items: string[];
    }[];
};

export default function PopUp({
    isOpen,
    onClose,
    imageSrc,
    name,
    specialty,
    availability,
    sections,
}: PopUpDoctorProps) {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Gère la fermeture du popup en cliquant en dehors
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <>
            {/* Fond flouté */}
            <div className="fixed inset-0 z-10 bg-black/25 backdrop-blur-sm" />
            {/* Popup */}
            <div
                ref={popupRef}
                className="fixed inset-0 z-20 flex items-center justify-center"
            >
                <div className="relative bg-[#FFFFFF] shadow-2xl w-full max-w-[768px] h-fit md:h-[503px]">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-3 z-10 text-xl text-gray-500 hover:text-gray-800 cursor-pointer"
                        aria-label="Fermer"
                    >
                        ✕
                    </button>

                    {/* Container */}
                    <div className="flex flex-col md:flex-row h-fit md:h-[503px]">
                        {/* Image */}
                        <div className="hidden md:block w-full md:w-2/5 h-full p-[24px]">
                            <img
                                src={imageSrc}
                                alt={name}
                                className="w-full h-full md:h-[455px] md:w-[295px] object-cover"
                            />
                        </div>

                        {/* Zone de texte */}
                        <div className="w-full md:w-3/5 h-full p-[24px] flex flex-col justify-between">
                            {/* Header + infos */}
                            <div className="flex flex-col gap-[24px] h-full">
                                {/* Header */}
                                <div className="flex flex-col gap-[12px]">
                                    <h3 className="text-[28px] font-semibold">{name}</h3>

                                    <p className="font-[Outfit] text-[16px] text-[#2C4A6EBF]">
                                        {specialty}
                                    </p>

                                    <div className="px-[8px] py-[4px] w-fit flex items-center gap-[8px] bg-[#EEEEEE] font-[Outfit] text-sm leading-[1.4]">
                                        <div className="h-[5px] w-[8px] md:h-[7px] bg-[#4CDE78] rounded-full flex items-center justify-center text-[#4CDE78] text-xs">
                                            •
                                        </div>
                                        <p>
                                            {availability}
                                        </p>
                                    </div>
                                </div>

                                {/* Infos */}
                                <div className="flex flex-col gap-[12px]">
                                    {sections.map((section, index) => (
                                        <div key={index} className="flex flex-col justify-between]">
                                            <h4 className="font-semibold">{section.title}</h4>
                                            <ul className="list-disc list-inside space-y-2 pl-4">
                                                {section.items.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="text-[15px] font-[Outfit] leading-[1.4]">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bouton rdv */}
                            <div className="pt-[24px]">
                                <p className="bg-[#0C1A2E] hover:bg-[#1e395e] text-[#FBF8F3] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit text-center">
                                    <Link to="/infos#contact-form">PRENDRE RDV</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}