import { Link } from "react-router-dom";

export default function Fields() {
    return (
        <>
            <section className="px-[24px] md:px-[48px] py-[40px] md:pt-[96px] md:pb-[128px] flex flex-col gap-[32px] md:gap-[64px]">
                {/* Box + image 1 - Chirurgie orthopédique */}
                <div id="chirurgie-orthopedique" className="w-full p-[20px] md:p-[40px] flex justify-center lg:justify-end bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/chirurgie.png')" }}>
                    {/* Zone de texte */}
                    <div className="w-full md:w-[608px] flex flex-col gap-[24px] px-[16px] md:px-[32px] py-[16px] md:pt-[48px] md:pb-[32px] bg-[#F9F9F9F2] font-[Outfit] leading-[1.4]">
                        <h2 className="text-[26px] md:text-[40px] text-center md:text-left font-[Raleway] leading-[1.2]">Chirurgie orthopédique</h2>

                        <p>Notre service couvre l'ensemble des pathologies de l'appareil locomoteur, incluant la chirurgie orthopédique et traumatologique.</p>

                        <ul className="list-disc list-inside">
                            <li className="list-none">Nous réalisons notamment :</li>
                            <li>Prothèses de hanche</li>
                            <li>Prothèses totales et partielles du genou, avec assistance robotique</li>
                            <li>Chirurgie ménisco-ligamentaire par arthroscopie</li>
                            <li>Chirurgie de la main, du poignet et du coude</li>
                            <li>Microchirurgie et chirurgie des nerfs périphériques</li>
                            <li>Chirurgie de l'épaule et de la colonne</li>
                        </ul>

                        <p>Chaque patient bénéficie d'un accompagnement global, depuis l'évaluation pré-obligatoire jusqu'au suivi post-opératoire, en coordination avec les équipes d'imagerie et de rééducation, afin d'optimiser la récupération fonctionnelle.</p>

                        <p className="font-semibold">Membre supérieur (épaule, coude, poignet) / Hanche & genou / Colonne</p>

                        {/* Boutons */}
                        <div className="flex flex-col md:flex-row items-center gap-[24px] md:gap-[32px] font-[Raleway] font-medium leading-[23.48px]">
                            <Link to="/infos#contact-form" className="w-full md:w-fit">
                                <p className="bg-[#0C1A2E] hover:bg-[#1e395e] text-[#FBF8F3] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] text-center">
                                    PRENDRE RDV
                                </p>
                            </Link>
                            <Link to="/equipes#chirurgie-orthopedique" className="w-full md:w-fit">
                                <p className="bg-[#0C1A2E1A] hover:bg-[#3356871a] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit text-center">
                                    VOIR L'ÉQUIPE
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Box + image 2 - Imagerie & Radiologie */}
                <div id="imagerie-radiologie" className="w-full p-[20px] md:p-[40px] flex justify-center lg:justify-end bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/imagerie.png')" }}>
                    {/* Zone de texte */}
                    <div className="w-full md:w-[608px] flex flex-col gap-[24px] px-[16px] md:px-[32px] py-[16px] md:pt-[48px] md:pb-[32px] bg-[#F9F9F9F2] font-[Outfit] leading-[1.4]">
                        <h2 className="text-[26px] md:text-[40px] text-center md:text-left font-[Raleway] leading-[1.2]">Imagerie & Radiologie</h2>

                        <p>Notre service d'imagerie médicale permet la réalisation d'examens rapides et précis, directement sur place.</p>

                        <p>La radiographie standard est disponible en première intention, avec la possibilité de compléter le diagnostic par des examens plus avancés tels que le CBCT ou l'échographie, en fonction des besoins cliniques.</p>

                        <p>Chaque examen s'inscrit dans un parcours coordonné, permettant d'orienter efficacement la prise en charge et le traitement du patient.</p>

                        <br />

                        {/* Boutons */}
                        <div className="flex flex-col md:flex-row items-center gap-[24px] md:gap-[32px] font-[Raleway] font-medium leading-[23.48px]">
                            <Link to="/infos#contact-form" className="w-full md:w-fit">
                                <p className="bg-[#0C1A2E] hover:bg-[#1e395e] text-[#FBF8F3] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] text-center">
                                    PRENDRE RDV
                                </p>
                            </Link>
                            <Link to="/equipes#imagerie-radiologie" className="w-full md:w-fit">
                                <p className="bg-[#0C1A2E1A] hover:bg-[#3356871a] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit text-center">
                                    VOIR L'ÉQUIPE
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Box + image 3 - Kinésithérapie & Réathlétisation */}
                <div id="kinesitherapie-reathletisation" className="w-full p-[20px] md:p-[40px] flex justify-center lg:justify-end bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/kine.png')" }}>
                    {/* Zone de texte */}
                    <div className="w-full md:w-[608px] flex flex-col gap-[24px] px-[16px] md:px-[32px] py-[16px] md:pt-[48px] md:pb-[32px] bg-[#F9F9F9F2] font-[Outfit] leading-[1.4]">
                        <h2 className="text-[26px] md:text-[40px] text-center md:text-left font-[Raleway] leading-[1.2]">Kinésithérapie & Réathlétisation</h2>

                        <p>En collaboration avec les chirurgiens orthopédiques, nous proposons une prise en charge personnalisée basée sur un bilan précis.</p>

                        <p>La rééducation combine exercices ciblés et travail en salle de sport afin de restaurer la fonction et permettre un retour progressif aux activités du quotidien comme aux activités sportives.</p>

                        <ul className="list-disc list-inside">
                            <li className="list-none">Nous intervenons notamment dans :</li>
                            <li>Rééducation post-opératoire</li>
                            <li>Kinésithérapie générale et du sport</li>
                            <li>Rééducation de la course à pied</li>
                            <li>Rééducation de la main</li>
                            <li>Dry Needling</li>
                        </ul>

                        <p className="font-semibold">Rééducation post-opératoire / Kiné du sport / Thérapie manuelle / Réathlétisation</p>

                        {/* Boutons */}
                        <div className="flex flex-col md:flex-row items-center gap-[24px] md:gap-[32px] font-[Raleway] font-medium leading-[23.48px]">
                            <Link to="/infos#contact-form" className="w-full md:w-fit">
                                <p className="bg-[#0C1A2E] hover:bg-[#1e395e] text-[#FBF8F3] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] text-center">
                                    PRENDRE RDV
                                </p>
                            </Link>
                            <Link to="/equipes#kinesitherapie-reathletisation" className="w-full md:w-fit">
                                <p className="bg-[#0C1A2E1A] hover:bg-[#3356871a] px-[16px] md:px-[20px] lg:px-[24px] py-[8px] md:py-[10px] w-full md:w-fit text-center">
                                    VOIR L'ÉQUIPE
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}