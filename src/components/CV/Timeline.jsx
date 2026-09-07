import { useState, useEffect } from 'react';
import MobileTimeline from './MobileTimeline';
import HorizontalTimeline from './HorizontalTimeline';

/* ================================================================
   SHARED DATA: icons, colours, experiences, date helpers, axes
   ================================================================ */

// ---- Inline SVG icons (24×24 viewBox, 2px stroke) ----

const BriefcaseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="12" y1="12" x2="12" y2="12.01" />
  </svg>
);

const GradCapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10L12 5L2 10L12 15L22 10Z" />
    <path d="M6 12V16C6 18 12 19 12 19C12 19 18 18 18 16V12" />
    <path d="M18 10V15" />
  </svg>
);

const FlaskIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6" />
    <line x1="10" y1="3" x2="10" y2="9" />
    <path d="M14 3v5.5L19 17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2l5-8.5V3" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <ellipse cx="12" cy="12" rx="4" ry="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);

export const iconMap = {
  work:      <BriefcaseIcon />,
  education: <GradCapIcon />,
  internship: <FlaskIcon />,
  traveling: <GlobeIcon />,
};

// Colour ramp per `type`.
export const typeColor = {
  work:      '#6366f1', // indigo
  education: '#0ea5e9', // sky
  internship:'#14b8a6', // teal
  //traveling: '#cac7ed',
  traveling: '#d491d2',
};

// ---- Date helpers ----

const MONTHS = {
  jan:0, feb:1, mar:2, apr:3, may:4, jun:5,
  jul:6, aug:7, sep:8, oct:9, nov:10, dec:11,
};

const MONTHS_FR = {
  jan:0, fév:1, 'févr':1, fev:1, fevr:1, mar:2, avr:3, mai:4, juin:5,
  juil:6, aou:7, 'août':7, aout:7, sep:8, oct:9, nov:10, 'déc':11, dec:11,
};

/** Try to match a month abbreviation in both English and French maps. */
function resolveMonth(m3) {
  if (m3 in MONTHS) return MONTHS[m3];
  if (m3 in MONTHS_FR) return MONTHS_FR[m3];
  return null;
}

/** "Month YYYY" or "YYYY" → decimal year (e.g. "Aug 2022" → 2022.625). */
function yearToFloat(label) {
  if (!label) return null;
  const m = String(label).trim().match(/^([a-zÀ-ÿ]{3,9})\s+(\d{4})$/i);
  if (m) {
    const ml = m[1].toLowerCase().slice(0, 3);
    const yr = Number(m[2]);
    const monthIdx = resolveMonth(ml);
    return monthIdx !== null && !isNaN(yr) ? yr + monthIdx / 12 : yr;
  }
  const y = String(label).trim().match(/^(\d{4})$/);
  return y ? Number(y[1]) : null;
}

function monthFromLabel(label) {
  if (!label) return null;
  const m = String(label).trim().match(/^([a-zÀ-ÿ]{3,9})\s+\d{4}$/i);
  if (m) {
    const ml = m[1].toLowerCase().slice(0, 3);
    return resolveMonth(ml);
  }
  return null;
}

/** Parse "Start - End" into { start, end, present, point, startMonth, endMonth }. */
function parseRange(label, nowYearFloat) {
  const s = String(label || '');
  const present = /present|now|présent$/i.test(s);
  const parts = s.split(/[-–—]+/).map((p) => p.trim()).filter(Boolean);
  const startLabel = parts[0];
  const endLabel = parts[1];
  const start = yearToFloat(startLabel);
  const startMonth = monthFromLabel(startLabel);
  let end = endLabel ? yearToFloat(endLabel) : start;
  let endMonth = endLabel ? monthFromLabel(endLabel) : startMonth;
  if (present) { end = nowYearFloat; endMonth = Math.round((nowYearFloat - Math.floor(nowYearFloat)) * 12); }
  return {
    start: start ?? end ?? nowYearFloat,
    end: end ?? start ?? nowYearFloat,
    present,
    point: !endLabel && !present,
    startLabel: startLabel || '',
    endLabel: endLabel || '',
    startMonth,
    endMonth,
  };
}

// ---- Experience data (source of truth) ----
// Keep both locale arrays in sync when updating the CV.

