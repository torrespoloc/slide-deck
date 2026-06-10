/**
 * Slide Deck Configuration
 * 
   * This file serves as the central source of truth for slide ordering,
 * naming, and metadata. It makes it easy to:
 * - Reorder slides by rearranging array items
 * - Add or remove slides with a single line
 * - Maintain consistent naming across the application
 * - Enable SEO-friendly URL parameters with slide indices
 */

import React from 'react';
import {
  DeckCover, MyCareer, PersonalPhotosA, PersonalPhotosB,
      DesignPhilosophy, WhyTightrope, HowIWork, Agenda,
      Cover, Timeline, ProjectCover, ConstraintSlide,
      OppCompetitiveAnalysis, BreakQuote, CompetitorTable, VisualArtifact,
      RelevantCompanyLight, KeyInsightsLight, KeySolutionsLight, HmwLight,
      PipelineLight, ContextChipsLight, OrgChartLight, DirectionCompareLight,
      ArchitectureStackLight, OutcomeSlideLight,
    } from '../slides';

export interface SlideConfig {
    component: React.ComponentType;
  title: string;
  id?: string; // Optional: for URL bookmarking
}

/**
 * Main presentation deck slides
 * Ordered slide-by-slide for easy navigation
 */
export const DECK_SLIDES: SlideConfig[] = [
{ component: DeckCover, title: '01 — Cover', id: 'cover' },
{ component: MyCareer, title: '02 - My Career', id: 'career' },
{ component: PersonalPhotosA, title: '03 - Personal Photos A', id: 'photos-a' },
{ component: PersonalPhotosB, title: '04 - Personal Photos B', id: 'photos-b' },
{ component: DesignPhilosophy, title: '05 - Design Philosophy', id: 'philosophy' },
{ component: WhyTightrope, title: '06 — Why Tightrope', id: 'why-tightrope' },
{ component: HowIWork, title: '07 - How I Work', id: 'how-i-work' },
{ component: Agenda, title: '08 - Agenda', id: 'agenda' },
];

/**
 * Template slides for reference and demonstration
 * Showcases available layout patterns and components
 */
export const TEMPLATE_SLIDES: SlideConfig[] = [
{ component: Cover, title: 'Cover Template', id: 'cover-template' },
{ component: Timeline, title: 'Timeline Template', id: 'timeline' },
{ component: ProjectCover, title: 'Project Cover', id: 'project-cover' },
{ component: ConstraintSlide, title: 'Constraint', id: 'constraint' },
{ component: OppCompetitiveAnalysis, title: 'Competitive Analysis', id: 'comp-analysis' },
{ component: BreakQuote, title: 'Break Quote', id: 'break-quote' },
{ component: CompetitorTable, title: 'Competitor Table', id: 'comp-table' },
{ component: VisualArtifact, title: 'Visual Artifact', id: 'visual' },
{ component: RelevantCompanyLight, title: 'Relevant Company', id: 'company' },
{ component: KeyInsightsLight, title: 'Key Insights', id: 'insights' },
{ component: KeySolutionsLight, title: 'Key Solutions', id: 'solutions' },
{ component: HmwLight, title: 'How Might We', id: 'hmw' },
{ component: PipelineLight, title: 'Pipeline', id: 'pipeline' },
{ component: ContextChipsLight, title: 'Context Chips', id: 'context' },
{ component: OrgChartLight, title: 'Org Chart', id: 'org-chart' },
{ component: DirectionCompareLight, title: 'Direction Compare', id: 'direction' },
{ component: ArchitectureStackLight, title: 'Architecture Stack', id: 'stack' },
{ component: OutcomeSlideLight, title: 'Outcome Slide', id: 'outcome' },
];

export type DeckMode = 'deck' | 'template';
