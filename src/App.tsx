import React, { useState } from 'react';
import { DeckViewerEnhanced } from './components/DeckViewerEnhanced';
import { DECK_SLIDES, TEMPLATE_SLIDES, type DeckMode } from './components/slideConfig';

/**
 * Main Application Component
  * 
   * This component manages the presentation mode selection and wires
    * the slide configuration system into the viewer component.
     * 
      * Features:
       * - Toggle between deck and template modes
        * - URL-based state persistence
         * - Responsive slide viewing
          */
export default function App() {
    const [mode, setMode] = useState<DeckMode>('deck');
  
    const slides = mode === 'deck' ? DECK_SLIDES : TEMPLATE_SLIDES;
  
    return (
          <>
            {/* Mode Toggle - Fixed Top Position */}
                    <div
                              style={{
                                          position: 'fixed',
                                          top: 12,
                                          left: '50%',
                                          transform: 'translateX(-50%)',
                                          zIndex: 100,
                                          display: 'flex',
                                          gap: 8,
                              }}
                            >
                      {(['deck', 'template'] as DeckMode[]).map((m) => (
                                        <button
                                                      key={m}
                                                      onClick={() => setMode(m)}
                                                      style={{
                                                                      background: mode === m ? '#19AFC4' : '#333',
                                                                      color: '#fff',
                                                                      border: 'none',
                                                                      borderRadius: 6,
                                                                      padding: '6px 16px',
                                                                      cursor: 'pointer',
                                                                      fontSize: 13,
                                                                      fontWeight: mode === m ? 500 : 400,
                                                                      transition: 'all 150ms ease-in-out',
                                                      }}
                                                      title={m === 'deck' ? 'View presentation deck' : 'View available templates'}
                                                    >
                                          {m === 'deck' ? '📽 Deck' : '🗂 Templates'}
                                        </button>button>
                                      ))}
                    </div>div>
          
            {/* Deck Viewer Component */}
                    <DeckViewerEnhanced slides={slides} />
          </>>
        );
}</>import React from 'react';
import { DeckViewer } from './components/DeckViewer';
import {
  DeckCover, MyCareer, PersonalPhotosA, PersonalPhotosB,
  DesignPhilosophy, WhyTightrope, HowIWork, Agenda,
  Cover, Timeline, ProjectCover, ConstraintSlide,
  OppCompetitiveAnalysis, BreakQuote, CompetitorTable, VisualArtifact,
  RelevantCompanyLight, KeyInsightsLight, KeySolutionsLight, HmwLight,
  PipelineLight, ContextChipsLight, OrgChartLight, DirectionCompareLight,
  ArchitectureStackLight, OutcomeSlideLight,
} from './slides';

const DECK = [DeckCover, MyCareer, PersonalPhotosA, PersonalPhotosB, DesignPhilosophy, WhyTightrope, HowIWork, Agenda] as React.ComponentType[];
const DECK_NAMES = ['01 — Cover','02 - My Career','03 - Personal Photos A','04 - Personal Photos B','05 - Design Philosophy','06 — Why Tightrope','07 - How I Work','08 - Agenda'];
const TEMPLATES = [Cover, Timeline, ProjectCover, ConstraintSlide, OppCompetitiveAnalysis, BreakQuote, CompetitorTable, VisualArtifact, RelevantCompanyLight, KeyInsightsLight, KeySolutionsLight, HmwLight, PipelineLight, ContextChipsLight, OrgChartLight, DirectionCompareLight, ArchitectureStackLight, OutcomeSlideLight] as React.ComponentType[];
const TEMPLATE_NAMES = ['cover','timeline','project-cover','constraint','opp-competitive-analysis','break-quote','competitor-table','visual-artifact','relevant-company-light','key-insights-light','key-solutions-light','hmw-light','pipeline-light','context-chips-light','org-chart-light','direction-compare-light','architecture-stack-light','outcome-slide-light'];

type Mode = 'deck' | 'template';

export default function App() {
  const [mode, setMode] = React.useState<Mode>('deck');
  return (
    <>
      <div style={{ position: 'fixed', top: 12, left: '50%', transform: 'translateX(-50%)', zIndex: 100, display: 'flex', gap: 8 }}>
        {(['deck', 'template'] as Mode[]).map(m => (
          <button key={m} onClick={() => setMode(m)} style={{ background: mode === m ? '#19AFC4' : '#333', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 16px', cursor: 'pointer', fontSize: 13 }}>
            {m === 'deck' ? '📽 Deck' : '🗂 Templates'}
          </button>
        ))}
      </div>
      <DeckViewer slides={mode === 'deck' ? DECK : TEMPLATES} slideNames={mode === 'deck' ? DECK_NAMES : TEMPLATE_NAMES} />
    </>
  );
}
