import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { AlertCircle, AlertTriangle, Check, Globe, X } from 'lucide-react';
import * as React from 'react';

import useLoadingToast from '@/hooks/toast/useLoadingToast';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import Typography from '@/components/typography/Typography';

type BaseDialogProps = {
  /** Maintained by useDialogStore */
  open: boolean;
  /** Maintained by useDialogStore */
  onSubmit: () => void;
  /** Maintained by useDialogStore */
  onClose: () => void;
  /** Customizable Dialog Options */
  options: DialogOptions;
};

export type DialogOptions = {
  catchOnCancel?: boolean;
  title: React.ReactNode;
  content: React.ReactNode;
  /** if the `content` is not a Typography content (a plain text),
   * you may want turn the `isCustomContent` value to `true` avoiding hydration error due to incorrect nesting of HTML tags.
   * default is false.
   * @see https://nextjs.org/docs/messages/react-hydration-error#common-causes
   * */
  isCustomContent?: boolean;
  variant: 'success' | 'warning' | 'danger' | 'default';
  submitText: React.ReactNode;
  closeText: React.ReactNode;
  withIcon?: boolean;
  listenForLoadingToast?: boolean;
};

/**
 * Base Dialog for useDialog hook implementation.
 *
 * **Should be called with the hook, not by the component itself**
 *
 *
 * @see useDialogStore
 * @example ```tsx
 * const dialog = useDialog();
 *
 * dialog(options);
 * ```
 */
export default function BaseDialog({
  open,
  onSubmit,
  onClose,
  options: {
    title,
    content,
    isCustomContent = false,
    variant,
    submitText,
    closeText = 'Cancel',
    withIcon = true,
    listenForLoadingToast = false,
  },
}: BaseDialogProps) {
  const current = colorVariant[variant];
  const CurrentIcon = current.icon;
  // Set initial focus to the container div instead of automatically focused to the close button
  const containerRef = React.createRef<HTMLDivElement>();

  const isLoading = useLoadingToast();

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as='div'
        static
        className='fixed inset-0 z-40 overflow-y-auto'
        open={open}
        onClose={() => onClose()}
        initialFocus={containerRef}
      >
        <div
          className='flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0'
          ref={containerRef}
        >
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-base-900 bg-opacity-80 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:h-screen sm:align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div
              className={clsx(
                'z-auto inline-block w-full transform overflow-hidden rounded-lg bg-base-1000 text-left align-bottom shadow-xl transition-all',
                'pb-4 pt-5 sm:my-8 sm:pb-4 sm:pt-6',
                'sm:max-w-lg sm:align-middle'
              )}
            >
              <div className='absolute right-0 top-0 hidden pr-4 pt-4 sm:block'>
                <IconButton
                  onClick={onClose}
                  variant='ghost'
                  size='sm'
                  icon={X}
                  iconClassName='text-2xl text-typo-icons'
                />
              </div>
              <div
                className={clsx(
                  'sm:flex sm:items-start',
                  'px-4 sm:px-6 sm:pb-6'
                )}
              >
                {withIcon && (
                  <div
                    className={clsx(
                      'flex flex-shrink-0 items-center justify-center rounded-full',
                      'mx-auto h-8 w-8 sm:mx-0 sm:h-8 sm:w-8',
                      current.bg.light
                    )}
                  >
                    <CurrentIcon
                      className={clsx('h-6 w-6', current.text.primary)}
                      aria-hidden='true'
                    />
                  </div>
                )}
                <div className='mt-3 w-full text-left sm:ml-4 sm:mt-0'>
                  <Typography as={Dialog.Title} variant='h3'>
                    {title}
                  </Typography>
                  <div className='mt-2'>
                    {isCustomContent ? (
                      content
                    ) : (
                      <Typography variant='c1' color='base'>
                        {content}
                      </Typography>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  'mt-5 sm:mt-4 sm:flex sm:flex-row-reverse',
                  'px-4 pt-4 sm:px-6',
                  'border-t border-typo-divider'
                )}
              >
                <Button
                  onClick={onSubmit}
                  className={clsx(
                    'w-full items-center justify-center bg-primary-600 !font-semibold text-base-900 sm:ml-3 sm:w-auto sm:text-sm'
                  )}
                  isLoading={listenForLoadingToast && isLoading}
                >
                  {submitText}
                </Button>
                <Button
                  type='button'
                  variant='outline'
                  onClick={onClose}
                  className='mt-3 w-full items-center justify-center border-none !font-semibold text-neutral-white ring-2 ring-inset ring-primary-600 hover:!bg-primary-800 hover:ring-primary-900 sm:mt-0 sm:w-auto sm:text-sm'
                >
                  {closeText}
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

const colorVariant = {
  success: {
    bg: {
      light: 'bg-success-300',
    },
    text: {
      primary: 'text-success-800',
    },
    icon: Check,
  },
  warning: {
    bg: {
      light: 'bg-warning-400',
    },
    text: {
      primary: 'text-warning-700',
    },
    icon: AlertTriangle,
  },
  danger: {
    bg: {
      light: 'bg-danger-200',
    },
    text: {
      primary: 'text-danger-800',
    },
    icon: AlertCircle,
  },
  default: {
    bg: {
      light: 'bg-neutral-outline',
    },
    text: {
      primary: 'text-base-900',
    },
    icon: Globe,
  },
};
