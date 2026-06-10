import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { SlideHeader } from '../components/SlideHeader';
import { fonts, fontSize, radius } from '../tokens';

interface ConstraintCard { body: string; }
interface ConstraintSlideProps { eyebrow?: string; title?: string; constraints?: ConstraintCard[]; }

function ConstraintIcon() {
  return (
    <svg viewBox="0 0 120 120" width={120} height={120}>
      <rect x={10} y={10} width={100} height={100} rx={8} fill="none" stroke="#242424" strokeWidth={6} />
      <line x1={35} y1={40} x2={55} y2={60} stroke="#242424" strokeWidth={8} strokeLinecap="round" />
      <line x1={55} y1={60} x2={35} y2={80} stroke="#242424" strokeWidth={8} strokeLinecap="round" />
      <line x1={65} y1={75} x2={95} y2={75} stroke="#242424" strokeWidth={8} strokeLinecap="round" />
    </svg>
  );
}

const defaults = [
  { body: "I couldn't check in with developers regularly" },
  { body: "I couldn't check in with developers regularly" },
  { body: "I couldn't check in with developers regularly" },
];

export function ConstraintSlide({ eyebrow = 'Project I - Constraints', title = 'The team was X, but Y', constraints = defaults }: ConstraintSlideProps) {
  return (
    <SlideWrapper background="#242424">
      <div style={{ width: 1864, display: 'flex', flexDirection: 'column', gap: 60 }}>
        <SlideHeader eyebrow={eyebrow} title={title} eyebrowColor="#F9B8F5" dotColor="#19AFC4" titleColor="#FFFCF9" />
        <div style={{ display: 'flex', flexDirection: 'row', gap: 22, height: 724 }}>
          {constraints.map((c, i) => (
            <div key={i} style={{ flex: 1, background: '#FFFCF9', borderRadius: radius.card, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 44, padding: '44px 28px 28px 28px', boxSizing: 'border-box' }}>
              <ConstraintIcon />
              <p style={{ margin: 0, fontFamily: fonts.body, fontWeight: 500, fontSize: fontSize.large, lineHeight: '140%', textAlign: 'center', color: '#242424', maxWidth: constraints.length === 1 ? 876 : 551 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter color="#FFFCF9" linkColor="#35B7C9" />
    </SlideWrapper>
  );
}
