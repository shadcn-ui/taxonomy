import { forwardRef, Ref, SVGProps } from 'react';
function ExplicitIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M15.5 7H8v10h7.5v-2H10v-2h5v-2h-5V9h5.5V7Z'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M2 22V2h20v20H2ZM4 4h16v16H4V4Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(ExplicitIcon);
export { Icon as ExplicitIcon };
