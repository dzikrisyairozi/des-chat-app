import * as React from 'react';

import clsxm from '@/lib/clsxm';

import TextButton from '@/components/buttons/TextButton';

type CollapsibleTextProps = {
  /** The number of line clamp, available between 1 to 6, default is 3.*/
  clampNumber?: number;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'p'>;

export default function CollapsibleText({
  children,
  clampNumber = 3,
  className,
  ...rest
}: CollapsibleTextProps) {
  const [showFullText, setShowFullText] = React.useState(true);
  const [shouldCollapse, setShouldCollapse] = React.useState(false);

  const textRef = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseInt(
        getComputedStyle(textRef.current).lineHeight,
        10
      );
      const height = textRef.current.offsetHeight;
      setShouldCollapse(height / lineHeight > clampNumber);
    }
  }, [clampNumber]);

  /**
   * map props to complete class names that are statically detectable at build-time.
   * @see https://tailwindcss.com/docs/content-configuration#dynamic-class-names
   */
  const clampNumberVariants = {
    1: 'line-clamp-1',
    2: 'line-clamp-2',
    3: 'line-clamp-3',
    4: 'line-clamp-4',
    5: 'line-clamp-5',
    6: 'line-clamp-6',
  };

  return (
    <>
      <p
        ref={textRef}
        className={clsxm(
          showFullText &&
            shouldCollapse &&
            clampNumberVariants[
              clampNumber as keyof typeof clampNumberVariants
            ],
          className
        )}
        {...rest}
      >
        {textRef && children}
      </p>{' '}
      {shouldCollapse && (
        <TextButton size='sm' onClick={() => setShowFullText(!showFullText)}>
          {showFullText ? 'lihat selengkapnya' : 'lihat lebih sedikit'}
        </TextButton>
      )}
    </>
  );
}
