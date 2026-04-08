export default function Centre() {
    return (
        <>
            <section className="px-[24px] md:px-[48px] py-[40px] md:py-[96px]">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <img
                        src="/images/centre.png"
                        alt="Centre Orthopole"
                        className="w-full h-full object-cover object-center"
                    />

                    {/* Map */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5246.758788432707!2d2.2867164997522473!3d48.889106327404555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f8511307857%3A0xe5649db3eabc9e52!2s14%20Rue%20Carnot%2C%2092300%20Levallois-Perret%2C%20France!5e0!3m2!1sfr!2sbe!4v1773396113398!5m2!1sfr!2sbe"
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
        </>
    )
}