import { Link } from "react-router-dom";

export default function Services() {
    return (
        <>
            {/* Découvrez nos services */}
            <section className="px-[24px] md:px-[48px] py-[40px] md:py-[80px] flex flex-col gap-[32px] md:gap-[48px]">
                {/* Header */}
                <div className="flex flex-col gap-[16px] md:gap-[24px] items-center text-center">
                    <p className="px-[8px] py-[4px] font-[Outfit] text-sm text-[#362925] bg-[#EAE2D7] leading-[1.4]">
                        NOS SPÉCIALITÉS
                    </p>
                    <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.4]">
                        Découvrez nos services
                    </h2>
                </div>

                {/* Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
                    {/* Box service 1 */}
                    <div className="w-full h-[340px] md:h-[460px]">
                        <Link to="/specialites#chirurgie-orthopedique">
                            <img src="/images/photos-figma/home-chirurgie.png" alt="Service chirurgie orthopédique" className="h-full w-full" />
                        </Link>
                    </div>

                    {/* Box service 2 */}
                    <div className="w-full h-[340px] md:h-[460px]">
                        <Link to="/specialites#imagerie-radiologie">
                            <img src="/images/photos-figma/home-img.png" alt="Service imagerie & radiologie" className="h-full w-full" />
                        </Link>
                    </div>

                    {/* Box service 3 */}
                    <div className="w-full h-[340px] md:h-[460px]">
                        <Link to="/specialites#kinesitherapie-revalidation">
                            <img src="/images/photos-figma/home-kine.png" alt="Service kinésithérapie" className="h-full w-full" />
                        </Link>
                    </div>

                    {/* Box service 4 */}
                    <div className="w-full h-[340px] md:h-[460px]">
                        <Link to="/specialites#kinesitherapie-revalidation">
                            <img src="/images/photos-figma/home-rehab.png" alt="Service revalidation fonctionnelle" className="h-full w-full" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}