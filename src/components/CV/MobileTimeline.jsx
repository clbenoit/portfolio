import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

import { iconMap, typeColor, enriched, formatDuration } from './Timeline';

/* ---- Inline SVG chevrons ---- */

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

/* ---- Constants (must stay in sync with CSS) ---- */

const STATION_WIDTH = 300; // px — .hm-station width
const LINE_TOP = 30;      // px — dot centre offset

/* ---- Mobile Timeline ---- */

/**
 * Simple horizontal slider with one card per experience, snap scrolling,
 * and left/right arrows. No Gantt lanes.
 * Chronological order: oldest (left) → newest (right).
 */
export default function MobileTimeline() {
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

  // Mount: centre on the current role
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
        {/* Gradient line — explicit pixel width so the gradient spans
            every station regardless of viewport width. */}
        <div
          className="hm-line"
          style={{ width: total * STATION_WIDTH, top: LINE_TOP }}
        />
        <div className="hm-track">
          {chronological.map((exp, i) => {
            const duration = formatDuration(exp);
            const laneColor = typeColor[exp.type];
            return (
              <div key={exp.id} className="hm-station" data-idx={i}>
                <div className="hm-dot" style={{ background: laneColor }}>
                  <span className="hm-dot-icon">{iconMap[exp.type]}</span>
                </div>
                <div className="hm-card">
                  <div className="hm-card-date">{exp.displayRange}</div>
                  {exp.location && <span className="hm-card-location">{exp.location}</span>}
                  {duration && <span className="hm-card-duration">{duration}</span>}
                  <h3 className="hm-card-title">{exp.title}</h3>
                  {exp.subtitle && <h4 className="hm-card-subtitle">{exp.subtitle}</h4>}
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
}