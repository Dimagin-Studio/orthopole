import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import FadeInSection from "../components/Animations/FadeInSection"
import PageTransition from "../components/Animations/PageTransition"
import Seo from "../components/Seo/Seo"

export default function Politique() {
    return (
        <PageTransition>
            <Seo
                title="Politique de confidentialité — Orthopole"
                description="Politique de confidentialité d'Orthopole : traitement des données personnelles conforme au RGPD et à la loi belge."
                path="/politique-confidentialite"
            />
            <header className="w-full bg-[#E9DECE] dark:bg-[#0C1A2E]">
                <NavBar />
                <section className="px-[24px] md:px-[48px] py-[32px] md:py-[64px] flex flex-col gap-[16px] items-center text-center">
                    <h1 className="font-medium text-4xl md:text-[64px] leading-[1.2]">Politique de confidentialité</h1>
                    <p className="font-[Outfit] text-sm md:text-base leading-[1.4]">Dernière mise à jour : juin 2026</p>
                </section>
            </header>

            <main>
                <FadeInSection>
                    <section className="px-[24px] md:px-[48px] py-[40px] md:py-[96px] mx-auto max-w-[820px] flex flex-col gap-[40px] font-[Outfit] leading-[1.6]">

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">1. Préambule</h2>
                            <p>Orthopole accorde une importance particulière à la protection de vos données personnelles et à votre vie privée. La présente politique décrit la manière dont nous collectons, utilisons et protégeons vos informations, conformément au Règlement général sur la protection des données (Règlement UE 2016/679, dit « RGPD ») et à la loi belge du 30 juillet 2018 relative à la protection des personnes physiques à l'égard des traitements de données à caractère personnel.</p>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">2. Responsable du traitement</h2>
                            <p>Le responsable du traitement des données collectées via le site est&nbsp;:</p>
                            <ul className="list-disc list-inside flex flex-col gap-[4px]">
                                <li>Orthopole</li>
                                <li>Drève Richelle 33, 1410 Waterloo, Belgique</li>
                                <li>Téléphone&nbsp;: 02/523.30.33</li>
                                <li>Email&nbsp;: richelle@orthopole.be</li>
                            </ul>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">3. Données collectées</h2>
                            <p>Nous pouvons être amenés à collecter les catégories de données suivantes&nbsp;:</p>
                            <ul className="list-disc list-inside flex flex-col gap-[4px]">
                                <li><strong>Données d'identification</strong>&nbsp;: nom, prénom, adresse postale, adresse email, numéro de téléphone.</li>
                                <li><strong>Données relatives à votre demande</strong>&nbsp;: contenu du message transmis via le formulaire de contact, motif du rendez-vous, praticien souhaité.</li>
                                <li><strong>Données de connexion</strong>&nbsp;: adresse IP, type de navigateur, pages visitées, date et heure d'accès, durée de la visite, à des fins exclusivement statistiques.</li>
                            </ul>
                            <p>Aucune donnée médicale n'est collectée ni traitée via ce site internet. Les informations médicales relèvent strictement du dossier patient géré dans le cadre de la consultation, conformément à la législation belge sur les droits du patient (loi du 22 août 2002).</p>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">4. Finalités du traitement</h2>
                            <p>Vos données sont collectées et utilisées pour les finalités suivantes&nbsp;:</p>
                            <ul className="list-disc list-inside flex flex-col gap-[4px]">
                                <li>Répondre à vos demandes de contact ou de rendez-vous.</li>
                                <li>Assurer le suivi administratif lié à votre prise en charge.</li>
                                <li>Améliorer le fonctionnement et le contenu du site.</li>
                                <li>Respecter nos obligations légales et réglementaires.</li>
                            </ul>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">5. Base légale</h2>
                            <p>Le traitement de vos données repose, selon le cas, sur&nbsp;:</p>
                            <ul className="list-disc list-inside flex flex-col gap-[4px]">
                                <li>Votre <strong>consentement</strong> (formulaire de contact, prise de rendez-vous en ligne).</li>
                                <li>L'<strong>exécution d'un contrat</strong> ou de mesures précontractuelles prises à votre demande.</li>
                                <li>Le respect d'une <strong>obligation légale</strong> à laquelle Orthopole est soumise.</li>
                                <li>Notre <strong>intérêt légitime</strong> à assurer le bon fonctionnement et la sécurité du site.</li>
                            </ul>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">6. Destinataires des données</h2>
                            <p>Vos données sont strictement réservées à l'usage interne d'Orthopole et de ses praticiens. Elles ne sont en aucun cas vendues, louées ou cédées à des tiers à des fins commerciales.</p>
                            <p>Elles peuvent toutefois être communiquées à&nbsp;:</p>
                            <ul className="list-disc list-inside flex flex-col gap-[4px]">
                                <li>Nos prestataires techniques (hébergement, maintenance), sous obligation de confidentialité.</li>
                                <li>Les autorités publiques compétentes, lorsque la loi l'exige.</li>
                            </ul>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">7. Durée de conservation</h2>
                            <p>Vos données sont conservées pendant la durée strictement nécessaire aux finalités pour lesquelles elles ont été collectées, et au plus tard&nbsp;:</p>
                            <ul className="list-disc list-inside flex flex-col gap-[4px]">
                                <li><strong>Demandes via le formulaire de contact</strong>&nbsp;: 1 an à compter de la dernière interaction.</li>
                                <li><strong>Données administratives liées à un rendez-vous</strong>&nbsp;: durée prévue par les obligations comptables et légales applicables au secteur médical.</li>
                                <li><strong>Données de connexion</strong>&nbsp;: 12 mois maximum.</li>
                            </ul>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">8. Vos droits</h2>
                            <p>Conformément au RGPD, vous disposez à tout moment des droits suivants concernant vos données personnelles&nbsp;:</p>
                            <ul className="list-disc list-inside flex flex-col gap-[4px]">
                                <li>Droit d'<strong>accès</strong> à vos données.</li>
                                <li>Droit de <strong>rectification</strong> des données inexactes ou incomplètes.</li>
                                <li>Droit à l'<strong>effacement</strong> de vos données (« droit à l'oubli »).</li>
                                <li>Droit à la <strong>limitation</strong> du traitement.</li>
                                <li>Droit à la <strong>portabilité</strong> de vos données.</li>
                                <li>Droit d'<strong>opposition</strong> au traitement.</li>
                                <li>Droit de <strong>retirer votre consentement</strong> à tout moment.</li>
                            </ul>
                            <p>Pour exercer ces droits, vous pouvez nous écrire à&nbsp;<strong>richelle@orthopole.be</strong> ou par courrier postal à l'adresse du cabinet. Une preuve d'identité pourra vous être demandée afin de garantir la sécurité de votre demande.</p>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">9. Réclamation</h2>
                            <p>Si vous estimez que le traitement de vos données ne respecte pas la réglementation en vigueur, vous avez le droit d'introduire une réclamation auprès de l'<strong>Autorité de protection des données (APD)</strong>&nbsp;:</p>
                            <ul className="list-disc list-inside flex flex-col gap-[4px]">
                                <li>Autorité de protection des données</li>
                                <li>Rue de la Presse 35, 1000 Bruxelles</li>
                                <li>Téléphone&nbsp;: +32 (0)2 274 48 00</li>
                                <li>Email&nbsp;: contact@apd-gba.be</li>
                                <li>Site&nbsp;: autoriteprotectiondonnees.be</li>
                            </ul>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">10. Cookies</h2>
                            <p>Le site peut utiliser des cookies strictement nécessaires à son fonctionnement (préférence de thème clair/sombre, navigation). Aucun cookie de mesure d'audience ou de publicité n'est déposé sans votre consentement.</p>
                            <p>Vous pouvez configurer votre navigateur pour refuser tout ou partie des cookies. Le refus de certains cookies peut toutefois affecter l'expérience utilisateur sur le site.</p>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">11. Sécurité</h2>
                            <p>Orthopole met en œuvre les mesures techniques et organisationnelles appropriées pour garantir un niveau de sécurité adapté au risque, notamment contre la perte, la destruction, l'altération ou l'accès non autorisé aux données personnelles.</p>
                        </article>

                        <article className="flex flex-col gap-[12px]">
                            <h2 className="font-[Raleway] text-2xl md:text-3xl tracking-tight">12. Modifications</h2>
                            <p>La présente politique peut être amenée à évoluer afin de rester conforme à la réglementation et aux évolutions du site. La version applicable est celle publiée sur cette page à la date de votre consultation.</p>
                        </article>

                    </section>
                </FadeInSection>

                <FadeInSection><Footer /></FadeInSection>
            </main>
        </PageTransition>
    )
}
