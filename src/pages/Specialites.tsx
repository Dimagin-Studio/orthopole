import Header from "../components/Specialites/Header"
import Intro from "../components/Specialites/Intro"
import Fields from "../components/Specialites/Fields"
import Rdv from "../components/Rdv/Rdv"
import Faq from "../components/Faq/Faq"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import FadeInSection from "../components/Animations/FadeInSection"
import PageTransition from "../components/Animations/PageTransition"
import Seo from "../components/Seo/Seo"

export default function Specialites() {
    return (
        <PageTransition>
            <Seo
                title="Nos spécialités — Orthopole Waterloo"
                description="Chirurgie orthopédique, imagerie médicale, kinésithérapie et réathlétisation : découvrez l'ensemble des spécialités proposées par le centre Orthopole à Waterloo."
                path="/specialites"
            />
            <Header />

            <FadeInSection><Intro /></FadeInSection>

            <FadeInSection><Fields /></FadeInSection>

            <FadeInSection><Rdv /></FadeInSection>

            <FadeInSection><Faq /></FadeInSection>

            <FadeInSection><Contact /></FadeInSection>

            <FadeInSection><Footer /></FadeInSection>
        </PageTransition>
    )
}