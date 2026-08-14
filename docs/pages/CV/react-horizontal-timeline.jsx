import { useState, useRef, useEffect, useCallback } from 'react';

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

const PencilIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
  </svg>
);

const iconMap = {
  work:      <BriefcaseIcon />,
  education: <GradCapIcon />,
  internship: <FlaskIcon />,
  traveling: <GlobeIcon />,
  blog:      <PencilIcon />,
};

// Gradient stops matching the .ht-line CSS gradient
const gradientStops = [
  { pos: 0,   rgb: [124, 58, 237]  },  // #7c3aed
  { pos: 20,  rgb: [99, 102, 241]  },  // #6366f1
  { pos: 40,  rgb: [59, 130, 246]  },  // #3b82f6
  { pos: 60,  rgb: [14, 165, 233]  },  // #0ea5e9
  { pos: 80,  rgb: [100, 116, 139] },  // #64748b
  { pos: 100, rgb: [148, 163, 184] },  // #94a3b8
];

/** Interpolate the gradient colour at a given percentage (0-100) */
function getGradientColor(pct) {
  let lo = gradientStops[0], hi = gradientStops[gradientStops.length - 1];
  for (let i = 0; i < gradientStops.length - 1; i++) {
    if (pct >= gradientStops[i].pos && pct <= gradientStops[i + 1].pos) {
      lo = gradientStops[i];
      hi = gradientStops[i + 1];
      break;
    }
  }
  const range = hi.pos - lo.pos;
  const t = range === 0 ? 0 : (pct - lo.pos) / range;
  const r = Math.round(lo.rgb[0] + t * (hi.rgb[0] - lo.rgb[0]));
  const g = Math.round(lo.rgb[1] + t * (hi.rgb[1] - lo.rgb[1]));
  const b = Math.round(lo.rgb[2] + t * (hi.rgb[2] - lo.rgb[2]));
  return `rgb(${r},${g},${b})`;
}


const experiences = [
  /*{
    date: 'January 2026',
    title: 'Co-founder & Technical Lead',
    subtitle: 'CNC Web3 Developers Collective',
    type: 'work',
    content: (
      <ul className="ht-bullets">
        <li>Leading a collaborative developer collective focused on Web3 technologies, smart contracts development, DeFi protocols, and decentralized application architecture.</li>
        <li>Cross-functional team coordination and technical leadership.</li>
      </ul>
    ),
  },
  }*/
  {
    date: 'Aug 2022 - Present',
    title: 'Clinical Bioinformatics Engineer',
    subtitle: <>University Hospital (<a href="https://www.chu-grenoble.fr/" target="_blank" rel="noopener noreferrer" className="ht-link">CHUGA</a>) Molecular Biology Platform - Bioinformatics & Data Platform</>,
    type: 'work',
    content: (
      <ul className="ht-bullets">
        <li><b>Designed and operationalized clinical-grade bioinformatics workflows</b> — from sequencing QC to variant interpretation and reporting — within regulated hospital environments.</li>
        <li>Engineered a <a href="https://clbenoit.github.io/portfolio/blog/nanodiag" target="_blank" rel="noopener noreferrer" className="ht-link">deep-learning based molecular diagnostics pipeline</a> for rapid brain tumor classification using Oxford Nanopore sequencing, integrating, automated bioinformatics workflows, and sovereign on-premises infrastructure compliant with NF ISO 15189.</li>
        <li><b>Supported multidisciplinary diagnostics</b> across virology, hematology, solid tumors, rare diseases, reproductive medicine, prenatal diagnostics, and neuro-oncology.</li>        
        <li>Delivered data analysis for <a href="https://doi.org/10.1016/j.omtn.2024.102259" target="_blank" rel="noopener noreferrer" className="ht-link">peer-reviewed publications</a>, <a href="https://github.com/clbenoit/CutOneStrand" target="_blank" rel="noopener noreferrer" className="ht-link">open-source software</a>, and a <a href="https://clbenoit.github.io/portfolio/blog/circRNAs" target="_blank" rel="noopener noreferrer" className="ht-link">doctoral dissertation</a>.</li>
      </ul>
    ),
  },
    {
        date: 'April 2022 - July 2022',
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
    date: 'March 2019 - March 2022',
    title: 'Research Engineer',
    subtitle: 'Institut Curie, Bioinformatics Core Facility',
    type: 'work',
    content: (
      <ul className="ht-bullets">
        <li><b>Developed <a href="https://clbenoit.github.io/portfolio/projects/" target="_blank" rel="noopener noreferrer" className="ht-link">R Shiny web applications</a></b> for interactive multi-omics data exploration, enabling non-technical researchers to analyze large-scale biological results.</li>
        <li><b>Built <a href="https://github.com/orgs/bioinfo-pf-curie/repositories" target="_blank" rel="noopener noreferrer" className="ht-link">automated omics analysis pipelines</a></b> for bulk & single-cell RNA-Seq, ChIP-Seq, ATAC-Seq, and targeted gene panels.</li>
        <li><b>Benchmarked omics analysis tools</b> and provided structured feedback to support model optimization decisions.</li>
        <li>Collaborated remotely within a multidisciplinary bioinformatics team, providing training and documentation.</li>
      </ul>
    ),
  },
  {
    date: 'Feb 2018 - March 2019',
    title: 'R&D Intern',
    subtitle: 'FIRALIS S.A.',
    type: 'internship',
    content: (
      <ul className="ht-bullets">
        <li>Contributed to the design of a <a href="https://www.firalis.com/home" target="_blank" rel="noopener noreferrer" className="ht-link">diagnostic test</a> using transcriptomic biomarkers (lncRNAs) to predict heart failure risk post-myocardial infarction.</li>
        <li>Curated, processed, and analyzed high-throughput transcriptomic datasets to support predictive modeling.</li>
        <li>Collaborated with cross-functional teams to translate biological questions into computational analyses.</li>
      </ul>
    ),
  },
  {
    date: '2017 - 2018',
    title: 'Dual Master\'s in Omics Data Analysis',
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
    date: 'May 2017 - Jul 2017',
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
    date: '2015 - 2018',
    title: 'Master\'s in Biotechnology Engineering',
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
    date: '2013 - 2015',
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
    date: '2013',
    title: 'Baccalaureate',
    subtitle: 'Mâcon',
    type: 'education',
    content: null,
  },
];

