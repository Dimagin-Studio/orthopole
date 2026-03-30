import Header from '../components/Home/Header'
import Avantages from '../components/Home/Avantages'
import Services from '../components/Home/Services'
import Reeduc from '../components/Home/Reeduc'
import Equipe from '../components/Home/Equipe'
import Photos from '../components/Home/Photos'
import Avis from '../components/Home/Avis'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Avantages />

                <Services />

                <Reeduc />

                <Equipe />

                <Photos />

                <Avis />

                <Contact />
            </main>

            <Footer />
        </>
    )
}