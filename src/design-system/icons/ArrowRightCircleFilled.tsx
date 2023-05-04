import { forwardRef, Ref, SVGProps } from 'react';
function ArrowRightCircleFilledIcon(
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
        stroke='currentColor'
        strokeWidth={2}
        d='m10.409 8.591 1.159 1.159H5v4.5h6.568l-1.159 1.159-.707.707.707.707 1.768 1.768.707.707.707-.707 5.884-5.884.707-.707-.707-.707-5.884-5.884-.707-.707-.707.707-1.768 1.768-.707.707.707.707ZM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z'
      />
    </svg>
  );
}
const Icon = forwardRef(ArrowRightCircleFilledIcon);
export { Icon as ArrowRightCircleFilledIcon };
