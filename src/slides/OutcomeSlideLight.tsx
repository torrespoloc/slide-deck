import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { SlideHeader } from '../components/SlideHeader';
import { fonts, fontSize, letterSpacing, radius } from '../tokens';

interface Outcome { stat: string; label: string; accent?: string; }
const defaults = [{ stat: '↑ 32%', label: 'Metric improvement', accent: '#19AFC4' }, { stat: '↓ 18%', label: 'Friction reduction', accent: '#880000' }, { stat: '4.8★', label: 'User satisfaction', accent: '#EF8928' }];

export function OutcomeSlideLight({ eyebrow = 'Project I - Outcomes', title = 'What shipped & what moved', outcomes = defaults, bodyText }: { eyebrow?: string; title?: string; outcomes?: Outcome[]; bodyText?: string }) {
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, border: '1px solid #242424', display: 'flex', flexDirection: 'column', gap: 60, padding: '44px 60px 44px 60px', boxSizing: 'border-box' }}>
        <SlideHeader eyebrow={eyebrow} title={title} eyebrowColor="#242424" dotColor="#19AFC4" titleColor="#242424" />
        {bodyText && <p style={{ margin: 0, fontFamily: fonts.body, fontWeight: 400, fontSize: fontSize.large, lineHeight: '150%', color: '#242424', maxWidth: 1200 }}>{bodyText}</p>}
        <div style={{ display: 'flex', flexDirection: 'row', gap: 22, flex: 1 }}>
          {outcomes.map((outcome, i) => (
            <div key={i} style={{ flex: 1, background: outcome.accent ?? '#242424', borderRadius: radius.card, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '36px', boxSizing: 'border-box', gap: 12 }}>
              <span style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: fontSize.numeral, lineHeight: '80%', letterSpacing: letterSpacing.tighter, color: '#FFFCF9' }}>{outcome.stat}</span>
              <span style={{ fontFamily: fonts.body, fontWeight: 400, fontSize: fontSize.medium, color: '#FFFCF9', opacity: 0.85 }}>{outcome.label}</span>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
