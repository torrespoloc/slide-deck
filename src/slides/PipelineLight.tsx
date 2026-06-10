import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { SlideHeader } from '../components/SlideHeader';
import { fonts, fontSize, radius } from '../tokens';

interface PipelineStage { label: string; description?: string; accent?: string; }
const defaults = [{ label: 'Discover', description: 'Research & insights', accent: '#19AFC4' }, { label: 'Define', description: 'Synthesise & frame', accent: '#F9B8F5' }, { label: 'Develop', description: 'Ideate & prototype', accent: '#EF8928' }, { label: 'Deliver', description: 'Test & ship', accent: '#880000' }];

export function PipelineLight({ eyebrow = 'Project I - Process', title = 'Pipeline overview', stages = defaults }: { eyebrow?: string; title?: string; stages?: PipelineStage[] }) {
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, border: '1px solid #242424', display: 'flex', flexDirection: 'column', gap: 60, padding: '44px 60px 44px 60px', boxSizing: 'border-box' }}>
        <SlideHeader eyebrow={eyebrow} title={title} eyebrowColor="#242424" dotColor="#19AFC4" titleColor="#242424" />
        <div style={{ display: 'flex', flexDirection: 'row', gap: 0, flex: 1, alignItems: 'stretch' }}>
          {stages.map((stage, i) => (
            <React.Fragment key={i}>
              <div style={{ flex: 1, background: stage.accent, borderRadius: i === 0 ? `${radius.card}px 0 0 ${radius.card}px` : i === stages.length - 1 ? `0 ${radius.card}px ${radius.card}px 0` : 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '36px', boxSizing: 'border-box' }}>
                <p style={{ margin: '0 0 8px 0', fontFamily: fonts.display, fontWeight: 600, fontSize: fontSize.section, color: '#FFFCF9', lineHeight: '110%' }}>{stage.label}</p>
                {stage.description && <p style={{ margin: 0, fontFamily: fonts.body, fontWeight: 400, fontSize: fontSize.medium, color: '#FFFCF9', opacity: 0.85, lineHeight: '140%' }}>{stage.description}</p>}
              </div>
              {i < stages.length - 1 && <div style={{ width: 0, height: '100%', borderLeft: '2px solid rgba(255,255,255,0.4)' }} />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
