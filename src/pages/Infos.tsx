import Header from "../components/Infos/Header"
import Kine from "../components/Equipes/Kine"
import Contact from "../components/Infos/Contact"
import Faq from "../components/Faq/Faq"
import Centre from "../components/Infos/Centre"
import Accessibilite from "../components/Infos/Accessibilite"
import Footer from "../components/Footer/Footer"
import FadeInSection from "../components/Animations/FadeInSection"
import PageTransition from "../components/Animations/PageTransition"

export default function Infos() {
    return (
        <PageTransition>
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