const EXPERIENCES_EN = [
  {
    id: 'coordinator',
    displayRange: 'January 2026 - Present',
    startLabel: 'January 2026',
    endLabel: 'Present',
    title: 'Coordinator',
    subtitle: 'CNC Collective',
    location: 'Grenoble',
    displayOrder: 0,
    type: 'work',
    isCurrent: true,
    content: (
      <ul className="ht-bullets">
        <li>Coordinator of a <b>6+ member collaborative developer collective</b> focused on distributed technologies and scalable application architecture.</li>
        <li>Provided to members: Proof-of-Stake full-node hosting and liquid staking services powered by the <a href="https://stakewise.io" target="_blank" rel="noopener noreferrer" className="ht-link">StakeWise V3</a> protocol.</li>
        <li><b>Cross-functional team coordination and technical leadership</b> across the collective's services: <a href="https://ai.omicsverse.fr" target="_blank" rel="noopener noreferrer" className="ht-link">ai.omicsverse.fr</a> and <a href="https://cloud.omicsverse.fr" target="_blank" rel="noopener noreferrer" className="ht-link">cloud.omicsverse.fr</a>.</li>
      </ul>
    ),
  },
  {
    id: 'chuga',
    displayRange: 'August 2022 - Present',
    startLabel: 'August 2022',
    endLabel: 'Present',
    title: 'Clinical Bioinformatics Engineer',
    subtitle: <>University Hospital (<a href="https://www.chu-grenoble.fr/" target="_blank" rel="noopener noreferrer" className="ht-link">CHUGA</a>) Molecular Biology Platform - Bioinformatics & Data Platform</>,
    location: 'Grenoble',
    displayOrder: 1,
    type: 'work',
    isCurrent: true,
    content: (
      <ul className="ht-bullets">
        <li>Developed and deployed an automated sample-identity verification (identitovigilance) pipeline for early detection of sample swaps, with real-time alerts to analytical teams and lead medical biologists — <b>monitoring 2,000+ patient samples/year</b>.</li>
        <li>Deployed AI assistants for QC triage and report drafting, used daily by 10+ biologists and engineers, <b>reducing report turnaround time by 30%</b>.</li>
        <li>Integrated 2 analysis pipelines with the laboratory information system (LIS), eliminating manual data entry for 2,000+ samples/year and <b>cutting result delivery time by 60%, with automated off-hours operation</b>.</li>
        <li>Engineered a <a href="https://clbenoit.github.io/portfolio/en/blog/nanodiag" target="_blank" rel="noopener noreferrer" className="ht-link">deep-learning molecular diagnostics pipeline</a> for rapid brain tumor classification on Oxford Nanopore sequencing: re-engineered the sequencing target panel as classifier input, restoring reliable confidence scores across 3 DL algorithms benchmarked against the clinical state-of-the-art random forest (published 2023, still reference in 2025).</li>
        <li>Owned the real-time monitoring layer of this pipeline — live classification, early alerts, automated run interruption at confidence threshold — generating <b>substantial wet-lab reagent cost savings</b>.</li>
        <li>Delivered data analysis for <a href="https://doi.org/10.1016/j.omtn.2024.102259" target="_blank" rel="noopener noreferrer" className="ht-link">peer-reviewed publications</a>, <a href="https://github.com/clbenoit/CutOneStrand" target="_blank" rel="noopener noreferrer" className="ht-link">open-source software</a>, and a <a href="https://clbenoit.github.io/portfolio/en/blog//circrnas" target="_blank" rel="noopener noreferrer" className="ht-link">doctoral dissertation</a> (Léa Cerato, IAB, defended April 2025).</li>
        <li>Authored quality documentation and SOPs for NF EN ISO 15189 accreditation — <b>COFRAC audit passed with zero non-conformities</b>.</li>
        <li>Designed and owned 7 internal web applications (4 data analysis, 3 lab operations, incl. variant interpretation interfaces), <b>adopted across the platform's ~40-user base</b>.</li>
        <li>Deployed all pipelines on sovereign on-premises infrastructure; administered a fleet of 10+ wet- and dry-lab instruments (AVITI, NextSeq 550 ×2, Ion S5, GridION).</li>
      </ul>
    ),
  },
  {
    id: 'break',
    displayRange: 'April 2022 - July 2022',
    startLabel: 'April 2022',
    endLabel: 'July 2022',
    title: 'Career Break — Travel & Continuous Learning',
    subtitle: null,
    location: 'Europe',
    displayOrder: 2,
    type: 'traveling',
    content: (
      <ul className="ht-bullets">
        <li><b>Self-directed intensive study</b> in Machine Learning & Deep Learning through online coursework and personal projects during 8+ months of travel across Europe.</li>
        <li><b>Adaptability & autonomy</b> — solo logistics, budget, and real-time decision-making across diverse cultural environments.</li>
      </ul>
    ),
  },
  {
    id: 'curie',
    displayRange: 'March 2019 - March 2022',
    startLabel: 'March 2019',
    endLabel: 'March 2022',
    title: 'Research Engineer',
    subtitle: 'Institut Curie, Bioinformatics Core Facility',
    location: 'Paris',
    displayOrder: 3,
    type: 'work',
    content: (
      <ul className="ht-bullets">
        <li>Performed <b>70+ statistical analyses across 3 research projects</b> over 3 years, contributing to multiple peer-reviewed publications (<b>npj Precision Oncology, Nature, Current Oncology</b>) in precision oncology, single-cell epigenomics and melanoma research.</li>
        <li>Developed and operationalised 3 <a href="https://clbenoit.github.io/portfolio/en/projects/" target="_blank" rel="noopener noreferrer" className="ht-link">R Shiny applications</a> for omics data analysis and visualisation, <b>enabling non-technical researchers to explore large-scale biological results interactively.</b></li>
        <li>Built <a href="https://github.com/orgs/bioinfo-pf-curie/repositories" target="_blank" rel="noopener noreferrer" className="ht-link">automated omics analysis pipelines</a> for bulk & single-cell RNA-Seq, ChIP-Seq, ATAC-Seq, and targeted gene panels.</li>
        <li>Benchmarked existing pipelines to guide platform tooling choices; developed 2 reproducible bioinformatics pipelines.</li>
        <li><b>Trained 120+ biologists and clinicians</b> in data analysis with Python/R and common bioinformatics tools.</li>
      </ul>
    ),
  },
  {
    id: 'firalis',
    displayRange: 'Feb 2018 - March 2019',
    startLabel: 'Feb 2018',
    endLabel: 'March 2019',
    title: 'R&D Intern',
    subtitle: 'FIRALIS S.A.',
    location: 'Huningue, Biovalley',
    displayOrder: 4,
    type: 'internship',
    content: (
      <ul className="ht-bullets">
        <li>Contributed to the R&D of a <a href="https://www.firalis.com/home" target="_blank" rel="noopener noreferrer" className="ht-link">diagnostic test</a> based on transcriptomic biomarkers (lncRNAs) <b>predicting heart failure risk after myocardial infarction.</b></li>
        <li>Curated, processed and analyzed high-throughput transcriptomic datasets from patient cohorts, <b>delivering analysis-ready data for predictive modeling</b>.</li>
        <li>Tracked model performance across R&D iterations, <b>documenting sensitivity gains of the biomarker signature during development.</b></li>
        <li>Built quality-control and reproducibility standards into the analysis workflow, <b>securing robust downstream analyses</b>.</li>
        <li>Documented methods and results for scientific reporting, <b>traceability and knowledge transfer within the R&D team.</b></li>
      </ul>
    ),
  },
  {
    id: 'dual-master',
    displayRange: 'September 2017 - August 2018',
    startLabel: 'September 2017',
    endLabel: 'August 2018',
    title: "Dual Master's in Omics Data Analysis",
    subtitle: 'Aix-Marseille University',
    location: 'Marseille',
    displayOrder: 5,
    type: 'education',
    content: (
      <ul className="ht-bullets">
        <li>Applied data science and analytical methods to biology, with applications in omics and bioinformatics.</li>
      </ul>
    ),
  },
  {
    id: 'tgc',
    displayRange: 'May 2017 - Jul 2017',
    startLabel: 'May 2017',
    endLabel: 'Jul 2017',
    title: 'Fundamental Research Intern',
    subtitle: 'TAGC / TGML U1090',
    location: 'Marseille',
    displayOrder: 6,
    type: 'internship',
    content: (
      <ul className="ht-bullets">
        <li>
          Evaluation and comparison of RNA-seq analysis tools (
          <a
            href="https://pachterlab.github.io/kallisto/"
            target="_blank"
            rel="noopener noreferrer"
            className="ht-link"
          >
            Kallisto
          </a>
          ,{' '}
          <a
            href="https://pachterlab.github.io/sleuth_walkthroughs/trapnell/analysis.html"
            target="_blank"
            rel="noopener noreferrer"
            className="ht-link"
          >
            Sleuth
          </a>
          ) to guide the development of a pipeline for studying differential
          isoform expression across experimental conditions.
        </li>
      </ul>
    ),
  },
  {
    id: 'polytech',
    displayRange: 'September 2015 - August 2018',
    startLabel: 'September 2015',
    endLabel: 'August 2018',
    title: "Master's in Biotechnology Engineering",
    subtitle: 'Polytech Marseille',
    location: 'Marseille',
    displayOrder: 7,
    type: 'education',
    content: (
      <ul className="ht-bullets">
        <li>Specializing in Biotechnology — molecular biology, genetic engineering, cell culture, and biochemical engineering.</li>
        <li>Bioprocess engineering — process design, scale-up, and optimization for the production, extraction, and purification of biological compounds, with expertise in analytical quality control and regulatory compliance.</li>
    </ul>
    ),
  },
  {
    id: 'prepa',
    displayRange: '2013 - 2015',
    startLabel: '2013',
    endLabel: '2015',
    title: 'Preparatory Class — Engineering Schools',
    subtitle: 'Carnot High School',
    location: 'Dijon',
    displayOrder: 8,
    type: 'education',
    content: (
      <ul className="ht-bullets">
        <li>Multidisciplinary program covering mathematics, programming, physics, chemistry, and biology, preparing for competitive entrance exams.</li>
      </ul>
    ),
  },
  {
    id: 'bac',
    displayRange: '2013',
    startLabel: '2013',
    endLabel: '',
    title: 'Baccalaureate',
    subtitle: null,
    location: 'Mâcon',
    displayOrder: 9,
    type: 'education',
    content: null,
  },
];

