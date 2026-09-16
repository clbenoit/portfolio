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

const skillsData = [
  // {
  //   name: 'Blockchain & Web3',
  //     items: [
  //       'Infrastructures for distributed systems & consensus operations',
  //       'Smart contract interaction',
  //       'RPC & API-based services',
  //       'Security & key management',
  //       'Monitoring & uptime management'      ]
  // },
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

const AUTOPLAY_INTERVAL = 2500;   // 3s per category
const RESUME_DELAY = 7000;        // resume autoplay 9s after user interaction

// We render two consecutive copies of the categories so that the carousel
// can keep sliding to the right forever. When we reach the start of the
// second copy we silently jump back to the equivalent slide in the first
// copy (no animation), which looks like an endless rightward loop.
const SlideCard = ({ category }) => (
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

const SkillsGrid = () => {
  const trackRef = useRef(null);
  const slideRefs = useRef([]);
  const autoplayRef = useRef(null);
  const resumeRef = useRef(null);
  const isJumpingRef = useRef(false);

  const total = skillsData.length;
  // logicalIndex is 0..total-1 (the "real" category being shown)
  const [logicalIndex, setLogicalIndex] = useState(0);
  // The physical slide index inside the doubled list (0..2*total-1)
  const physicalRef = useRef(0);

  // Scroll the track so that the given physical slide is centered.
  const scrollToPhysical = useCallback((physical, smooth = true) => {
    const track = trackRef.current;
    const slide = slideRefs.current[physical];
    if (!track || !slide) return;
    const left = slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;
    track.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' });
  }, []);

  // Advance one slide to the right (auto or manual).
  const goNext = useCallback(() => {
    let next = physicalRef.current + 1;
    physicalRef.current = next;
    scrollToPhysical(next, true);
    setLogicalIndex(next % total);

    // If we've entered the second copy, silently rewind to the first copy
    // once the smooth scroll has finished, keeping the same visual position.
    if (next >= total) {
      window.setTimeout(() => {
        isJumpingRef.current = true;
        const rewound = next - total;
        physicalRef.current = rewound;
        scrollToPhysical(rewound, false);
        window.setTimeout(() => { isJumpingRef.current = false; }, 60);
      }, 450); // wait for smooth scroll to settle
    }
  }, [scrollToPhysical, total]);

  // Go one slide to the left. To keep an endless feel without a hard stop at
  // the very first slide, if we'd go below 0 we first jump (no animation) to
  // the equivalent slide in the second copy, then smooth-scroll left from there.
  const goPrev = useCallback(() => {
    const cur = physicalRef.current;
    if (cur <= 0) {
      // Jump instantly to the mirror position in the second copy, then step left.
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

  // --- Autoplay control -------------------------------------------------
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

  // User took control: pause autoplay, then resume after RESUME_DELAY.
  const pauseForUser = useCallback(() => {
    stopAutoplay();
    if (resumeRef.current) window.clearTimeout(resumeRef.current);
    resumeRef.current = window.setTimeout(() => {
      startAutoplay();
    }, RESUME_DELAY);
  }, [stopAutoplay, startAutoplay]);

  // Init: position on first slide, start autoplay.
  useEffect(() => {
    physicalRef.current = 0;
    scrollToPhysical(0, false);
    startAutoplay();
    return () => {
      stopAutoplay();
      if (resumeRef.current) window.clearTimeout(resumeRef.current);
    };
  }, [scrollToPhysical, startAutoplay, stopAutoplay]);

  // Keep the centered slide in sync while the user scrolls manually,
  // and detect user-initiated scrolling to pause autoplay.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let scrollTimer = null;

    const onScroll = () => {
      // Find the physical slide whose center is closest to the track center.
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

    // Any user pointer/wheel/touch on the track hands control to the user.
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

  // Manual navigation via dots — go to the nearest instance of that category
  // travelling rightwards, then hand control to the user.
  const goToCategory = useCallback((target) => {
    const cur = physicalRef.current;
    // pick the physical slide (in the doubled list) at/after cur that maps to target
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

  // Arrow handlers — user takes control, so pause autoplay (resumes after delay).
  const onArrowPrev = useCallback(() => { pauseForUser(); goPrev(); }, [pauseForUser, goPrev]);
  const onArrowNext = useCallback(() => { pauseForUser(); goNext(); }, [pauseForUser, goNext]);

  // Two consecutive copies for the infinite rightward loop.
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
