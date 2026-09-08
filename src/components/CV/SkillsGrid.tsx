import React, { useRef, useEffect, useState, useCallback } from 'react';

// Chevron icons for the carousel arrows.
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

// Keep both locale arrays in sync when updating skills.
const SKILLS_EN = [
  {
    name: 'AI & Machine Learning',
    items: [
      'Machine Learning', 'Deep Learning',
      'AI/ML Development', 'MLOps / AI Ops',
      'GenAI & LLMs',
      'Retrieval Augmented Generation (RAG)',
      'RAGAS',
      'Agentic AI Systems',
      'Algorithm Benchmarking',
      'PyTorch', 'scikit-learn', 'OpenCV',
      'LangChain', 'LangGraph', 'LlamaIndex', 'Haystack', 'OpenAI API'
    ]
  },
  {
    name: 'Computing Systems',
      items: [
        'Docker / Singularity / Kubernetes',
        'High Performance Computing (Slurm, Torque, PBS, OAR)',
        'Cloud Computing AWS / GCP / Azure',
        'Terraform',
        'Linux / Windows']
  },
  {
    name: 'Data Engineering',
    items: [
      'ETL', 'Nextflow', 'Snakemake', 'Airflow', 'n8n', 'Elasticsearch',
      'Data (Data Wrangling & Delivery)',
      'ISO 27001'
    ]
  },
  {
    name: 'Applied Data Science',
    items: [
      'Statistics (Quantitative & Qualitative, Descriptive & Inferential, Hypothesis Testing, Experiment Design)',
      'Data (Visualization, Interpretation & Storytelling)',
      'Exploratory Data Analysis',
      'A/B Testing',
      'Data Mining'
    ]
  },
  {
    name: 'Project Management',
    items: ['Good Software Engineering Practices ',
          'Git', 'CI / CD', 'DevOps', 'Agile', 'Scrum']
  },
    {
    name: 'Libraries & Frameworks',
    items: ['Shiny', 'Flask', 'Django', 'FastAPI', 'Pandas', 'NumPy', 'SciPy',
           'Matplotlib', 'Plotly', 'Spark']
  },
  {
    name: 'Languages',
    items: ['Python', 'R', 'TypeScript', 'Bash/Shell', 'SQL']
  },
  {
    name: 'Life Science',
    items: [
      'Next-Generation Sequencing',
      'Molecular Biology', 'Omics', 'Phylogenetics',
      'Infectious Diseases', 'Oncology',  'Rare Diseases' , 'ISO 15189',
      'Clinical trials and datasets formats',
    ]
  }
];

const SKILLS_FR = [
  {
    name: 'IA & Machine Learning',
    items: [
      'Machine Learning', 'Deep Learning',
      'Développement IA/ML', 'MLOps / AI Ops',
      'GenAI & LLMs',
      'Retrieval Augmented Generation (RAG)',
      'RAGAS',
      'Systèmes IA Agentiques',
      'Benchmark d\'Algorithmes',
      'PyTorch', 'scikit-learn', 'OpenCV',
      'LangChain', 'LangGraph', 'LlamaIndex', 'Haystack', 'OpenAI API'
    ]
  },
  {
    name: 'Systèmes Informatiques',
      items: [
        'Docker / Singularity / Kubernetes',
        'Calcul Haute Performance (Slurm, Torque, PBS, OAR)',
        'Cloud Computing AWS / GCP / Azure',
        'Terraform',
        'Linux / Windows']
  },
  {
    name: 'Ingénierie des Données',
    items: [
      'ETL', 'Nextflow', 'Snakemake', 'Airflow', 'n8n', 'Elasticsearch',
      'Données (Wrangling & Delivery)',
      'ISO 27001'
    ]
  },
  {
    name: 'Science des Données Appliquée',
    items: [
      'Statistiques (Quantitatives & Qualitatives, Descriptives & Inférentielles, Tests d\'Hypothèses, Plans d\'Expérience)',
      'Données (Visualisation, Interprétation & Storytelling)',
      'Analyse Exploratoire des Données',
      'A/B Testing',
      'Data Mining'
    ]
  },
  {
    name: 'Gestion de Projet',
    items: ['Bonnes Pratiques de Génie Logiciel ',
          'Git', 'CI / CD', 'DevOps', 'Agile', 'Scrum']
  },
    {
    name: 'Librairies & Frameworks',
    items: ['Shiny', 'Flask', 'Django', 'FastAPI', 'Pandas', 'NumPy', 'SciPy',
           'Matplotlib', 'Plotly', 'Spark']
  },
  {
    name: 'Langages',
    items: ['Python', 'R', 'TypeScript', 'Bash/Shell', 'SQL']
  },
  {
    name: 'Sciences du Vivant',
    items: [
      'Séquençage Nouvelle Génération (NGS)',
      'Biologie Moléculaire', 'Omiques', 'Phylogénétique',
      'Maladies Infectieuses', 'Oncologie', 'Maladies Rares', 'ISO 15189',
      'Essais cliniques et formats de données',
    ]
  }
];

const AUTOPLAY_INTERVAL = 2500;   // 3s per category
const RESUME_DELAY = 7000;        // resume autoplay 9s after user interaction

interface SkillCategory {
  name: string;
  items: string[];
}

const SlideCard = ({ category }: { category: SkillCategory }) => (
  <div className="skills-slide">
    <div className="skills-card">
      <div className="skills-card-title">{category.name}</div>
      <div className="skills-card-items">
        {category.items.map((item, j) => (
          <span key={j} className="skill-tag">{item}</span>
        ))}
      </div>
    </div>
  </div>
);

