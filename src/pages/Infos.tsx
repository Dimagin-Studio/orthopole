import Header from "../components/Infos/Header"
import Kine from "../components/Equipes/Kine"
import Contact from "../components/Infos/Contact"
import Faq from "../components/Faq/Faq"
import Centre from "../components/Infos/Centre"
import Accessibilite from "../components/Infos/Accessibilite"
import Footer from "../components/Footer/Footer"
import FadeInSection from "../components/Animations/FadeInSection"
import PageTransition from "../components/Animations/PageTransition"
import Seo from "../components/Seo/Seo"

export default function Infos() {
    return (
        <PageTransition>
            <Seo
                title="Prendre rendez-vous & infos pratiques — Orthopole Waterloo"
                description="Prenez rendez-vous au centre Orthopole à Waterloo (Drève Richelle 33). Horaires, accessibilité PMR, FAQ et formulaire de contact."
                path="/infos"
            />
            <Header />

            <FadeInSection><Kine /></FadeInSection>

            <FadeInSection><Contact /></FadeInSection>

            <FadeInSection><Faq /></FadeInSection>

            <FadeInSection><Centre /></FadeInSection>

            <FadeInSection><Accessibilite /></FadeInSection>

            <FadeInSection><Footer /></FadeInSection>
        </PageTransition>
    )
}