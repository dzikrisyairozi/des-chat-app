import * as React from 'react';

import clsxm from '@/lib/clsxm';

type TextTabsProps<T> = {
  /*
   * With T as the type of the tabs
   */
  tabs: Array<T>;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<T>>;
} & React.ComponentPropsWithoutRef<'div'>;

export default function TextTabs<T>({
  className,
  tabs,
  activeTab,
  setActiveTab,
  ...rest
}: TextTabsProps<T>) {
  return (
    <div className={clsxm('', className)} {...rest}>
      <div className='mt-5 flex flex-col sm:flex-row'>
        {tabs.map((tabItem, i) => {
          return (
            <button
              key={i}
              onClick={() => setActiveTab(tabItem)}
              className={clsxm(
                'flex-1 py-5 text-base font-semibold capitalize text-neutral-white',
                tabItem === activeTab
                  ? 'border-t-4 border-primary-600 '
                  : ' bg-base-900 bg-opacity-30'
              )}
            >
              {tabItem as string}
            </button>
          );
        })}
      </div>
    </div>
  );
}
