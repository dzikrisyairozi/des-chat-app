import { Popover, Transition } from '@headlessui/react';
import { List } from 'lucide-react';
import * as React from 'react';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { FaCoins, FaRegUser } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

import Button from '@/components/buttons/Button';
import HeaderSearchBar from '@/components/layout/search/HeaderSearchBar';
import ButtonLink from '@/components/links/ButtonLink';
import IconLink from '@/components/links/IconLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Logo from '@/components/Logo';
import Typography from '@/components/typography/Typography';

import AddVideo from '~/svg/AddVideo.svg';
import DefaultAvatar from '~/svg/DefaultAvatar.svg';
import MyFilm from '~/svg/MyFilm.svg';
import NotificationBell from '~/svg/NotificationBell.svg';
import Setting from '~/svg/Setting.svg';

const navigations = [
  { name: 'Buat Kamu', href: '#home' },
  { name: 'Serial', href: '#series' },
  { name: 'Film', href: '#movies' },
  { name: 'Kreator', href: '#creator' },
];

const userMenu = [
  { name: 'Profil', href: '#profile', icon: FaRegUser },
  { name: 'Daftar Saya', href: '#mylist', icon: List },
  { name: 'Film Ku', href: '#myfilms', icon: MyFilm },
  { name: 'Upload', href: '#upload', icon: AiOutlineVideoCameraAdd },
  { name: 'Pengaturan', href: '#setting', icon: Setting },
];

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  return (
    <Popover className='relative z-30 bg-base-900'>
      <div className='layout flex min-h-[3.5rem] items-center justify-between gap-2 lg:min-h-[4.5rem] lg:justify-start lg:gap-6'>
        <div>
          <UnstyledLink href='/' className='flex'>
            <span className='sr-only'>Workflow</span>
            <Logo variant='word' className='w-20 md:w-24' />
          </UnstyledLink>
        </div>
        <div className='flex flex-1 justify-end lg:hidden'>
          <HeaderSearchBar />
        </div>
        <div className='-my-2 -mr-2 lg:hidden'>
          <Popover.Button className='hover:text-primary-50 inline-flex items-center justify-center  rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-200'>
            <span className='sr-only'>Open menu</span>
            <HiOutlineMenu className='h-6 w-6' aria-hidden='true' />
          </Popover.Button>
        </div>
        <div className='hidden gap-x-8 lg:flex lg:flex-1 lg:items-center lg:justify-between'>
          <nav className='flex flex-shrink-0 space-x-4 lg:space-x-8'>
            {navigations.map((navigation) => (
              <UnstyledLink
                key={navigation.href}
                href={navigation.href}
                className='text-base font-medium text-neutral-outline hover:text-primary-700'
              >
                {navigation.name}
              </UnstyledLink>
            ))}
          </nav>
          <div className='flex flex-1 items-center justify-end gap-x-4 md:gap-x-6'>
            <HeaderSearchBar />
            {isAuthenticated ? (
              <>
                <IconLink
                  href='#'
                  icon={NotificationBell}
                  variant='ghost'
                  iconClassName='h-5 w-7'
                />
                <IconLink
                  href='#'
                  icon={AddVideo}
                  variant='ghost'
                  iconClassName='h-5 w-7'
                />

                <Popover className='relative'>
                  <Popover.Button className='hover:ring-secondary-200 flex h-10 w-10 rounded-full hover:ring-2 focus:border-none focus:!outline-none '>
                    <span className='sr-only'>Open user menu</span>
                    <DefaultAvatar className='h-10 w-10 text-neutral-white' />
                  </Popover.Button>
                  <Transition
                    as={React.Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute right-0 top-10 z-20 mt-3 w-52 rounded-md border-2 border-base-200 bg-base-1000 p-4 shadow-md'>
                      <div className='flex items-center justify-between border-b-2'>
                        <div className='text-center'>
                          <div className='flex gap-x-2'>
                            <FaCoins className='text-secondary-300 h-5 w-5 flex-shrink-0' />
                            <Typography variant='b1'>Koin ku</Typography>
                          </div>
                          <Typography variant='h4'>12</Typography>
                        </div>
                        <ButtonLink href='/dashboard/coin' size='sm'>
                          Isi Koin
                        </ButtonLink>
                      </div>
                      <div className='mt-3'>
                        <div className='flex flex-col gap-y-2'>
                          {userMenu.map((item) => (
                            <UnstyledLink
                              key={item.name}
                              href={item.href}
                              className='flex items-center gap-x-2 hover:font-semibold'
                            >
                              <item.icon className='text-secondary-300 h-5 w-5 flex-shrink-0 fill-primary-600 text-primary-500' />
                              {item.name}
                            </UnstyledLink>
                          ))}
                          <button
                            className='flex items-center gap-x-2 text-left hover:font-semibold'
                            onClick={() => setIsAuthenticated(false)}
                          >
                            <BiLogOut className='text-secondary-300 h-5 w-5 text-primary-500' />
                            Keluar
                          </button>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              </>
            ) : (
              <ButtonLink
                href='#'
                variant='outline'
                className='bg-base-1000'
                onClick={() => setIsAuthenticated(true)}
              >
                Masuk
              </ButtonLink>
            )}
          </div>
        </div>
      </div>

      <Transition
        as={React.Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 z-20 origin-top-right transform p-2 transition lg:hidden'
        >
          <div className='divide-y-2 divide-gray-50 overflow-hidden rounded-lg border-2 border-neutral-outline bg-base-1000 shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className=''>
              <div className='flex items-center justify-between bg-base-900 px-2 py-0.5'>
                <Logo variant='word' className='w-20 md:w-24' />

                <Popover.Button className='inline-flex items-center justify-center rounded-md bg-base-1000 p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-200'>
                  <span className='sr-only'>Close menu</span>
                  <HiOutlineX className='h-5 w-5' aria-hidden='true' />
                </Popover.Button>
              </div>
              <div className='divide-y-2 px-4 pb-6 [&>*]:py-2'>
                {isAuthenticated && (
                  <>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-x-2'>
                        <DefaultAvatar className='h-10 w-10 text-neutral-white' />
                      </div>

                      <div className='flex items-center gap-x-5 text-center'>
                        <ButtonLink
                          href='/dashboard/coin'
                          size='base'
                          className='h-3/5'
                        >
                          Isi Koin
                        </ButtonLink>
                        <div>
                          <div className='flex gap-x-2'>
                            <FaCoins className='h-5 w-5 flex-shrink-0' />
                            <Typography variant='b1'>Koin ku</Typography>
                          </div>
                          <Typography variant='h4'>12</Typography>
                        </div>
                      </div>
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                      {userMenu.map((menu) => (
                        <UnstyledLink
                          key={menu.href}
                          href={menu.href}
                          className='flex items-center gap-x-2 px-1 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-200'
                        >
                          <menu.icon className='h-5 w-5 flex-shrink-0 fill-primary-600 text-primary-500' />
                          {menu.name}
                        </UnstyledLink>
                      ))}
                    </div>
                  </>
                )}

                <div className='grid grid-cols-2 gap-3'>
                  {navigations.map((navigation) => (
                    <UnstyledLink
                      key={navigation.href}
                      href={navigation.href}
                      className='px-1 text-base focus:rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-200 '
                    >
                      {navigation.name}
                    </UnstyledLink>
                  ))}
                </div>
                <div className=''>
                  {isAuthenticated ? (
                    <Button
                      leftIcon={BiLogOut}
                      variant='outline'
                      className='mt-4 w-full justify-center'
                      onClick={() => setIsAuthenticated(false)}
                    >
                      Keluar
                    </Button>
                  ) : (
                    <ButtonLink
                      href='#'
                      leftIcon={BiLogIn}
                      variant='outline'
                      className='mt-4 w-full justify-center'
                      onClick={() => setIsAuthenticated(true)}
                    >
                      Masuk
                    </ButtonLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
