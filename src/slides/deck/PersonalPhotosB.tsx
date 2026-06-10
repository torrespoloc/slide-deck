import { SlideWrapper } from '../../components/SlideWrapper';
import { SlideFooter } from '../../components/SlideFooter';
import { SlideHeader } from '../../components/SlideHeader';
import { fonts, radius } from '../../tokens';

const defaults = [{ caption: 'Photo' }, { caption: 'Photo' }, { caption: 'Photo' }];
const accentColors = ['#19AFC4', '#FFFCF9', '#FFFCF9'];
const numberColors = ['#242424', '#880000', '#880000'];

export function PersonalPhotosB({ photos = defaults }: { photos?: Array<{ src?: string; caption?: string }> }) {
  const items = Array.from({ length: 3 }, (_, i) => photos[i] ?? defaults[i]);
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, border: '1px solid #242424', display: 'flex', flexDirection: 'column', gap: 109, padding: '44px 60px 44px 60px', boxSizing: 'border-box', alignItems: 'center' }}>
        <div style={{ alignSelf: 'flex-start', width: '100%' }}>
          <SlideHeader eyebrow="About Me" title="A few more" eyebrowColor="#880000" dotColor="#880000" titleColor="#242424" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 100, alignItems: 'center', justifyContent: 'center' }}>
          {items.map((item, i) => (
            <div key={i} style={{ width: 460, height: 460, borderRadius: 500, background: item.src ? `url(${item.src}) center/cover` : accentColors[i], border: '1px solid #F9B8F5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40, overflow: 'hidden' }}>
              {!item.src && <>
                <span style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: 120, lineHeight: 1, color: numberColors[i] }}>{i + 1}</span>
                <span style={{ fontFamily: fonts.display, fontWeight: 500, fontSize: 34, color: '#242424' }}>{item.caption ?? `Photo ${i + 1}`}</span>
              </>}
            </div>
          ))}
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
