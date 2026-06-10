import { fonts, fontSize, letterSpacing } from '../tokens';

interface SlideFooterProps {
  color?: string;
  linkColor?: string;
}

export function SlideFooter({ color = '#242424', linkColor = '#35B7C9' }: SlideFooterProps) {
  const s: React.CSSProperties = { fontFamily: fonts.body, fontWeight: 500, fontSize: fontSize.medium, lineHeight: '130%', letterSpacing: letterSpacing.wide };
  return (
    <div style={{ width: 1864, height: 36, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <span style={{ ...s, color }}>Senior Product Designer</span>
      <span style={{ ...s, color: linkColor, textAlign: 'right' }}>LinkedIn • 2026</span>
    </div>
  );
}
