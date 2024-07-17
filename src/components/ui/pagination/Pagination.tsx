import { Pagination as ArkPagination, type PaginationRootProps } from '@ark-ui/react/pagination';
import { forwardRef } from 'react';
import { type PaginationVariantProps } from '@/styled/recipes';
import type { JsxStyleProps } from '@/styled/types/system-types';
import { Button, ChevronLeftIcon, ChevronRightIcon } from '@/components/ui';

export type Assign<T, U> = {
  [K in keyof T]: K extends keyof U ? U[K] : T[K];
} & U;
export interface PaginationProps extends Assign<JsxStyleProps, PaginationRootProps>, PaginationVariantProps {}

export const Pagination = forwardRef<HTMLElement, PaginationProps>((props, ref) => {
  return (
    <ArkPagination.Root ref={ref} {...props}>
      <ArkPagination.PrevTrigger asChild>
        <ChevronLeftIcon />
      </ArkPagination.PrevTrigger>
      <ArkPagination.Context>
        {(pagination) =>
          pagination.pages.map((page, index) =>
            page.type === 'page' ? (
              <ArkPagination.Item key={index} {...page} asChild>
                <Button variant="outline">{page.value}</Button>
              </ArkPagination.Item>
            ) : (
              <ArkPagination.Ellipsis key={index} index={index}>
                &#8230;
              </ArkPagination.Ellipsis>
            ),
          )
        }
      </ArkPagination.Context>
      <ArkPagination.NextTrigger asChild>
        <ChevronRightIcon />
      </ArkPagination.NextTrigger>
    </ArkPagination.Root>
  );
});

Pagination.displayName = 'Pagination';
