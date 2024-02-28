import { Pagination as ArkPagination, type PaginationProps as ArkPaginationProps } from '@ark-ui/react/pagination';
import { forwardRef } from 'react';
import { pagination, type PaginationVariantProps } from '@/styled/recipes';
import { Button } from '@/components/ui/button';

export interface PaginationProps extends ArkPaginationProps, PaginationVariantProps {}

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>((props, ref) => {
  const [variantProps, localProps] = pagination.splitVariantProps(props);
  const styles = pagination(variantProps);

  return (
    <ArkPagination.Root ref={ref} className={styles.root} {...localProps}>
      {({ pages }) => (
        <>
          <ArkPagination.PrevTrigger className={styles.prevTrigger} asChild>
            <Button variant="ghost" aria-label="Next Page">
              <ChevronLeftIcon />
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
              <ChevronRightIcon />
            </Button>
          </ArkPagination.NextTrigger>
        </>
      )}
    </ArkPagination.Root>
  );
});

Pagination.displayName = 'Pagination';

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m15 18l-6-6l6-6"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m9 18l6-6l-6-6"
    />
  </svg>
);
