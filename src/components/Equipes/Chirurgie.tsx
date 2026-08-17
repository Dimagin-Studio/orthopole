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
import { doctors, type Doctor } from "@/data/doctors";

export default function Chirurgie() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

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
        doctors={selectedDoctor ? [selectedDoctor] : []}
      />
    </section>
  );
}
