import { forwardRef, Ref, SVGProps } from 'react';
function ShuffleIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M19 10V7h-4V5h4V2l5 4-5 4ZM7 17v2H1v-2h6Zm12 2h-9V7H1V5h11v12h7v-3l5 4-5 4v-3Z'
      />
    </svg>
  );
}
const Icon = forwardRef(ShuffleIcon);
export { Icon as ShuffleIcon };
