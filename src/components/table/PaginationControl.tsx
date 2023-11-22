import { RowData, Table } from '@tanstack/react-table';
import * as React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

import Button from '@/components/buttons/Button';
import Typography from '@/components/typography/Typography';

type PaginationControlProps<T extends RowData> = {
  data: T[];
  table: Table<T>;
} & React.ComponentPropsWithoutRef<'div'>;

/**
 *
 * @see https://javascript.plainenglish.io/create-a-pagination-in-a-react-way-df5c6fe1e0c7
 */
export default function PaginationControl<T extends RowData>({
  className,
  data,
  table,
  ...rest
}: PaginationControlProps<T>) {
  const currentPage = table.getState().pagination.pageIndex + 1;
  const pageCount = table.getPageCount();

  return (
    <div
      className={clsxm(
        '-mx-4 sm:-mx-6 md:-mx-0',
        'flex items-center justify-between gap-x-2',
        'rounded-b-xl bg-base-1000 px-6 py-5',
        className
      )}
      {...rest}
    >
      <div>
        <Typography variant='s3'>
          {currentPage} - {pageCount} of {data.length} items
        </Typography>
      </div>
      <div className='flex gap-1'>
        <Button
          variant='primary'
          size='sm'
          leftIcon={HiChevronLeft}
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          className='!text-base-900'
        >
          Previous
        </Button>
        <Button
          variant='primary'
          size='sm'
          rightIcon={HiChevronRight}
          disabled={
            !table.getCanNextPage() ||
            data.length < table.getState().pagination.pageSize
          }
          onClick={() => table.nextPage()}
          className='!text-base-900'
        >
          Next
        </Button>
      </div>
    </div>
  );
}
