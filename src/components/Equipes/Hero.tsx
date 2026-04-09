export default function Hero() {
    return (
        <div className="relative w-full h-[260px] flex items-center justify-center">
            {/* Image de fond avec overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/photos-site-web/equipes-hero.png')",
                    backgroundPosition: "center 37%"
                }}
            ></div>
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-[#0C1A2E66]"
                style={{ mixBlendMode: 'multiply' }}
            ></div>
            {/* Titre */}
            <h1 className="relative z-10 w-full text-center text-[64px] tracking-tight text-[#F5F3EF]">
                Nos équipes
            </h1>
        </div>
    );
}