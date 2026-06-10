import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { SlideHeader } from '../components/SlideHeader';
import { fonts, fontSize, radius } from '../tokens';

interface Solution { number: string; label: string; description?: string; }
const defaults = [{ number: '1', label: 'Solution', description: 'Description of solution approach' }, { number: '2', label: 'Solution', description: 'Description of solution approach' }, { number: '3', label: 'Solution', description: 'Description of solution approach' }];

export function KeySolutionsLight({ eyebrow = 'Project I - Define', title = 'Key solutions identified', solutions = defaults }: { eyebrow?: string; title?: string; solutions?: Solution[] }) {
  const bgs = ['#242424', '#19AFC4', '#FFFCF9'];
  const textColors = ['#FFFCF9', '#FFFCF9', '#242424'];
  const numColors = ['#F9B8F5', '#FFFCF9', '#242424'];
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, border: '1px solid #242424', display: 'flex', flexDirection: 'column', gap: 60, padding: '44px 60px 44px 60px', boxSizing: 'border-box' }}>
        <SlideHeader eyebrow={eyebrow} title={title} eyebrowColor="#242424" dotColor="#19AFC4" titleColor="#242424" />
        <div style={{ display: 'flex', flexDirection: 'row', gap: 30, flex: 1 }}>
          {solutions.map((sol, i) => (
            <div key={i} style={{ flex: 1, background: bgs[i % 3], border: i === 2 ? '1px solid #242424' : 'none', borderRadius: radius.card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '44px 36px 36px 36px', boxSizing: 'border-box' }}>
              <span style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: 120, lineHeight: '80%', letterSpacing: -6, color: numColors[i % 3] }}>{sol.number}</span>
              <div>
                <p style={{ margin: '0 0 12px 0', fontFamily: fonts.display, fontWeight: 600, fontSize: fontSize.section, lineHeight: '110%', color: textColors[i % 3] }}>{sol.label}</p>
                {sol.description && <p style={{ margin: 0, fontFamily: fonts.body, fontWeight: 400, fontSize: fontSize.medium, lineHeight: '140%', color: textColors[i % 3], opacity: 0.8 }}>{sol.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
