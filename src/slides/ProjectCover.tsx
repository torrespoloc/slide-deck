import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { fonts, fontSize, letterSpacing, radius } from '../tokens';

interface ProjectCoverProps { projectLabel?: string; title?: string; heroImageUrl?: string; }

export function ProjectCover({ projectLabel = 'Project I', title = 'Case Study Title', heroImageUrl }: ProjectCoverProps) {
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, display: 'flex', flexDirection: 'row', gap: 22 }}>
        <div style={{ width: 631, height: 966, background: '#242424', borderRadius: radius.card, border: '1px solid #FFFCF9', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '44px 28px 28px 28px', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#F9B8F5' }} />
              <span style={{ fontFamily: fonts.body, fontWeight: 500, fontSize: fontSize.medium, letterSpacing: letterSpacing.wide, color: '#F9B8F5' }}>{projectLabel}</span>
            </div>
            <h1 style={{ margin: 0, fontFamily: fonts.display, fontWeight: 600, fontSize: fontSize.hero, lineHeight: '100%', letterSpacing: letterSpacing.tight, color: '#FFFCF9' }}>{title}</h1>
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Apply', 'Apply'].map((l, i) => (
              <button key={i} style={{ background: '#19AFC4', color: '#FFFFFF', border: 'none', borderRadius: 9999, padding: '8px 16px', fontFamily: fonts.body, fontWeight: 600, fontSize: fontSize.small, cursor: 'pointer' }}>{l}</button>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, height: 966, background: heroImageUrl ? `url(${heroImageUrl}) center/cover` : '#FFFCF9', borderRadius: radius.card }} />
      </div>
      <SlideFooter color="#242424" linkColor="#35B7C9" />
    </SlideWrapper>
  );
}
