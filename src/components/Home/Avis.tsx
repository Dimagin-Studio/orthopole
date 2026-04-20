export default function Avis() {
    return (
        <>
            {/* Avis des patients */}
            <section className="px-[24px] md:px-[48px] py-[40px] md:pt-[128px] md:pb-[80px] flex flex-col gap-[32px] md:gap-[48px]">
                {/* Header */}
                <div className="flex flex-col gap-[16px] md:gap-[24px] items-center text-center">
                    <p className="px-[8px] py-[4px] font-[Outfit] text-sm text-[#362925] bg-[#EAE2D7] leading-[1.4]">
                        AVIS DE NOS PATIENTS
                    </p>
                    <h2 className="max-w-[90%] md:max-w-[486px] text-3xl md:text-5xl leading-[1.4] tracking-tight">
                        Une satisfaction complète et garantie
                    </h2>
                </div>

                {/* Container */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] md:gap-[24px]">
                    {/* Card 1 */}
                    <div className="p-[16px] md:p-[24px] bg-[#F9F9F9] dark:bg-[#C9BBA8] dark:text-[#0C1A2E] flex flex-col justify-between gap-[24px] md:gap-[40px] w-full">

                        {/* Content */}
                        <div className="flex flex-col gap-[12px] md:gap-[16px]">
                            <h4 className="text-xl md:text-2xl font-medium leading-[1.4]">
                                Résultats efficaces
                            </h4>
                            <blockquote className="font-[Outfit] font-light text-base md:text-lg leading-[24px] md:leading-[26px]">
                                "Dès mon arrivée, j’ai senti une vraie attention portée à mon bien-être. Les soins étaient adaptés et réalisés avec douceur. Une expérience très positive."
                            </blockquote>
                        </div>
                        <div className="flex gap-2 leading-[24px]">
                            <p>— Éric B.</p>
                            <p className="text-gray-400 dark:text-gray-600">Liège</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-[16px] md:p-[24px] bg-[#F9F9F9] dark:bg-[#C9BBA8] dark:text-[#0C1A2E] flex flex-col justify-between gap-[24px] md:gap-[40px] w-full">

                        {/* Content */}
                        <div className="flex flex-col gap-[12px] md:gap-[16px]">
                            <h4 className="text-xl md:text-2xl font-medium leading-[1.4]">
                                Très professionnel
                            </h4>
                            <blockquote className="font-[Outfit] font-light text-base md:text-lg leading-[24px] md:leading-[26px]">
                                "Les traitements ont rapidement montré leurs effets. Je me sens beaucoup mieux et la rééducation a été parfaitement suivie. Très satisfait du service."
                            </blockquote>
                        </div>
                        <div className="flex gap-2 leading-[24px]">
                            <p>— Sofie M.</p>
                            <p className="text-gray-400 dark:text-gray-600">Liège</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="p-[16px] md:p-[24px] bg-[#F9F9F9] dark:bg-[#C9BBA8] dark:text-[#0C1A2E] flex flex-col justify-between gap-[24px] md:gap-[40px] w-full">

                        {/* Content */}
                        <div className="flex flex-col gap-[12px] md:gap-[16px]">
                            <h4 className="text-xl md:text-2xl font-medium leading-[1.4]">
                                Meilleur centre
                            </h4>
                            <blockquote className="font-[Outfit] font-light text-base md:text-lg leading-[24px] md:leading-[26px]">
                                "Les traitements ont rapidement montré leurs effets. Je me sens beaucoup mieux et la rééducation a été parfaitement suivie. Très satisfait du service."
                            </blockquote>
                        </div>
                        <div className="flex gap-2 leading-[24px]">
                            <p>— Bernard A.</p>
                            <p className="text-gray-400 dark:text-gray-600">Liège</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}