export default function Avis() {
    return (
        <>
            {/* Avis des patients */}
            <section className="px-4 md:px-[48px] py-[40px] md:py-[80px] flex flex-col gap-[32px] md:gap-[48px]">
                {/* Header */}
                <div className="flex flex-col gap-[16px] md:gap-[24px] items-center text-center">
                    <p className="px-[8px] py-[4px] font-[Outfit] text-sm text-[#362925] bg-[#EAE2D7] leading-[1.4]">
                        AVIS DE NOS PATIENTS
                    </p>
                    <h2 className="max-w-[90%] md:max-w-[486px] text-3xl md:text-5xl leading-tight md:leading-[1.2] tracking-tight">
                        Une satisfaction complète et garantie
                    </h2>
                </div>

                {/* Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] md:gap-[24px]">
                    {/* Card 1 */}
                    <div className="p-[12px] bg-[#F9F9F9] flex flex-col md:flex-row gap-[16px] md:gap-[24px] w-full min-h-[300px] md:min-h-[320px]">
                        {/* Image */}
                        <div className="w-[181px] h-[200px] flex-shrink-0">
                            <img
                                src="/images/patient.jpg"
                                alt="Éric B."
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-between py-[12px] md:py-[20px] pr-[12px] md:pr-[20px] overflow-hidden">
                            <div className="flex flex-col gap-[12px] md:gap-[16px]">
                                {/* Ratings */}
                                <div className="flex gap-[4px]">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="#2C4A6E"
                                            stroke="#2C4A6E"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Text */}
                                <h4 className="text-xl md:text-2xl font-medium leading-[1.4]">
                                    Résultats efficaces
                                </h4>
                                <blockquote className="font-[Outfit] font-light text-base md:text-lg leading-[24px] md:leading-[26px]">
                                    Dès mon arrivée, j’ai senti une vraie attention portée à mon bien-être. Les soins étaient adaptés et réalisés avec douceur. Une expérience très positive.
                                </blockquote>
                            </div>
                            <div className="flex gap-2 leading-[24px] mt-[8px] md:mt-0">
                                <p>— Éric B.</p>
                                <p className="text-gray-400">Liège</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-[12px] bg-[#F9F9F9] flex flex-col md:flex-row gap-[16px] md:gap-[24px] flex-1 min-h-[300px] md:min-h-[320px]">
                        {/* Image */}
                        <div className="w-[181px] h-[200px] flex-shrink-0">
                            <img
                                src="/images/patient.jpg"
                                alt="Éric B."
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-between py-[12px] md:py-[20px] pr-[12px] md:pr-[20px] overflow-hidden">
                            <div className="flex flex-col gap-[12px] md:gap-[16px]">
                                {/* Ratings */}
                                <div className="flex gap-[4px]">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="#2C4A6E"
                                            stroke="#2C4A6E"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-star"
                                        >
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Text */}
                                <h4 className="text-xl md:text-2xl font-medium leading-[1.4]">
                                    Très professionnel
                                </h4>
                                <blockquote className="font-[Outfit] font-light text-base md:text-lg leading-[24px] md:leading-[26px]">
                                    Les traitements ont rapidement montré leurs effets. Je me sens beaucoup mieux et la rééducation a été parfaitement suivie. Très satisfait du service.
                                </blockquote>
                            </div>
                            <div className="flex gap-2 leading-[24px] mt-[8px] md:mt-0">
                                <p>— Éric B.</p>
                                <p className="text-gray-400">Liège</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}