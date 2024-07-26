import { definePreset } from '@pandacss/dev';
import { conditions } from './conditions';
import { breakpoints } from './theme/breakpoints';
import { keyframes } from './theme/keyframes';
import { createSemanticTokens } from './theme/semantic-tokens';
import { textStyles } from './theme/text-styles';
import { createTokens } from './theme/tokens';
import { recipes } from './theme/recipes';

const tokens = createTokens();
const semanticTokens = createSemanticTokens();
export const yorkiePreset = definePreset({
  theme: {
    extend: {
      breakpoints,
      keyframes,
      recipes,
      semanticTokens,
      textStyles,
      tokens,
    },
  },
  conditions,
});
