import React from "react";
import "../../styles/gettingStarted.css";
import IntroElement from "../../components/guide/introElement";
import teamWork from "../../assets/illustrations/Guide/teamWork.jpg";
import companyEnvironment from "../../assets/illustrations/Guide/companyEnvironment.jpg";
import BusinessIdea from "../../assets/illustrations/Guide/BusinessIdea.jpg";
import projectFesability from "../../assets/illustrations/Guide/projectFesability.jpg";

import CompanyMarket from "../../assets/illustrations/Guide/CompanyMarket.jpg";
import financialManagement from "../../assets/illustrations/Guide/financialManagement.jpg";
import Legal from "../../assets/illustrations/Guide/Legal.jpg";
import companyAdministration from "../../assets/illustrations/Guide/companyAdministration.jpg";
function GuideIntro() {
        return (
            <div    className={"guideIntro-body guideIntro-wholeBody"} >
                <div className="start-container" style = {{ "maxWidth" : "max-content"}}>
                <h2 className="start-title"  >Bienvenue dans votre Aventure Entrepreneuriale </h2>
                <p className="start-description"  style = {{ "maxWidth" : "1200px", "lineHeight": "1.8"}}>
                    Bienvenue dans votre aventure entrepreneuriale.
                    Vous êtes sur le point de prendre un nouveau départ passionnant en lançant votre projet.
                        <br/> Ce guide de démarrage vous accompagnera à travers les étapes essentielles pour concrétiser votre vision.
                            Suivez attentivement ces étapes clés pour maximiser vos chances de réussite.
                </p>
                </div>
            <IntroElement image={teamWork}  title={"Le Travail en équipe :"}
            description ={
                "Vous découvrirez l'importance cruciale du travail d'équipe dans la construction de réussites pour les entreprises " +".\n"+
                "Vous apprendrez à développer des stratégies de collaboration efficaces en tirant parti des forces et des compétences de chaque membre de votre équipe" +".\n"+
                " Vous explorerez  comment favoriser un environnement de travail positif et encourager la communication ouverte, la confiance mutuelle et la résolution efficace des problèmes."}
            id={1} />
                <br/>
                <IntroElement image={companyEnvironment}   title={"L’environnement de l’entreprise :"}
            description={"Vous explorerez en profondeur l'environnement dans lequel votre entreprise évoluera " + ".\n"+
                "Vous comprendrez les facteurs sociaux, économiques et technologiques qui influencent le succès des entreprises " +".\n"+
                "Vous examinerez les tendances du marché, les dynamiques de l'industrie et les opportunités émergentes" +".\n"+
                " Vous serez  en mesure d'identifier les défis spécifiques auxquels vous pourriez être confronté et d'élaborer des stratégies pour les surmonter."
            }id={2} />
                <br/>
            <IntroElement image={BusinessIdea}  title={"L'idée d'Entreprise :"}
            description={"Vous affinerez votre idée d'entreprise en définissant clairement sa mission, sa vision et ses objectifs" +".\n"+
                " Vous apprendrez à aligner votre idée sur les besoins de la communauté et à créer une proposition de valeur convaincante " +".\n"+
                " Vous explorerez des outils tels que le modèle d'affaires et le canevas stratégique pour développer une compréhension approfondie de la proposition de votre entreprise et de sa valeur ajoutée unique."

            }id={1} />
                <br/>
            <IntroElement image={projectFesability}  title= {"L'Étude de faisabilité du projet :"}
            description={"L'étude de faisabilité est cruciale pour évaluer la viabilité et la durabilité de votre projet" +".\n"+
                " Vous analyserez en détail les aspects financiers, opérationnels et organisationnels de votre entreprise" +".\n"+
                " Vous évaluerez la demande du marché, identifierez les risques potentiels et élaborerez des stratégies d'atténuation" +".\n"+
                " Vous réaliserez également une analyse concurrentielle pour comprendre votre positionnement sur le marché et déterminer les opportunités de croissance."
            } id={2}/>
                <br/>
            <IntroElement image={CompanyMarket}  title={"Le marché pour une Entreprise :"} description= {"" +
                "Vous évaluerez le potentiel du marché pour votre entreprise." +".\n"+
                " Vous effectuerez une étude approfondie de votre public cible, en analysant ses besoins, ses préférences et ses comportements d'achat " +".\n"+
                " Vous examinerez les tendances du marché, les segments de clientèle et les opportunités de croissance" +".\n"+
                "Vous développerez une stratégie marketing complète pour atteindre votre public cible, promouvoir vos produits ou services et créer une base solide de clients satisfaits."
            }id={1} />
                <br/>
            <IntroElement image={financialManagement}  title={"L'Investissement et la gestion des finances :"}
            description={"Vous apprendrez à gérer efficacement les finances de votre entreprise " +".\n"+
                "Vous comprendrez les différentes options de financement disponibles et établirez un plan financier solide " +".\n"+
                "Vous évaluerez vos besoins en capital, établirez un budget réaliste et suivrez de près vos dépenses" +".\n"+
                " Vous explorerez également des modèles de génération de revenus durables pour assurer la rentabilité et la croissance de votre entreprise à long terme."
            }id={2} />

                <br/><IntroElement  image={Legal} title={"La Constitution juridique de l'entreprise :"}

            description={" Vous comprendrez les différentes structures juridiques disponibles, telles que l'entreprise individuelle, la société à responsabilité limitée ou la société par actions"+".\n"+
                "Vous choisirez la structure juridique qui convient le mieux à votre entreprise en tenant compte des aspects fiscaux, de la responsabilité et de la gouvernance" +".\n"+
                " Vous explorerez également les exigences d'enregistrement et de conformité légales pour vous assurer de démarrer votre entreprise de manière légale et appropriée."
            } id={1}/>
                <br/>
                <IntroElement image={companyAdministration} title={"La Gouvernance de l'Entreprise :"} description={"Vous développerez un solide cadre de gouvernance pour votre entreprise " +".\n"+
                "Vous apprendrez à établir la composition du conseil d'administration, les processus de prise de décision et l'engagement des parties prenantes" +".\n"+
                " Vous créerez des politiques et des pratiques pour assurer la transparence, la responsabilité et la conformité réglementaire. Vous comprendrez également l'importance de la responsabilité sociale des entreprises et de la durabilité dans la gestion de votre entreprise."            }
                          id={2} />

        </div>


    );
}

export default GuideIntro;
