import { useEffect, useMemo, useRef, useState } from 'react';

interface DeadlineDateFieldProps {
  /** ISO date yyyy-mm-dd, empty string when unset */
  value: string;
  onChange: (value: string) => void;
  lang: 'en' | 'fr';
  id: string;
  invalid?: boolean;
}

const LOCALES: Record<'en' | 'fr', string> = { en: 'en-GB', fr: 'fr-FR' };

const WEEKDAYS: Record<'en' | 'fr', string[]> = {
  en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  fr: ['lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.', 'dim.'],
};

const PLACEHOLDERS: Record<'en' | 'fr', string> = {
  en: 'Select a date',
  fr: 'Choisir une date',
};

const NAV_LABELS: Record<'en' | 'fr', { prev: string; next: string; grid: string }> = {
  en: { prev: 'Previous month', next: 'Next month', grid: 'Deadline calendar' },
  fr: { prev: 'Mois précédent', next: 'Mois suivant', grid: 'Calendrier de la date limite' },
};

const MONTH_AHEAD_LIMIT = 12;

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

function toIso(d: Date): string {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

/** Parse an ISO date into a *local* date. Never `new Date('yyyy-mm-dd')` (parsed as UTC, shifts the day). */
function parseIso(iso: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return Number.isNaN(d.getTime()) ? null : d;
}

function startOfToday(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function formatLong(d: Date, lang: 'en' | 'fr'): string {
  return d.toLocaleDateString(LOCALES[lang], {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function DeadlineDateField({
  value,
  onChange,
  lang,
  id,
  invalid = false,
}: DeadlineDateFieldProps) {
  const today = useMemo(startOfToday, []);
  const selected = useMemo(() => parseIso(value), [value]);

  const [view, setView] = useState(() => {
    const base = selected ?? today;
    return { y: base.getFullYear(), m: base.getMonth() };
  });
  const [open, setOpen] = useState(false);

  const rootRef = useRef<HTMLDivElement | null>(null);

  const minIdx = today.getFullYear() * 12 + today.getMonth();
  const maxIdx = minIdx + MONTH_AHEAD_LIMIT;
  const viewIdx = view.y * 12 + view.m;
  const canGoPrev = viewIdx > minIdx;
  const canGoNext = viewIdx < maxIdx;

  const cells = useMemo(() => {
    const first = new Date(view.y, view.m, 1);
    const mondayOffset = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
    const prevDays = new Date(view.y, view.m, 0).getDate();
    const total = Math.ceil((mondayOffset + daysInMonth) / 7) * 7;
    const list: { date: Date; inMonth: boolean }[] = [];
    for (let i = 0; i < total; i += 1) {
      const dayNum = i - mondayOffset + 1;
      if (dayNum < 1) {
        list.push({ date: new Date(view.y, view.m - 1, prevDays + dayNum), inMonth: false });
      } else if (dayNum > daysInMonth) {
        list.push({ date: new Date(view.y, view.m + 1, dayNum - daysInMonth), inMonth: false });
      } else {
        list.push({ date: new Date(view.y, view.m, dayNum), inMonth: true });
      }
    }
    return list;
  }, [view]);

  useEffect(() => {
    if (!open) return;
    function onMouseDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  function goPrev() {
    if (!canGoPrev) return;
    setView((v) => (v.m === 0 ? { y: v.y - 1, m: 11 } : { y: v.y, m: v.m - 1 }));
  }

  function goNext() {
    if (!canGoNext) return;
    setView((v) => (v.m === 11 ? { y: v.y + 1, m: 0 } : { y: v.y, m: v.m + 1 }));
  }

  function selectDate(date: Date) {
    onChange(toIso(date));
    window.setTimeout(() => setOpen(false), 180);
  }

  const toggleLabel = selected ? formatLong(selected, lang) : PLACEHOLDERS[lang];

  return (
    <div ref={rootRef} className={`deadline-field${invalid ? ' field-error' : ''}`}>
      <button
        type="button"
        id={id}
        className="deadline-toggle"
        aria-expanded={open}
        aria-controls={`${id}-calendar`}
        onClick={() => setOpen((o) => !o)}
      >
        <svg
          className="deadline-toggle-icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <rect x="1.5" y="3" width="13" height="11.5" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M1.5 6.5h13M5.5 1.5v3M10.5 1.5v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <span className={selected ? 'deadline-toggle-value' : 'deadline-toggle-placeholder'}>
          {toggleLabel}
        </span>
        <span className="deadline-toggle-chevron" aria-hidden="true">▾</span>
      </button>

      <div
        id={`${id}-calendar`}
        className={`deadline-calendar${open ? ' is-open' : ''}`}
        inert={!open}
        aria-hidden={!open || undefined}
      >
        <div className="deadline-calendar-inner" aria-label={NAV_LABELS[lang].grid}>
          <div className="deadline-calendar-header">
            <button
              type="button"
              className="deadline-calendar-nav"
              onClick={goPrev}
              disabled={!canGoPrev}
              aria-label={NAV_LABELS[lang].prev}
            >
              ‹
            </button>
            <span className="deadline-calendar-title">
              {new Date(view.y, view.m).toLocaleDateString(LOCALES[lang], {
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <button
              type="button"
              className="deadline-calendar-nav"
              onClick={goNext}
              disabled={!canGoNext}
              aria-label={NAV_LABELS[lang].next}
            >
              ›
            </button>
          </div>
          <div className="deadline-calendar-weekdays">
            {WEEKDAYS[lang].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="deadline-calendar-grid">
            {cells.map(({ date, inMonth }) => {
              const isPast = date < today;
              const isSelected = selected !== null && date.getTime() === selected.getTime();
              const isToday = date.getTime() === today.getTime();
              const classes = [
                'deadline-day',
                inMonth ? '' : 'is-out',
                isPast ? 'is-disabled' : '',
                isToday ? 'is-today' : '',
                isSelected ? 'is-selected' : '',
              ]
                .filter(Boolean)
                .join(' ');
              return (
                <button
                  key={toIso(date)}
                  type="button"
                  className={classes}
                  disabled={isPast}
                  aria-pressed={isSelected || undefined}
                  aria-label={formatLong(date, lang)}
                  onClick={() => {
                    if (!isPast) selectDate(date);
                  }}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
