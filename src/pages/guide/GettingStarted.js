import React from "react";
import "../../styles/gettingStarted.css"; // Import your CSS file
import { useNavigate } from "react-router";



const GettingStarted = () => {
  let navigate=useNavigate();
  const handleStep1 = () => {
    navigate("/step1");
    window.scrollTo(0, 0);
  }
  const sections = [
    {
      title: "Le Travail en équipe :",
      description: "Dans cette étape, vous découvrirez l'importance cruciale du travail d'équipe dans la construction de réussites pour les entreprises. Vous apprendrez à développer des stratégies de collaboration efficaces en tirant parti des forces et des compétences de chaque membre de votre équipe. Vous explorerez également comment favoriser un environnement de travail positif et encourager la communication ouverte, la confiance mutuelle et la résolution efficace des problèmes.",
    },
    {
      title: "L’environnement de l’entreprise :",
      description: "Cette étape vous permettra d'explorer en profondeur l'environnement dans lequel votre entreprise évoluera. Vous comprendrez les facteurs sociaux, économiques et technologiques qui influencent le succès des entreprises. Vous examinerez les tendances du marché, les dynamiques de l'industrie et les opportunités émergentes. Vous serez également en mesure d'identifier les défis spécifiques auxquels vous pourriez être confronté et d'élaborer des stratégies pour les surmonter.",
    },
    {
      title: "L'idée d'Entreprise :",
      description: "Au cours de cette étape, vous affinerez votre idée d'entreprise en définissant clairement sa mission, sa vision et ses objectifs. Vous apprendrez à aligner votre idée sur les besoins de la communauté et à créer une proposition de valeur convaincante. Vous explorerez des outils tels que le modèle d'affaires et le canevas stratégique pour développer une compréhension approfondie de la proposition de votre entreprise et de sa valeur ajoutée unique.",
    },
    {
      title: "L'Étude de faisabilité du projet :",
      description: "L'étude de faisabilité est cruciale pour évaluer la viabilité et la durabilité de votre projet. Vous analyserez en détail les aspects financiers, opérationnels et organisationnels de votre entreprise. Vous évaluerez la demande du marché, identifierez les risques potentiels et élaborerez des stratégies d'atténuation. Vous réaliserez également une analyse concurrentielle pour comprendre votre positionnement sur le marché et déterminer les opportunités de croissance.",
    },
    {
      title: "Le marché pour une Entreprise :",
      description: "Dans cette étape, vous évaluerez le potentiel du marché pour votre entreprise. Vous effectuerez une étude approfondie de votre public cible, en analysant ses besoins, ses préférences et ses comportements d'achat. Vous examinerez les tendances du marché, les segments de clientèle et les opportunités de croissance. En utilisant ces informations, vous développerez une stratégie marketing complète pour atteindre votre public cible, promouvoir vos produits ou services et créer une base solide de clients satisfaits.",
    },
    {
      title: "L'Investissement et la gestion des finances :",
      description: "Au cours de cette étape, vous apprendrez à gérer efficacement les finances de votre entreprise. Vous comprendrez les différentes options de financement disponibles et établirez un plan financier solide. Vous évaluerez vos besoins en capital, établirez un budget réaliste et suivrez de près vos dépenses. Vous explorerez également des modèles de génération de revenus durables pour assurer la rentabilité et la croissance de votre entreprise à long terme.",
    },
    {
      title: "La Constitution juridique de l'entreprise :",
      description: "Cette étape se concentrera sur le cadre juridique de votre entreprise. Vous comprendrez les différentes structures juridiques disponibles, telles que l'entreprise individuelle, la société à responsabilité limitée ou la société par actions. Vous choisirez la structure juridique qui convient le mieux à votre entreprise en tenant compte des aspects fiscaux, de la responsabilité et de la gouvernance. Vous explorerez également les exigences d'enregistrement et de conformité légales pour vous assurer de démarrer votre entreprise de manière légale et appropriée.",
    },
     {
      title: "La Gouvernance de l'Entreprise :",
      description: "Dans cette dernière étape, vous développerez un solide cadre de gouvernance pour votre entreprise. Vous apprendrez à établir la composition du conseil d'administration, les processus de prise de décision et l'engagement des parties prenantes. Vous créerez des politiques et des pratiques pour assurer la transparence, la responsabilité et la conformité réglementaire. Vous comprendrez également l'importance de la responsabilité sociale des entreprises et de la durabilité dans la gestion de votre entreprise.",
    },
    // Add more sections here...
  ];
  
  return (
    <div className="start-container">
      <h2 className="start-title">Bienvenue dans votre Aventure Entrepreneuriale</h2>
      <p className="start-description">
        Bienvenue dans votre aventure entrepreneuriale. Vous êtes sur le point de prendre un nouveau départ passionnant
        en lançant votre projet. Ce guide de démarrage vous accompagnera à travers les étapes essentielles pour concrétiser
        votre vision. Suivez attentivement ces étapes clés pour maximiser vos chances de réussite.
      </p>
      <ul className="start-steps">
        {sections.map((section, index) => (
          <li className="step" key={index}>
            <div className="step-number">{index + 1}</div>
            <div className="step-title">{section.title}</div>
            <div className="step-description">{section.description}</div>
          </li>
        ))}
      </ul>
      <button className="start-project-btn" onClick={handleStep1}>Start Now</button>
    </div>
  );
};

export default GettingStarted;
