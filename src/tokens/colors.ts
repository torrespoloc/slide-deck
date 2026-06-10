export const primitives = {
  'neutral-black': '#000000',
  'neutral-900': '#242424',
  'neutral-cream': '#FFFCF9',
  'neutral-white': '#FFFFFF',
  'red-700': '#880000',
  'teal-500': '#19AFC4',
  'teal-400': '#35B7C9',
  'pink-300': '#F9B8F5',
  'orange-400': '#EF8928',
} as const;

export const semantic = {
  'background-primary': primitives['neutral-cream'],
  'background-elevated': primitives['neutral-white'],
  'background-accent': primitives['red-700'],
  'text-primary': primitives['neutral-900'],
  'accent-teal': primitives['teal-500'],
  'accent-teal-light': primitives['teal-400'],
  'accent-lavender': primitives['pink-300'],
  'accent-orange': primitives['orange-400'],
} as const;

export const colors = { ...primitives, ...semantic } as const;
export type ColorToken = keyof typeof colors;
