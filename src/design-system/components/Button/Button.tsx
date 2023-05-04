import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { type ForwardedRef, forwardRef, ReactNode } from 'react';

import './Button.css';

import { DSComponentProps } from '@/design-system/components/types';

const buttonVariants = cva('sona-btn', {
  variants: {
    variant: {
      primary: 'sona-btn-primary',
      secondary: 'sona-btn-secondary',
      tertiary: 'sona-btn-tertiary',
      positive: 'sona-btn-positive',
      negative: 'sona-btn-negative',
      warning: 'sona-btn-warning',
      protocol: 'sona-btn-protocol',
      link: 'sona-btn-link',
      text: 'sona-btn-text',
    },
    size: {
      small: 'sona-btn-small',
      medium: 'sona-btn-medium',
      large: 'sona-btn-large',
    },
    iconPosition: {
      left: 'sona-btn-icon-left',
      right: 'sona-btn-icon-right',
    },
  },
  defaultVariants: {
    variant: 'secondary',
    size: 'medium',
    iconPosition: 'left',
  },
});

export type ButtonProps = DSComponentProps<
  'button',
  typeof buttonVariants,
  {
    asChild?: boolean;
    icon?: ReactNode;
  }
>;

function Button(
  {
    // custom
    asChild,
    children,
    className,
    icon,

    // variant props
    variant,
    size,
    iconPosition,

    // additional component props
    ...componentProps
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const Component = asChild ? Slot : 'button';
  const classes = buttonVariants({ className, variant, size, iconPosition });

  return (
    <Component {...componentProps} className={classes} ref={ref}>
      <>
        {icon ?? null}
        {children}
      </>
    </Component>
  );
}

const _Button = forwardRef(Button);
export { _Button as Button };
