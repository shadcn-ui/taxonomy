import { type VariantProps } from 'class-variance-authority';
import {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
} from 'react';

type CvaComponent = (...args: never) => unknown;

export type DSComponentProps<
  As extends ElementType,
  Variants extends CvaComponent,
  CustomProps extends Record<string, unknown> = Record<string, unknown>
> = ComponentPropsWithoutRef<As> &
  VariantProps<Variants> &
  CustomProps & {
    style?: CSSProperties;
    className?: string;
  };

export type DSSVGIcon = ForwardRefExoticComponent<
  SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
>;
