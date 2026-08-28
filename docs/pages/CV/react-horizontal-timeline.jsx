import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

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

const iconMap = {
  work:      <BriefcaseIcon />,
  education: <GradCapIcon />,
  internship: <FlaskIcon />,
  traveling: <GlobeIcon />,
};

// Colour ramp per `type`, used for the Gantt bars. A single hue per category
// keeps the chart scannable; the gradient is reserved for the time axis.
const typeColor = {
  work:      '#6366f1', // indigo
  education: '#0ea5e9', // sky
  internship:'#14b8a6', // teal
  //traveling: '#f59e0b', // amber
  //traveling: '#d97706',
  //traveling: 'rgb(167, 104, 140)'
  traveling: '#be5b84'
  //traveling: '#b85474'
};

/**
 * Convert a "Month YYYY" or "YYYY" human label to a decimal year, e.g.
 * "Aug 2022" -> 2022.625, "2013" -> 2013.0. Used only to compute bar
 * positions/widths; the human label is always displayed verbatim alongside.
 */
const MONTHS = {
  jan:0, feb:1, mar:2, apr:3, may:4, jun:5,
  jul:6, aug:7, sep:8, oct:9, nov:10, dec:11,
};
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

/**
 * Parse a "Start - End" range label into { start, end, present, point, startMonth, endMonth }.
 * `end` of `present` is pinned to `NOW` by the caller.
 * `startMonth`/`endMonth` are integer 0-11 for duration calculation.
 */
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
    point: !endLabel && !present, // e.g. "2013" only
    startLabel: startLabel || '',
    endLabel: endLabel || '',
    startMonth: startMonth,   // null when only year is known
    endMonth: endMonth,       // null when only year is known
  };
}

/** Extract integer month index (0=Jan) from a "Month YYYY" label, or null for YYYY-only. */
function monthFromLabel(label) {
  if (!label) return null;
  const m = String(label).trim().match(/^([a-z]{3,9})\s+\d{4}$/i);
  if (m) {
    const ml = m[1].toLowerCase().slice(0, 3);
    return MONTHS[ml] ?? null;
  }
  return null;
}

/**
 * The source of truth. Each entry is one *role/experience* = one lane.
 * Dates are kept as human labels, plus numeric bounds for chart layout.
 * `displayRange` is the exact string shown to the reader.
 */
