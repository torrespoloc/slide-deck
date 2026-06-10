import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { SlideHeader } from '../components/SlideHeader';
import { fonts, radius } from '../tokens';

export function OppCompetitiveAnalysis({ insight = 'Competitive insight: opportunity to differentiate' }: { insight?: string }) {
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, border: '1px solid #000000', display: 'flex', flexDirection: 'column', gap: 44, padding: '44px 60px 0 60px', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}>
        <SlideHeader eyebrow="Project I - Research | Competitive Analysis" title="There was opportunity to differentiate" eyebrowColor="#880000" dotColor="#880000" titleColor="#242424" />
        <div style={{ position: 'absolute', bottom: -1312, left: 82, width: 1701, height: 1712, borderRadius: 3000, background: '#880000', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 208 }}>
          <p style={{ margin: 0, maxWidth: 800, fontFamily: fonts.display, fontWeight: 500, fontSize: 70, lineHeight: '130%', textAlign: 'center', color: '#FFFFFF' }}>{insight}</p>
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
