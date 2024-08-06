import { defineSemanticTokens } from '@pandacss/dev';
import { shadows } from './shadows';
import { colors } from './colors';

export const createSemanticTokens = () => {
  return defineSemanticTokens({
    colors,
    shadows,
  });
};
