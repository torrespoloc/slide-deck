export const fonts = {
  display: '"Bricolage Grotesque", sans-serif',
  body: '"Mona Sans", sans-serif',
} as const;

export const fontSize = {
  micro: 16, xsmall: 20, small: 24, medium: 28, large: 32,
  xlarge: 40, section: 48, subtitle: 64, title: 80, hero: 100,
  numeral: 140, display: 240,
} as const;

export const lineHeight = {
  tight: '80%', snug: '100%', normal: '120%', relaxed: '140%', loose: '150%',
} as const;

export const letterSpacing = {
  tighter: -6, tight: -3.5, normal: 0, wide: 4, wider: 8,
} as const;

export const textStyles = {
  'Display/Stat':     { fontFamily: fonts.display, fontWeight: 800, fontSize: fontSize.display,  lineHeight: 'auto',          letterSpacing: letterSpacing.tighter },
  'Display/Numeral':  { fontFamily: fonts.display, fontWeight: 800, fontSize: fontSize.numeral,  lineHeight: lineHeight.tight, letterSpacing: letterSpacing.tighter },
  'Display/Hero':     { fontFamily: fonts.display, fontWeight: 600, fontSize: fontSize.hero,     lineHeight: lineHeight.snug,  letterSpacing: letterSpacing.tight },
  'Display/Title':    { fontFamily: fonts.display, fontWeight: 600, fontSize: fontSize.title,    lineHeight: lineHeight.snug,  letterSpacing: letterSpacing.tight },
  'Display/Subtitle': { fontFamily: fonts.display, fontWeight: 600, fontSize: fontSize.subtitle, lineHeight: 'auto',           letterSpacing: letterSpacing.normal },
  'Display/Section':  { fontFamily: fonts.display, fontWeight: 800, fontSize: fontSize.section,  lineHeight: 'auto',           letterSpacing: letterSpacing.normal },
  'Display/Quote':    { fontFamily: fonts.display, fontWeight: 600, fontSize: 36,               lineHeight: lineHeight.normal, letterSpacing: letterSpacing.normal },
  'Body/XLarge':      { fontFamily: fonts.body,    fontWeight: 600, fontSize: fontSize.xlarge,   lineHeight: 'auto',           letterSpacing: letterSpacing.normal },
  'Body/Large':       { fontFamily: fonts.body,    fontWeight: 400, fontSize: fontSize.large,    lineHeight: 'auto',           letterSpacing: letterSpacing.normal },
  'Body/Medium':      { fontFamily: fonts.body,    fontWeight: 500, fontSize: fontSize.medium,   lineHeight: 'auto',           letterSpacing: letterSpacing.normal },
  'Body/Small':       { fontFamily: fonts.body,    fontWeight: 400, fontSize: fontSize.small,    lineHeight: 'auto',           letterSpacing: letterSpacing.normal },
  'Body/XSmall':      { fontFamily: fonts.body,    fontWeight: 400, fontSize: fontSize.xsmall,   lineHeight: 'auto',           letterSpacing: letterSpacing.normal },
  'Body/Micro':       { fontFamily: fonts.body,    fontWeight: 400, fontSize: fontSize.micro,    lineHeight: 'auto',           letterSpacing: letterSpacing.normal },
  'Label/Eyebrow':    { fontFamily: fonts.body,    fontWeight: 600, fontSize: fontSize.large,    lineHeight: 'auto',           letterSpacing: letterSpacing.wide },
  'Label/Caption':    { fontFamily: fonts.body,    fontWeight: 500, fontSize: fontSize.medium,   lineHeight: '130%',           letterSpacing: letterSpacing.wide },
} as const;

export type TextStyleToken = keyof typeof textStyles;
