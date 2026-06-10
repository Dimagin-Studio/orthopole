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

export default function Home() {
    return (
        <PageTransition>
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