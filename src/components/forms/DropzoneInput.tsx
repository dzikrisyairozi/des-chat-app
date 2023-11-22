import clsx from 'clsx';
import get from 'lodash.get';
import * as React from 'react';
import { Accept, FileRejection, useDropzone } from 'react-dropzone';
import { Controller, useFormContext } from 'react-hook-form';

import FilePreview from '@/components/forms/FilePreview';
import Typography from '@/components/typography/Typography';

import { FileWithPreview } from '@/types/dropzone';

type DropzoneInputProps = {
  accept?: Accept;
  helperText?: string;
  id: string;
  label: string | null;
  maxFiles?: number;
  readOnly?: boolean;
  hideError?: boolean;
  validation?: Record<string, unknown>;
  title?: string;
  description?: string;
};

export default function DropzoneInput({
  accept,
  helperText = '',
  id,
  label,
  maxFiles = 1,
  validation,
  readOnly,
  hideError = false,
  title = 'Drag and drop your file here',
  description = 'Accepted file types: .pdf, .docx, .xlsx, .pptx',
}: DropzoneInputProps) {
  const {
    control,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, id);
  const withLabel = label !== null;

  //#region  //*=========== Error Focus ===========
  const dropzoneRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    error && dropzoneRef.current?.focus();
  }, [error]);
  //#endregion  //*======== Error Focus ===========

  //#region  //*=========== Sync Files With RHF ===========
  const fileValue = getValues(id);
  const [files, setFiles] = React.useState<FileWithPreview[]>(fileValue || []);

  React.useEffect(() => {
    setFiles(fileValue);
  }, [fileValue]);
  //#endregion  //*======== Sync Files With RHF ===========

  const onDrop = React.useCallback(
    <T extends File>(acceptedFiles: T[], rejectedFiles: FileRejection[]) => {
      if (rejectedFiles && rejectedFiles.length > 0) {
        setValue(id, files ? [...files] : null);
        setError(id, {
          type: 'manual',
          message: rejectedFiles && rejectedFiles[0].errors[0].message,
        });
      } else {
        const acceptedFilesPreview = acceptedFiles.map((file: T) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );

        setFiles(
          files
            ? [...files, ...acceptedFilesPreview].slice(0, maxFiles)
            : acceptedFilesPreview
        );

        setValue(
          id,
          files
            ? [...files, ...acceptedFiles].slice(0, maxFiles)
            : acceptedFiles,
          {
            shouldValidate: true,
          }
        );
        clearErrors(id);
      }
    },
    [clearErrors, files, id, maxFiles, setError, setValue]
  );

  React.useEffect(() => {
    return () => {
      () => {
        files.forEach((file) => URL.revokeObjectURL(file.preview));
      };
    };
  }, [files]);

  const deleteFile = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    file: FileWithPreview
  ) => {
    e.preventDefault();
    const newFiles = [...files];

    newFiles.splice(newFiles.indexOf(file), 1);

    if (newFiles.length > 0) {
      setFiles(newFiles);
      setValue(id, newFiles, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    } else {
      setFiles([]);
      setValue(id, null, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    maxSize: 1000000,
  });

  return (
    <div>
      {withLabel && (
        <Typography as='label' variant='s3' className='block' htmlFor={id}>
          {label}
        </Typography>
      )}

      {readOnly && !(files?.length > 0) ? (
        <div className='mt-1 divide-y divide-primary-300 rounded-lg border border-primary-300 py-3 pl-3 pr-4 text-sm'>
          No file uploaded
        </div>
      ) : files?.length >= maxFiles ? (
        <ul
          className={clsx([
            'divide-y divide-primary-300 rounded-lg border border-primary-300',
            withLabel && 'mt-1',
          ])}
        >
          {files.map((file, index) => (
            <FilePreview
              key={index}
              readOnly={readOnly}
              file={file}
              deleteFile={deleteFile}
            />
          ))}
        </ul>
      ) : (
        <Controller
          control={control}
          name={id}
          rules={validation}
          render={({ field }) => (
            <>
              <div
                className={clsx([
                  'focus:ring-dark-400 group focus:outline-none',
                  withLabel && 'mt-1',
                ])}
                {...getRootProps()}
                ref={dropzoneRef}
              >
                <input {...field} {...getInputProps()} />
                <div
                  className={clsx(
                    'w-full cursor-pointer rounded-lg px-2 py-8',
                    error
                      ? 'dropzone-border-dash-error border-red-500 group-focus:border-red-500'
                      : 'dropzone-border-dash group-focus:border-primary-600'
                  )}
                >
                  <div className='space-y-1 text-center'>
                    <svg
                      width='120'
                      height='120'
                      viewBox='0 0 120 120'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='mx-auto h-12 w-12 text-gray-400'
                    >
                      <g clipPath='url(#clip0_818_8110)'>
                        <path
                          d='M96.75 50.2C95.0705 41.6886 90.488 34.0243 83.7853 28.5162C77.0826 23.0082 68.6755 19.998 60 20C45.55 20 33 28.2 26.75 40.2C19.4012 40.9942 12.605 44.476 7.66744 49.9766C2.72986 55.4772 -0.000858509 62.6084 2.02464e-07 70C2.02464e-07 86.55 13.45 100 30 100H95C108.8 100 120 88.8 120 75C120 61.8 109.75 51.1 96.75 50.2ZM70 65V85H50V65H35L60 40L85 65H70Z'
                          fill='white'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_818_8110'>
                          <rect width='120' height='120' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                    <Typography variant='h5'>{title}</Typography>
                    <Typography variant='c1' color='tertiary'>
                      {description}
                    </Typography>
                    <p className='text-xs text-gray-500'>{`${
                      maxFiles - (files?.length || 0)
                    } file(s) remaining`}</p>
                  </div>
                </div>
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
              {!readOnly && !!files?.length && (
                <ul className='mt-1 divide-y divide-primary-300 rounded-lg border border-primary-300'>
                  {files.map((file, index) => (
                    <FilePreview
                      key={index}
                      readOnly={readOnly}
                      file={file}
                      deleteFile={deleteFile}
                    />
                  ))}
                </ul>
              )}
            </>
          )}
        />
      )}
    </div>
  );
}
