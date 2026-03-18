export function Avantages() {
    return (
        <>
            {/* <!-- Avantages --> */}
            <section className="px-4 md:px-[48px] py-[40px] md:py-[80px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[24px] text-lg leading-[1.4]">
                <div className="p-[24px] bg-[#F9F9F9] flex flex-col justify-between h-[160px] md:h-[200px]">
                    <img src="/images/doctor.png" alt="Icône docteur" width="46" height="46" />
                    <p>Équipe multidisciplinaire spécialisée</p>
                </div>

                <div className="p-[24px] bg-[#F9F9F9] flex flex-col justify-between h-[160px] md:h-[200px]">
                    <img src="/images/hospital-bed.png" alt="Icône lit d'hôpital" width="46" height="46" />
                    <p>Plateau technique<br />moderne</p>
                </div>

                <div className="p-[24px] bg-[#F9F9F9] flex flex-col justify-between h-[160px] md:h-[200px]">
                    <img src="/images/medical-paper.png" alt="Icône papier médical" width="46" height="46" />
                    <p>Coordination complète du parcours patient</p>
                </div>

                <div className="p-[24px] bg-[#F9F9F9] flex flex-col justify-between h-[160px] md:h-[200px]">
                    <img src="/images/call.png" alt="Icône téléphone" width="46" height="46" />
                    <p>Accessibilité et prise de rendez-vous rapide</p>
                </div>
            </section>
        </>
    )
}