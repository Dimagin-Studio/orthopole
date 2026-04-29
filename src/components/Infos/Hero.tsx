export default function Hero() {
    return (
        <section className="px-[24px] md:px-[48px] py-[32px] md:py-[64px] flex flex-col gap-[40px] md:gap-[80px] items-center">
            <div className="lg:w-1/2 mx-auto flex flex-col gap-[24px] text-center">
                <h2 className="font-medium text-4xl md:text-[64px]">Votre rendez-vous chez Orthopole</h2>
                <p>Le centre est ouvert du lundi au vendredi, de 8h30 à 17h30</p>
            </div>
            <div className="">Placeholder Calendrier</div>
        </section>
    )
}