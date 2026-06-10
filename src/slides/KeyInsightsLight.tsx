import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { SlideHeader } from '../components/SlideHeader';
import { fonts, radius } from '../tokens';

interface InsightCard { number: string; label: string; }
const defaults = [{ number: '1', label: 'Insight' }, { number: '2', label: 'Insight' }, { number: '3', label: 'Insight' }];

export function KeyInsightsLight({ eyebrow = 'Project I - Research', title = 'After so much research...', insights = defaults }: { eyebrow?: string; title?: string; insights?: InsightCard[] }) {
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, border: '1px solid #242424', display: 'flex', flexDirection: 'column', gap: 109, padding: '44px 60px 44px 60px', boxSizing: 'border-box', alignItems: 'center' }}>
        <div style={{ alignSelf: 'flex-start', width: '100%' }}>
          <SlideHeader eyebrow={eyebrow} title={title} eyebrowColor="#242424" dotColor="#19AFC4" titleColor="#242424" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 100, alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          {insights.map((ins, i) => (
            <div key={i} style={{ width: 460, height: 460, borderRadius: 500, background: '#FFFCF9', border: '1px solid #F9B8F5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40, padding: '24px 44px', boxSizing: 'border-box' }}>
              <span style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: 120, lineHeight: 1, color: '#880000', textAlign: 'center' }}>{ins.number}</span>
              <span style={{ fontFamily: fonts.display, fontWeight: 500, fontSize: 34, lineHeight: '130%', color: '#242424', textAlign: 'center' }}>{ins.label}</span>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
