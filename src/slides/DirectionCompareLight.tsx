import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { SlideHeader } from '../components/SlideHeader';
import { fonts, fontSize, radius } from '../tokens';

interface Direction { label: string; description: string; pros?: string[]; accent?: string; recommended?: boolean; }
const defaults: Direction[] = [
  { label: 'Direction A', description: 'Short description of this design direction.', pros: ['Pro 1', 'Pro 2'], accent: '#19AFC4' },
  { label: 'Direction B', description: 'Short description of this design direction.', pros: ['Pro 1', 'Pro 2', 'Pro 3'], accent: '#880000', recommended: true },
  { label: 'Direction C', description: 'Short description of this design direction.', pros: ['Pro 1'], accent: '#F9B8F5' },
];

export function DirectionCompareLight({ eyebrow = 'Project I - Ideate', title = 'Direction exploration', directions = defaults }: { eyebrow?: string; title?: string; directions?: Direction[] }) {
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, border: '1px solid #242424', display: 'flex', flexDirection: 'column', gap: 44, padding: '44px 60px 44px 60px', boxSizing: 'border-box' }}>
        <SlideHeader eyebrow={eyebrow} title={title} eyebrowColor="#242424" dotColor="#19AFC4" titleColor="#242424" />
        <div style={{ display: 'flex', flexDirection: 'row', gap: 22, flex: 1 }}>
          {directions.map((dir, i) => (
            <div key={i} style={{ flex: 1, background: dir.recommended ? dir.accent ?? '#242424' : '#FFFCF9', border: dir.recommended ? 'none' : `2px solid ${dir.accent ?? '#242424'}`, borderRadius: radius.card, display: 'flex', flexDirection: 'column', padding: '36px', boxSizing: 'border-box', gap: 24 }}>
              {dir.recommended && <span style={{ fontFamily: fonts.body, fontWeight: 600, fontSize: 16, letterSpacing: 4, color: '#FFFCF9', textTransform: 'uppercase' }}>★ Recommended</span>}
              <h3 style={{ margin: 0, fontFamily: fonts.display, fontWeight: 600, fontSize: fontSize.section, color: dir.recommended ? '#FFFCF9' : '#242424' }}>{dir.label}</h3>
              <p style={{ margin: 0, fontFamily: fonts.body, fontWeight: 400, fontSize: fontSize.medium, lineHeight: '140%', color: dir.recommended ? '#FFFCF9' : '#242424', opacity: dir.recommended ? 0.9 : 1 }}>{dir.description}</p>
              {dir.pros && <ul style={{ margin: 0, paddingLeft: 20 }}>{dir.pros.map((p, j) => <li key={j} style={{ fontFamily: fonts.body, fontSize: fontSize.small, color: dir.recommended ? '#FFFCF9' : '#242424', marginBottom: 6 }}>{p}</li>)}</ul>}
            </div>
          ))}
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
