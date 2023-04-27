import React from "react";
import france from "../../assets/images/icone/france.png";
import ocklock from "../../assets/images/icone/ocklock.png";
import renault from "../../assets/images/icone/renault.png";
import agile from "../../assets/images/icone/agile.png";
import "./experiencesStyles.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Experiences() {
  return (
    <>
      <section id="experiences">
        <p className="title">Mon Parcours </p>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#9D9D9", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="Mars 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <div className="icone-container">
                <img src={france} alt="france" className="icone-style" />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title container-title">
              Obtention du Titre Professionnel Niveau 5 Développeur Web et Web
              Mobile
            </h3>
            <h3 className="vertical-timeline-element-title container-title1">
              Ministère du travail du plein d’emploi et de l’insertion
            </h3>
            <h3 className="vertical-timeline-element-subtitle container-title2">
              Paris (75007)
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Juin 2022 - Novembre 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <div className="icone-container">
                <img src={ocklock} alt="france" className="icone-style" />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title container-title">
              Formation de reconversion de 6 mois Développeur Web FullStack
              Javascript / React.
            </h3>
            <h3 className="vertical-timeline-element-title container-title1">
              Ecole O&apos;clock
            </h3>
            <p className="container-title1">
              Projet de fin de formation O&apos;clock:
            </p>

            <ul className="test">
              <li className="test1">
                • Rédiger le cahier des charges : Wireframes, MCD, MLD,
                Arborescence et User Stories.
              </li>
              <li className="test1">
                • Construire le Front : Create react-app, Components, Context,
                Routes.
              </li>
              <li className="test1">• Styliser avec SaSS/SCSS.</li>
              <li className="test1">
                • S’inscrire avec hashage de mot de passe.
              </li>
              <li className="test1">
                • S&apos;authentifier les comptes pour accéder à l&apos;espace
                organisme.
              </li>
              <li className="test1">• Requêter avec Axios.</li>
              <li className="test1">
                • Créer un filtre de rechercher pour affiner la recherche.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Juin 2019 - Septembre 2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <div className="icone-container">
                <img src={renault} alt="renault" className="icone-style" />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title container-title">
              Consultant SI
            </h3>
            <h3 className="vertical-timeline-element-title container-title1">
              Avenir Conseil Formation (Groupe ALTEN) pour le client RENAULT
            </h3>

            <h3 className="vertical-timeline-element-subtitle container-title2">
              Guyancourt (78280)
            </h3>
            <p className="container-title1">
              Consultant AMOA PLM sur la partie Echange Forunisseur
            </p>

            <ul className="test">
              <li className="test1">
                • Rédiger le cahier des charges : Wireframes, MCD, MLD,
                Arborescence et User Stories.
              </li>
              <li className="test1">
                • Construire le Front : Create react-app, Components, Context,
                Routes.
              </li>
              <li className="test1">• Styliser avec SaSS/SCSS.</li>
              <li className="test1">
                • S’inscrire avec hashage de mot de passe.
              </li>
              <li className="test1">
                • S&apos;authentifier les comptes pour accéder à l&apos;espace
                organisme.
              </li>
              <li className="test1">• Requêter avec Axios.</li>
              <li className="test1">
                • Créer un filtre de rechercher pour affiner la recherche.
              </li>
            </ul>

            <p className="container-title1">
              Gérer les évolutions PLM V6 via MANTIS
            </p>
            <ul className="test">
              <li className="test1">
                • Assurer le suivi du processus défini pour les demandes des
                évolutions.
              </li>
              <li className="test1">
                • Recueillir et analyser les gains économiques liés aux
                évolutions dans le PLM V6
              </li>
              <li className="test1">
                • Participer aux suivis des releases (Passage au Control TOWER,
                Mise en production (MEP), ...)
              </li>
            </ul>
            <p className="container-title1">Consultant déploiement</p>
            <ul className="test">
              <li className="test1">
                • Recueillir, Formaliser et prioriser les besoins métiers
              </li>
              <li className="test1">
                • Suivre l’avancement du déploiement (User formés, Kit de
                communication…)
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Février 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <div className="icone-container">
                <img src={agile} alt="france" className="icone-style" />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title container-title">
              Formation de reconversion de 6 mois Développeur Web FullStack
              Javascript / React.
            </h3>
            <h3 className="vertical-timeline-element-title container-title1">
              Ecole O'clock
            </h3>
            <p className="container-title1">
              Projet de fin de formation O'clock:
            </p>

            <ul className="test">
              <li className="test1">
                • Rédiger le cahier des charges : Wireframes, MCD, MLD,
                Arborescence et User Stories.
              </li>
              <li className="test1">
                • Construire le Front : Create react-app, Components, Context,
                Routes.
              </li>
              <li className="test1">• Styliser avec SaSS/SCSS.</li>
              <li className="test1">
                • S’inscrire avec hashage de mot de passe.
              </li>
              <li className="test1">
                • S'authentifier les comptes pour accéder à l’espace organisme.
              </li>
              <li className="test1">• Requêter avec Axios.</li>
              <li className="test1">
                • Créer un filtre de rechercher pour affiner la recherche.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Mars 2023"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={
              <div className="icone-container">
                <img src={renault} alt="france" className="icone-style" />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title container-title">
              Formation de reconversion de 6 mois Développeur Web FullStack
              Javascript / React.
            </h3>
            <h3 className="vertical-timeline-element-title container-title1">
              Ecole O'clock
            </h3>
            <p className="container-title1">
              Projet de fin de formation O'clock:
            </p>

            <ul className="test">
              <li className="test1">
                • Rédiger le cahier des charges : Wireframes, MCD, MLD,
                Arborescence et User Stories.
              </li>
              <li className="test1">
                • Construire le Front : Create react-app, Components, Context,
                Routes.
              </li>
              <li className="test1">• Styliser avec SaSS/SCSS.</li>
              <li className="test1">
                • S’inscrire avec hashage de mot de passe.
              </li>
              <li className="test1">
                • S'authentifier les comptes pour accéder à l’espace organisme.
              </li>
              <li className="test1">• Requêter avec Axios.</li>
              <li className="test1">
                • Créer un filtre de rechercher pour affiner la recherche.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={"ICCCO"}
          >
            <h3 className="vertical-timeline-element-title container-title">
              Formation de reconversion de 6 mois Développeur Web FullStack
              Javascript / React.
            </h3>
            <h3 className="vertical-timeline-element-title container-title1">
              Ecole O'clock
            </h3>
            <p className="container-title1">
              Projet de fin de formation O'clock:
            </p>

            <ul className="test">
              <li className="test1">
                • Rédiger le cahier des charges : Wireframes, MCD, MLD,
                Arborescence et User Stories.
              </li>
              <li className="test1">
                • Construire le Front : Create react-app, Components, Context,
                Routes.
              </li>
              <li className="test1">• Styliser avec SaSS/SCSS.</li>
              <li className="test1">
                • S’inscrire avec hashage de mot de passe.
              </li>
              <li className="test1">
                • S'authentifier les comptes pour accéder à l’espace organisme.
              </li>
              <li className="test1">• Requêter avec Axios.</li>
              <li className="test1">
                • Créer un filtre de rechercher pour affiner la recherche.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={"ICCCO"}
          >
            <h3 className="vertical-timeline-element-title container-title">
              Formation de reconversion de 6 mois Développeur Web FullStack
              Javascript / React.
            </h3>
            <h3 className="vertical-timeline-element-title container-title1">
              Ecole O'clock
            </h3>
            <p className="container-title1">
              Projet de fin de formation O'clock:
            </p>

            <ul className="test">
              <li className="test1">
                • Rédiger le cahier des charges : Wireframes, MCD, MLD,
                Arborescence et User Stories.
              </li>
              <li className="test1">
                • Construire le Front : Create react-app, Components, Context,
                Routes.
              </li>
              <li className="test1">• Styliser avec SaSS/SCSS.</li>
              <li className="test1">
                • S’inscrire avec hashage de mot de passe.
              </li>
              <li className="test1">
                • S'authentifier les comptes pour accéder à l’espace organisme.
              </li>
              <li className="test1">• Requêter avec Axios.</li>
              <li className="test1">
                • Créer un filtre de rechercher pour affiner la recherche.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={"UUU"}
          />
        </VerticalTimeline>
      </section>
    </>
  );
}

export default React.memo(Experiences);
