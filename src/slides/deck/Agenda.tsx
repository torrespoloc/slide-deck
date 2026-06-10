import React from 'react';
import { SlideWrapper } from '../../components/SlideWrapper';
import { SlideFooter } from '../../components/SlideFooter';
import { fonts, fontSize, letterSpacing, radius } from '../../tokens';

interface AgendaItem { number: string; label: string; accent?: string; }
const defaults = [{ number: '01', label: 'Intro', accent: '#19AFC4' }, { number: '02', label: 'Case Study', accent: '#EF8928' }, { number: '03', label: 'Q&A', accent: '#F9B8F5' }];

export function Agenda({ items = defaults }: { items?: AgendaItem[] }) {
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, border: '1px solid #242424', display: 'flex', flexDirection: 'column', gap: 60, padding: '44px 60px 44px 60px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#19AFC4' }} />
            <span style={{ fontFamily: fonts.body, fontWeight: 500, fontSize: fontSize.medium, letterSpacing: letterSpacing.wide, color: '#242424' }}>Today</span>
          </div>
          <h2 style={{ margin: 0, fontFamily: fonts.display, fontWeight: 600, fontSize: fontSize.title, lineHeight: '100%', letterSpacing: letterSpacing.tight, color: '#242424' }}>Agenda</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', gap: 0 }}>
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 60, padding: '36px 0' }}>
                <span style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: fontSize.numeral, lineHeight: '80%', letterSpacing: letterSpacing.tighter, color: item.accent ?? '#19AFC4', width: 200, flexShrink: 0 }}>{item.number}</span>
                <span style={{ fontFamily: fonts.display, fontWeight: 600, fontSize: fontSize.subtitle, lineHeight: '100%', letterSpacing: letterSpacing.tight, color: '#242424' }}>{item.label}</span>
              </div>
              {i < items.length - 1 && <div style={{ width: '100%', height: 1, background: '#E0E0E0' }} />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
