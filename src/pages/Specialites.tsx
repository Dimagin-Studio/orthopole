import Header from "../components/Specialites/Header"
import Intro from "../components/Specialites/Intro"
import Fields from "../components/Specialites/Fields"
import Rdv from "../components/Rdv/Rdv"
import Faq from "../components/Faq/Faq"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import FadeInSection from "../components/Animations/FadeInSection"
import PageTransition from "../components/Animations/PageTransition"

export default function Specialites() {
    return (
        <PageTransition>
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