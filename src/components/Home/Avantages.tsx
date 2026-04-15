export default function Avantages() {
    return (
        <>
            {/* Avantages */}
            <section className="px-[24px] md:px-[48px] py-[40px] md:py-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] text-base md:text-lg leading-[1.4]">
                <div className="p-[24px] bg-[#F9F9F9] flex flex-col justify-between place-items-center md:place-items-start text-center md:text-left h-[160px] md:h-[200px]">
                    <img src="/images/photos-figma/doctor.png" alt="Icône docteur" width="46" height="46" />
                    <p>Équipe pluri-disciplinaire spécialisée</p>
                </div>

                <div className="p-[24px] bg-[#F9F9F9] flex flex-col justify-between place-items-center md:place-items-start text-center md:text-left h-[160px] md:h-[200px]">
                    <img src="/images/photos-figma/hospital-bed.png" alt="Icône lit d'hôpital" width="46" height="46" />
                    <p>Plateau technique moderne</p>
                </div>

                <div className="p-[24px] bg-[#F9F9F9] flex flex-col justify-between place-items-center md:place-items-start text-center md:text-left h-[160px] md:h-[200px]">
                    <img src="/images/photos-figma/medical-paper.png" alt="Icône papier médical" width="46" height="46" />
                    <p>Parcours patient coordonné</p>
                </div>

                <div className="p-[24px] bg-[#F9F9F9] flex flex-col justify-between place-items-center md:place-items-start text-center md:text-left h-[160px] md:h-[200px]">
                    <img src="/images/photos-figma/call.png" alt="Icône téléphone" width="46" height="46" />
                    <p>Prise de rendez-vous rapide</p>
                </div>
            </section>
        </>
    )
}