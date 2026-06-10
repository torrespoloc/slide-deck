import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { fonts, fontSize, letterSpacing, radius } from '../tokens';

interface CareerItem { numeral: string; period: string; role: string; }
interface RelevantCompanyLightProps { sectionTitle?: string; eyebrow?: string; items?: CareerItem[]; profileImageUrl?: string; }

const defaultItems = [
  { numeral: '01', period: '2025 → Now', role: 'First design hire' },
  { numeral: '02', period: '2023–2024', role: 'Freelance, four domains' },
  { numeral: '03', period: 'April 2026 (3 weeks)', role: 'Shipped SideNook solo' },
];

export function RelevantCompanyLight({ sectionTitle = '3 things relevant \nto you', eyebrow = 'About me', items = defaultItems, profileImageUrl }: RelevantCompanyLightProps) {
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 639, height: 966, border: '4px solid #880000', borderRadius: radius.card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '44px 44px 28px 44px', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, alignSelf: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#880000' }} />
              <span style={{ fontFamily: fonts.body, fontWeight: 500, fontSize: fontSize.medium, letterSpacing: letterSpacing.wide, color: '#242424' }}>{eyebrow}</span>
            </div>
            <h2 style={{ margin: 0, fontFamily: fonts.display, fontWeight: 600, fontSize: fontSize.hero, lineHeight: '100%', letterSpacing: letterSpacing.tight, color: '#242424', whiteSpace: 'pre-line' }}>{sectionTitle}</h2>
          </div>
          <div style={{ width: 312, height: 312, borderRadius: '50%', background: profileImageUrl ? `url(${profileImageUrl}) center/cover` : '#E0E0E0', flexShrink: 0 }} />
        </div>
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
