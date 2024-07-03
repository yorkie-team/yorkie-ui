import { Pagination as ArkPagination, type PaginationRootProps } from '@ark-ui/react/pagination';
import { forwardRef } from 'react';
import { css, cx } from '@/styled/css';
import { splitCssProps } from '@/styled/jsx';
import { pagination, type PaginationVariantProps } from '@/styled/recipes';
import type { JsxStyleProps } from '@/styled/types/system-types';
import { Button, Icons } from '@/components/ui';

export type Assign<T, U> = {
  [K in keyof T]: K extends keyof U ? U[K] : T[K];
} & U;
export interface PaginationProps extends Assign<JsxStyleProps, PaginationRootProps>, PaginationVariantProps {}

export const Pagination = forwardRef<HTMLElement, PaginationProps>((props, ref) => {
  const [variantProps, paginationProps] = pagination.splitVariantProps(props);
  const [cssProps, localProps] = splitCssProps(paginationProps);
  const { className, ...rootProps } = localProps;
  const styles = pagination(variantProps);

  return (
    <ArkPagination.Root className={cx(styles.root, css(cssProps), className)} ref={ref} {...rootProps}>
      {({ pages }) => (
        <>
          <ArkPagination.PrevTrigger className={styles.prevTrigger} asChild>
            <Button variant="ghost" aria-label="Next Page">
              <Icons.IconChevLeft />
            </Button>
          </ArkPagination.PrevTrigger>
          {pages.map((page, index) =>
            page.type === 'page' ? (
              <ArkPagination.Item className={styles.item} key={index} {...page} asChild>
                <Button variant="outline">{page.value}</Button>
              </ArkPagination.Item>
            ) : (
              <ArkPagination.Ellipsis className={styles.ellipsis} key={index} index={index}>
                &#8230;
              </ArkPagination.Ellipsis>
            ),
          )}
          <ArkPagination.NextTrigger className={styles.nextTrigger} asChild>
            <Button variant="ghost" aria-label="Next Page">
              <Icons.IconChevRight />
            </Button>
          </ArkPagination.NextTrigger>
        </>
      )}
    </ArkPagination.Root>
  );
});

Pagination.displayName = 'Pagination';
