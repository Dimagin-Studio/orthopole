import Marquee from "react-fast-marquee"

export default function Photos() {
    return (
        <>
            {/* Découvrez notre centre */}
            <section className="w-full pt-[40px] md:pt-[80px] bg-[#EAE2D7] flex flex-col gap-[40px] md:gap-[80px] items-center text-center">
                {/* Header */}
                <div className="max-w-[90%] md:max-w-[540px] flex flex-col gap-[24px] md:gap-[48px] items-center text-center">
                    <h2 className="text-3xl md:text-5xl leading-tight md:leading-[1.2] tracking-tight">
                        Découvrez notre centre en images
                    </h2>
                    {/* Liste */}
                    <div className="w-full text-sm font-medium flex flex-col md:flex-row gap-[12px] md:gap-[20px] items-center">
                        <p className="w-full md:w-fit px-[12px] py-[8px] bg-[#F5F3EF66] hover:bg-[#F5F3EF]">Salle d'attente</p>
                        <p className="w-full md:w-fit px-[12px] py-[8px] bg-[#F5F3EF66] hover:bg-[#F5F3EF]">Salle de consultation</p>
                        <p className="w-full md:w-fit px-[12px] py-[8px] bg-[#F5F3EF66] hover:bg-[#F5F3EF]">Plateau kiné</p>
                        <p className="w-full md:w-fit px-[12px] py-[8px] bg-[#F5F3EF66] hover:bg-[#F5F3EF]">Radiologie</p>
                    </div>
                </div>

                {/* Images ligne 1 */}
                <div className="w-full overflow-hidden">
                    <Marquee direction="right" className="pb-[16px]">
                        <div className="flex gap-[16px] h-[160px] md:h-auto lg:h-[320px]">
                            <img
                                src="/images/photo1.jpg"
                                alt="Photo 1"
                                className="w-[280px] md:w-[480px] lg:w-[640px] object-cover pl-[16px]"
                            />
                            <img
                                src="/images/photo1.jpg"
                                alt="Photo 2"
                                className="w-[280px] md:w-[480px] lg:w-[640px] object-cover"
                            />
                            <img
                                src="/images/photo1.jpg"
                                alt="Photo 3"
                                className="w-[280px] md:w-[480px] lg:w-[640px] object-cover"
                            />
                        </div>
                    </Marquee>
                    {/* Images ligne 2 */}
                    <Marquee direction="left">
                        <div className="flex gap-[16px] h-[160px] md:h-auto lg:h-[320px]">
                            <img
                                src="/images/photo1.jpg"
                                alt="Photo 1"
                                className="w-[280px] md:w-[480px] lg:w-[640px] object-cover pl-[16px]"
                            />
                            <img
                                src="/images/photo1.jpg"
                                alt="Photo 2"
                                className="w-[280px] md:w-[480px] lg:w-[640px] object-cover"
                            />
                            <img
                                src="/images/photo1.jpg"
                                alt="Photo 3"
                                className="w-[280px] md:w-[480px] lg:w-[640px] object-cover"
                            />
                        </div>
                    </Marquee>
                </div>
            </section>
        </>
    )
}