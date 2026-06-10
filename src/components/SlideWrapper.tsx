import { radius, spacing } from '../tokens';

interface SlideWrapperProps {
  background?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function SlideWrapper({ background = '#FFFCF9', children, style }: SlideWrapperProps) {
  return (
    <div style={{
      width: 1920, height: 1080, position: 'relative', background,
      borderRadius: radius.card, overflow: 'hidden',
      padding: spacing['padding-default'], boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', gap: spacing['gap-small'],
      ...style,
    }}>
      {children}
    </div>
  );
}
