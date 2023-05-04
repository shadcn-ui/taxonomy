import { forwardRef, Ref, SVGProps } from 'react';
function ArrowDownIcon(
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
        d='m11 18.586-6.293-6.293-1.414 1.414L12 22.414l8.707-8.707-1.414-1.414L13 18.586V1h-2v17.586Z'
      />
    </svg>
  );
}
const Icon = forwardRef(ArrowDownIcon);
export { Icon as ArrowDownIcon };
