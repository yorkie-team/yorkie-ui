import { ark } from '@ark-ui/react/factory';
import type { ComponentProps } from 'react';
import { styled } from '@/styled/jsx';
import { input } from '@/styled/recipes';

export const Input = styled(ark.input, input);
export interface InputProps extends ComponentProps<typeof Input> {}
