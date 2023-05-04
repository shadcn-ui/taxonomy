import { forwardRef, Ref, SVGProps } from 'react';
function ArrowLeftCircleFilledIcon(
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
        d='m13.591 15.409-1.159-1.159H19v-4.5h-6.568l1.159-1.159.707-.707-.707-.707-1.768-1.768-.707-.707-.707.707-5.884 5.884-.707.707.707.707 5.884 5.884.707.707.707-.707 1.768-1.768.707-.707-.707-.707ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z'
      />
    </svg>
  );
}
const Icon = forwardRef(ArrowLeftCircleFilledIcon);
export { Icon as ArrowLeftCircleFilledIcon };
