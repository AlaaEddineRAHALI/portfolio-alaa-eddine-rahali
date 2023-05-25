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
      <section id="experiences" className=" px-5 lg:pt-[7%]  ">
        <div className="px-6 pt-24 md:pt-32 lg:pt-[0%]">
          <p className=" p-2 text-left text-3xl font-bold sm:pb-4 lg:text-center xl:text-4xl 2xl:text-6xl">
            Ingénieur Consultant{" "}
          </p>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
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
              <h3 className="vertical-timeline-element-title container-title my-2 leading-6">
                Obtention du Titre Professionnel Niveau 5 Développeur Web et Web
                Mobile.
              </h3>
              <h3 className="vertical-timeline-element-title container-title1 py-1">
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
              <h3 className="vertical-timeline-element-title container-title my-2 leading-6">
                Formation de reconversion de 6 mois Développeur Web FullStack
                Javascript / React.
              </h3>
              <h3 className="vertical-timeline-element-title container-title1">
                Ecole O&apos;clock
              </h3>
              <p className="container-title1">
                Formation de 798 heures intenisves:
              </p>

              <ul className="ul_style">
                <li className="li_style">
                  • 3 mois de socle (HTML5, CSS3, Javascript, NodeJs, PSQL).
                </li>
                <li className="li_style">
                  • 1 mois de spécialisation en ReactJs.
                </li>
                <li className="li_style">
                  • 1 mois de projet professionnalisant: Application Actiively
                </li>
              </ul>
              <p className="container-title1">Application Actiively:</p>

              <ul className="ul_style">
                <li className="li_style">
                  • Rédiger le cahier des charges : Wireframes, MCD, MLD,
                  Arborescence et User Stories.
                </li>
                <li className="li_style">
                  • Construire le Front : Create react-app, Components, Context,
                  Routes.
                </li>
                <li className="li_style">• Styliser avec SaSS.</li>
                <li className="li_style">
                  • S&apos;inscrire avec hashage de mot de passe.
                </li>
                <li className="li_style">
                  • S&apos;authentifier les comptes pour accéder à l&apos;espace
                  organisme.
                </li>
                <li className="li_style">• Requêter avec Axios.</li>
                <li className="li_style">
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
              <h3 className="vertical-timeline-element-title container-title my-2 leading-6">
                Consultant SI
              </h3>
              <h3 className="vertical-timeline-element-title container-title1 py-1">
                Avenir Conseil Formation (Groupe ALTEN) pour le client RENAULT
              </h3>

              <h3 className="vertical-timeline-element-subtitle container-title2">
                Guyancourt (78280)
              </h3>
              <p className="container-title1">
                Mission 1 : Consultant AMOA PLM sur la partie Echange
                Forunisseur:
              </p>

              <ul className="ul_style">
                <li className="li_style">
                  • Améliorer le processus d&apos;échange des données avec les
                  fournisseurs Renault.
                </li>
                <li className="li_style">
                  • Etudier et analyser les incidents liés aux échanges
                  fournisseurs.
                </li>
                <li className="li_style">
                  • Capturer le besoin et rédiger les uses cases des nouvelles
                  fonctionnalités à intégrer dans l’outil.
                </li>
                <li className="li_style">
                  • Tester et valider les nouvelles fonctionnalités dans
                  l’outil.
                </li>
                <li className="li_style">
                  • Rédiger et maintenir les guides méthodologiques dédiés aux
                  échanges Renault / Fournisseur.
                </li>
                <li className="li_style">
                  • Animer les sessions de formation sur les évolutions liées à
                  l’Entreprise Etendue auprès des métiers.
                </li>
              </ul>

              <p className="container-title1">
                Mission 2 : Gérer les évolutions PLM V6 via MANTIS:
              </p>
              <ul className="ul_style">
                <li className="li_style">
                  • Assurer le suivi du processus défini pour les demandes des
                  évolutions.
                </li>
                <li className="li_style">
                  • Recueillir et analyser les gains économiques liés aux
                  évolutions dans le PLM V6.
                </li>
                <li className="li_style">
                  • Participer aux suivis des releases (Passage au Control
                  TOWER, Mise en production (MEP))
                </li>
              </ul>
              <p className="container-title1">
                Mission 3 : Consultant déploiement:
              </p>
              <ul className="ul_style">
                <li className="li_style">
                  • Recueillir, Formaliser et prioriser les besoins métiers.
                </li>
                <li className="li_style">
                  • Suivre l&apos;avancement du déploiement (User formés, Kit de
                  communication…).
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
              <h3 className="vertical-timeline-element-title container-title my-2 leading-6 ">
                Formation de deux jours sur le travail en équipe AGILE
              </h3>
              <h3 className="vertical-timeline-element-title container-title1 py-1">
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
              <h3 className="vertical-timeline-element-title container-title my-2 leading-6">
                Consultant SI
              </h3>
              <h3 className="vertical-timeline-element-title container-title1 py-1">
                Avenir Conseil Formation Pour le client Renault
              </h3>
              <h3 className="vertical-timeline-element-subtitle container-title2">
                Guyancourt (78280)
              </h3>

              <p className="container-title1">Mission : Consultant PMO:</p>

              <ul className="ul_style">
                <li className="li_style">
                  • Animer et assurer le suivi du déploiement PLM V6 à travers
                  des instances de gestion de projet : Kick-Off, RAP Projet,
                  Comité de Pilotage (COPIL), Comité Technique (COTECH)…
                </li>
                <li className="li_style">
                  • Préparer les comités de validation (Go/No Go).
                </li>
                <li className="li_style">
                  • Produire et consolider les documents projets : Ordre de
                  Jour, compte-rendu des comités, suivi des actions sur le
                  projet et animer les KPI à destination du TOP Management.
                </li>

                <li className="li_style">
                  • Participer au suivi du déploiement au travers des sociétés
                  partenaires de l&apos;entreprise (Migration Projets....).
                </li>
                <li className="li_style">
                  • Suivre les livrables et du planning et garantir la mise à
                  jour du Portefolio Projet du département PLM.
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
              <h3 className="vertical-timeline-element-title container-title my-2 leading-6">
                Ingénieur en Méthodes Logistiques et Amélioration Continue
              </h3>
              <h3 className="vertical-timeline-element-title container-title1 py-1">
                ADS Laminaire
              </h3>
              <h3 className="vertical-timeline-element-subtitle container-title2">
                Aulnay sous bois (93600)
              </h3>
              <p className="container-title1">
                Mettre en place une politique d’approvisionnement des articles:
              </p>
              <ul className="ul_style">
                <li className="li_style">
                  • Etudier la consommation de chaque article.
                </li>
                <li className="li_style">
                  • Réduire les références à stocker.
                </li>
                <li className="li_style">
                  • Calculer les quantités Mini / Maxi pour le stockage de
                  chaque article.
                </li>
                <li className="li_style">
                  • Organiser l’entrepôt (Emplacement fixe pour chaque article).
                </li>
                <li className="li_style">
                  • Fluidifier le flux dans l’entrepôt (zone de départ et
                  d’arrivée…).
                </li>
                <li className="li_style">
                  • Mettre en place des procédures pour assurer le
                  fonctionnement de l’entrepôt.
                </li>
                <li className="li_style">
                  • Optimiser la base article (apporter les corrections
                  nécessaires).
                </li>
              </ul>
              <p className="container-title1">
                Evolution fonctionnelle de l&apos;ERP Everwin GX:
              </p>
              <ul className="ul_style">
                <li className="li_style">
                  • Organiser et rationaliser le stock (Nomenclature, Flux
                  d’information…).
                </li>
                <li className="li_style">
                  • Piloter un projet d&apos;harmonisation des articles sur le
                  groupe ADS Laminaire.
                </li>
                <li className="li_style">
                  • Gérer et créer les références des produits.
                </li>
                <li className="li_style">
                  • Automatiser la création des articles et la catégorisation
                  par famille et sous famille.
                </li>
                <li className="li_style">
                  • Evoluer les règles d&apos;affichages en relation avec le
                  sous-traitant Informatique.
                </li>
                <li className="li_style">
                  • Former les collaborateurs à l&apos;utilisation de
                  l&apos;ERP.
                </li>
              </ul>
              <p className="container-title1">Service Production:</p>
              <ul className="ul_style">
                <li className="li_style">
                  • Approvisionner les articles hors standards pour les projets
                  hors standards.
                </li>
                <li className="li_style">
                  • Coordiner entre les services internes (Bureau d&apos;études,
                  Production…).
                </li>
              </ul>
              <p className="container-title1">Service Achat : </p>
              <ul className="ul_style">
                <li className="li_style">
                  • Contribuer au sourcing des nouveaux fournisseurs.
                </li>
                <li className="li_style">
                  • Dimensionner et suivre les commandes cadres ( 0.7 M€).
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={<span className="date">Mai 2014 - Septembre 2014</span>}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={
                <div className="icone-container">
                  <img src={iss} alt="iss" className="icone-style" />
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title container-title my-2 leading-6">
                Planificateur
              </h3>
              <h3 className="vertical-timeline-element-title container-title1 py-1">
                ISS France
              </h3>
              <h3 className="vertical-timeline-element-subtitle container-title2">
                Voisins le Bretonneux (78960)
              </h3>
              <p className="container-title1">
                Equiper les logements du client Paris HABIAT par des détecteurs
                de fumée (DAAF):
              </p>

              <ul className="ul_style ">
                <li className="li_style">
                  • Créer et éditer les tournées pour chaque technicien.
                </li>
                <li className="li_style">• Assurer le SAV des DAAF.</li>
                <li className="li_style">• Suivre et communiquer les KPI. </li>
                <li className="li_style">
                  • Encadrer une équipe de 12 techniciens.
                </li>
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
              <h3 className="vertical-timeline-element-title container-title my-2 leading-6">
                Ingénieur en Génie Industriel Option Logistique & Production
                Industrielle.
              </h3>
              <h3 className="vertical-timeline-element-title container-title1 py-1 ">
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
              <h3 className="vertical-timeline-element-title container-title my-2 leading-6">
                Licence Professionnelle Automatique et Informatique Industrielle
                Option Maintenance & Contrôles Non Destructifs
              </h3>
              <h3 className="vertical-timeline-element-title container-title1 py-1">
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
              <h3 className="vertical-timeline-element-title container-title my-2 leading-6">
                DUT en Maintenance Industrielle
              </h3>
              <h3 className="vertical-timeline-element-title container-title1 py-1">
                IUT de FES
              </h3>
              <h3 className="vertical-timeline-element-subtitle container-title2">
                FES (Maroc)
              </h3>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
}

export default React.memo(Experiences);
