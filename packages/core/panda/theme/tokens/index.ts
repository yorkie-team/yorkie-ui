import { type Tokens, defineTokens } from '@pandacss/dev';
import { colors } from './colors';
import { animations } from './animations';
import { blurs } from './blurs';
import { borders } from './borders';
import { durations } from './durations';
import { easings } from './easings';
import { radii } from './radii';
import { sizes } from './sizes';
import { spacing } from './spacing';
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from './typography';
import { zIndex } from './z-index';

export const createTokens = (): Tokens => {
  return defineTokens({
    animations,
    blurs,
    borders,
    colors,
    durations,
    easings,
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    radii,
    sizes,
    spacing,
    zIndex,
  });
};
