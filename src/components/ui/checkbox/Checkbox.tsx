import { Checkbox as ArkCheckbox, type CheckboxRootProps } from '@ark-ui/react/checkbox';
import { forwardRef, type ReactNode } from 'react';
import { css, cx } from '@/styled/css';
import { splitCssProps } from '@/styled/jsx';
import { checkbox, type CheckboxVariantProps } from '@/styled/recipes';
import type { JsxStyleProps } from '@/styled/types/system-types';

export type Assign<T, U> = {
  [K in keyof T]: K extends keyof U ? U[K] : T[K];
} & U;

export interface CheckboxProps extends Assign<JsxStyleProps, CheckboxRootProps>, CheckboxVariantProps {
  children?: ReactNode;
}

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>((props, ref) => {
  const [variantProps, checkboxProps] = checkbox.splitVariantProps(props);
  const [cssProps, localProps] = splitCssProps(checkboxProps);
  const { children, className, ...rootProps } = localProps;
  const styles = checkbox(variantProps);

  return (
    <ArkCheckbox.Root ref={ref} className={cx(styles.root, css(cssProps), className)} {...rootProps}>
      <ArkCheckbox.Control>
        <ArkCheckbox.Indicator>
          <CheckIcon />
        </ArkCheckbox.Indicator>
        <ArkCheckbox.Indicator indeterminate>
          <MinusIcon />
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      {children && <ArkCheckbox.Label>{children}</ArkCheckbox.Label>}
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  );
});

Checkbox.displayName = 'Checkbox';

const CheckIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Check Icon</title>
    <path
      d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Minus Icon</title>
    <path d="M2.91675 7H11.0834" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
