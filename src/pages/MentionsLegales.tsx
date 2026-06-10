import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import FadeInSection from "../components/Animations/FadeInSection"
import PageTransition from "../components/Animations/PageTransition"
import Seo from "../components/Seo/Seo"

export default function MentionsLegales() {
    return (
        <PageTransition>
            <Seo
                title="Mentions légales — Orthopole"
                description="Mentions légales du site orthopole.be : éditeur, hébergement, propriété intellectuelle et droit applicable."
                path="/mentions-legales"
            />
            <header className="w-full bg-[#E9DECE] dark:bg-[#0C1A2E]">
                <NavBar />
                <section className="px-[24px] md:px-[48px] py-[32px] md:py-[64px] flex flex-col gap-[16px] items-center text-center">
                    <h1 className="font-medium text-4xl md:text-[64px] leading-[1.2]">Mentions légales</h1>
                    <p className="font-[Outfit] text-sm md:text-base leading-[1.4]">Dernière mise à jour : juin 2026</p>
                </section>
            </header>

            <main>
                <FadeInSection>
                    <section className="px-[24px] md:px-[48px] py-[40px] md:py-[96px] mx-auto max-w-[820px] flex flex-col gap-[40px] font-[Outfit] leading-[1.6]">

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">1. Éditeur du site</h2>
                            <p>Le site <strong>orthopole.be</strong> est édité par&nbsp;:</p>
                            <ul className="list-disc list-inside flex flex-col gap-[4px]">
                                <li>Orthopole</li>
                                <li>Drève Richelle 33, 1410 Waterloo, Belgique</li>
                                <li>Téléphone&nbsp;: 02/523.30.33</li>
                                <li>Email&nbsp;: richelle@orthopole.be</li>
                            </ul>
                            <p className="text-sm italic opacity-80">Le numéro d'entreprise (BCE) et le numéro de TVA seront ajoutés dès leur communication.</p>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">2. Directeur de la publication</h2>
                            <p>Le directeur de la publication est le représentant légal d'Orthopole.</p>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">3. Conception et développement</h2>
                            <p>Le site a été conçu et développé par&nbsp;:</p>
                            <ul className="list-disc list-inside flex flex-col gap-[4px]">
                                <li>Dimagin</li>
                                <li>Email&nbsp;: contact@dimagin.be</li>
                                <li>Site&nbsp;: dimagin.be</li>
                            </ul>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">4. Hébergement</h2>
                            <p>Le site est hébergé par un prestataire technique tiers. Les coordonnées complètes de l'hébergeur peuvent être obtenues sur simple demande à l'adresse <strong>richelle@orthopole.be</strong>.</p>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">5. Propriété intellectuelle</h2>
                            <p>L'ensemble des contenus présents sur ce site (textes, images, photographies, logos, icônes, vidéos, identité visuelle, code, structure et mise en page) est protégé par le droit belge et international de la propriété intellectuelle.</p>
                            <p>Toute reproduction, représentation, modification, publication, adaptation ou exploitation, totale ou partielle, par quelque procédé que ce soit, est interdite sans l'autorisation écrite préalable d'Orthopole.</p>
                            <p>Toute utilisation non autorisée engagera la responsabilité de l'auteur et constituera une contrefaçon sanctionnée par les articles XI.165 et suivants du Code de droit économique belge.</p>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">6. Liens hypertextes</h2>
                            <p>Le site peut contenir des liens vers d'autres sites internet. Orthopole n'exerce aucun contrôle sur ces sites tiers et décline toute responsabilité quant à leur contenu, leurs pratiques en matière de confidentialité ou les conséquences de leur consultation.</p>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">7. Responsabilité</h2>
                            <p>Les informations diffusées sur ce site sont fournies à titre informatif. Bien qu'Orthopole s'efforce de garantir leur exactitude et leur mise à jour, aucune garantie n'est donnée quant à leur exhaustivité ou leur caractère définitif.</p>
                            <p>Les informations médicales présentées ne sauraient en aucun cas se substituer à une consultation, un diagnostic ou un avis médical délivré par un professionnel de santé qualifié.</p>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">8. Données personnelles</h2>
                            <p>Le traitement des données personnelles fait l'objet d'une politique dédiée, consultable sur la page <strong>Politique de confidentialité</strong>.</p>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">9. Droit applicable</h2>
                            <p>Les présentes mentions légales sont régies par le droit belge. Tout litige relatif au site ou à son utilisation relèvera de la compétence exclusive des tribunaux de l'arrondissement judiciaire du Brabant wallon.</p>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">10. Contact</h2>
                            <p>Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse <strong>richelle@orthopole.be</strong> ou par téléphone au <strong>02/523.30.33</strong>.</p>
                        </article>

                    </section>
                </FadeInSection>

                <FadeInSection><Footer /></FadeInSection>
            </main>
        </PageTransition>
    )
}
