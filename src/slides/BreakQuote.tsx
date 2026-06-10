import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { fonts, radius } from '../tokens';

export function BreakQuote({ quote = '[Personal quote — insight or moment from the journey that defined the approach]' }: { quote?: string }) {
  return (
    <SlideWrapper background="#19AFC4">
      <div style={{ width: 1864, height: 966, background: '#19AFC4', borderRadius: radius.card, border: '2px solid #880000', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <span style={{ position: 'absolute', top: 100, left: 100, fontFamily: fonts.display, fontWeight: 800, fontSize: 400, lineHeight: 1, color: '#FFFCF9', opacity: 0.1, userSelect: 'none' }}>"</span>
        <p style={{ margin: 0, maxWidth: 1200, fontFamily: fonts.display, fontWeight: 600, fontSize: 72, lineHeight: '120%', textAlign: 'center', color: '#FFFCF9', position: 'relative', zIndex: 1 }}>{quote}</p>
        <span style={{ position: 'absolute', bottom: -94, right: 100, fontFamily: fonts.display, fontWeight: 800, fontSize: 400, lineHeight: 1, color: '#FFFCF9', opacity: 0.1, userSelect: 'none' }}>"</span>
      </div>
      <SlideFooter color="#FFFCF9" linkColor="#242424" />
    </SlideWrapper>
  );
}
