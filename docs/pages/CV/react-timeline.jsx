import { useState, useEffect } from 'react';
import MobileTimeline from './timeline-mobile';
import HorizontalTimeline from './timeline-gantt';

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

/** "Month YYYY" or "YYYY" → decimal year (e.g. "Aug 2022" → 2022.625). */
function yearToFloat(label) {
  if (!label) return null;
  const m = String(label).trim().match(/^([a-z]{3,9})\s+(\d{4})$/i);
  if (m) {
    const ml = m[1].toLowerCase().slice(0, 3);
    const yr = Number(m[2]);
    return ml in MONTHS && !isNaN(yr) ? yr + MONTHS[ml] / 12 : yr;
  }
  const y = String(label).trim().match(/^(\d{4})$/);
  return y ? Number(y[1]) : null;
}

function monthFromLabel(label) {
  if (!label) return null;
  const m = String(label).trim().match(/^([a-z]{3,9})\s+\d{4}$/i);
  if (m) {
    const ml = m[1].toLowerCase().slice(0, 3);
    return MONTHS[ml] ?? null;
  }
  return null;
}

/** Parse "Start - End" into { start, end, present, point, startMonth, endMonth }. */
function parseRange(label, nowYearFloat) {
  const s = String(label || '');
  const present = /present|now$/i.test(s);
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

const experiences = [
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
        <li>Engineered a <a href="https://clbenoit.github.io/portfolio/blog/nanodiag" target="_blank" rel="noopener noreferrer" className="ht-link">deep-learning molecular diagnostics pipeline</a> for rapid brain tumor classification on Oxford Nanopore sequencing: re-engineered the sequencing target panel as classifier input, restoring reliable confidence scores across 3 DL algorithms benchmarked against the clinical state-of-the-art random forest (published 2023, still reference in 2025).</li>
        <li>Owned the real-time monitoring layer of this pipeline — live classification, early alerts, automated run interruption at confidence threshold — generating <b>substantial wet-lab reagent cost savings</b>.</li>
        <li>Delivered data analysis for <a href="https://doi.org/10.1016/j.omtn.2024.102259" target="_blank" rel="noopener noreferrer" className="ht-link">peer-reviewed publications</a>, <a href="https://github.com/clbenoit/CutOneStrand" target="_blank" rel="noopener noreferrer" className="ht-link">open-source software</a>, and a <a href="https://clbenoit.github.io/portfolio/blog/circRNAs" target="_blank" rel="noopener noreferrer" className="ht-link">doctoral dissertation</a> (Léa Cerato, IAB, defended April 2025).</li>
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
        <li><b>Cross-cultural immersion</b> across 8+ European countries — adaptability, resourcefulness, and communication in diverse environments.</li>
        <li><b>Self-directed intensive study</b> in Machine Learning & Deep Learning through online coursework and personal projects during travel.</li>
        <li><b>Solo project management</b> — budget, logistics, and itinerary planning with real-time decision-making under uncertainty.</li>
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
        <li>Developed and operationalised 3 <a href="https://clbenoit.github.io/portfolio/projects/" target="_blank" rel="noopener noreferrer" className="ht-link">R Shiny applications</a> for omics data analysis and visualisation, enabling non-technical researchers to explore large-scale biological results interactively.</li>
        <li>Built <a href="https://github.com/orgs/bioinfo-pf-curie/repositories" target="_blank" rel="noopener noreferrer" className="ht-link">automated omics analysis pipelines</a> for bulk & single-cell RNA-Seq, ChIP-Seq, ATAC-Seq, and targeted gene panels.</li>
        <li>Benchmarked existing pipelines to guide platform tooling choices; developed 2 reproducible bioinformatics pipelines.</li>
        <li>Trained <b>120+ biologists and clinicians</b> in data analysis with Python/R and common bioinformatics tools.</li>
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
        <li>Contributed to the R&D of a <a href="https://www.firalis.com/home" target="_blank" rel="noopener noreferrer" className="ht-link">diagnostic test</a> based on transcriptomic biomarkers (lncRNAs) <b>predicting heart failure risk after myocardial infarction</b>.</li>
        <li>Curated, processed and analyzed high-throughput transcriptomic datasets from patient cohorts, delivering analysis-ready data for predictive modeling.</li>
        <li>Tracked model performance across R&D iterations, documenting sensitivity gains of the biomarker signature during development.</li>
        <li>Built quality-control and reproducibility standards into the analysis workflow, securing robust downstream analyses.</li>
        <li>Documented methods and results for scientific reporting, traceability and knowledge transfer within the R&D team.</li>
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
        <li><b>Specialized in Genomics & Bioinformatics</b> track — high-throughput sequencing technologies (NGS), transcriptomics, epigenomics, and proteomics data analysis.</li>
        <li><b>Hands-on bioinformatics</b> — statistical and functional analysis of genomic datasets using biological databases (NCBI, Ensembl, UniProt) and command-line tools.</li>
        <li><b>Dual-competence curriculum</b> combining experimental molecular biology with computational data science, preparing for both academic research and industry roles.</li>
        <li>6-month <b>industrial research and development internship</b> applying omics workflows to biological data modeling.</li>
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
        <li>Benchmarked a pipeline combining quantitative and qualitative transcriptome analysis to reveal isoform expression switches between experimental conditions.</li>
        <li>Main tools: <a href="https://pachterlab.github.io/kallisto/" target="_blank" rel="noopener noreferrer" className="ht-link">Kallisto</a>, <a href="https://pachterlab.github.io/sleuth_walkthroughs/trapnell/analysis.html" target="_blank" rel="noopener noreferrer" className="ht-link">Sleuth</a></li>
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
        <li><b>French Grande École engineering program</b> specializing in Health & Environmental Biotechnology — molecular biology, genetic engineering, cell culture, and biochemical engineering.</li>
        <li><b>Bioprocess engineering</b> — design, production, extraction, and purification of biological compounds using microorganisms and cell systems, with analytical quality control under GxP standards.</li>
        <li><b>Dual-degree curriculum</b> completed concurrently with a research Master's in Structural Biology & Genomics — <b>bridging industrial engineering rigor with academic omics expertise.</b></li>
        <li>6-month <b>industrial R&D internship</b> in a professional environment, plus international mobility training.</li>
      </ul>
    ),
  },
  {
    id: 'prepa',
    displayRange: '2013 - 2015',
    startLabel: '2013',
    endLabel: '2015',
    title: 'Preparatory Class — Engineering Schools',
    subtitle: 'Carnot High School, Dijon',
    location: 'Dijon',
    displayOrder: 8,
    type: 'education',
    content: (
      <ul className="ht-bullets">
        <li>Mathematics, Programming, Physics, Chemistry, Biology, Life & Earth Sciences.</li>
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

/** Deterministic "now" for SSG builds. Bump when the CV is edited. */
const ROLLOUT_YEAR = 2027 + 1/12; // February 2027

/** Format a duration in years/months (inclusive: the end month is counted). */
export function formatDuration(exp) {
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
  if (y === 0) return `${m} mois`;
  if (m === 0) return `${y} an${y > 1 ? 's' : ''}`;
  return `${y} an${y > 1 ? 's' : ''} ${m} mois`;
}

// Pre-compute numeric bounds for every entry (module-level, once).
export const enriched = experiences.map((exp) => {
  const { start, end, present, point, startLabel, endLabel, startMonth, endMonth } =
    parseRange(`${exp.startLabel} - ${exp.endLabel}`, ROLLOUT_YEAR);
  return { ...exp, start, end, present, point, startLabel, endLabel, startMonth, endMonth };
});

// Global axis bounds.
const allStarts = enriched.map((e) => e.start);
const allEnds = enriched.map((e) => e.end);
export const AXIS_MIN = Math.min(...allStarts, ROLLOUT_YEAR);
const RAW_AXIS_MAX = Math.max(...allEnds, ROLLOUT_YEAR);
export const AXIS_MAX = RAW_AXIS_MAX + 0.8; // ~10 months breathing room
export const AXIS_PAD = (AXIS_MAX - AXIS_MIN) * 0.02 || 0.1;

/** Lane order: newest → oldest using displayOrder. */
export const sortedForLanes = [...enriched].sort(
  (a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0)
);

/* ================================================================
   TOP-LEVEL SWITCH: mobile vs desktop
   ================================================================ */

const BREAKPOINT = 768;

export default function Timeline() {
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= BREAKPOINT);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isDesktop === null) return null;
  return isDesktop ? <HorizontalTimeline /> : <MobileTimeline />;
}