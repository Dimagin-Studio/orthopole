import { motion, type Variants } from "motion/react"
import { Hamburger } from "../Hamburger/Hamburger"
import { Link, useLocation } from "react-router-dom"
import { DarkModeToggle } from "../DarkMode/DarkModeToggle"
import { useDarkMode } from "../hooks/useDarkMode"
import MotionButton from "../Animations/MotionButton"

const mobileNavVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 }
    }
}

const mobileLiVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
}

const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/specialites", label: "Nos spécialités" },
    { to: "/equipes", label: "Nos équipes" },
    { to: "/infos", label: "Infos/Contact" },
];

export default function NavBar() {
    const { pathname } = useLocation();
    const isHome = pathname === "/";
    const spanColor = isHome ? "hover:text-[#b8cae2]" : "hover:text-[#b8cae2] lg:hover:text-[#4c7eba] dark:hover:text-[#b8cae2]";
    const { isDark, toggle } = useDarkMode();

    return (
        <Hamburger isDark={isDark} isHome={isHome}>
            {(isOpen) => (
                <div className="flex flex-col lg:flex-row justify-end items-center w-full h-3/4 pb-[48px] lg:pb-0">
                    {/* Desktop — inchangé */}
                    <ul className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 flex-row gap-[24px] items-center font-semibold leading-[1.4] list-none ${isHome ? "text-[#FBF8F3]" : "text-[#0C1A2E] dark:text-[#FBF8F3]"}`}>
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                                    <Link to={link.to} className={spanColor}>{link.label}</Link>
                                </motion.div>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile — animé selon isOpen */}
                    <motion.ul
                        variants={mobileNavVariants}
                        initial="hidden"
                        animate={isOpen ? "visible" : "hidden"}
                        className="lg:hidden flex flex-col justify-evenly items-center font-semibold leading-[1.4] list-none text-center w-full h-full mx-auto text-[#FBF8F3]"
                    >
                        {navLinks.map((link) => (
                            <motion.li key={link.to} variants={mobileLiVariants} whileHover={{ scale: 1.08 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                                <Link to={link.to} className={spanColor}>{link.label}</Link>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Groupe bouton dark mode + rendez-vous */}
                    <div className="flex flex-col lg:flex-row items-center gap-[36px] lg:gap-[24px] w-full lg:w-fit justify-center lg:justify-end">
                        <DarkModeToggle isHome={isHome} isDark={isDark} toggle={toggle} />
                        <Link to="/infos#contact-form" className="w-fit">
                            <MotionButton as="div" className={`text-[#0C1A2E] font-medium leading-[23.48px] px-[24px] py-[10px] whitespace-nowrap ${isHome ? "bg-[#C9BBA8] hover:bg-[#ac9c86]" : "bg-[#C9BBA8] hover:bg-[#ac9c86] lg:text-[#FBF8F3] lg:bg-[#0C1A2E] lg:hover:bg-[#172D47] dark:text-[#0C1A2E] dark:bg-[#C9BBA8] dark:hover:bg-[#ac9c86]"}`}>
                                RENDEZ-VOUS
                            </MotionButton>
                        </Link>
                    </div>
                </div>
            )}
        </Hamburger>
    );
}