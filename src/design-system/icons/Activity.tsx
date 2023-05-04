import { forwardRef, Ref, SVGProps } from 'react';
function ActivityIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='currentColor'
      viewBox='0 0 24 24'
      ref={ref}
      {...props}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M5 3h8v16h4V9h6v2h-4v10h-8V5H7v10H1v-2h4V3Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(ActivityIcon);
export { Icon as ActivityIcon };