const SkillsGrid = ({ lang }: { lang: string }) => {
  const skillsData = lang === 'fr' ? SKILLS_FR : SKILLS_EN;

  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const autoplayRef = useRef<number | null>(null);
  const resumeRef = useRef<number | null>(null);
  const isJumpingRef = useRef<boolean>(false);

  const total = skillsData.length;
  const [logicalIndex, setLogicalIndex] = useState(0);
  const physicalRef = useRef(0);

  const scrollToPhysical = useCallback((physical: number, smooth: boolean = true) => {
    const track = trackRef.current;
    const slide = slideRefs.current[physical];
    if (!track || !slide) return;
    const left = slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;
    track.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' });
  }, []);

  const goNext = useCallback(() => {
    let next = physicalRef.current + 1;
    physicalRef.current = next;
    scrollToPhysical(next, true);
    setLogicalIndex(next % total);

    if (next >= total) {
      window.setTimeout(() => {
        isJumpingRef.current = true;
        const rewound = next - total;
        physicalRef.current = rewound;
        scrollToPhysical(rewound, false);
        window.setTimeout(() => { isJumpingRef.current = false; }, 60);
      }, 450);
    }
  }, [scrollToPhysical, total]);

  const goPrev = useCallback(() => {
    const cur = physicalRef.current;
    if (cur <= 0) {
      isJumpingRef.current = true;
      const jumped = cur + total;
      physicalRef.current = jumped;
      scrollToPhysical(jumped, false);
      window.setTimeout(() => {
        const prev = jumped - 1;
        physicalRef.current = prev;
        scrollToPhysical(prev, true);
        setLogicalIndex((prev % total + total) % total);
        window.setTimeout(() => { isJumpingRef.current = false; }, 60);
      }, 40);
      return;
    }
    const prev = cur - 1;
    physicalRef.current = prev;
    scrollToPhysical(prev, true);
    setLogicalIndex(prev % total);
  }, [scrollToPhysical, total]);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) return;
    autoplayRef.current = window.setInterval(goNext, AUTOPLAY_INTERVAL);
  }, [goNext]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const pauseForUser = useCallback(() => {
    stopAutoplay();
    if (resumeRef.current) window.clearTimeout(resumeRef.current);
    resumeRef.current = window.setTimeout(() => {
      startAutoplay();
    }, RESUME_DELAY);
  }, [stopAutoplay, startAutoplay]);

  useEffect(() => {
    physicalRef.current = 0;
    scrollToPhysical(0, false);
    startAutoplay();
    return () => {
      stopAutoplay();
      if (resumeRef.current) window.clearTimeout(resumeRef.current);
    };
  }, [scrollToPhysical, startAutoplay, stopAutoplay]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let scrollTimer: number | null = null;

    const onScroll = () => {
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let closestDist = Infinity;
      slideRefs.current.forEach((slide, i) => {
        if (!slide) return;
        const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
        const dist = Math.abs(slideCenter - center);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      physicalRef.current = closest;
      setLogicalIndex(closest % total);
    };

    const onUserInteract = () => {
      if (isJumpingRef.current) return;
      pauseForUser();
    };

    track.addEventListener('scroll', () => {
      onScroll();
      if (scrollTimer) window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(onScroll, 100);
    }, { passive: true });
    track.addEventListener('wheel', onUserInteract, { passive: true });
    track.addEventListener('touchstart', onUserInteract, { passive: true });
    track.addEventListener('pointerdown', onUserInteract, { passive: true });

    return () => {
      track.removeEventListener('wheel', onUserInteract);
      track.removeEventListener('touchstart', onUserInteract);
      track.removeEventListener('pointerdown', onUserInteract);
      if (scrollTimer) window.clearTimeout(scrollTimer);
    };
  }, [pauseForUser, total]);

  const goToCategory = useCallback((target: number) => {
    const cur = physicalRef.current;
    let next = cur;
    for (let step = 0; step < 2 * total; step++) {
      const candidate = cur + step;
      if (candidate % total === target) { next = candidate; break; }
    }
    physicalRef.current = next;
    scrollToPhysical(next, true);
    setLogicalIndex(target);

    if (next >= total) {
      window.setTimeout(() => {
        isJumpingRef.current = true;
        const rewound = next - total;
        physicalRef.current = rewound;
        scrollToPhysical(rewound, false);
        window.setTimeout(() => { isJumpingRef.current = false; }, 60);
      }, 450);
    }
    pauseForUser();
  }, [scrollToPhysical, total, pauseForUser]);

  const onArrowPrev = useCallback(() => { pauseForUser(); goPrev(); }, [pauseForUser, goPrev]);
  const onArrowNext = useCallback(() => { pauseForUser(); goNext(); }, [pauseForUser, goNext]);

  const doubled = [...skillsData, ...skillsData];

  return (
    <div className="skills-carousel">
      <div className="skills-viewport">
        <button
          type="button"
          className="skills-arrow skills-arrow-left"
          onClick={onArrowPrev}
          aria-label="Previous skill category"
        >
          <ChevronLeft />
        </button>

        <div className="skills-track" ref={trackRef}>
          {doubled.map((category, i) => (
            <div
              key={i}
              className="skills-slide-wrap"
              ref={(el) => { slideRefs.current[i] = el; }}
            >
              <SlideCard category={category} />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="skills-arrow skills-arrow-right"
          onClick={onArrowNext}
          aria-label="Next skill category"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="skills-dots">
        {skillsData.map((cat, i) => (
          <button
            key={i}
            className={`skills-dot ${i === logicalIndex ? 'skills-dot-active' : ''}`}
            onClick={() => goToCategory(i)}
            aria-label={`Show ${cat.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;