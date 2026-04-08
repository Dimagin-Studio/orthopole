export default function Intro() {
    return (
        <>
            <section className="px-[24px] py-[48px] md:px-[48px] md:py-[80px] lg:px-[80px] lg:py-[128px] text-center text-[22px] md:text-[32px] leading-[1.6]">
                <div className="mx-auto lg:max-w-[1080px]">
                    <p>Notre centre
                        <span>
                            <img src="/images/intro1.png" alt="Image conseil client" className="inline-block px-[8px]" />
                        </span>
                        regroupe plusieurs disciplines complémentaires afin d’assurer un diagnostic précis, un traitement adapté et un suivi optimal.
                        <br />
                        Chaque spécialité intervient de manière coordonnée dans le parcours du patient.
                        <span>
                            <img src="/images/intro2.png" alt="Image cliente satisfaite" className="inline-block px-[8px]" />
                        </span>
                    </p>
                </div>
            </section>
        </>
    )
}