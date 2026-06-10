/**
 * Enhanced Deck Viewer with Persistence and Navigation
 * 
   * Features:
 * - Keyboard navigation (arrows, spacebar)
 * - On-screen navigation buttons
 * - URL query parameter persistence (?slide=5)
 * - localStorage backup for better UX
 * - Responsive 16:9 aspect ratio scaling
 * - Slide thumbnail navigation
 * - Accessible controls
 */

import { useState, useCallback, useEffect } from 'react';
  import { SlideConfig } from './slideConfig';

interface DeckViewerEnhancedProps {
    slides: SlideConfig[];
  initialSlide?: number;
  onSlideChange?: (index: number) => void;
}

const STORAGE_KEY = 'slide-deck-current-index';
const URL_PARAM_NAME = 'slide';

export function DeckViewerEnhanced({
  slides,
  initialSlide = 0,
  onSlideChange,
}: DeckViewerEnhancedProps) {
  const [current, setCurrent] = useState(() => {
    // Priority: URL param > localStorage > initialSlide prop > 0
    const urlParams = new URLSearchParams(window.location.search);
    const urlSlide = urlParams.get(URL_PARAM_NAME);
    if (urlSlide) {
      const idx = parseInt(urlSlide, 10);
      return Math.max(0, Math.min(idx, slides.length - 1));
}

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const idx = parseInt(stored, 10);
      return Math.max(0, Math.min(idx, slides.length - 1));
}

    return Math.max(0, Math.min(initialSlide, slides.length - 1));
});

  const [scale, setScale] = useState(1);

  // Update URL and localStorage when slide changes
  useEffect(() => {
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}?${URL_PARAM_NAME}=${current}`
    );
    localStorage.setItem(STORAGE_KEY, String(current));
    onSlideChange?.(current);
}, [current, onSlideChange]);

  // Handle responsive scaling
  useEffect(() => {
        function updateScale() {
      // 16:9 aspect ratio, with padding
      const width = (window.innerWidth - 48) / 1920;
      const height = (window.innerHeight - 120) / 1080;
      setScale(Math.min(width, height, 1));
  }

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
}, []);

  // Navigation handlers
  const prev = useCallback(
    () => setCurrent((c) => Math.max(0, c - 1)),
        []
      );

  const next = useCallback(
    () => setCurrent((c) => Math.min(slides.length - 1, c + 1)),
    [slides.length]
  );

  const goToSlide = useCallback((index: number) => {
    setCurrent(Math.max(0, Math.min(index, slides.length - 1)));
}, [slides.length]);

  // Keyboard event handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Arrow keys and spacebar for navigation
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        next();
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prev();
      }
      // Number keys for direct slide access (1-9)
      if (/^\d$/.test(e.key) && !e.ctrlKey && !e.metaKey) {
        const num = parseInt(e.key, 10);
        if (num > 0 && num <= Math.min(9, slides.length)) {
          goToSlide(num - 1);
        }
      }
  };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
}, [next, prev, goToSlide, slides.length]);

  const slideConfig = slides[current];
  const Slide = slideConfig.component;

  return (
        <div
          style={{
            minHeight: '100vh',
            background: '#1a1a1a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            padding: 24,
            boxSizing: 'border-box',
            fontFamily: 'sans-serif',
    }}
        >
    {/* Slide Container */}
      <div
            style={{
              transformOrigin: 'top center',
              transform: `scale(${scale})`,
              width: 1920,
              height: 1080,
              flexShrink: 0,
              marginBottom: scale < 1 ? -(1080 * (1 - scale)) : 0,
    }}
          >
            <Slide />
          </div>

    {/* Navigation Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              color: '#fff',
              fontSize: 14,
              userSelect: 'none',
    }}
          >
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous slide"
              style={buttonStyle(current === 0)}
          title="Keyboard: ← or ↑"
                    >
                      ← Prev
                    </button>

                    <span title={slideConfig.id || ''}>
            {slideConfig.title}{' '}
          <span style={{ opacity: 0.5 }}>
            ({current + 1} / {slides.length})
          </span>
                    </span>

                    <button
                      onClick={next}
                      disabled={current === slides.length - 1}
                      aria-label="Next slide"
                      style={buttonStyle(current === slides.length - 1)}
          title="Keyboard: → or ↓ or Space"
                    >
                      Next →
                    </button>
                  </div>

            {/* Slide Thumbnail Navigation */}
      <div
                    style={{
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '90vw',
}}
      >
{slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              style={{
                width: 60,
                height: 34,
                borderRadius: 4,
                border:
                  i === current
                    ? '2px solid #19AFC4'
                    : '2px solid transparent',
                background: i === current ? '#2a2a2a' : '#333',
                color: '#fff',
                fontSize: 11,
                cursor: 'pointer',
                transition: 'all 150ms ease-in-out',
  }}
              title={`Go to slide ${i + 1}: ${slides[i].title}`}
            aria-label={`Slide ${i + 1}`}
                          aria-current={i === current ? 'true' : 'false'}
                        >
              {i + 1}
                        </button>
                      ))}
                    </div>

              {/* Keyboard Shortcuts Help */}
      <div
                      style={{
                        fontSize: 12,
                        color: '#666',
                        marginTop: 8,
                        textAlign: 'center',
              }}
                    >
                      <div>Keyboard: ← ↑ ↓ → to navigate, Space to advance, 1-9 for direct slide access</div>
        <div>Current URL bookmarkable: ?{URL_PARAM_NAME}={current}</div>
                    </div>
                  </div>
                );
                                                         }

function buttonStyle(disabled: boolean): React.CSSProperties {
  return {
        background: disabled ? '#333' : '#19AFC4',
        color: disabled ? '#666' : '#fff',
        border: 'none',
        borderRadius: 6,
        padding: '8px 20px',
        cursor: disabled ? 'default' : 'pointer',
        fontSize: 14,
        transition: 'all 150ms ease-in-out',
        opacity: disabled ? 0.5 : 1,
    };
}
