import Header from '../components/Home/Header'
import Avantages from '../components/Home/Avantages'
import Services from '../components/Home/Services'
import Reeduc from '../components/Home/Reeduc'
import Equipe from '../components/Home/Equipe'
import Photos from '../components/Home/Photos'
// import Avis from '../components/Home/Avis' // Réactiver quand de vrais avis seront disponibles
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import FadeInSection from '../components/Animations/FadeInSection'
import PageTransition from '../components/Animations/PageTransition'
import Seo from '../components/Seo/Seo'

export default function Home() {
    return (
        <PageTransition>
            <Seo
                title="Orthopole — Centre médical pluridisciplinaire à Waterloo"
                description="Orthopole réunit chirurgie orthopédique, imagerie, kinésithérapie et réathlétisation au sein d'un même centre à Waterloo. Prise en charge globale et coordonnée de l'appareil locomoteur."
                path="/"
            />
            <Header />
            <main>
                <FadeInSection><Avantages /></FadeInSection>

                <FadeInSection><Services /></FadeInSection>

                <FadeInSection><Reeduc /></FadeInSection>

                <FadeInSection><Equipe /></FadeInSection>

                {/* Masqué tant que les vrais avis ne sont pas disponibles */}
                {/* <FadeInSection><Avis /></FadeInSection> */}

                <FadeInSection><Contact /></FadeInSection>
            </main>

            <FadeInSection><Footer /></FadeInSection>
        </PageTransition>
    )
}