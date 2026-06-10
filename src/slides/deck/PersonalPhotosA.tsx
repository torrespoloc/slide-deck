import { SlideWrapper } from '../../components/SlideWrapper';
import { SlideFooter } from '../../components/SlideFooter';
import { SlideHeader } from '../../components/SlideHeader';
import { radius } from '../../tokens';

export function PersonalPhotosA({ photos = [] }: { photos?: string[] }) {
  const items = Array.from({ length: 4 }, (_, i) => photos[i] ?? null);
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, border: '1px solid #000000', display: 'flex', flexDirection: 'column', gap: 93, padding: '44px 60px 0 60px', boxSizing: 'border-box' }}>
        <SlideHeader eyebrow="About Me" title="A few things outside the work" eyebrowColor="#880000" dotColor="#880000" titleColor="#242424" />
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 16, paddingBottom: 16 }}>
          {items.map((src, i) => (
            <div key={i} style={{ background: src ? `url(${src}) center/cover` : '#E8E4DF', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {!src && <span style={{ color: '#999', fontSize: 18, fontFamily: 'sans-serif' }}>Photo {i + 1}</span>}
            </div>
          ))}
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
