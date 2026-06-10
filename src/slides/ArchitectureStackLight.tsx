import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { SlideHeader } from '../components/SlideHeader';
import { fonts, fontSize, radius } from '../tokens';

interface StackLayer { label: string; sublabel?: string; accent?: string; }
const defaults = [{ label: 'Presentation', sublabel: 'React / Web', accent: '#19AFC4' }, { label: 'Business Logic', sublabel: 'Services / APIs', accent: '#35B7C9' }, { label: 'Data Layer', sublabel: 'Database / Storage', accent: '#242424' }, { label: 'Infrastructure', sublabel: 'Cloud / DevOps', accent: '#880000' }];

export function ArchitectureStackLight({ eyebrow = 'Project I - Architecture', title = 'Architecture overview', layers = defaults }: { eyebrow?: string; title?: string; layers?: StackLayer[] }) {
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, border: '1px solid #242424', display: 'flex', flexDirection: 'column', gap: 60, padding: '44px 60px 44px 60px', boxSizing: 'border-box' }}>
        <SlideHeader eyebrow={eyebrow} title={title} eyebrowColor="#242424" dotColor="#19AFC4" titleColor="#242424" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
          {layers.map((layer, i) => (
            <div key={i} style={{ flex: 1, background: layer.accent, borderRadius: radius.card, display: 'flex', alignItems: 'center', padding: '0 44px', gap: 30 }}>
              <span style={{ fontFamily: fonts.display, fontWeight: 600, fontSize: fontSize.subtitle, color: '#FFFCF9', minWidth: 400 }}>{layer.label}</span>
              {layer.sublabel && <span style={{ fontFamily: fonts.body, fontWeight: 400, fontSize: fontSize.medium, color: '#FFFCF9', opacity: 0.8 }}>{layer.sublabel}</span>}
            </div>
          ))}
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
