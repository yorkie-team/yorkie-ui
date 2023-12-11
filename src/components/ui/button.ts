import { ark } from '@ark-ui/react';
import { styled, type HTMLStyledProps } from '@styled/jsx';
import { button } from '@styled/recipes';

export const Button = styled(ark.button, button);
export interface ButtonProps extends HTMLStyledProps<typeof Button> {}
