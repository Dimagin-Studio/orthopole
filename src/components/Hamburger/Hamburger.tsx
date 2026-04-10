// src/components/Hamburger.tsx
import { useState, useEffect } from "react";

export function Hamburger({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest(".hamburger-menu") && !target.closest(".hamburger-button")) {
                setIsOpen(false);
            }
        };

        // document.addEventListener("mousedown", handleClickOutside);
        // return () => {
        //     document.removeEventListener("mousedown", handleClickOutside);
        // };
    }, []);

    return (
        <nav className="w-full px-[24px] md:px-[48px] py-[16px] text-lg grid grid-cols-1 lg:grid-cols-3 gap-y-[16px] lg:gap-y-0 gap-x-[16px] lg:gap-x-[32px] lg:items-center justify-items-start lg:justify-between text-center">
            <div className="flex justify-between items-center w-full lg:w-fit">
                <img
                    src="/images/logo.png"
                    alt="Logo Orthopole"
                    className="w-fit h-fit object-cover object-center"
                />
                {/* Bouton hamburger (visible uniquement sur mobile) */}
                <button
                    className="hamburger-button lg:hidden flex flex-col justify-center items-center gap-1 w-8 h-6"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 z-20 bg-[#0C1A2E] transition-all ${isOpen ? "rotate-45 fixed bg-[#FBF8F3]" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-[#0C1A2E] transition-all ${isOpen ? "opacity-0 fixed" : ""}`}></span>
                    <span className={`block w-6 h-0.5 z-20 bg-[#0C1A2E] transition-all ${isOpen ? "-rotate-45 fixed bg-[#FBF8F3]" : ""}`}></span>
                </button>
            </div>

            {/* Menu déroulant (pour mobile) */}
            <div
                className={`fixed inset-0 bg-[#0C1A2E] p-4 z-10 transition-all duration-300 ease-in-out overflow-y-auto ${isOpen ? "block" : "hidden"
                    }`}
            >
                <div className="flex flex-col gap-6 w-full pt-12">
                    {children}
                </div>
            </div>

            {/* Contenu du menu (visible sur desktop) */}
            <div className="hidden lg:flex col-span-2 justify-between items-center w-full">
                {children}
            </div>
        </nav>
    );
}