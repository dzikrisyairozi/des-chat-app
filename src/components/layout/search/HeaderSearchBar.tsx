import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';
import { PiMagnifyingGlassFill } from 'react-icons/pi';

import clsxm from '@/lib/clsxm';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import CreatorMiniResults from '@/components/layout/search/CreatorMiniResults';
import FilmMiniResults from '@/components/layout/search/FilmMiniResults';
import Typography from '@/components/typography/Typography';

export default function SearchBar({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  const router = useRouter();

  //#region  //*=========== state ===========
  const [showInput, setShowInput] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState('');
  const [showMiniResult, setShowMiniResult] = React.useState<boolean>(false);

  const isLoading = false;
  //#endregion  //*======== state ===========

  //#region  //*=========== Submit search ===========
  const handleSearch = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (typeof e === 'object') e.preventDefault();
    if (search) {
      router.push({
        pathname: '/results',
        query: { search },
      });
    }
  };
  //#endregion  //*======== Submit search ===========

  return (
    <div className={clsxm('w-full sm:relative sm:max-w-md', className)}>
      <form onSubmit={handleSearch} className='relative flex'>
        <input
          id='search'
          type='text'
          placeholder='Cari'
          autoComplete='off'
          value={search}
          onFocus={() => setShowMiniResult(true)}
          onBlur={() => setShowMiniResult(true)}
          onChange={(e) => setSearch(e.target.value)}
          className={clsx([
            'ml-auto h-10 rounded-md px-4 text-black focus:outline-none focus:ring-2 focus:ring-primary-500',
            showInput
              ? 'w-full opacity-100'
              : 'pointer-events-none w-0 opacity-0',
            'trnasition-all duration-200',
          ])}
        />
        <IconButton
          variant='ghost'
          icon={PiMagnifyingGlassFill}
          iconClassName={clsx([
            'h-6 w-6',
            showInput ? 'fill-base-800' : 'fill-white',
          ])}
          onClick={() => setShowInput(!showInput)}
          className='absolute right-0 top-1/2 -translate-y-1/2 hover:bg-transparent sm:hover:bg-primary-700'
        />
      </form>

      <Transition
        as='div'
        show={showMiniResult}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
        className='absolute left-0 top-[3.25rem] z-30 w-full sm:top-12'
      >
        {showInput &&
          search.length > 2 &&
          (!isLoading ? (
            <div className='z-20 w-full min-w-[280px] rounded-md border border-2 border-neutral-icon bg-base-1000 py-3'>
              <div className='mx-auto w-11/12 space-y-5 [&>*]:space-y-2'>
                <div>
                  <Typography
                    variant='s1'
                    className='border-b-2 border-primary-500'
                  >
                    Film
                  </Typography>
                  <FilmMiniResults />
                  <FilmMiniResults />
                </div>
                <div>
                  <Typography
                    variant='s1'
                    className='border-b-2 border-primary-500'
                  >
                    Serial
                  </Typography>
                  <FilmMiniResults />
                </div>
                <div>
                  <Typography
                    variant='s1'
                    className='border-b-2 border-primary-500'
                  >
                    Kreator
                  </Typography>
                  <CreatorMiniResults />
                </div>

                <Button
                  onClick={handleSearch}
                  className='w-full justify-center'
                >
                  Lihat Semua
                </Button>
              </div>
            </div>
          ) : (
            <div className='z-20 w-full min-w-[220px] rounded-md bg-white py-3 shadow-md'>
              <div className='mx-auto  w-11/12 space-y-2'>Memuat...</div>
            </div>
          ))}
      </Transition>
    </div>
  );
}
