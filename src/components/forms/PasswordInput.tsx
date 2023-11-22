import clsx from 'clsx';
import get from 'lodash.get';
import { useState } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { HiEye, HiEyeOff } from 'react-icons/hi';

import Typography from '@/components/typography/Typography';

export type PasswordInputProps = {
  /** Input label */
  label: string | null;
  /**
   * id to be initialized with React Hook Form,
   * must be the same with the pre-defined types.
   */
  id: string;
  /** Input placeholder */
  placeholder?: string;
  /** Small text below input, useful for additional information */
  helperText?: string;
  /**
   * Input type
   * @example text, email, password
   */
  type?: React.HTMLInputTypeAttribute;
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;
  containerClassName?: string;
  /**
   * You must set maxLength in validation if you want to use this prop
   * @example <Input id='name' label='Name' validation={{ maxLength: { value: 10, message: 'Max length is 10' } }} withWordCounter />
   */
  withWordCounter?: boolean;
} & React.ComponentPropsWithoutRef<'input'>;

export default function PasswordInput({
  label,
  placeholder = '',
  helperText,
  id,
  readOnly = false,
  hideError,
  validation,
  disabled,
  containerClassName,
  withWordCounter = false,
  ...rest
}: PasswordInputProps) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const error = get(errors, id);
  const withLabel = label !== null;

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className={containerClassName}>
      <div className={clsx('flex items-center justify-between')}>
        {withLabel && (
          <Typography as='label' variant='s2' className='block' htmlFor={id}>
            {label}
          </Typography>
        )}
        {withWordCounter && (
          <Typography variant='c1' color='secondary' className='text-right'>
            {watch(id) ? watch(id).length : '0'} /
            {validation?.maxLength
              ? (validation.maxLength as { value: number }).value
              : 0}
          </Typography>
        )}
      </div>
      <div className={clsx('relative', withLabel && 'mt-1')}>
        <input
          {...register(id, validation)}
          {...rest}
          type={showPassword ? 'text' : 'password'}
          name={id}
          id={id}
          readOnly={readOnly}
          disabled={disabled}
          className={clsx(
            'flex w-full rounded shadow-sm',
            'min-h-[2.25rem] py-0 md:min-h-[2.5rem]',
            'pr-10 text-base-1000',
            'border-gray-300 focus:border-primary-600 focus:ring-primary-600',
            (readOnly || disabled) &&
              'cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500'
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />

        <button
          onClick={togglePassword}
          type='button'
          className='absolute right-0 top-1/2 mr-3 flex -translate-y-1/2 items-center rounded-lg p-1 focus:outline-none focus:ring focus:ring-primary-600'
        >
          {showPassword ? (
            <HiEyeOff className='cursor-pointer text-xl text-typo-icons hover:text-typo-secondary' />
          ) : (
            <HiEye className='cursor-pointer text-xl text-typo-icons hover:text-typo-secondary' />
          )}
        </button>
      </div>
      {helperText && (
        <Typography variant='c1' color='secondary' className='mt-1'>
          {helperText}
        </Typography>
      )}
      {!hideError && error && (
        <Typography variant='c1' color='danger' className='mt-1'>
          {error?.message?.toString()}
        </Typography>
      )}
    </div>
  );
}
