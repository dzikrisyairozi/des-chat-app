import { flexRender, RowData, Table } from '@tanstack/react-table';
import clsx from 'clsx';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/typography/Typography';

type TBodyProps<T extends RowData> = {
  isLoading?: boolean;
  table: Table<T>;
} & React.ComponentPropsWithoutRef<'div'>;

export default function TBody<T extends RowData>({
  className,
  isLoading = false,
  table,
  ...rest
}: TBodyProps<T>) {
  const rows = table.getRowModel().rows;

  return (
    <tbody
      className={clsxm('divide-y divide-base-1000 bg-base-900', className)}
      {...rest}
    >
      {isLoading && (
        <tr className='animate-pulse bg-base-800'>
          <td
            colSpan={table.getAllColumns().length}
            className='whitespace-nowrap px-6 py-4 text-center text-sm'
          >
            <Typography variant='s3' as='span'>
              Memuat data...
            </Typography>
          </td>
        </tr>
      )}
      {rows.length === 0 && !isLoading ? (
        <tr className='bg-base-800'>
          <td
            colSpan={table.getAllColumns().length}
            className='whitespace-nowrap px-6 py-4 text-center text-sm'
          >
            <Typography variant='s3' as='span'>
              Data tidak ditemukan
            </Typography>
          </td>
        </tr>
      ) : (
        rows.map((row, index) => (
          <tr
            key={row.id}
            className={clsxm(
              index % 2 === 0
                ? 'bg-base-800 hover:bg-base-800/80'
                : 'bg-base-800/70 hover:bg-base-800/50',
              'transition-colors duration-100'
            )}
          >
            {row.getVisibleCells().map((cell) => (
              <Typography
                key={cell.id}
                as='td'
                variant='b2'
                color='secondary'
                className={clsx([
                  'whitespace-nowrap',
                  'truncate',
                  'py-4 pl-[34px] pr-3',
                ])}
                title={cell.getValue() as string}
                style={{
                  width:
                    cell.column.getSize() !== 0
                      ? cell.column.getSize()
                      : undefined,
                  maxWidth:
                    cell.column.getSize() !== 0
                      ? cell.column.getSize()
                      : undefined,
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Typography>
            ))}
          </tr>
        ))
      )}
    </tbody>
  );
}
