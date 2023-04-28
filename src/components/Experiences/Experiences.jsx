import React from "react";
import france from "../../assets/images/icone/france.png";
import ocklock from "../../assets/images/icone/ocklock.png";
import renault from "../../assets/images/icone/renault.png";
import adslaminaire from "../../assets/images/icone/adslaminaire.png";
import agile from "../../assets/images/icone/agile.png";
import iss from "../../assets/images/icone/iss.png";
import insa from "../../assets/images/icone/insa.png";
import iut_epinal from "../../assets/images/icone/iut_epinal.png";
import fes from "../../assets/images/icone/fes.png";

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
        <p className="title">Ingénieur Consultant </p>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#9D9D9", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date={<span className="date">Mars 2023</span>}
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
            date={<span className="date">Juin 2022 - Novembre 2022</span>}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <div className="icone-container">
                <img src={ocklock} alt="ocklock" className="icone-style" />
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
                • S&apos;inscrire avec hashage de mot de passe.
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
            date={<span className="date">Juin 2019 - Septembre 2021</span>}
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
              Mission 1 : Consultant AMOA PLM sur la partie Echange Forunisseur
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
              Mission 2 : Gérer les évolutions PLM V6 via MANTIS
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
            <p className="container-title1">
              Mission 3 : Consultant déploiement
            </p>
            <ul className="test">
              <li className="test1">
                • Recueillir, Formaliser et prioriser les besoins métiers
              </li>
              <li className="test1">
                • Suivre l&apos;avancement du déploiement (User formés, Kit de
                communication…)
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={<span className="date">Février 2019</span>}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <div className="icone-container">
                <img src={agile} alt="agile" className="icone-style" />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title container-title">
              Formation de deux jours sur le travail en équipe AGILE.
            </h3>
            <h3 className="vertical-timeline-element-title container-title1">
              SQLI I Instituit
            </h3>
            <h3 className="vertical-timeline-element-subtitle container-title2">
              Levallois Perret (92300)
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={<span className="date">Septembre 2017 - Juin 2019</span>}
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
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
              Avenir Conseil Formation Pour le client Renault
            </h3>
            <h3 className="vertical-timeline-element-subtitle container-title2">
              Guyancourt (78280)
            </h3>

            <p className="container-title1">Mission : Consultant PMO</p>

            <ul className="test">
              <li className="test1">
                • Animer et assurer le suivi du déploiement PLM V6 à travers des
                instances de gestion de projet : Kick-Off, RAP Projet, Comité de
                Pilotage (COPIL), Comité Technique (COTECH)…
              </li>
              <li className="test1">
                • Préparer les comités de validation (Go/No Go)
              </li>
              <li className="test1">
                • Produire et consolider les documents projets : Ordre de Jour,
                compte-rendu des comités, suivi des actions sur le projet et
                animer les KPI à destination du TOP Management{" "}
              </li>
              <li className="test1">
                • S&apos;inscrire avec hashage de mot de passe.
              </li>
              <li className="test1">
                • S&apos;authentifier les comptes pour accéder à l&apos;espace
                organisme.
              </li>
              <li className="test1">
                • Participer au suivi du déploiement au travers des sociétés
                partenaires de l&apos;entreprise (Migration Projets....)
              </li>
              <li className="test1">
                • Suivre les livrables et du planning et garantir la mise à jour
                du Portefolio Projet du département PLM
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={<span className="date">Novembre 2014 - Juillet 2017</span>}
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={
              <div className="icone-container">
                <img
                  src={adslaminaire}
                  alt="adslaminaire"
                  className="icone-style"
                />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title container-title">
              Ingénieur en Méthodes Logistiques et Amélioration Continue
            </h3>
            <h3 className="vertical-timeline-element-title container-title1">
              ADS Laminaire
            </h3>
            <h3 className="vertical-timeline-element-subtitle container-title2">
              Aulnay sous bois (93600)
            </h3>
            <p className="container-title1">
              Mettre en place une politique d’approvisionnement des articles:
            </p>
            <ul className="test">
              <li className="test1">
                • Etudier la consommation de chaque article
              </li>
              <li className="test1">• Réduire les références à stocker</li>
              <li className="test1">
                • Calculer les quantités Mini / Maxi pour le stockage de chaque
                article
              </li>
              <li className="test1">
                • Organiser l’entrepôt (Emplacement fixe pour chaque article)
              </li>
              <li className="test1">
                • Fluidifier le flux dans l’entrepôt (zone de départ et
                d’arrivée…)
              </li>
              <li className="test1">
                • Mettre en place des procédures pour assurer le fonctionnement
                de l’entrepôt
              </li>
              <li className="test1">
                • Optimiser la base article (apporter les corrections
                nécessaires)
              </li>
            </ul>
            <p className="container-title1">
              Evolution fonctionnelle de l&apos;ERP Everwin GX:
            </p>
            <ul className="test">
              <li className="test1">
                • Organiser et rationaliser le stock (Nomenclature, Flux
                d’information…)
              </li>
              <li className="test1">
                • Piloter un projet d&apos;harmonisation des articles sur le
                groupe ADS Laminaire
              </li>
              <li className="test1">
                • Gérer et créer les références des produits
              </li>
              <li className="test1">
                • Automatiser la création des articles et la catégorisation par
                famille et sous famille
              </li>
              <li className="test1">
                • Evoluer les règles d&apos;affichages en relation avec le
                sous-traitant Informatique
              </li>
              <li className="test1">
                • Former les collaborateurs à l&apos;utilisation de l&apos;ERP
              </li>
            </ul>
            <p className="container-title1">Service Production:</p>
            <ul className="test">
              <li className="test1">
                • Approvisionner les articles hors standards pour les projets
                hors standards
              </li>
              <li className="test1">
                • Coordiner entre les services internes (Bureau d&apos;études,
                Production…)
              </li>
            </ul>
            <p className="container-title1">Service Achat : </p>
            <ul className="test">
              <li className="test1">
                • Contribuer au sourcing des nouveaux fournisseurs 
              </li>
              <li className="test1">
                • Dimensionner et suivre les commandes cadres ( 0.7 M€)
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={<span className="date">2002 - 2006</span>}
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={
              <div className="icone-container">
                <img src={iss} alt="iss" className="icone-style" />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title container-title">
              Planificateur
            </h3>
            <h3 className="vertical-timeline-element-title container-title1">
              ISS France
            </h3>
            <h3 className="vertical-timeline-element-subtitle container-title2">
              Voisins le Bretonneux (78960)
            </h3>
            <p className="container-title1">
              Equiper les logements du client Paris HABIAT par des détecteurs de
              fumée (DAAF):
            </p>

            <ul className="test">
              <li className="test1">
                • Créer et éditer les tournées pour chaque technicien
              </li>
              <li className="test1">• Assurer le SAV des DAAF</li>
              <li className="test1">• Suivre et communiquer les KPI </li>
              <li className="test1">• Encadrer une équipe de 12 techniciens</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#9D9D9", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date={<span className="date">2010 - 2013</span>}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <div className="icone-container">
                <img src={insa} alt="insa" className="icone-style" />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title container-title">
              Ingénieur en Génie Industriel Option Logistique & Production
              Industrielle.
            </h3>
            <h3 className="vertical-timeline-element-title container-title1">
              INSA Hauts de France (Ex ENSIAME)
            </h3>
            <h3 className="vertical-timeline-element-subtitle container-title2">
              Valenciennes (59300)
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#9D9D9", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date={<span className="date">2009 - 2010</span>}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <div className="icone-container">
                <img
                  src={iut_epinal}
                  alt="iut_epinal"
                  className="icone-style"
                />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title container-title">
              Licence Professionnelle Option Contrôles Non Destructifs
            </h3>
            <h3 className="vertical-timeline-element-title container-title1">
              IUT Hubert Curien
            </h3>
            <h3 className="vertical-timeline-element-subtitle container-title2">
              EPINAL (88000)
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#9D9D9", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date={<span className="date">2006 - 2008</span>}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <div className="icone-container">
                <img src={fes} alt="fes" className="icone-style" />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title container-title">
              DUT en Maintenance Industrielle
            </h3>
            <h3 className="vertical-timeline-element-title container-title1">
              IUT de FES
            </h3>
            <h3 className="vertical-timeline-element-subtitle container-title2">
              FES (Maroc)
            </h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </>
  );
}

export default React.memo(Experiences);
