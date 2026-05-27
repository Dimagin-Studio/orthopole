export default function Centre() {
    return (
        <section className="px-[24px] md:px-[48px] py-[40px] md:py-[96px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-0">
                <img
                    src="/images/centre.png"
                    alt="Centre Orthopole"
                    className="w-full h-full object-cover object-center"
                />

                {/* Map */}
                <iframe
                    src="https://maps.google.com/maps?q=Dr%C3%A8ve%20Richelle%2033%2C%201410%20Waterloo&z=15&hl=fr&output=embed"
                    width="100%"
                    height="300"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}