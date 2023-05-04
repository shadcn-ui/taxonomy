import { sona } from '@/lib/utils';
import * as React from 'react';

type DashboardShellProps = React.HTMLAttributes<HTMLDivElement>;

export function DashboardShell({
  children,
  className,
  ...props
}: DashboardShellProps) {
  return (
    <div className={sona('grid items-start gap-8', className)} {...props}>
      {children}
    </div>
  );
}
