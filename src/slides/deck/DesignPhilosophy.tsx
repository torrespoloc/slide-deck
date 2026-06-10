import { SlideWrapper } from '../../components/SlideWrapper';
import { SlideFooter } from '../../components/SlideFooter';
import { SlideHeader } from '../../components/SlideHeader';
import { fonts, fontSize, letterSpacing, radius } from '../../tokens';

interface Principle { number: string; headline: string; body: string; }
const defaults: Principle[] = [
  { number: '1', headline: 'Systems over screens', body: 'Isolated screens miss the value of shared components and patterns.' },
  { number: '2', headline: 'Validate against what ships', body: 'Figma is a hypothesis. The rendered code is the truth.' },
  { number: '3', headline: 'Know what not to design', body: 'Clarity about scope is as valuable as the work itself.' },
];

export function DesignPhilosophy({ principles = defaults }: { principles?: Principle[] }) {
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, border: '1px solid #242424', display: 'flex', flexDirection: 'column', gap: 109, padding: '44px 60px 44px 60px', boxSizing: 'border-box', alignItems: 'center' }}>
        <div style={{ alignSelf: 'flex-start', width: '100%' }}>
          <SlideHeader eyebrow="How I Think" title="Three principles that shape every project" eyebrowColor="#242424" dotColor="#19AFC4" titleColor="#242424" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 100, alignItems: 'center', justifyContent: 'center' }}>
          {principles.map((p, i) => (
            <div key={i} style={{ width: 460, height: 460, borderRadius: 500, background: '#FFFCF9', border: '1px solid #F9B8F5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24, padding: '24px 44px', boxSizing: 'border-box', textAlign: 'center' }}>
              <span style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: 120, lineHeight: 1, color: '#880000' }}>{p.number}</span>
              <span style={{ fontFamily: fonts.display, fontWeight: 500, fontSize: 34, lineHeight: '120%', color: '#242424' }}>{p.headline}</span>
              <span style={{ fontFamily: fonts.body, fontWeight: 500, fontSize: fontSize.medium, lineHeight: '130%', letterSpacing: letterSpacing.wide, color: '#242424' }}>{p.body}</span>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
