import React from "react";
import "../../styles/guide.css";
import { useNavigate } from "react-router-dom";


const Guide = () => {
    let navigate = useNavigate();

    const handleConnect = () => {
        navigate("/signup");
        window.scrollTo(0, 0); // do something with the selected file
      };
  const sections = [
    {
      title: "1- Le Travail en équipe :",
      description: "Découvrez l'importance du travail d'équipe dans la construction de réussites pour les entreprises sociales. Apprenez les stratégies de collaboration efficaces et comment tirer parti des forces de chaque membre de votre équipe."
    },
    {
      title: "2- L’environnement de l’entreprise :",
      description: "Explorez l'environnement des entreprises sociales et comprenez les facteurs sociaux et économiques qui l'influencent. Obtenez des informations sur les défis uniques et les opportunités offertes par le secteur social."
    },
    {
      title: "3- L'idée d'Entreprise Sociale :",
      description: "Affinez votre idée d'entreprise sociale et définissez sa mission, sa vision et ses objectifs d'impact social. Apprenez à aligner votre idée sur les besoins de la communauté et à créer une proposition de valeur convaincante."
    },
    {
      title: "4- L'Etude de faisabilité du projet social :",
      description: "Effectuez une étude de faisabilité pour votre projet d'entreprise sociale afin d'évaluer sa viabilité et sa durabilité. Identifiez les risques potentiels, évaluez la demande du marché et analysez les aspects financiers et opérationnels de votre entreprise."
    },
    {
      title: "5- Le marché pour une Entreprise Sociale :",
      description: "Évaluez le potentiel du marché pour votre entreprise sociale. Comprenez votre public cible, analysez les tendances du marché et identifiez les clients et bénéficiaires potentiels. Élaborez une stratégie marketing complète pour votre entreprise."
    },
    {
      title: "6- L'Investissement et la gestion des finances :",
      description: "Apprenez des stratégies efficaces de gestion financière pour les entreprises sociales. Comprenez les différentes options de financement, établissez un budget, suivez les dépenses et explorez des modèles de génération de revenus durables pour votre entreprise."
    },
    {
      title: "7- La Constitution juridique de l'entreprise sociale :",
      description: "Naviguez dans le cadre juridique des entreprises sociales. Comprenez les différentes structures juridiques et choisissez celle qui convient le mieux à votre entreprise. Informez-vous sur l'enregistrement, la conformité et les exigences de gouvernance."
    },
    {
      title: "8- La Gouvernance de l'Entreprise Sociale :",
      description: "Développez un solide cadre de gouvernance pour votre entreprise sociale. Apprenez la composition du conseil d'administration, les processus de prise de décision et l'engagement des parties prenantes. Créez des politiques et des pratiques pour assurer la transparence et la responsabilité."
    }
  ];

  return (
    <div className="guide-container">
      <h1 className="guide-title">Guide des Entreprises Sociales et Solidaires</h1>
      <div className="guide-introduction">
        <p>
          Bienvenue dans notre guide ! Ce guide vous aidera à comprendre les avantages de l'utilisation d'Entreprises Sociales et Solidaires et vous fournira des instructions étape par étape sur la façon de commencer. Que vous travailliez en équipe ou que vous exploriez l'environnement des entreprises sociales, nous sommes là pour vous accompagner.
        </p>
      </div>
      {sections.map((section, index) => (
        <div className="section" key={index}>
          <h2 className="section-title">{section.title}</h2>
          <p className="section-description">{section.description}</p>
        </div>
      ))}
      <div className="signup-section">
        <p>Prêt à commencer ?</p>
        <button className="signup-button" onClick={handleConnect}>Inscrivez-vous maintenant</button>
      </div>
    </div>
  );
};

export default Guide;
