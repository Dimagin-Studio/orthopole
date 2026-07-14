import { Link } from "react-router-dom"
import MotionButton from "../Animations/MotionButton"

export default function Contact() {
    return (
        <section className="px-[24px] md:px-[48px] pt-[40px] md:pt-[80px] pb-[64px] md:pb-[128px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[32px] md:gap-[64px] items-center">
            {/* Prise de rdv & Map */}
            {/* Zone text header & Tel */}
            <div className="flex flex-col gap-[32px] md:gap-[48px] mx-auto lg:mx-0 lg:w-[540px]">
                {/* Header */}
                <div className="flex flex-col gap-[24px] md:gap-[32px] text-center lg:text-left">
                    <h2 className="text-3xl lg:text-5xl leading-[1.4] tracking-tight">
                        Besoin d'un rendez-vous ou d'une information ?
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-[16px] md:gap-[24px] font-medium">
                        <Link to="/infos#prise-de-rdv" className="w-full md:w-fit">
                            <MotionButton as="div" className="text-[#FBF8F3] dark:text-[#0C1A2E] bg-[#0C1A2E] hover:bg-[#172D47] dark:bg-[#C9BBA8] dark:hover:bg-[#ac9c86] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px]">
                                PRENDRE RENDEZ-VOUS
                            </MotionButton>
                        </Link>
                        <Link to="/infos#contact-form" className="w-full md:w-fit">
                            <MotionButton as="div" className="border border-[#0C1A2E] dark:border-[#F9F9F9] hover:bg-[#EAE2D7] dark:hover:bg-[#172D47] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px]">
                                NOUS CONTACTER
                            </MotionButton>
                        </Link>
                    </div>
                </div>

                {/* Téléphone */}
                <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-[8px] font-[Outfit] text-center lg:text-left">
                    <p className="font-light leading-[1.2]">Ou par téléphone sur</p>
                    <MotionButton as="a" href="tel:+3225233033" className="flex items-center gap-[8px] px-[12px] py-[8px] dark:text-[#0C1A2E] bg-[#0C1A2E1A] hover:bg-[#d9d2c8] dark:bg-[#C9BBA8] dark:hover:bg-[#ac9c86] w-fit h-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                        </svg>
                        <p className="w-full whitespace-nowrap">02/523.30.33</p>
                    </MotionButton>
                </div>
            </div>

            {/* Map */}
            <div className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[632px] mx-auto lg:mx-0 lg:justify-self-end">
                <iframe
                    src="https://maps.google.com/maps?q=Dr%C3%A8ve%20Richelle%2033%2C%201410%20Waterloo&z=15&hl=fr&output=embed"
                    width="100%"
                    height="300"
                    className="w-full md:h-[350px] lg:h-[480px]"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}