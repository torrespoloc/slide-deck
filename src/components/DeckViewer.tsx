import { useState, useCallback, useEffect } from 'react';

interface DeckViewerProps {
  slides: React.ComponentType[];
  slideNames?: string[];
  initialSlide?: number;
}

export function DeckViewer({ slides, slideNames, initialSlide = 0 }: DeckViewerProps) {
  const [current, setCurrent] = useState(initialSlide);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function update() {
      setScale(Math.min((window.innerWidth - 48) / 1920, (window.innerHeight - 120) / 1080, 1));
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(slides.length - 1, c + 1)), [slides.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const Slide = slides[current];

  return (
    <div style={{ minHeight: '100vh', background: '#1a1a1a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24, boxSizing: 'border-box', fontFamily: 'sans-serif' }}>
      <div style={{ transformOrigin: 'top center', transform: `scale(${scale})`, width: 1920, height: 1080, flexShrink: 0, marginBottom: scale < 1 ? -(1080 * (1 - scale)) : 0 }}>
        <Slide />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, color: '#fff', fontSize: 14, userSelect: 'none' }}>
        <button onClick={prev} disabled={current === 0} style={btn(current === 0)}>← Prev</button>
        <span>{slideNames?.[current] ?? `Slide ${current + 1}`} <span style={{ opacity: 0.5 }}>({current + 1} / {slides.length})</span></span>
        <button onClick={next} disabled={current === slides.length - 1} style={btn(current === slides.length - 1)}>Next →</button>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', maxWidth: '90vw' }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{ width: 60, height: 34, borderRadius: 4, border: i === current ? '2px solid #19AFC4' : '2px solid transparent', background: i === current ? '#2a2a2a' : '#333', color: '#fff', fontSize: 11, cursor: 'pointer' }}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

function btn(disabled: boolean): React.CSSProperties {
  return { background: disabled ? '#333' : '#19AFC4', color: disabled ? '#666' : '#fff', border: 'none', borderRadius: 6, padding: '8px 20px', cursor: disabled ? 'default' : 'pointer', fontSize: 14 };
}