const HorizontalTimeline = () => {
  const scrollRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Force the ruler line to span the full track width (measured from DOM)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const updateLine = () => {
      const line = track.querySelector('.ht-line');
      if (line) {
        line.style.width = `${track.scrollWidth}px`;
      }
    };
    updateLine();
    // Re-sync on resize
    window.addEventListener('resize', updateLine);
    return () => window.removeEventListener('resize', updateLine);
  }, []);

  const scrollToIndex = useCallback((index) => {
    const container = scrollRef.current;
    if (!container) return;
    const station = container.querySelector(`[data-index="${index}"]`);
    if (station) {
      station.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveIndex(index);
    }
  }, []);

  // Center viewport vertically between skills & timeline, then center timeline on Clinical
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    setTimeout(() => {
      // Horizontal: center on Clinical
      const target = container.querySelector('[data-index="1"]');
      if (target) {
        target.scrollIntoView({ inline: 'center', block: 'nearest' });
        setActiveIndex(1);
      }
      // Vertical: center viewport on the boundary between skills and timeline
      const wrapper = container.closest('.ht-wrapper');
      if (wrapper) {
        const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
        const vh = window.innerHeight;
        const offset = wrapperTop - (vh / 2) + 60; // 60px = push slightly down so skills are visible
        window.scrollTo({ top: Math.max(0, offset), behavior: 'instant' });
      }
    }, 200);
  }, []);

  // IntersectionObserver to track which card is in view
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    const stations = container.querySelectorAll('.ht-station');
    stations.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="ht-wrapper">
      <div className="ht-scroll" ref={scrollRef}>
        <div className="ht-track" ref={trackRef}>
          {/* Ruler line — inside track so dots can sit above it via z-index */}
          <div className="ht-line" />
          {experiences.map((exp, i) => {
            const pct = (i / (experiences.length - 1)) * 100;
            const dotColor = getGradientColor(pct);
            return (
              <div key={i} className="ht-station" data-index={i}>
                {/* Dot on the line */}
                <div
                  className="ht-dot"
                  style={{ background: dotColor, borderColor: dotColor }}
                >
                  <span className="ht-dot-icon">{iconMap[exp.type]}</span>
                </div>
                {/* Connector from dot to card */}
                <div className="ht-connector" />
                {/* Experience card */}
                <div className="ht-card">
                  <div className="ht-card-date">{exp.date}</div>
                  <h3 className="ht-card-title">{exp.title}</h3>
                  <h4 className="ht-card-subtitle">{exp.subtitle}</h4>
                  {exp.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="ht-nav">
        {experiences.map((_, i) => (
          <button
            key={i}
            className={`ht-nav-dot ${i === activeIndex ? 'ht-nav-dot-active' : ''}`}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to experience ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalTimeline;
