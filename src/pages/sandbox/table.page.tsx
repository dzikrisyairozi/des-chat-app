import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import clsx from 'clsx';
import * as React from 'react';
import { BsLamp } from 'react-icons/bs';
import { FiEye } from 'react-icons/fi';

import { mockQuery } from '@/lib/axios-mock';
import { buildPaginatedTableURL } from '@/lib/table';
import useRenderCount from '@/hooks/useRenderCount';
import useServerTable from '@/hooks/useServerTable';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import PaginatedTable from '@/components/table/PaginatedTable';
import PopupFilter, { PopupFilterProps } from '@/components/table/PopupFilter';
import ServerTable from '@/components/table/ServerTable';
import Table from '@/components/table/Table';
import Typography from '@/components/typography/Typography';

import { User } from '@/pages/api/mock/users.api';

import { ApiResponse, PaginatedApiResponse } from '@/types/api';

type UserFilter = {
  country: string[];
};

export default function TablePage() {
  const renderCount = useRenderCount();

  //#region  //*=========== Table Definition ===========
  const { tableState, setTableState } = useServerTable<User>();

  /**
   * Behavior:
   * - If no size set, text won't truncate and will take as much space as the content needs
   *      creating an overflow if needed
   * - If size is set, it will be truncated to the pixel specified
   */
  const columns: ColumnDef<User>[] = [
    {
      accessorKey: 'name',
      header: 'Role',
      // To set size, add size in pixel
      size: 200,
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'country',
      header: 'Country',
    },
    {
      id: 'actions',
      header: 'Action',
      cell: () => <IconButton variant='outline' icon={FiEye} />,
    },
  ];
  //#endregion  //*======== Table Definition ===========

  //#region  //*=========== Fetch Data ===========
  const [filterQuery, setFilterQuery] = React.useState<UserFilter>({
    country: [],
  });

  const filterOption: PopupFilterProps<UserFilter>['filterOption'] =
    React.useMemo(
      () => [
        {
          id: 'country',
          name: 'Country',
          options: [
            { id: 'Indonesia', name: 'Indonesia' },
            { id: 'Malaysia', name: 'Malaysia' },
            { id: 'Singapore', name: 'Singapore' },
          ],
        },
      ],
      []
    );

  const url = buildPaginatedTableURL({
    baseUrl: '/users',
    tableState,
    additionalParam: {
      country: filterQuery.country,
    },
  });

  const { data: queryData, isLoading } = useQuery<
    PaginatedApiResponse<User[]>,
    Error
  >([url], mockQuery, {
    keepPreviousData: true,
  });

  const { data: unpaginatedData } = useQuery<ApiResponse<User[]>, Error>(
    ['/users'],
    mockQuery,
    {
      keepPreviousData: true,
    }
  );
  //#endregion  //*======== Fetch Data ===========

  const [light, setLight] = React.useState(false);

  return (
    <Layout>
      <Seo templateTitle='Table' />

      <main
        className={clsx(
          'transition-colors duration-300',
          light ? 'bg-base-700' : ''
        )}
      >
        <section>
          <div className='layout min-h-screen py-20'>
            <div className='flex items-center justify-between'>
              <Typography as='h1' variant='h1'>
                Table
              </Typography>

              <Button
                onClick={() => setLight((prev) => !prev)}
                leftIcon={BsLamp}
              >
                Toggle Light
              </Button>
            </div>

            <Typography as='h2' variant='h2' className='mt-4'>
              Server Table
            </Typography>
            <Typography variant='b2'>
              Table state such as filter, sort, and pagination is managed on the
              server.
            </Typography>
            <pre>
              {JSON.stringify(
                { renderCount, tableState, url, filterQuery },
                null,
                2
              )}
            </pre>

            <ServerTable
              title='Server Table'
              columns={columns}
              data={queryData?.data ?? []}
              meta={queryData?.meta}
              header={
                <PopupFilter
                  filterOption={filterOption}
                  setFilterQuery={setFilterQuery}
                />
              }
              isLoading={isLoading}
              tableState={tableState}
              setTableState={setTableState}
              className='mt-8'
              withFilter
            />

            <Typography as='h2' variant='h2' className='mt-8'>
              Paginated Table
            </Typography>
            <Typography variant='b2'>
              Server returned all the data then paginated on the client.
            </Typography>

            <PaginatedTable
              title='Paginated Table'
              columns={columns}
              data={unpaginatedData?.data ?? []}
              withFilter
            />

            <Typography as='h2' variant='h2' className='mt-8'>
              Table
            </Typography>
            <Typography variant='b2'>
              Server returned all the data then paginated on the client.
            </Typography>

            <Table
              title='Table'
              columns={columns}
              data={unpaginatedData?.data.slice(0, 20) ?? []}
              withFilter
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
