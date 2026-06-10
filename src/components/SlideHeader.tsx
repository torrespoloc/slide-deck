import { fonts, fontSize, letterSpacing } from '../tokens';

interface SlideHeaderProps {
  eyebrow: string;
  title: string;
  eyebrowColor?: string;
  titleColor?: string;
  dotColor?: string;
}

export function SlideHeader({ eyebrow, title, eyebrowColor = '#880000', titleColor = '#242424', dotColor = '#880000' }: SlideHeaderProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 18, height: 18, borderRadius: '50%', background: dotColor, flexShrink: 0 }} />
        <span style={{ fontFamily: fonts.body, fontWeight: 500, fontSize: fontSize.medium, lineHeight: '130%', letterSpacing: letterSpacing.wide, color: eyebrowColor }}>{eyebrow}</span>
      </div>
      <h2 style={{ margin: 0, fontFamily: fonts.display, fontWeight: 600, fontSize: fontSize.title, lineHeight: '100%', letterSpacing: letterSpacing.tight, color: titleColor }}>{title}</h2>
    </div>
  );
}
