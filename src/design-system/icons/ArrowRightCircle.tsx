import { forwardRef, Ref, SVGProps } from 'react';
function ArrowRightCircleIcon(
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
        d='m14.586 13-3.293 3.293 1.414 1.414L18.414 12l-5.707-5.707-1.414 1.414L14.586 11H6v2h8.586Z'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(ArrowRightCircleIcon);
export { Icon as ArrowRightCircleIcon };
