import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { fonts, fontSize, letterSpacing, radius } from '../tokens';

export function Cover() {
  return (
    <SlideWrapper background="#242424">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 131, paddingBottom: 246, paddingLeft: 186, paddingRight: 186, boxSizing: 'border-box', overflow: 'hidden' }}>
        {/* Teal background rectangle */}
        <div style={{ position: 'absolute', top: -67, left: 71, width: 1041, height: 612, background: '#19AFC4' }} />
        {/* Text block */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 44, zIndex: 1 }}>
          <span style={{ fontFamily: fonts.body, fontWeight: 500, fontSize: fontSize.large, lineHeight: '130%', letterSpacing: letterSpacing.wide, color: '#FFFCF9' }}>Case Study Presentation</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h1 style={{ margin: 0, fontFamily: fonts.display, fontWeight: 800, fontSize: fontSize.title, lineHeight: '100%', letterSpacing: letterSpacing.tight, color: '#242424', whiteSpace: 'pre-line' }}>{"Hi Tightrope, \nI'm Jacki Torres"}</h1>
            <div style={{ width: 630, height: 4, background: '#EF8928', marginTop: 4 }} />
          </div>
        </div>
        {/* Icon cluster */}
        <div style={{ position: 'absolute', bottom: 71, right: 100 }}>
          <div style={{ position: 'relative', width: 248, height: 188 }}>
            <div style={{ position: 'absolute', left: 43, top: 38, width: 156, height: 100, background: '#EF8928', borderRadius: 10, border: '1px solid #FFFFFF' }} />
            <div style={{ position: 'absolute', left: 92, top: 0, width: 156, height: 88, background: '#F9B8F5', borderRadius: 10, border: '4px solid #880000' }} />
            <div style={{ position: 'absolute', left: 0, top: 72, width: 179, height: 116, background: '#880000', borderRadius: 10 }} />
          </div>
        </div>
        <div style={{ position: 'absolute', right: 107, bottom: 222, width: 41, height: 41, borderRadius: '50%', background: '#19AFC4' }} />
      </div>
      <SlideFooter color="#FFFCF9" linkColor="#35B7C9" />
    </SlideWrapper>
  );
}
