import { motion } from "motion/react"
import MotionButton from "../Animations/MotionButton"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="px-[24px] md:px-[48px] pt-[48px] md:pt-[96px] pb-[24px] md:pb-[48px] bg-[#172D47] dark:bg-[#0C1A2E] text-[#F5F3EF] flex flex-col gap-[32px] md:gap-[48px]">
            {/* Infos */}
            <section className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-[32px] md:gap-[40px] lg:gap-[80px] w-full">

                {/* Liens */}
                <div className="flex flex-col gap-[16px] md:gap-[24px] md:text-left text-center">
                    <h5 className="font-[Geist] font-medium leading-[24px] text-[16px] md:text-[18px]">/ Liens</h5>
                    <ul className="list-none flex flex-col gap-[8px] md:gap-[16px] font-[Outfit] text-[14px] md:text-[16px] leading-[1.4]">
                        <motion.li whileHover={{ scale: 1.08, originX: 0 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                            <Link to="/equipes#chirurgie-orthopedique" className="hover:text-[#b8cae2]">Chirurgie</Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.08, originX: 0 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                            <Link to="/specialites#imagerie-radiologie" className="hover:text-[#b8cae2]">Radiologie</Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.08, originX: 0 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                            <Link to="/equipes#kinesitherapie-reathletisation" className="hover:text-[#b8cae2]">Kinésithérapie</Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.08, originX: 0 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                            <Link to="/infos" className="hover:text-[#b8cae2]">À propos</Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.08, originX: 0 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                            <Link to="/infos#faq" className="hover:text-[#b8cae2]">Aide & FAQ</Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.08, originX: 0 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                            <Link to="/infos#contact-form" className="hover:text-[#b8cae2]">Contact</Link>
                        </motion.li>
                    </ul>
                </div>

                {/* Ligne verticale */}
                <div className="hidden md:block border-l border-[#F5F3EF14] h-auto self-stretch"></div>

                {/* Informations de contact */}
                <div className="flex flex-col gap-[16px] md:gap-[24px] md:text-left text-center">
                    <h5 className="font-[Geist] font-medium leading-[24px] text-[16px] md:text-[18px]">/ Informations de contact</h5>
                    <ul className="list-none flex flex-col gap-[8px] md:gap-[16px] font-[Outfit] text-[14px] md:text-[16px] leading-[1.4]">
                        <li>info@orthopole.com</li>
                        <li>Lun-Ven, 9:00-17:00</li>
                        <li>Drève Richelle 33, 1410 Waterloo</li>
                    </ul>
                </div>
            </section>

            {/* Ligne horizontale */}
            <hr className="border-[#F5F3EF14]" />

            {/* Footer Titre */}
            <section className="flex justify-center md:justify-start items-center">
                <h1 className="font-medium text-[60px] md:text-[150px] lg:text-[260px] text-[#8C817D] leading-[1.4] tracking-tight">Orthopole</h1>
            </section>

            {/* Copyright */}
            <section className="font-[Outfit] text-[12px] md:text-[13px] leading-[1.4] flex flex-col md:flex-row justify-between items-center gap-[16px] md:gap-0">
                <div className="text-center md:text-left w-full">
                    &copy; Orthopole 2026. Tous droits réservés.
                </div>

                <ul className="list-none flex flex-wrap justify-center md:justify-end gap-[8px] lg:gap-[16px] w-full">
                    <li><MotionButton as="a" href="" className="text-[12px] md:text-[13px] hover:text-[#b8cae2]">Mentions légales</MotionButton></li>
                    <span className="hidden md:inline">-</span>
                    <li><MotionButton as="a" href="" className="text-[12px] md:text-[13px] hover:text-[#b8cae2]">Politique de confidentialité</MotionButton></li>
                    <span className="hidden md:inline">-</span>
                    <li><MotionButton as="a" href="" className="text-[12px] md:text-[13px] hover:text-[#b8cae2]">Contact</MotionButton></li>
                </ul>
            </section>
        </footer>
    )
}