const EXPERIENCES_FR = [
  {
    id: 'coordinator',
    displayRange: 'Janvier 2026 - Présent',
    startLabel: 'Janvier 2026',
    endLabel: 'Présent',
    title: 'Coordinateur',
    subtitle: 'CNC Collective',
    location: 'Grenoble',
    displayOrder: 0,
    type: 'work',
    isCurrent: true,
    content: (
      <ul className="ht-bullets">
        <li>Coordinateur d'un <b>collectif de développement collaboratif de 6+ membres</b> axé sur les technologies distribuées et l'architecture d'applications scalables.</li>
        <li>Services fournis aux membres : hébergement de nœuds complets Proof-of-Stake et services de liquid staking basés sur le protocole <a href="https://stakewise.io" target="_blank" rel="noopener noreferrer" className="ht-link">StakeWise V3</a>.</li>
        <li><b>Coordination d'équipe transverse et leadership technique</b> sur les services du collectif : <a href="https://ai.omicsverse.fr" target="_blank" rel="noopener noreferrer" className="ht-link">ai.omicsverse.fr</a> et <a href="https://cloud.omicsverse.fr" target="_blank" rel="noopener noreferrer" className="ht-link">cloud.omicsverse.fr</a>.</li>
      </ul>
    ),
  },
  {
    id: 'chuga',
    displayRange: 'Août 2022 - Présent',
    startLabel: 'Août 2022',
    endLabel: 'Présent',
    title: 'Ingénieur en Bioinformatique Clinique',
    subtitle: <>Centre Hospitalier Universitaire (<a href="https://www.chu-grenoble.fr/" target="_blank" rel="noopener noreferrer" className="ht-link">CHUGA</a>) Plateforme de Biologie Moléculaire — Plateforme Bioinformatique & Données</>,
    location: 'Grenoble',
    displayOrder: 1,
    type: 'work',
    isCurrent: true,
    content: (
      <ul className="ht-bullets">
        <li>Développement et déploiement d'un pipeline automatisé de vérification d'identité des échantillons (identitovigilance) pour la détection précoce d'erreurs d'échantillonnage, avec alertes en temps réel aux équipes analytiques et biologistes médicaux responsables — <b>surveillance de 2 000+ échantillons patients/an</b>.</li>
        <li>Déploiement d'assistants IA pour le tri des contrôles qualité et la rédaction de comptes-rendus, utilisés quotidiennement par 10+ biologistes et ingénieurs, <b>réduction du délai de rendu des comptes-rendus de 30 %</b>.</li>
        <li>Intégration de 2 pipelines d'analyse avec le système d'information du laboratoire (SIL), éliminant la saisie manuelle pour 2 000+ échantillons/an et <b>réduisant le délai de rendu des résultats de 60 %, avec fonctionnement automatisé hors heures ouvrées</b>.</li>
        <li>Conception d'un <a href="https://clbenoit.github.io/portfolio/fr/blog/nanodiag" target="_blank" rel="noopener noreferrer" className="ht-link">pipeline de diagnostic moléculaire par deep-learning</a> pour la classification rapide de tumeurs cérébrales sur séquençage Oxford Nanopore : refonte du panel de séquençage cible en entrée du classifieur, rétablissant des scores de confiance fiables sur 3 algorithmes de DL comparés à la référence clinique random forest (publié en 2023, toujours référence en 2025).</li>
        <li>Responsable de la couche de monitoring en temps réel de ce pipeline — classification en direct, alertes précoces, interruption automatisée des runs au seuil de confiance — générant des <b>économies substantielles de réactifs de laboratoire</b>.</li>
        <li>Analyse de données pour des <a href="https://doi.org/10.1016/j.omtn.2024.102259" target="_blank" rel="noopener noreferrer" className="ht-link">publications scientifiques</a>, un <a href="https://github.com/clbenoit/CutOneStrand" target="_blank" rel="noopener noreferrer" className="ht-link">logiciel open-source</a> et une <a href="https://clbenoit.github.io/portfolio/fr/blog//circrnas" target="_blank" rel="noopener noreferrer" className="ht-link">thèse doctorale</a> (Léa Cerato, IAB, soutenue en avril 2025).</li>
        <li>Rédaction de la documentation qualité et des SOP pour l'accréditation NF EN ISO 15189 — <b>audit COFRAC réussi avec zéro non-conformité</b>.</li>
        <li>Conception et responsabilité de 7 applications web internes (4 d'analyse de données, 3 d'opérations de laboratoire, dont interfaces d'interprétation de variants), <b>adoptées par les ~40 utilisateurs de la plateforme</b>.</li>
        <li>Déploiement de tous les pipelines sur infrastructure souveraine on-premise ; administration d'un parc de 10+ instruments de laboratoire humide et sec (AVITI, NextSeq 550 ×2, Ion S5, GridION).</li>
      </ul>
    ),
  },
  {
    id: 'break',
    displayRange: 'Avril 2022 - Juillet 2022',
    startLabel: 'Avril 2022',
    endLabel: 'Juillet 2022',
    title: 'Pause Carrière — Voyage & Formation Continue',
    subtitle: null,
    location: 'Europe',
    displayOrder: 2,
    type: 'traveling',
    content: (
      <ul className="ht-bullets">
        <li><b>Étude intensive en autonomie</b> en Machine Learning & Deep Learning via des cours en ligne et projets personnels durant 8+ mois de voyage à travers l'Europe.</li>
        <li><b>Adaptabilité & autonomie</b> — logistique en solo, gestion de budget et prise de décision en temps réel dans des environnements culturels variés.</li>
      </ul>
    ),
  },
  {
    id: 'curie',
    displayRange: 'Mars 2019 - Mars 2022',
    startLabel: 'Mars 2019',
    endLabel: 'Mars 2022',
    title: 'Ingénieur de Recherche',
    subtitle: 'Institut Curie, Plateforme de Bioinformatique',
    location: 'Paris',
    displayOrder: 3,
    type: 'work',
    content: (
      <ul className="ht-bullets">
        <li>Réalisation de <b>70+ analyses statistiques sur 3 projets de recherche</b> en 3 ans, contribuant à plusieurs publications scientifiques (<b>npj Precision Oncology, Nature, Current Oncology</b>) en oncologie de précision, épigénomique single-cell et recherche sur le mélanome.</li>
        <li>Développement et mise en production de 3 <a href="https://clbenoit.github.io/portfolio/fr/projects/" target="_blank" rel="noopener noreferrer" className="ht-link">applications R Shiny</a> pour l'analyse et la visualisation de données omiques, <b>permettant aux chercheurs non-informaticiens d'explorer de manière interactive des résultats biologiques à grande échelle.</b></li>
        <li>Construction de <a href="https://github.com/orgs/bioinfo-pf-curie/repositories" target="_blank" rel="noopener noreferrer" className="ht-link">pipelines d'analyse omique automatisés</a> pour RNA-Seq bulk & single-cell, ChIP-Seq, ATAC-Seq et panels de gènes ciblés.</li>
        <li>Benchmark de pipelines existants pour orienter les choix d'outils de la plateforme ; développement de 2 pipelines bioinformatiques reproductibles.</li>
        <li><b>Formation de 120+ biologistes et cliniciens</b> à l'analyse de données avec Python/R et aux outils bioinformatiques courants.</li>
      </ul>
    ),
  },
  {
    id: 'firalis',
    displayRange: 'Fév 2018 - Mars 2019',
    startLabel: 'Fév 2018',
    endLabel: 'Mars 2019',
    title: 'Stagiaire R&D',
    subtitle: 'FIRALIS S.A.',
    location: 'Huningue, Biovalley',
    displayOrder: 4,
    type: 'internship',
    content: (
      <ul className="ht-bullets">
        <li>Contribution à la R&D d'un <a href="https://www.firalis.com/home" target="_blank" rel="noopener noreferrer" className="ht-link">test diagnostique</a> basé sur des biomarqueurs transcriptomiques (lncRNAs) <b>prédisant le risque d'insuffisance cardiaque après infarctus du myocarde.</b></li>
        <li>Curation, traitement et analyse de jeux de données transcriptomiques haut-débit issus de cohortes de patients, <b>fournissant des données prêtes pour la modélisation prédictive</b>.</li>
        <li>Suivi des performances du modèle à travers les itérations de R&D, <b>documentant les gains de sensibilité de la signature de biomarqueurs au cours du développement.</b></li>
        <li>Mise en place de standards de contrôle qualité et de reproductibilité dans le flux d'analyse, <b>garantissant des analyses aval robustes</b>.</li>
        <li>Documentation des méthodes et résultats pour les rapports scientifiques, <b>assurant la traçabilité et le transfert de connaissances au sein de l'équipe R&D.</b></li>
      </ul>
    ),
  },
  {
    id: 'dual-master',
    displayRange: 'Septembre 2017 - Août 2018',
    startLabel: 'Septembre 2017',
    endLabel: 'Août 2018',
    title: 'Double Master en Analyse de Données Omiques',
    subtitle: 'Aix-Marseille Université',
    location: 'Marseille',
    displayOrder: 5,
    type: 'education',
    content: (
      <ul className="ht-bullets">
        <li>Application des méthodes de science des données et d'analyse à la biologie, avec des applications en omiques et bioinformatique.</li>
      </ul>
    ),
  },
  {
    id: 'tgc',
    displayRange: 'Mai 2017 - Juil 2017',
    startLabel: 'Mai 2017',
    endLabel: 'Juil 2017',
    title: 'Stagiaire en Recherche Fondamentale',
    subtitle: 'TAGC / TGML U1090',
    location: 'Marseille',
    displayOrder: 6,
    type: 'internship',
    content: (
      <ul className="ht-bullets">
        <li>
          Évaluation et comparaison d'outils d'analyse RNA-seq (
          <a
            href="https://pachterlab.github.io/kallisto/"
            target="_blank"
            rel="noopener noreferrer"
            className="ht-link"
          >
            Kallisto
          </a>
          ,{' '}
          <a
            href="https://pachterlab.github.io/sleuth_walkthroughs/trapnell/analysis.html"
            target="_blank"
            rel="noopener noreferrer"
            className="ht-link"
          >
            Sleuth
          </a>
          ) pour guider le développement d'un pipeline d'étude
          d'expression différentielle d'isoformes entre conditions expérimentales.
        </li>
      </ul>
    ),
  },
  {
    id: 'polytech',
    displayRange: 'Septembre 2015 - Août 2018',
    startLabel: 'Septembre 2015',
    endLabel: 'Août 2018',
    title: 'Master en Ingénierie des Biotechnologies',
    subtitle: 'Polytech Marseille',
    location: 'Marseille',
    displayOrder: 7,
    type: 'education',
    content: (
      <ul className="ht-bullets">
        <li>Spécialisation en Biotechnologies — biologie moléculaire, génie génétique, culture cellulaire et génie biochimique.</li>
        <li>Génie des bioprocédés — conception, scale-up et optimisation pour la production, l'extraction et la purification de composés biologiques, avec expertise en contrôle qualité analytique et conformité réglementaire.</li>
    </ul>
    ),
  },
  {
    id: 'prepa',
    displayRange: '2013 - 2015',
    startLabel: '2013',
    endLabel: '2015',
    title: 'Classe Préparatoire — Grandes Écoles d\'Ingénieurs',
    subtitle: 'Lycée Carnot',
    location: 'Dijon',
    displayOrder: 8,
    type: 'education',
    content: (
      <ul className="ht-bullets">
        <li>Programme pluridisciplinaire couvrant mathématiques, programmation, physique, chimie et biologie, préparant aux concours d'entrée des grandes écoles.</li>
      </ul>
    ),
  },
  {
    id: 'bac',
    displayRange: '2013',
    startLabel: '2013',
    endLabel: '',
    title: 'Baccalauréat',
    subtitle: null,
    location: 'Mâcon',
    displayOrder: 9,
    type: 'education',
    content: null,
  },
];

/** Deterministic "now" for SSG builds. Bump when the CV is edited. */
const ROLLOUT_YEAR = 2027 + 1/12; // February 2027

// ---- Duration labels ----

const DURATION = {
  fr: { y: 'an', ys: 'ans', m: 'mois' },
  en: { y: 'year', ys: 'years', m: 'months' },
};

/** Format a duration in years/months (inclusive: the end month is counted). */
export function formatDuration(exp, lang = 'en') {
  const { startMonth, endMonth, start, end, present, point } = exp;
  if (point) return '';
  const sm = startMonth ?? 0;
  const em = endMonth ?? (present ? Math.round((end - Math.floor(end)) * 12) : 11);
  const sy = Math.floor(start);
  const ey = Math.floor(end);
  let totalMonths = (ey - sy) * 12 + (em - sm) + 1;
  if (present) {
    const nowMonths = Math.round((end - start) * 12);
    totalMonths = Math.max(1, Math.min(totalMonths, nowMonths));
  }
  if (totalMonths < 1) return '';
  const y = Math.floor(totalMonths / 12);
  const m = totalMonths % 12;
  const L = DURATION[lang] || DURATION.en;
  if (y === 0) return `${m} ${L.m}`;
  if (m === 0) return `${y} ${y > 1 ? L.ys : L.y}`;
  return `${y} ${y > 1 ? L.ys : L.y} ${m} ${L.m}`;
}

// Pre-compute numeric bounds for every entry (module-level, once per locale).
function enrichExperiences(experiences) {
  return experiences.map((exp) => {
    const { start, end, present, point, startLabel, endLabel, startMonth, endMonth } =
      parseRange(`${exp.startLabel} - ${exp.endLabel}`, ROLLOUT_YEAR);
    return { ...exp, start, end, present, point, startLabel, endLabel, startMonth, endMonth };
  });
}

export const enriched_EN = enrichExperiences(EXPERIENCES_EN);
export const enriched_FR = enrichExperiences(EXPERIENCES_FR);

// Global axis bounds (computed from English data; identical for French).
const allStarts = enriched_EN.map((e) => e.start);
const allEnds = enriched_EN.map((e) => e.end);
export const AXIS_MIN = Math.min(...allStarts, ROLLOUT_YEAR);
const RAW_AXIS_MAX = Math.max(...allEnds, ROLLOUT_YEAR);
export const AXIS_MAX = RAW_AXIS_MAX + 0.8;
export const AXIS_PAD = (AXIS_MAX - AXIS_MIN) * 0.02 || 0.1;

/** Lane order: newest → oldest using displayOrder. */
function sortForLanes(enriched) {
  return [...enriched].sort(
    (a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0)
  );
}

export const sortedForLanes_EN = sortForLanes(enriched_EN);
export const sortedForLanes_FR = sortForLanes(enriched_FR);

/* ================================================================
   TOP-LEVEL SWITCH: mobile vs desktop
   ================================================================ */

const BREAKPOINT = 768;

export default function Timeline({ lang }) {
  const locale = lang === 'fr' ? 'fr' : 'en';
  const enriched = locale === 'fr' ? enriched_FR : enriched_EN;
  const sortedForLanes = locale === 'fr' ? sortedForLanes_FR : sortedForLanes_EN;

  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= BREAKPOINT);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isDesktop === null) return null;
  return isDesktop
    ? <HorizontalTimeline lang={locale} enriched={enriched} sortedForLanes={sortedForLanes} />
    : <MobileTimeline lang={locale} enriched={enriched} />;
}
