import { forwardRef, Ref, SVGProps } from 'react';
function ArrowUpCircleIcon(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) {
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
        d='m13 9.414 3.293 3.293 1.414-1.414L12 5.586l-5.707 5.707 1.414 1.414L11 9.414V18h2V9.414Z'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11Zm-2 0a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(ArrowUpCircleIcon);
export { Icon as ArrowUpCircleIcon };
