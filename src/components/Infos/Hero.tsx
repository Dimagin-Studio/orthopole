import MotionButton from "../Animations/MotionButton"

export default function Hero() {
    return (
        <section className="px-[24px] md:px-[48px] py-[32px] md:py-[64px] flex flex-col gap-[24px] md:gap-[32px] items-center">
            <div className="lg:w-1/2 mx-auto flex flex-col gap-[24px] text-center">
                <h2 className="font-medium text-4xl md:text-[64px]">Votre rendez-vous chez Orthopole</h2>
                <p>Le centre est ouvert du lundi au vendredi, de 8h30 à 17h30</p>
            </div>
            <div className="flex flex-col items-center gap-[16px] text-center">
                <p className="font-[Outfit] text-sm md:text-base leading-[1.4]">Ou prenez rendez-vous directement en ligne</p>
                <MotionButton
                    as="a"
                    href="#prise-de-rdv"
                    className="text-[#FBF8F3] dark:text-[#0C1A2E] bg-[#0C1A2E] hover:bg-[#172D47] dark:bg-[#C9BBA8] dark:hover:bg-[#ac9c86] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] font-medium text-center"
                >
                    PRENDRE RENDEZ-VOUS EN LIGNE
                </MotionButton>
            </div>
        </section>
    )
}