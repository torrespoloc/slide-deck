import React from 'react';
import { SlideWrapper } from '../../components/SlideWrapper';
import { SlideFooter } from '../../components/SlideFooter';
import { fonts, fontSize, letterSpacing, radius } from '../../tokens';

export function MyCareer() {
  const markers = [
    { year: '2020', logoTop: 356, logoLabel: '' },
    { year: '2022', logoTop: 516, logoLabel: 'Logoipsum' },
    { year: '2024', logoTop: 676, logoLabel: 'XY.AI / SideNook' },
  ];
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
        <div style={{ position: 'absolute', top: 436, left: 201, width: 1462, height: 4, background: '#FFFFFF' }} />
        {markers.map((m, i) => (
          <React.Fragment key={i}>
            <span style={{ position: 'absolute', top: 364 + i * 160, left: 235, fontFamily: fonts.body, fontWeight: 500, fontSize: fontSize.medium, letterSpacing: letterSpacing.wide, color: '#FFFFFF' }}>{m.year}</span>
            {m.logoLabel && (
              <div style={{ position: 'absolute', top: m.logoTop, left: 1130, background: '#FFFFFF', borderRadius: 8, padding: '10px', height: 85, width: 181, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: fonts.body, fontWeight: 700, fontSize: 18, color: '#242424' }}>{m.logoLabel}</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
