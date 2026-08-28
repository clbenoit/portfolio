import { useState, useRef, useEffect, useCallback } from 'react';

import {
  iconMap, typeColor, enriched, sortedForLanes,
  AXIS_MIN, AXIS_MAX, AXIS_PAD, formatDuration,
} from './react-timeline';

/* ---- Desktop Gantt Timeline ---- */

export default function HorizontalTimeline() {
  const ganttRef = useRef(null);
  const [activeId, setActiveId] = useState(
    enriched.find((e) => e.isCurrent)?.id || enriched[0].id
  );

  // On mount, scroll so the junction between the SkillsGrid (above) and the
  // Gantt chart (below) sits near the top third of the viewport.
  useEffect(() => {
    const el = ganttRef.current;
    if (!el) return;
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
}