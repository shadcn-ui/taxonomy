import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import {
  type ElementType,
  type ForwardedRef,
  forwardRef,
  ReactNode,
} from 'react';

import './Text.css';

import { type DSComponentProps } from '@/design-system/components/types';

const textVariants = cva('sona-text', {
  variants: {
    variant: {
      display: 'sona-text-display',
      headline: 'sona-text-headline',
      title: 'sona-text-title',
      titleExpanded: 'sona-text-title-expanded',
      label: 'sona-text-label',
      labelMono: 'sona-text-label-mono',
      body: 'sona-text-body',
      button: 'sona-text-button',
      textButton: 'sona-text-text-button',
    },
    size: {
      small: 'sona-text-small',
      medium: 'sona-text-medium',
      large: 'sona-text-large',
    },
    color: {
      primary: 'sona-text-color-primary',
      secondary: 'sona-text-color-secondary',
      tertiary: 'sona-text-color-tertiary',
      protocol: 'sona-text-color-protocol',
      positive: 'sona-text-color-positive',
      negative: 'sona-text-color-negative',
      warning: 'sona-text-color-warning',
      link: 'sona-text-color-link',
      disabled: 'sona-text-color-disabled',
    },
  },
  defaultVariants: {
    variant: 'body',
    size: 'medium',
    color: 'primary',
  },
});

type ValidElement =
  | 'a'
  | 'div'
  | 'section'
  | 'span'
  | 'p'
  | 'li'
  | 'ul'
  | 'ol'
  | 'label'
  | 'blockquote'
  | 'article'
  | 'nav'
  | 'header'
  | 'footer'
  | 'aside'
  | 'details'
  | 'summary'
  | 'legend'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type TextProps<As extends ValidElement> = DSComponentProps<
  As,
  typeof textVariants,
  {
    as?: As;
    asChild?: boolean;
    children?: ReactNode;
  }
>;

function Text<As extends ValidElement>(
  {
    // custom
    as,
    asChild,
    children,
    className,

    // variant props
    variant,
    size,
    color,

    // additional component props
    ...componentProps
  }: TextProps<As>,
  ref: ForwardedRef<As>
) {
  const Component = asChild ? Slot : as || ('span' as ElementType);
  const classes = textVariants({ className, variant, size, color });

  return (
    <Component {...componentProps} className={classes} ref={ref}>
      {children}
    </Component>
  );
}

const _Text = forwardRef(Text);
export { _Text as Text };
