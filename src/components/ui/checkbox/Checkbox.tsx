import { forwardRef } from 'react';
import { Checkbox as ArkCheckbox } from '@ark-ui/react/checkbox';
import { css, cx } from '@/styled/css';
import { checkbox } from '@/styled/recipes';
import { CheckboxProps } from '@/components/ui/checkbox/interface';
import { CheckIcon, MinusIcon } from '@/components/ui/icons';

/**
 * Render Checkbox component.
 * @param {ReactNode} children - The label of the checkbox.
 * @returns {JSX.Element} - A checkbox component.
 */
export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>((props, ref) => {
  const [variantProps, localProps] = checkbox.splitVariantProps(props);
  const { children, ...rootProps } = localProps;
  const styles = checkbox(variantProps);

  return (
    <ArkCheckbox.Root ref={ref} className={cx(styles.root, css(rootProps))} {...rootProps}>
      {(state) => (
        <>
          <ArkCheckbox.Control className={styles.control}>
            {state.isChecked && <CheckIcon />}
            {state.isIndeterminate && <MinusIcon />}
          </ArkCheckbox.Control>
          {children && <ArkCheckbox.Label className={styles.label}>{children}</ArkCheckbox.Label>}
        </>
      )}
    </ArkCheckbox.Root>
  );
});

Checkbox.displayName = 'Checkbox';
