import { flexRender, RowData, Table } from '@tanstack/react-table';
import * as React from 'react';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/typography/Typography';

type THeadProps<T extends RowData> = {
  omitSort: boolean;
  table: Table<T>;
} & React.ComponentPropsWithoutRef<'div'>;

export default function THead<T extends RowData>({
  className,
  omitSort,
  table,
  ...rest
}: THeadProps<T>) {
  return (
    <thead
      className={clsxm('border-b border-base-1000 bg-base-900', className)}
      {...rest}
    >
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              scope='col'
              className={clsxm(
                'group py-3 pr-3 text-left text-base font-semibold capitalize',
                !omitSort && header.column.getCanSort() ? 'pl-4' : 'pl-[30px]'
              )}
            >
              {header.isPlaceholder ? null : (
                <div
                  className={clsxm(
                    'relative ml-5 flex items-center gap-2 py-1',
                    !omitSort && header.column.getCanSort()
                      ? 'cursor-pointer select-none'
                      : ''
                  )}
                  onClick={
                    omitSort
                      ? () => null
                      : header.column.getToggleSortingHandler()
                  }
                >
                  <Typography variant='s3' as='h3' color='primary'>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </Typography>
                  {!omitSort &&
                  header.column.getCanSort() &&
                  !header.column.getIsSorted() ? (
                    <BsArrowUp className='w-4 fill-transparent group-hover:fill-typo-icons' />
                  ) : (
                    {
                      asc: <BsArrowUp className='w-4 fill-primary-600' />,
                      desc: <BsArrowDown className='w-4 fill-primary-600' />,
                    }[header.column.getIsSorted() as string] ?? null
                  )}
                </div>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
