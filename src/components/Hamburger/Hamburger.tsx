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

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            {/* Bouton hamburger (visible uniquement sur mobile) */}
            <button
                className="hamburger-button md:hidden flex flex-col justify-center items-center gap-1 w-8 h-6"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 z-20 bg-[#FBF8F3] transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-[#FBF8F3] transition-all ${isOpen ? "opacity-0" : ""}`}></span>
                <span className={`block w-6 h-0.5 z-20 bg-[#FBF8F3] transition-all ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}></span>
            </button>

            {/* Menu déroulant (pour mobile) */}
            <div
                className={`fixed inset-0 bg-[#0C1A2E] h-fit p-4 z-10 transition-all duration-300 ease-in-out overflow-y-auto ${isOpen ? "block" : "hidden"
                    }`}
            >
                <div className="flex flex-col gap-6 w-full pt-12">
                    {children}
                </div>
            </div>

            {/* Contenu du menu (visible sur desktop) */}
            <div className="hidden md:flex md:justify-between md:items-center w-full">
                {children}
            </div>
        </div>
    );
}