import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { fonts, fontSize, letterSpacing, radius } from '../tokens';

interface TimelineItem { numeral: string; period: string; role: string; }

const defaultItems: TimelineItem[] = [
  { numeral: '01', period: '2025 → Now', role: 'First design hire' },
  { numeral: '02', period: '2023–2024', role: 'Freelance, four domains' },
  { numeral: '03', period: 'April 2026 (3 weeks)', role: 'Shipped SideNook solo' },
];

export function Timeline({ items = defaultItems }: { items?: TimelineItem[] }) {
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#19AFC4', borderRadius: radius.card, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 44, left: 60, display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#880000' }} />
            <span style={{ fontFamily: fonts.body, fontWeight: 500, fontSize: fontSize.medium, letterSpacing: letterSpacing.wide, color: '#880000' }}>About me</span>
          </div>
          <h2 style={{ margin: 0, fontFamily: fonts.display, fontWeight: 600, fontSize: fontSize.title, lineHeight: '100%', letterSpacing: letterSpacing.tight, color: '#FFFCF9' }}>My career in a nutshell</h2>
        </div>
        {/* Timeline line */}
        <div style={{ position: 'absolute', top: 436, left: 201, width: 1462, height: 4, background: '#FFFFFF' }} />
        <span style={{ position: 'absolute', top: 364, left: 235, fontFamily: fonts.body, fontWeight: 500, fontSize: fontSize.medium, letterSpacing: letterSpacing.wide, color: '#FFFFFF' }}>2022</span>
        {/* Table */}
        <div style={{ position: 'absolute', top: 219, left: 775, width: 1035, display: 'flex', flexDirection: 'column', gap: 36 }}>
          <div style={{ width: '100%', height: 1, background: '#828894' }} />
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 120, height: 112 }}>
                <span style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: fontSize.numeral, lineHeight: '80%', letterSpacing: letterSpacing.tighter, color: '#19AFC4', width: 280, flexShrink: 0 }}>{item.numeral}</span>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <span style={{ fontFamily: fonts.body, fontWeight: 600, fontSize: fontSize.xlarge, lineHeight: '100%', letterSpacing: 1, color: '#EF8928' }}>{item.period}</span>
                  <span style={{ fontFamily: fonts.body, fontWeight: 600, fontSize: fontSize.xlarge, lineHeight: '110%', letterSpacing: 1, color: '#242424' }}>{item.role}</span>
                </div>
              </div>
              <div style={{ width: '100%', height: 1, background: '#828894' }} />
            </React.Fragment>
          ))}
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
