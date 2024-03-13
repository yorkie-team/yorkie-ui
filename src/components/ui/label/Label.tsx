import { ark } from '@ark-ui/react/factory';
import type { ComponentProps } from 'react';
import { styled } from '@/styled/jsx';
import { label } from '@/styled/recipes';

export const Label = styled(ark.label, label);
export interface FormProps extends ComponentProps<typeof Label> {}
