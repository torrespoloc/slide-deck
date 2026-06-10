import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { SlideHeader } from '../components/SlideHeader';
import { fonts, fontSize, radius } from '../tokens';

interface ContextChip { label: string; accent?: string; }
const defaults = [{ label: 'Context A', accent: '#19AFC4' }, { label: 'Context B', accent: '#F9B8F5' }, { label: 'Context C', accent: '#EF8928' }, { label: 'Context D', accent: '#880000' }, { label: 'Context E', accent: '#242424' }];

export function ContextChipsLight({ eyebrow = 'Project I - Context', title = 'Key context', chips = defaults, bodyText }: { eyebrow?: string; title?: string; chips?: ContextChip[]; bodyText?: string }) {
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, border: '1px solid #242424', display: 'flex', flexDirection: 'column', gap: 60, padding: '44px 60px 44px 60px', boxSizing: 'border-box' }}>
        <SlideHeader eyebrow={eyebrow} title={title} eyebrowColor="#242424" dotColor="#19AFC4" titleColor="#242424" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 30, flex: 1 }}>
          {bodyText && <p style={{ margin: 0, fontFamily: fonts.body, fontWeight: 400, fontSize: fontSize.large, lineHeight: '150%', color: '#242424' }}>{bodyText}</p>}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {chips.map((chip, i) => (
              <div key={i} style={{ padding: '12px 24px', borderRadius: 9999, background: chip.accent ?? '#242424', display: 'inline-flex', alignItems: 'center' }}>
                <span style={{ fontFamily: fonts.body, fontWeight: 500, fontSize: fontSize.medium, color: '#FFFCF9', letterSpacing: 1 }}>{chip.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
