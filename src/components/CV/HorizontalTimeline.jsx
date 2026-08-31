import { useState, useRef, useEffect, useCallback } from 'react';

import {
  iconMap, typeColor, enriched, sortedForLanes,
  AXIS_MIN, AXIS_MAX, AXIS_PAD, formatDuration,
} from './Timeline';

/* ---- Desktop Gantt Timeline ---- */

export default function HorizontalTimeline() {
  const axisBarRef = useRef(null);
  const scrollBodyRef = useRef(null);
  const ganttRef = useRef(null);
  const wrapperRef = useRef(null);
  const [axisFixed, setAxisFixed] = useState(false);
  const axisFixedRef = useRef(false);
  const [activeId, setActiveId] = useState(
    enriched.find((e) => e.isCurrent)?.id || enriched[0].id
  );

  useEffect(() => {
    const el = ganttRef.current;
    if (!el) return;
    const ganttTop = el.getBoundingClientRect().top + window.scrollY;
    const target = ganttTop - window.innerHeight / 3;
    window.scrollTo({ top: Math.max(0, target), behavior: 'instant' });
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      if (!axisBarRef.current) return;

      const shouldFix = rect.top <= 52 && rect.bottom > 54;

      if (shouldFix !== axisFixedRef.current) {
        axisFixedRef.current = shouldFix;
        setAxisFixed(shouldFix);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const axis = axisBarRef.current;
    const body = scrollBodyRef.current;
    if (!axis || !body) return;

    let syncing = false;

    const syncAxisToBody = () => {
      if (syncing) return;
      syncing = true;
      axis.scrollLeft = body.scrollLeft;
      syncing = false;
    };

    const syncBodyToAxis = () => {
      if (syncing) return;
      syncing = true;
      body.scrollLeft = axis.scrollLeft;
      syncing = false;
    };

    axis.addEventListener('scroll', syncBodyToAxis, { passive: true });
    body.addEventListener('scroll', syncAxisToBody, { passive: true });

    return () => {
      axis.removeEventListener('scroll', syncBodyToAxis);
      body.removeEventListener('scroll', syncAxisToBody);
    };
  }, []);

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

  const tickMarkers = (() => {
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
  })();

  return (
    <div className={`ht-wrapper${axisFixed ? ' ht-wrapper--fixed' : ''}`} ref={wrapperRef}>
      <div className="ht-axis-spacer" aria-hidden="true" />

      <div
        className={`ht-axis-bar${axisFixed ? ' ht-axis-bar--fixed' : ''}`}
        ref={axisBarRef}
      >
        <div className="ht-axis-bar-content">
          {tickMarkers}
        </div>
      </div>

      <div className="ht-scroll" ref={scrollBodyRef}>
        <div className="ht-gantt" ref={ganttRef}>
          <div className="ht-grid" aria-hidden="true">
            {tickMarkers}
          </div>

          {sortedForLanes.map((exp) => {
            const isActive = exp.id === activeId;
            const left = leftPct(exp.start);
            const width = widthPct(exp.start, exp.end);
            const duration = formatDuration(exp);
            const laneColor = typeColor[exp.type];
            return (
              <div
                key={exp.id}
                className={`ht-lane ${isActive ? 'ht-lane-active' : ''}`}
                data-id={exp.id}
                onClick={() => setActiveId(exp.id)}
              >
                <div className="ht-lane-label">
                  {isActive && <span className="ht-lane-focus-marker" />}
                  <span className="ht-lane-icon" style={{ background: laneColor }}>
                    {iconMap[exp.type]}
                  </span>
                  <span className="ht-lane-title">{exp.title}</span>
                  {exp.location && <span className="ht-lane-location">{exp.location}</span>}
                  <span className="ht-lane-date">{exp.displayRange}</span>
                  {duration && <span className="ht-lane-duration">{duration}</span>}
                </div>

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
}