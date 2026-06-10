import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { SlideHeader } from '../components/SlideHeader';
import { fonts, fontSize, radius } from '../tokens';

interface HmwStatement { text: string; accent?: string; }
const defaults = [{ text: 'How might we...', accent: '#19AFC4' }, { text: 'How might we...', accent: '#F9B8F5' }, { text: 'How might we...', accent: '#EF8928' }];

export function HmwLight({ eyebrow = 'Project I - Define', title = 'How might we?', statements = defaults }: { eyebrow?: string; title?: string; statements?: HmwStatement[] }) {
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, border: '1px solid #242424', display: 'flex', flexDirection: 'column', gap: 60, padding: '44px 60px 44px 60px', boxSizing: 'border-box' }}>
        <SlideHeader eyebrow={eyebrow} title={title} eyebrowColor="#242424" dotColor="#19AFC4" titleColor="#242424" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, flex: 1, justifyContent: 'center' }}>
          {statements.map((stmt, i) => (
            <div key={i} style={{ flex: 1, background: '#FFFCF9', border: `2px solid ${stmt.accent ?? '#242424'}`, borderRadius: radius.card, display: 'flex', alignItems: 'center', padding: '0 44px' }}>
              <p style={{ margin: 0, fontFamily: fonts.display, fontWeight: 600, fontSize: fontSize.subtitle, lineHeight: '110%', color: '#242424' }}>{stmt.text}</p>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
