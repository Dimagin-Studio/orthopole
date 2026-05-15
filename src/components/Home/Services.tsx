import { motion, useInView, type Variants } from "motion/react"
import { Link } from "react-router-dom"
import { useRef } from "react"

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.18 }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
}

const services = [
    {
        to: "/specialites#chirurgie-orthopedique",
        image: "url('/images/photos-figma/home-chirurgie.png')",
        title: "Chirurgie orthopédique",
    },
    {
        to: "/specialites#imagerie-radiologie",
        image: "url('/images/photos-site-web/home-imagerie.png')",
        title: "Radiologie & imagerie",
    },
    {
        to: "/specialites#kinesitherapie-reathletisation",
        image: "url('/images/photos-figma/home-kine.png')",
        title: "Kinésithérapie",
    },
    {
        to: "/specialites#kinesitherapie-reathletisation",
        image: "url('/images/photos-site-web/home-rehabilitation.png')",
        title: "Réathlétisation",
    },
];

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

    return (
        <section className="px-[24px] md:px-[48px] py-[40px] md:py-[80px] flex flex-col gap-[32px] md:gap-[48px] dark:bg-[#0C1A2E]">
            {/* Découvrez nos services */}
            {/* Header */}
            <div className="flex flex-col gap-[16px] md:gap-[24px] items-center text-center">
                <p className="px-[12px] py-[6px] font-[Outfit] text-base md:text-lg text-[#362925] bg-[#EAE2D7] leading-[1.4]">
                    NOS SPÉCIALITÉS
                </p>
                <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.4]">
                    Découvrez nos spécialités
                </h2>
            </div>

            {/* Container */}
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-[#F5F3EF] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]"
            >
                {/* Box services */}
                {services.map((service, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <Link to={service.to}>
                            <div className="relative w-full h-[340px] md:h-[460px] flex flex-col gap-[8px] p-[24px] justify-end">
                                <div
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                    style={{ backgroundImage: service.image }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-[#0C1A2E] to-transparent" />
                                <div className="relative flex flex-col gap-[8px]">
                                    <h4 className="text-xl md:text-[22px] font-medium leading-[1.4]">{service.title}</h4>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}