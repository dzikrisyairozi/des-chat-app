import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import clsx from 'clsx';
import * as React from 'react';
import { FiList } from 'react-icons/fi';

import clsxm from '@/lib/clsxm';
import useRenderCount from '@/hooks/useRenderCount';

import Filter from '@/components/table/Filter';
import PaginationControl from '@/components/table/PaginationControl';
import TBody from '@/components/table/TBody';
import THead from '@/components/table/THead';
import TOption from '@/components/table/TOption';
import Typography from '@/components/typography/Typography';

type PaginatedTableProps<T extends object> = {
  data: T[];
  columns: ColumnDef<T>[];
  pageSize?: number;
  omitSort?: boolean;
  withFilter?: boolean;
  /**Title : A descriptive title for the table (e.g. User Table)*/
  title?: string;
  /**Description : A descriptive body text comes here */
  description?: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function PaginatedTable<T extends object>({
  className,
  columns,
  data,
  pageSize = 10,
  omitSort = false,
  withFilter = false,
  title = 'Table',
  description = 'A descriptive body text comes here',
  ...rest
}: PaginatedTableProps<T>) {
  const renderCount = useRenderCount();

  const [globalFilter, setGlobalFilter] = React.useState('');
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: {
        pageSize,
      },
    },
    defaultColumn: {
      minSize: 0,
      size: 0,
    },
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className={clsxm('flex flex-col', className)} {...rest}>
      <pre>
        {JSON.stringify(
          {
            renderCount,
            globalFilter: table.getState().globalFilter,
            pagination: table.getState().pagination,
            sorting: table.getState().sorting,
          },
          null,
          2
        )}
      </pre>

      <div
        className={clsx(
          '-mx-4 sm:-mx-6 md:-mx-0',
          'flex flex-col items-stretch gap-3 sm:flex-row',
          withFilter ? 'sm:justify-between' : 'sm:justify-end',
          'rounded-t-xl bg-base-1000 px-6 py-5',
          'border border-white'
        )}
      >
        <div>
          <Typography variant='h3' as='h3' color='primary'>
            {title}
          </Typography>
          <Typography variant='b3' color='tertiary'>
            {description}
          </Typography>
        </div>
        <div className='flex items-center gap-3'>
          <TOption
            icon={<FiList className='text-typo-secondary' />}
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 25].map((page) => (
              <option key={page} value={page}>
                {page} Entries
              </option>
            ))}
          </TOption>
          {withFilter && <Filter table={table} />}
        </div>
      </div>
      <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
          <div className='overflow-hidden border-x border-white shadow ring-1 ring-black ring-opacity-5'>
            <table className='min-w-full'>
              <THead table={table} omitSort={omitSort} />
              <TBody table={table} />
            </table>
          </div>
        </div>
      </div>

      <PaginationControl
        table={table}
        data={data}
        className='border border-white'
      />
    </div>
  );
}
