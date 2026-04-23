import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export function Hamburger({
    children,
    isDark,
    isHome,
}: {
    children: React.ReactNode;
    isDark: boolean;
    isHome: boolean;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const spanColor = isHome ? "bg-[#FBF8F3]" : "bg-[#0C1A2E] dark:bg-[#FBF8F3]";
    const logoSrc = isHome || isDark ? "Orthopole_white" : "ORTHOPOLE_quadri";
    const bgDark = isHome ? "bg-none" : "dark:bg-[#0C1A2E]";


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const isLink = target.closest('a[href]');
            const isInHamburger = target.closest('.hamburger-button') || target.closest('.hamburger-menu');
            const isDarkModeToggle = target.closest('.dark-mode-toggle');

            if (!isInHamburger && !isLink && !isDarkModeToggle && isOpen) {
                setIsOpen(false);
            }
        };

        const handleBodyScroll = () => {
            if (isOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        handleBodyScroll();
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    return (
        <nav className={`relative w-full px-[24px] md:px-[48px] py-[16px] text-lg flex flex-col lg:flex-row gap-y-[16px] lg:gap-y-0 gap-x-[16px] lg:gap-x-[32px] lg:items-center justify-items-start text-center ${bgDark}`}>
            <div className="flex justify-between items-center w-full lg:w-fit">
                <Link to="/">
                    <img
                        src={`/images/photos-site-web/${logoSrc}.png`}
                        alt="Logo Orthopole"
                        className="w-[185px] h-fit object-cover object-center"
                    />
                </Link>
                {/* Bouton hamburger (visible uniquement sur mobile) */}
                <button
                    className="hamburger-button lg:hidden flex flex-col justify-center items-center gap-1 w-8 h-6 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 z-20 ${spanColor} transition-all ${isOpen ? "rotate-45 fixed bg-[#FBF8F3]" : ""}`}></span>
                    <span className={`block w-6 h-0.5 ${spanColor} transition-all ${isOpen ? "opacity-0 fixed" : ""}`}></span>
                    <span className={`block w-6 h-0.5 z-20 ${spanColor} transition-all ${isOpen ? "-rotate-45 fixed bg-[#FBF8F3]" : ""}`}></span>
                </button>
            </div>

            {/* Menu déroulant (mobile + tablette) */}
            <div
                className={`fixed inset-0 bg-[#0C1A2E] p-4 z-10 transition-all duration-300 ease-in-out overflow-y-auto ${isOpen ? "block" : "hidden"
                    }`}
            >
                <div className="flex flex-col items-center justify-center w-full h-full pt-12">
                    {children}
                </div>
            </div>

            {/* Menu de navigation (desktop) */}
            <div className="hidden lg:flex justify-center w-full">
                {children}
            </div>
        </nav>
    );
}