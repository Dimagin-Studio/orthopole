import Header from "../components/Equipes/Header"
import Intro from "../components/Equipes/Intro"
import Chirurgie from "../components/Equipes/Chirurgie"
import Kine from "../components/Equipes/Kine"
import Rdv from "../components/Rdv/Rdv"
import Faq from "../components/Faq/Faq"
import Footer from "../components/Footer/Footer"
import FadeInSection from "../components/Animations/FadeInSection"
import PageTransition from "../components/Animations/PageTransition"

export default function Equipes() {
    return (
        <PageTransition>
            <Header />

            <FadeInSection><Intro /></FadeInSection>

            <FadeInSection><Chirurgie /></FadeInSection>

            <FadeInSection><Kine /></FadeInSection>

            <FadeInSection><Rdv /></FadeInSection>

            <FadeInSection><Faq /></FadeInSection>

            <FadeInSection><Footer /></FadeInSection>
        </PageTransition>
    )
}