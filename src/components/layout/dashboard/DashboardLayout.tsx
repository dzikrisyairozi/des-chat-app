import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';
import { IconType } from 'react-icons';
import { IoWalletOutline } from 'react-icons/io5';

import DashboardHeader from '@/components/layout/dashboard/DashboardHeader';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/typography/Typography';

import Dashboard from '~/svg/Dashboard.svg';
import DefaultAvatar from '~/svg/DefaultAvatar.svg';
import MyFilm from '~/svg/MyFilm.svg';

type Navigation = {
  name: string;
  href: string;
  icon: IconType;
  /**
   * Use this when the route is also used as a nested route
   * @example Use exactMatch for '/dashboard' to avoid both navigation links active when visiting '/dashboard/edit'
   */
  exactMatch?: boolean;
};

const dashboardNavigation: Navigation[] = [
  {
    name: 'Dashboard',
    href: '/sandbox/dashboard',
    icon: Dashboard,
    exactMatch: true,
  },
  {
    name: 'Konten',
    href: '/sandbox/content',
    icon: MyFilm,
  },
  // {
  //   name: 'Analytics',
  //   href: '/dashboard/analytics',
  //   icon: MdInsertChart,
  // },
  {
    name: 'Coin',
    href: '/sandbox/coin',
    icon: IoWalletOutline,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const router = useRouter();

  return (
    <Layout>
      <DashboardHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='flex min-h-screen flex-grow'>
        <div className='flex min-w-0 flex-1'>
          <div
            id='sidebar-overlay'
            className={clsx([
              'fixed h-full w-full bg-black/50 sm:hidden',
              isOpen ? 'block' : 'hidden',
            ])}
            onClick={() => setIsOpen(false)}
          />
          <div
            className={clsx([
              'flex-shrink-0 bg-base-900',
              'transition-all duration-200 ease-in-out',
              'fixed mt-[3.5rem] h-screen -translate-x-20 sm:translate-x-0 lg:mt-[4.5rem]',
              isOpen ? 'w-56 translate-x-0 sm:w-64' : 'w-16',
            ])}
          >
            <div className='flex items-center justify-between'>
              <div
                className={clsx([
                  'flex-1',
                  isOpen ? 'mt-4 space-y-4' : 'space-y-0',
                ])}
              >
                <div
                  className={clsx([
                    'flex flex-col items-center justify-center',
                    'transition-all duration-100 ease-in-out',
                    isOpen ? 'opacity-100' : 'h-0 opacity-0',
                  ])}
                >
                  <DefaultAvatar className='h-28 w-28 text-neutral-white sm:h-36 sm:w-36' />
                  <div className={clsx([isOpen ? 'block' : 'hidden'])}>
                    <UnstyledLink href='/profile' className='text-center'>
                      <Typography variant='s2' className='mt-2'>
                        Kim Dahyuns
                      </Typography>
                      <Typography variant='b2' color='secondary'>
                        @dubuuu
                      </Typography>
                    </UnstyledLink>
                  </div>
                </div>
                {/* Meta info */}
                <div className='group flex flex-col'>
                  <UnstyledLink
                    href='/profile'
                    className={clsx(
                      'flex w-16 items-center py-3 pl-4 text-xs font-medium hover:bg-base-800',
                      isOpen ? 'hidden' : 'inline'
                    )}
                  >
                    <DefaultAvatar className='ml-[2px] h-7 w-7 text-neutral-white' />
                  </UnstyledLink>

                  {dashboardNavigation.map((nav) => {
                    const isActive = nav.exactMatch
                      ? router.pathname === nav.href
                      : router.pathname.startsWith(nav.href);
                    return (
                      <UnstyledLink
                        key={nav.href}
                        href={nav.href}
                        className={clsx(
                          isActive
                            ? 'border-l-4 border-primary-600 bg-base-1000 group-hover:pointer-events-none'
                            : 'hover:bg-base-800',
                          'group flex items-center py-3 text-xs font-medium',
                          isOpen ? 'pl-8' : 'w-16 justify-center p-4'
                        )}
                      >
                        <nav.icon
                          className={clsx(
                            'fill h-5 w-6 flex-shrink-0 text-xs',
                            isActive
                              ? ' fill-primary-600 text-primary-600'
                              : 'fill-white text-white',
                            isOpen ? 'mr-2' : 'mr-0'
                          )}
                          aria-hidden='true'
                        />
                        <span
                          className={clsx([
                            'b2 truncate',
                            isActive
                              ? 'fill-primary-600 text-primary-600'
                              : 'fill-white text-white',
                            !isOpen ? 'hidden' : 'inline',
                          ])}
                          title={nav.name}
                        >
                          {nav.name}
                        </span>
                      </UnstyledLink>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <main
            className={clsx([
              'mt-[3.5rem] min-w-0 flex-1 lg:mt-[4.5rem]',
              isOpen ? 'sm:ml-64' : 'sm:ml-16',
            ])}
          >
            {children}
          </main>
        </div>
      </div>
    </Layout>
  );
}
