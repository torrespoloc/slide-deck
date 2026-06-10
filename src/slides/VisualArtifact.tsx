import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { SlideHeader } from '../components/SlideHeader';
import { radius } from '../tokens';

interface VisualArtifactProps { eyebrow?: string; title?: string; imageUrl?: string; children?: React.ReactNode; }

export function VisualArtifact({ eyebrow = 'Project I - Phase', title = 'Visual artifact title/point to make', imageUrl, children }: VisualArtifactProps) {
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, border: '1px solid #000000', display: 'flex', flexDirection: 'column', gap: 93, padding: '44px 60px 0 60px', boxSizing: 'border-box' }}>
        <SlideHeader eyebrow={eyebrow} title={title} eyebrowColor="#880000" dotColor="#880000" titleColor="#242424" />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: imageUrl ? `url(${imageUrl}) center/contain no-repeat` : '#F5F5F5', borderRadius: 12, overflow: 'hidden' }}>
          {children}
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
