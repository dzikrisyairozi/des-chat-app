import * as React from 'react';

import clsxm from '@/lib/clsxm';

type TabsProps<T> = {
  /*
   * With T as the type of the tabs
   * ex : T = 'sample#1' | 'sample#2' | 'sample#3';
   */
  tabs: Array<T>;
  disableTab: Array<T>;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<T>>;
} & React.ComponentPropsWithoutRef<'div'>;

export default function Tabs<T>({
  className,
  tabs,
  activeTab,
  setActiveTab,
  disableTab,
  ...rest
}: TabsProps<T>) {
  return (
    <div className={clsxm('', className)} {...rest}>
      <div className='mx-5 mt-5 flex flex-col flex-wrap gap-y-5 sm:flex-row sm:gap-x-20'>
        {tabs.map((tabItem, i) => {
          return (
            <button
              key={i}
              onClick={() => setActiveTab(tabItem)}
              disabled={disableTab.includes(tabItem)}
              className={clsxm(
                'px-2 py-1 text-base font-semibold capitalize text-neutral-outline hover:text-neutral-white',
                tabItem === activeTab &&
                  'mx-auto max-w-fit border-b-[3px] border-primary-600 sm:mx-0 sm:w-auto',
                'disabled:cursor-not-allowed disabled:text-neutral-icon disabled:hover:text-neutral-icon'
              )}
            >
              {tabItem as string}
            </button>
          );
        })}
      </div>
      <hr className='-mt-[2px] hidden border-t-[1px] border-neutral-white sm:block' />
    </div>
  );
}
