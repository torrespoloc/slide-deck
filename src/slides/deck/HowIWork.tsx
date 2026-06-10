import React from 'react';
import { SlideWrapper } from '../../components/SlideWrapper';
import { SlideFooter } from '../../components/SlideFooter';
import { fonts, fontSize, letterSpacing, radius } from '../../tokens';

interface WorkStep { label: string; bullets: string[]; }
const defaults: WorkStep[] = [
  { label: 'Discover', bullets: ['User research', 'Stakeholder alignment', 'Competitive analysis'] },
  { label: 'Build Systems', bullets: ['Component architecture', 'Design tokens', 'Prototyping'] },
  { label: 'Ship', bullets: ['Dev handoff', 'QA + iteration', 'Measure & learn'] },
];
const toolchain = ['Figma', 'React', 'Notion', 'Linear', 'Loom'];

export function HowIWork({ steps = defaults, tools = toolchain }: { steps?: WorkStep[]; tools?: string[] }) {
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, border: '1px solid #000000', display: 'flex', flexDirection: 'column', padding: '44px 60px 44px 60px', boxSizing: 'border-box', gap: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 60 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#19AFC4' }} />
            <span style={{ fontFamily: fonts.body, fontWeight: 500, fontSize: fontSize.medium, letterSpacing: letterSpacing.wide, color: '#242424' }}>Process</span>
          </div>
          <h2 style={{ margin: 0, fontFamily: fonts.display, fontWeight: 600, fontSize: fontSize.title, lineHeight: '100%', letterSpacing: letterSpacing.tight, color: '#242424' }}>Discover → Build Systems → Ship</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 0, flex: 1, justifyContent: 'space-between' }}>
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20, paddingRight: i < steps.length - 1 ? 40 : 0 }}>
                <span style={{ fontFamily: fonts.display, fontWeight: 600, fontSize: fontSize.section, color: '#242424' }}>{step.label}</span>
                <div style={{ width: '100%', height: 2, background: '#242424' }} />
                <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {step.bullets.map((b, j) => <li key={j} style={{ fontFamily: fonts.body, fontWeight: 400, fontSize: fontSize.large, lineHeight: '140%', color: '#242424' }}>{b}</li>)}
                </ul>
              </div>
              {i < steps.length - 1 && <span style={{ fontFamily: fonts.display, fontWeight: 600, fontSize: 48, color: '#242424', alignSelf: 'flex-start', padding: '0 16px' }}>→</span>}
            </React.Fragment>
          ))}
        </div>
        <div style={{ border: '1px solid #19AFC4', borderRadius: radius.card, padding: '28px 60px', display: 'flex', gap: 24, alignItems: 'center', marginTop: 32 }}>
          <span style={{ fontFamily: fonts.body, fontWeight: 600, fontSize: 20, letterSpacing: letterSpacing.wider, color: '#242424', textTransform: 'uppercase' }}>TOOLCHAIN</span>
          {tools.map((tool, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span style={{ color: '#ccc' }}>·</span>}
              <span style={{ fontFamily: fonts.body, fontWeight: 500, fontSize: fontSize.medium, color: '#242424' }}>{tool}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
