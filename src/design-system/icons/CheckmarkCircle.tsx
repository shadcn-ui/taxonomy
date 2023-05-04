import { forwardRef, Ref, SVGProps } from 'react';
function CheckmarkCircleIcon(
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
        d='m6.814 12.834 4.403 4.151 6.075-7.874-1.584-1.222-4.725 6.126-2.797-2.637-1.372 1.456Z'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1ZM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(CheckmarkCircleIcon);
export { Icon as CheckmarkCircleIcon };