const experiences = [
  {
    id: 'coordinator',
    displayRange: 'January 2026 - Present',
    startLabel: 'January 2026',
    endLabel: 'Present',
    title: 'Coordinator',
    subtitle: 'CNC Collective',
    type: 'work',
    isCurrent: true,
    content: (
      <ul className="ht-bullets">
        <li>Coordinator of a 6+ member collaborative developer collective focused on distributed technologies and scalable application architecture.</li>
        <li>Provided to members: Proof-of-Stake full-node hosting and liquid staking services powered by the <a href="https://stakewise.io" target="_blank" rel="noopener noreferrer" className="ht-link">StakeWise V3</a> protocol.</li>
        <li>Cross-functional team coordination and technical leadership across the collective's services: <a href="https://ai.omicsverse.fr" target="_blank" rel="noopener noreferrer" className="ht-link">ai.omicsverse.fr</a> and <a href="https://cloud.omicsverse.fr" target="_blank" rel="noopener noreferrer" className="ht-link">cloud.omicsverse.fr</a>.</li>
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
    type: 'work',
    isCurrent: true,
    content: (
      <ul className="ht-bullets">
        <li>Developed and deployed an automated sample-identity verification (identitovigilance) pipeline for early detection of sample swaps, with real-time alerts to analytical teams and lead medical biologists — monitoring 2,000+ patient samples/year.</li>
        <li>Deployed AI assistants for QC triage and report drafting, used daily by 10+ biologists and engineers, reducing report turnaround time by 30%.</li>
        <li>Integrated 2 analysis pipelines with the laboratory information system (LIS), eliminating manual data entry for 2,000+ samples/year and cutting result delivery time by 60%, with automated off-hours operation.</li>
        <li>Engineered a <a href="https://clbenoit.github.io/portfolio/blog/nanodiag" target="_blank" rel="noopener noreferrer" className="ht-link">deep-learning molecular diagnostics pipeline</a> for rapid brain tumor classification on Oxford Nanopore sequencing: re-engineered the sequencing target panel as classifier input, restoring reliable confidence scores across 3 DL algorithms benchmarked against the clinical state-of-the-art random forest (published 2023, still reference in 2025).</li>
        <li>Owned the real-time monitoring layer of this pipeline — live classification, early alerts, automated run interruption at confidence threshold — generating substantial wet-lab reagent cost savings.</li>
        <li>Delivered data analysis for <a href="https://doi.org/10.1016/j.omtn.2024.102259" target="_blank" rel="noopener noreferrer" className="ht-link">peer-reviewed publications</a>, <a href="https://github.com/clbenoit/CutOneStrand" target="_blank" rel="noopener noreferrer" className="ht-link">open-source software</a>, and a <a href="https://clbenoit.github.io/portfolio/blog/circRNAs" target="_blank" rel="noopener noreferrer" className="ht-link">doctoral dissertation</a> (Léa Cerato, IAB, defended April 2025).</li>
        <li>Authored quality documentation and SOPs for NF EN ISO 15189 accreditation — COFRAC audit passed with zero non-conformities.</li>
        <li>Designed and owned 7 internal web applications (4 data analysis, 3 lab operations, incl. variant interpretation interfaces), adopted across the platform's ~40-user base.</li>
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
    subtitle: 'Europe',
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
    type: 'work',
    content: (
      <ul className="ht-bullets">
        <li>Performed 70+ statistical analyses across 3 research projects over 3 years, contributing to multiple peer-reviewed publications (npj Precision Oncology, Nature, Current Oncology) in precision oncology, single-cell epigenomics and melanoma research.</li>
        <li>Developed and operationalised 3 <a href="https://clbenoit.github.io/portfolio/projects/" target="_blank" rel="noopener noreferrer" className="ht-link">R Shiny applications</a> for omics data analysis and visualisation, enabling non-technical researchers to explore large-scale biological results interactively.</li>
        <li>Built <a href="https://github.com/orgs/bioinfo-pf-curie/repositories" target="_blank" rel="noopener noreferrer" className="ht-link">automated omics analysis pipelines</a> for bulk & single-cell RNA-Seq, ChIP-Seq, ATAC-Seq, and targeted gene panels.</li>
        <li>Benchmarked existing pipelines to guide platform tooling choices; developed 2 reproducible bioinformatics pipelines.</li>
        <li>Trained 120+ biologists and clinicians in data analysis with Python/R and common bioinformatics tools.</li>
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
    type: 'internship',
    content: (
      <ul className="ht-bullets">
        <li>Contributed to the R&D of a <a href="https://www.firalis.com/home" target="_blank" rel="noopener noreferrer" className="ht-link">diagnostic test</a> based on transcriptomic biomarkers (lncRNAs) predicting heart failure risk after myocardial infarction.</li>
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
    type: 'education',
    content: (
      <ul className="ht-bullets">
        <li><b>Specialized in Genomics & Bioinformatics</b> track — high-throughput sequencing technologies (NGS), transcriptomics, epigenomics, and proteomics data analysis.</li>
        <li><b>Hands-on bioinformatics</b> — statistical and functional analysis of genomic datasets using biological databases (NCBI, Ensembl, UniProt) and command-line tools.</li>
        <li><b>Dual-competence curriculum</b> combining experimental molecular biology with computational data science, preparing for both academic research and industry roles.</li>
        <li>6-month <b>industrial research and development internship</b> applying omics workflows to real biological questions.</li>
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
    subtitle: 'Mâcon',
    type: 'education',
    content: null,
  },
];

/**
 * "NOW" as a decimal year, pinned to a fixed rollout date so the chart is
 * deterministic server-side (SSG) and in tests. Bump when the CV is edited.
 */
const ROLLOUT_YEAR = 2027 + 1/12; // February 2027

/** Format a duration in years/months (inclusive: the end month is counted). */
function formatDuration(exp) {
  const { startMonth, endMonth, start, end, present, point } = exp;
  if (point) return '';
  // Months unknown (year-only labels) → default to Jan(0)-Dec(11)
  const sm = startMonth ?? 0;
  const em = endMonth ?? (present ? Math.round((end - Math.floor(end)) * 12) : 11);
  const sy = Math.floor(start);
  const ey = Math.floor(end);
  // Inclusive: May (4) → Jul (6) = 3 months
  let totalMonths = (ey - sy) * 12 + (em - sm) + 1;
  if (present) {
    // Never exceed the real difference from ROLLOUT_YEAR
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

// Pre-compute numeric bounds + duration for every entry (once, module-level).
const enriched = experiences.map((exp) => {
  const { start, end, present, point, startLabel, endLabel, startMonth, endMonth } =
    parseRange(`${exp.startLabel} - ${exp.endLabel}`, ROLLOUT_YEAR);
  return { ...exp, start, end, present, point, startLabel, endLabel, startMonth, endMonth };
});

// Global axis bounds. We extend AXIS_MAX by ~10 months so "Present" bars
// don't hit the right edge — the gap visually says "and continuing".
const allStarts = enriched.map((e) => e.start);
const allEnds = enriched.map((e) => e.end);
const AXIS_MIN = Math.min(...allStarts, ROLLOUT_YEAR);
const RAW_AXIS_MAX = Math.max(...allEnds, ROLLOUT_YEAR);
const AXIS_MAX = RAW_AXIS_MAX + 0.8; // ~10 months of breathing room on the right
const AXIS_PAD = (AXIS_MAX - AXIS_MIN) * 0.02 || 0.1;

/** Lane order: newest end date → oldest end date, then stable by id. */
const sortedForLanes = [...enriched].sort(
  (a, b) => b.end - a.end || b.start - a.start || a.id.localeCompare(b.id)
);

const HorizontalTimeline = () => {
  const ganttRef = useRef(null);
  const [activeId, setActiveId] = useState(
    enriched.find((e) => e.isCurrent)?.id || enriched[0].id
  );

  // On mount, scroll so the junction between the SkillsGrid (above) and the
  // Gantt chart (below) sits near the top third of the viewport — the user
  // sees the bottom of the skills and the start of the timeline together.
  useEffect(() => {
    const el = ganttRef.current;
    if (!el) return;
    // getBoundingClientRect().top + window.scrollY gives the absolute page
    // position; subtract a third of the viewport height to reveal the
    // SkillsGrid just above the Gantt.
    const ganttTop = el.getBoundingClientRect().top + window.scrollY;
    const target = ganttTop - window.innerHeight / 3;
    window.scrollTo({ top: Math.max(0, target), behavior: 'instant' });
  }, []);

  // Convert a fractional year to a left-% within the axis (with padding).
  const toPct = useCallback((year) => {
    const span = AXIS_MAX - AXIS_MIN || 1;
    return ((year - AXIS_MIN) / span) * 100;
  }, []);

  const leftPct = useCallback((year) => {
    const span = AXIS_MAX - AXIS_MIN || 1;
    const raw = ((year - AXIS_MIN) / span) * 100;
    const padPct = (AXIS_PAD / span) * 100;
    return raw + padPct;
  }, []);

  const widthPct = useCallback((start, end) => {
    const span = AXIS_MAX - AXIS_MIN || 1;
    return ((end - start) / span) * 100;
  }, []);

  return (
    <div className="ht-wrapper">
      <div className="ht-scroll">
        {/* Time axis ruler generated from the year bounds */}
        <div className="ht-gantt" ref={ganttRef}>
          {/* Year gridlines (light), one per year between AXIS_MIN and AXIS_MAX */}
          <div className="ht-grid" aria-hidden="true">
            {(() => {
              const ticks = [];
              const firstYear = Math.floor(AXIS_MIN) + 1;
              const lastYear = Math.floor(AXIS_MAX);
              for (let y = firstYear; y <= lastYear; y++) {
                ticks.push(
                  <span
                    key={y}
                    className="ht-grid-line"
                    style={{ left: `${toPct(y)}%` }}
                  >
                    <em className="ht-grid-label">{y}</em>
                  </span>
                );
              }
              return ticks;
            })()}
          </div>

          {/* One lane per experience (oldest → newest) */}
          {sortedForLanes.map((exp) => {
            const isActive = exp.id === activeId;
            const left = leftPct(exp.start);
            const width = widthPct(exp.start, exp.end);
            const duration = formatDuration(exp);
            return (
              <div
                key={exp.id}
                className={`ht-lane ${isActive ? 'ht-lane-active' : ''}`}
                data-id={exp.id}
                onClick={() => setActiveId(exp.id)}
              >
                <div className="ht-lane-label">
                  {isActive && <span className="ht-lane-focus-marker" />}
                  <span className="ht-lane-icon" style={{ background: typeColor[exp.type] }}>
                    {iconMap[exp.type]}
                  </span>
                  <span className="ht-lane-title">{exp.title}</span>
                  <span className="ht-lane-date">{exp.displayRange}</span>
                  {duration && <span className="ht-lane-duration">{duration}</span>}
                </div>

                {/* The Gantt bar — width proportional to real duration */}
                <div className="ht-lane-row">
                  <div
                    className={`ht-bar ${exp.point ? 'ht-bar-point' : ''} ${exp.present ? 'ht-bar-present' : ''}`}
                    style={{
                      left: `${left}%`,
                      width: exp.point ? '10px' : `${width}%`,
                      background: typeColor[exp.type],
                    }}
                  />
                </div>

                {/* Details card, shown/highlighted when this lane is active */}
                {(exp.content || exp.subtitle) && (
                  <div className="ht-lane-detail">
                    <h4 className="ht-card-subtitle">{exp.subtitle}</h4>
                    {exp.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Re-add chevrons for mobile timeline arrows
const ChevronLeft = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const ChevronRight = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const BREAKPOINT = 768;

/**
 * Mobile timeline — simple horizontal slider with one card per experience,
 * snap scrolling, and left/right arrows. No Gantt lanes.
 * Chronological order: oldest (left) → newest (right).
 */
const MobileTimeline = () => {
  // Chronological: oldest → newest (left to right)
  const chronological = useMemo(
    () => [...enriched].sort((a, b) => a.start - b.start || a.id.localeCompare(b.id)),
    []
  );
  const total = chronological.length;
  const scrollRef = useRef(null);
  const defaultIdx = chronological.findIndex((e) => e.isCurrent);
  const [current, setCurrent] = useState(Math.max(0, defaultIdx));

  const scrollTo = useCallback((index) => {
    const container = scrollRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(index, total - 1));
    const station = container.querySelector(`[data-idx="${clamped}"]`);
    if (station) {
      const left = station.offsetLeft - (container.clientWidth - station.clientWidth) / 2;
      container.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
      setCurrent(clamped);
    }
  }, [total]);

  const goPrev = useCallback(() => scrollTo(current - 1), [scrollTo, current]);
  const goNext = useCallback(() => scrollTo(current + 1), [scrollTo, current]);
  const isFirst = current <= 0;
  const isLast = current >= total - 1;

  // Mount: center on the current role
  useEffect(() => {
    if (defaultIdx >= 0) {
      setTimeout(() => scrollTo(defaultIdx), 200);
    }
  }, [scrollTo, defaultIdx]);

  return (
    <div className="hm-wrapper">
      <button
        type="button"
        className="hm-arrow hm-arrow-left"
        onClick={goPrev}
        disabled={isFirst}
        aria-label="Previous experience"
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        className="hm-arrow hm-arrow-right"
        onClick={goNext}
        disabled={isLast}
        aria-label="Next experience"
      >
        <ChevronRight />
      </button>
      <div className="hm-scroll" ref={scrollRef}>
        <div className="hm-line" />
        <div className="hm-track">
          {chronological.map((exp, i) => {
            const duration = formatDuration(exp);
            return (
              <div key={exp.id} className="hm-station" data-idx={i}>
                <div className="hm-dot" style={{ background: typeColor[exp.type] }}>
                  <span className="hm-dot-icon">{iconMap[exp.type]}</span>
                </div>
                <div className="hm-card">
                  <div className="hm-card-date">{exp.displayRange}</div>
                  {duration && <span className="hm-card-duration">{duration}</span>}
                  <h3 className="hm-card-title">{exp.title}</h3>
                  <h4 className="hm-card-subtitle">{exp.subtitle}</h4>
                  {exp.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hm-nav">
        {chronological.map((_, i) => (
          <button
            key={i}
            className={`hm-nav-dot ${i === current ? 'hm-nav-dot-active' : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={`Go to experience ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * Top-level component: renders the Gantt chart on desktop (≥ 768px) and
 * the simple horizontal slider on mobile.
 */
const Timeline = () => {
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= BREAKPOINT);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isDesktop === null) return null; // SSR / first paint — render nothing
  return isDesktop ? <HorizontalTimeline /> : <MobileTimeline />;
};

export default Timeline;
