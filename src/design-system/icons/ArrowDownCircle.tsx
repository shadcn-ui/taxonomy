import { forwardRef, Ref, SVGProps } from 'react';
function ArrowDownCircleIcon(
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
        d='m11 14.586-3.293-3.293-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414L13 14.586V6h-2v8.586Z'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12Zm2 0a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(ArrowDownCircleIcon);
export { Icon as ArrowDownCircleIcon };
