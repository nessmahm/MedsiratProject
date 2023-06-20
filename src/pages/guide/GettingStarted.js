import React from "react";
import "../../styles/gettingStarted.css"; // Import your CSS file

const GettingStarted = () => {
  return (
    <div className="start-container">
      <h2 className="start-title">Bienvenue dans votre Aventure Entrepreneuriale</h2>
      <p className="start-description">
      Bienvenue dans votre aventure entrepreneuriale. Vous êtes sur le point de prendre un nouveau départ passionnant en lançant votre projet. Ce guide de démarrage vous accompagnera à travers les étapes essentielles pour concrétiser votre vision. Suivez attentivement ces étapes clés pour maximiser vos chances de réussite.
      </p>
      <ul className="start-steps">
        <li className="step">
          <div className="step-number">1</div>
          <div className="step-title">Définir vos objectifs avec précision</div>
          <div className="step-description">Prenez le temps de définir clairement les objectifs que vous souhaitez atteindre avec votre projet. Qu'il s'agisse de résoudre un problème, de créer une entreprise à impact social ou de développer un produit innovant, cette étape est cruciale pour orienter vos actions.</div>
        </li>
        <li className="step">
          <div className="step-number">2</div>
          <div className="step-title">Élaborer un plan d'action stratégique</div>
          <div className="step-description">Établissez un plan d'action détaillé qui identifie les étapes et les ressources nécessaires pour réaliser votre projet. Un plan solide vous aidera à rester organisé, à anticiper les défis et à maintenir le cap vers la concrétisation de votre vision.</div>
        </li>
        <li className="step">
          <div className="step-number">3</div>
          <div className="step-title">Allouer les ressources adéquates</div>
          <div className="step-description">Évaluez les ressources dont vous avez besoin pour mener à bien votre projet. Cela peut inclure des ressources financières, humaines, technologiques ou matérielles. Assurez-vous d'avoir les bons moyens à votre disposition pour relever les défis à venir.</div>
        </li>
        <li className="step">
          <div className="step-number">4</div>
          <div className="step-title">Établir un calendrier réaliste</div>
          <div className="step-description">Créez un calendrier détaillé en fixant des échéances et des délais réalistes pour chaque étape de votre projet. Cela vous permettra de suivre vos progrès, de rester motivé et de vous assurer que vous respectez les délais fixés.</div>
        </li>
        <li className="step">
          <div className="step-number">5</div>
          <div className="step-title">Lancer le projet avec confiance</div>
          <div className="step-description">Une fois que vous avez planifié et préparé tous les aspects de votre projet, il est temps de passer à l'action. Lancez officiellement votre projet en mettant en œuvre les premières étapes de votre plan. Gardez à l'esprit que l'apprentissage et l'adaptation seront des compagnons constants tout au long de votre aventure entrepreneuriale.</div>
        </li>
      </ul>
      <button className="start-project-btn">Start Now</button>
    </div>
  );
};

export default GettingStarted;
