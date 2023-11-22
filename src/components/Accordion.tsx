import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import React from 'react';

import clsxm from '@/lib/clsxm';

export const AccordionProvider = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ children, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    {...props}
    {...(props.type === 'single' ? { collapsible: true } : {})}
  >
    {children}
  </AccordionPrimitive.Root>
));

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger
      {...props}
      className={clsxm(
        'group flex w-full justify-between text-lg font-bold',
        className
      )}
      ref={ref}
    >
      {children}
      <ChevronDown className='ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:-rotate-90' />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Item
    {...props}
    className={clsxm(
      'data-[state=closed]:slide-out-from-bottom-1 border-b-[1px] border-primary-600 px-4 py-5 data-[state=open]:animate-in data-[state=close]:animate-out data-[state=open]:slide-in-from-top-[0.1]',
      className
    )}
    ref={ref}
  >
    {children}
  </AccordionPrimitive.Item>
));

type AccordionContentPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Content
>;
type AccordionContentProps = AccordionContentPrimitiveProps;
export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Content
    {...props}
    className={clsxm(
      'data-[state=closed]:slide-out-from-bottom-1 overflow-hidden pt-4 text-base data-[state=open]:animate-in data-[state=close]:animate-out data-[state=open]:slide-in-from-top-1',
      className
    )}
    ref={ref}
  >
    {children}
  </AccordionPrimitive.Content>
));
